#!/bin/sh
# Gate: content checks + the Streamlit page builds with both scripts inlined + app JS parses.
set -e
cd "$(dirname "$0")/.."
node tests/content.test.mjs
PY=${PY:-python3}
$PY - <<'PYEOF'
import re, subprocess, tempfile, os
src = open("streamlit_app.py").read().split("st.set_page_config")[0]
ns = {"__file__": "streamlit_app.py"}
exec(src, ns)
html = ns["build_page"]()
assert 'src="' not in html, "a <script src> was left un-inlined"
scripts = re.findall(r"<script>(.*?)</script>", html, re.S)
assert len(scripts) == 4, len(scripts)
with tempfile.NamedTemporaryFile("w", suffix=".js", delete=False) as f:
    f.write(scripts[3]); path = f.name
subprocess.run(["node", "--check", path], check=True); os.unlink(path)
print(f"page: {len(html):,} bytes, 4 inline scripts, app script parses")
PYEOF
echo "check.sh: all green"

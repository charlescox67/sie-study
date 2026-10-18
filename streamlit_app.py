"""SIE Study Partner — Streamlit host.

The whole study app is a self-contained HTML/JS page in web/. Streamlit only serves it:
we inline the two content scripts and render the page in a full-height component iframe.
Progress lives in each visitor's browser (localStorage), per study partner profile.
"""
from pathlib import Path

import streamlit as st

WEB = Path(__file__).parent / "web"


def build_page() -> str:
    """index.html with its content scripts inlined (the iframe can't fetch sibling files)."""
    html = (WEB / "index.html").read_text(encoding="utf-8")
    for name in ("content.js", "slides.js", "questions.js"):
        tag = f'<script src="{name}"></script>'
        if tag not in html:
            raise RuntimeError(f"index.html no longer references {name}")
        html = html.replace(tag, "<script>\n" + (WEB / name).read_text(encoding="utf-8") + "\n</script>")
    return html


st.set_page_config(page_title="SIE Study Partner", page_icon="📘", layout="wide", initial_sidebar_state="collapsed")

# Hide Streamlit chrome and let the app iframe fill the browser window.
st.markdown(
    """
    <style>
      header[data-testid="stHeader"], footer, #MainMenu, [data-testid="stToolbar"],
      [data-testid="stDecoration"], [data-testid="stStatusWidget"] { display: none !important; }
      .stApp, [data-testid="stAppViewContainer"], [data-testid="stMain"] { background: #0d1117; }
      @media (prefers-color-scheme: light) {
        .stApp, [data-testid="stAppViewContainer"], [data-testid="stMain"] { background: #f6f8fa; }
      }
      .block-container, [data-testid="stMainBlockContainer"] { padding: 0 !important; max-width: 100% !important; }
      [data-testid="stVerticalBlock"] { gap: 0 !important; }
      iframe { display: block; height: 100vh !important; border: 0; }
      html, body { overflow: hidden; }
    </style>
    """,
    unsafe_allow_html=True,
)


@st.cache_data
def page(mtime: float) -> str:
    return build_page()


# st.iframe replaces the deprecated components.v1.html; the CSS above stretches it to the window.
st.iframe(page(max(f.stat().st_mtime for f in WEB.iterdir())), height=900)

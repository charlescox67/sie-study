# SIE Study Partner

Interactive FINRA SIE prep for two or more study partners: slide decks, spaced-repetition flashcards,
section quizzes (solo or head-to-head) and a full 80-question, 105-minute timed mock exam.

- App: `web/index.html` + `web/content.js` (slides, flashcards) + `web/questions.js` (question bank). Plain HTML/CSS/JS, no dependencies.
  Open `web/index.html` directly in a browser to use it offline.
- Hosting: `streamlit_app.py` inlines the scripts and serves the page full-window (Streamlit Community Cloud).
- Progress: saved per partner in the browser (localStorage). Export/import on the Dashboard moves it between devices.
- Gate: `PY=~/edgegap/.venv/bin/python tools/check.sh`

Facts checked 2026-10-17: 80 items (75 scored + 5 pretest), 105 min, pass 70% (53/75); T+1; Rule 3220 gift limit $300
(Reg Notice 26-05, effective 2026-03-30); Rule 3290 approved but not effective, so 3270/3280 still apply.

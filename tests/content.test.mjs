// Content checks: counts, structure, exam blueprint feasibility, and facts that must not regress.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';

const ctx = { window: {} };
vm.createContext(ctx);
for (const f of ['web/content.js', 'web/slides.js', 'web/questions.js']) vm.runInContext(readFileSync(f, 'utf8'), ctx, { filename: f });
const C = ctx.window.SIE, Q = ctx.window.SIE_Q;
let n = 0; const ok = (cond, msg) => { assert.ok(cond, msg); n++; };

// exam blueprint (FINRA SIE since Oct 2025: 75 scored + 5 pretest, 105 min, 70%)
ok(C.exam.total === 80 && C.exam.scored === 75 && C.exam.pretest === 5 && C.exam.minutes === 105, 'exam shape');
ok(C.sections.reduce((a, s) => a + s.scored, 0) === 75, 'section scored counts sum to 75');
ok(C.sections.reduce((a, s) => a + s.weight, 0) === 100, 'weights sum to 100');
ok(JSON.stringify(C.sections.map(s => s.scored)) === '[12,33,23,7]', 'official 12/33/23/7 split');
ok(C.exam.passCount === Math.ceil(C.exam.scored * C.exam.passPct / 100), 'pass count = 70% of 75 rounded up');

// questions
const seen = new Set();
for (const [i, q] of Q.entries()) {
  const where = `question ${i} (${(q.q || '').slice(0, 40)})`;
  ok([1, 2, 3, 4].includes(q.s), where + ' section');
  ok(Array.isArray(q.c) && q.c.length === 4, where + ' has 4 choices');
  ok(Array.isArray(q.e) && q.e.length === 4 && q.e.every(x => x && x.length > 10), where + ' explains every choice');
  ok(Number.isInteger(q.a) && q.a >= 0 && q.a < 4, where + ' answer index');
  ok(new Set(q.c).size === 4, where + ' distinct choices');
  ok(!q.c.some(c => /all of the above|none of the above|both [a-d] and/i.test(c)), where + ' no order-dependent choices (we shuffle)');
  ok(!seen.has(q.q), where + ' duplicate stem'); seen.add(q.q);
}
for (const s of C.sections) {
  const bank = Q.filter(q => q.s === s.id).length;
  ok(bank >= 10, `section ${s.id} quiz has >= 10 questions (${bank})`);
  ok(bank >= s.scored, `section ${s.id} bank (${bank}) covers ${s.scored} mock items`);
}
ok(Q.length - 75 >= C.exam.pretest, 'enough leftover questions for pretest items');

// flashcards & slides
ok(C.cards.length >= 50, `50+ flashcards (${C.cards.length})`);
for (const s of C.sections) {
  ok(C.cards.filter(c => c.s === s.id).length >= 10, `section ${s.id} has >= 10 flashcards`);
  ok(C.slides.filter(x => x.s === s.id).length >= 10, `section ${s.id} has 10+ slides`);
}
ok(C.slides.every(x => x.title && x.bullets.length && x.trap && x.fact), 'every slide has an exam trap and a high-yield fact');
ok(new Set(C.cards.map(c => c.f)).size === C.cards.length, 'flashcard fronts unique (they are the progress key)');
ok(new Set(C.slides.map(x => x.title)).size === C.slides.length, 'slide titles unique (they are the progress key)');
for (const sl of C.slides) {
  ok(Array.isArray(sl.src) && sl.src.length >= 1, `slide "${sl.title}" lists sources`);
  for (const [label, url] of sl.src) ok(label && /^https:\/\/[^\s"'<>]+$/.test(url), `slide "${sl.title}" source ${url} is an https link`);
}

// facts that must stay right
const all = JSON.stringify([C, Q]);
ok(/\$300 per person per year/.test(all), '$300 gift limit present');
ok(!/T\+2 for (corporate|equities)/i.test(all), 'no T+2 regular-way claims');
const gift = Q.find(q => /Rule 3220, the maximum/.test(q.q));
ok(gift.c[gift.a].startsWith('$300'), 'gift question answers $300');
ok(/T\+1/.test(Q.find(q => /Regular-way settlement for a municipal/.test(q.q)).c[0]), 'muni settlement T+1');

console.log(`content: ${n} checks passed — ${Q.length} questions (${C.sections.map(s => Q.filter(q => q.s === s.id).length).join('/')}), ${C.cards.length} cards, ${C.slides.length} slides`);

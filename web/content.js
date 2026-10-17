/* SIE study content: sections, slide decks, flashcards.
   Facts checked 2026-10-17: exam = 80 items (75 scored + 5 unscored pretest), 105 min, pass 70%;
   regular-way T+1; FINRA Rule 3220 gift limit $300 (Reg Notice 26-05, eff. 2026-03-30);
   Rule 3290 (outside activities) SEC-approved 2026-09-15 but NOT yet effective -> 3270/3280 still apply. */
window.SIE = {
  exam: { total: 80, scored: 75, pretest: 5, minutes: 105, passPct: 70, passCount: 53 },

  sections: [
    { id: 1, short: 'Capital Markets', name: 'Knowledge of Capital Markets', weight: 16, scored: 12 },
    { id: 2, short: 'Products & Risks', name: 'Understanding Products and Their Risks', weight: 44, scored: 33 },
    { id: 3, short: 'Trading & Accounts', name: 'Trading, Customer Accounts & Prohibited Activities', weight: 31, scored: 23 },
    { id: 4, short: 'Regulatory Framework', name: 'Overview of the Regulatory Framework', weight: 9, scored: 7 }
  ],

  slides: [
    /* ---------- Section 1 ---------- */
    { s: 1, title: 'Who regulates what',
      src: [["SEC — Mission", "https://www.sec.gov/about/mission"], ["About FINRA", "https://www.finra.org/about"], ["MSRB", "https://www.msrb.org/"], ["SIPC — What SIPC protects", "https://www.sipc.org/for-investors/what-sipc-protects"], ["FDIC — Understanding deposit insurance", "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance"]],
      bullets: [
        '<b>SEC</b> — federal regulator created by the Securities Exchange Act of 1934; oversees exchanges, broker-dealers and the SROs.',
        '<b>FINRA</b> — self-regulatory organization (SRO) for broker-dealers: writes rules, examines firms, enforces, runs exams.',
        '<b>MSRB</b> — writes municipal securities rules but does <u>not</u> enforce them (FINRA, SEC and bank regulators do).',
        '<b>Federal Reserve</b> — monetary policy and credit rules (Regulation T margin).',
        '<b>FDIC</b> insures bank deposits ($250,000 per depositor, per bank, per ownership category).',
        '<b>SIPC</b> — not a regulator. Protects customers if a member broker-dealer fails: up to $500,000 per customer, of which no more than $250,000 cash.'
      ],
      trap: 'SIPC does not protect against market losses or bad advice — only against a failed firm\'s missing customer assets.',
      fact: 'MSRB = rulemaker only. If a question asks who enforces MSRB rules for broker-dealers, the answer is FINRA (and the SEC).' },
    { s: 1, title: 'The Securities Act of 1933 — the "paper act"',
      src: [["Investor.gov — Laws that govern the securities industry", "https://www.investor.gov/introduction-investing/investing-basics/role-sec/laws-govern-securities-industry"], ["17 CFR 230.430 — Preliminary prospectus", "https://www.ecfr.gov/current/title-17/section-230.430"], ["17 CFR 230.134 — Communications not deemed a prospectus", "https://www.ecfr.gov/current/title-17/section-230.134"]],
      bullets: [
        'Governs the <b>primary market</b>: new issues must be registered with the SEC and sold with a prospectus.',
        'Registration statement filed → <b>cooling-off period</b> of at least 20 days.',
        'During cooling-off: preliminary prospectus ("<b>red herring</b>", no final price), non-binding <b>indications of interest</b>. No sales, no binding orders.',
        'Final prospectus delivered no later than with the confirmation.',
        '<b>Exempt securities</b>: U.S. government, municipal, bank securities, commercial paper ≤ 270 days, nonprofit issues.'
      ],
      trap: 'SEC "effectiveness" is not approval. A prospectus must say the SEC has not approved or disapproved the securities.',
      fact: 'The 1934 Act governs the secondary market (trading), created the SEC, and regulates broker-dealers, margin and insider trading.' },
    { s: 1, title: 'Exempt offerings: Reg D, Reg A+, Rule 147, Rule 144',
      src: [["SEC — Exempt offerings", "https://www.sec.gov/resources-small-businesses/exempt-offerings"], ["17 CFR 230.506 — Reg D 506(b)/(c)", "https://www.ecfr.gov/current/title-17/section-230.506"], ["17 CFR 230.501 — Accredited investor definition", "https://www.ecfr.gov/current/title-17/section-230.501"], ["Investor.gov — Accredited investors bulletin", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-3"], ["17 CFR 230.251 — Regulation A", "https://www.ecfr.gov/current/title-17/section-230.251"], ["17 CFR 230.147 — Intrastate offerings", "https://www.ecfr.gov/current/title-17/section-230.147"], ["SEC — Rule 144: selling restricted and control securities", "https://www.sec.gov/reportspubs/investor-publications/investorpubsrule144htm.html"]],
      bullets: [
        '<b>Reg D 506(b)</b>: private placement; unlimited accredited investors + up to 35 non-accredited; no general solicitation. Form D within 15 days after first sale.',
        '<b>506(c)</b>: general solicitation allowed, but every purchaser must be accredited and verified.',
        '<b>Accredited individual</b>: net worth > $1M excluding primary residence, or income > $200,000 ($300,000 joint) in each of the last 2 years.',
        '<b>Reg A+</b>: Tier 1 up to $20M, Tier 2 up to $75M in 12 months.',
        '<b>Rule 147</b>: intrastate offerings — issuer and purchasers in one state.',
        '<b>Rule 144</b>: resale of restricted and control stock — 6-month holding period (reporting issuer); volume cap = greater of 1% of outstanding shares or average weekly volume of the prior 4 weeks; file Form 144 if > 5,000 shares or > $50,000 in 90 days.'
      ],
      formula: 'Rule 144 volume limit (per 90 days) = MAX( 1% of shares outstanding , avg weekly trading volume over prior 4 weeks )',
      trap: 'Control stock has no holding period — only restricted stock does. Both are subject to volume limits for affiliates.',
      fact: 'Rule 144A lets restricted securities trade among Qualified Institutional Buyers (QIBs, generally $100M+ in securities).' },
    { s: 1, title: 'Underwriting & market structure',
      src: [["FINRA Rule 2121 — Fair prices and commissions", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2121"], ["17 CFR 242.104 — Stabilization (Reg M)", "https://www.ecfr.gov/current/title-17/section-242.104"], ["Investor.gov — Laws that govern the securities industry", "https://www.investor.gov/introduction-investing/investing-basics/role-sec/laws-govern-securities-industry"]],
      bullets: [
        '<b>Primary market</b>: issuer receives the proceeds (IPOs, follow-ons). <b>Secondary market</b>: investors trade with each other.',
        '<b>Firm commitment</b>: underwriter buys the whole issue and bears the risk. <b>Best efforts</b>: agent only; unsold shares go back. <b>All-or-none</b>: cancelled unless fully sold.',
        'Spread = manager\'s fee + underwriting fee + <b>selling concession</b> (largest piece).',
        '<b>Exchanges</b> (NYSE, Nasdaq) vs <b>OTC</b> (dealer network, negotiated). Third market = listed stock traded OTC; fourth market = institutions trading directly (ECNs).',
        '<b>Broker</b> = agent, charges a commission. <b>Dealer</b> = principal, charges a markup/markdown. A firm cannot be both on the same trade.'
      ],
      trap: 'Stabilization bids must be at or below the public offering price — never above.',
      fact: 'FINRA\'s 5% markup policy is a guideline, not a hard rule; fairness depends on all the facts.' },
    { s: 1, title: 'Economic indicators & the business cycle',
      src: [["Conference Board — U.S. leading indicators", "https://www.conference-board.org/topics/us-leading-indicators/"], ["BEA — Gross domestic product", "https://www.bea.gov/data/gdp/gross-domestic-product"], ["BLS — Consumer Price Index", "https://www.bls.gov/cpi/"], ["NBER — Business cycle dating", "https://www.nber.org/research/business-cycle-dating"]],
      bullets: [
        'Cycle: <b>expansion → peak → contraction → trough</b>. Recession is commonly described as 2 consecutive quarters of declining real GDP.',
        '<b>Leading</b>: stock prices, building permits, new orders, average weekly hours, money supply (M2).',
        '<b>Coincident</b>: GDP, industrial production, personal income, nonfarm payrolls.',
        '<b>Lagging</b>: average duration of unemployment, CPI changes in services, prime rate, unit labor costs.',
        '<b>CPI</b> measures inflation for consumers. Deflation = falling prices; stagflation = inflation + high unemployment.',
        '<b>Defensive</b> industries (utilities, staples, healthcare) hold up in downturns; <b>cyclical</b> ones (autos, housing, durable goods) swing with the economy.'
      ],
      trap: 'GDP is coincident, not leading. Stock market prices are a leading indicator.',
      fact: 'A weaker U.S. dollar helps U.S. exporters; a stronger dollar helps U.S. importers and tourists going abroad.' },
    { s: 1, title: 'Monetary vs fiscal policy',
      src: [["Federal Reserve — Monetary policy", "https://www.federalreserve.gov/monetarypolicy.htm"], ["Federal Reserve — Open market operations", "https://www.federalreserve.gov/monetarypolicy/openmarket.htm"], ["Federal Reserve — Discount window", "https://www.federalreserve.gov/monetarypolicy/discountrate.htm"], ["Federal Reserve — Reserve requirements", "https://www.federalreserve.gov/monetarypolicy/reservereq.htm"]],
      bullets: [
        '<b>Monetary policy</b> = Federal Reserve (FOMC). Dual mandate: maximum employment and stable prices.',
        'Tools: <b>open market operations</b> (most used), the discount rate, interest on reserve balances, reserve requirements (0% since 2020).',
        '<b>Easing</b>: Fed buys securities → money supply ↑ → rates ↓. <b>Tightening</b>: Fed sells → money supply ↓ → rates ↑.',
        '<b>Fiscal policy</b> = Congress and the President: taxes and government spending.',
        'Rates: <b>fed funds</b> (bank-to-bank overnight), <b>discount rate</b> (Fed lending to banks), <b>prime rate</b> (banks to best corporate customers).',
        'An <b>inverted yield curve</b> (short rates above long rates) has often preceded recessions.'
      ],
      trap: 'The Fed does not control taxes or government spending — that is fiscal policy.',
      fact: 'The Fed sets the discount rate directly; the fed funds rate is a target it steers the market toward.' },

    /* ---------- Section 2 ---------- */
    { s: 2, title: 'Equities: common, preferred, ADRs',
      src: [["Investor.gov — Stocks", "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"], ["Investor.gov — American Depositary Receipts", "https://www.investor.gov/introduction-investing/investing-basics/glossary/american-depositary-receipts-adrs"]],
      bullets: [
        '<b>Common stock</b>: ownership, voting rights (statutory or cumulative), residual claim — last in liquidation.',
        '<b>Cumulative voting</b> helps minority shareholders: votes = shares × seats, can be spread or concentrated.',
        '<b>Preferred stock</b>: fixed dividend, priority over common, usually no vote. Types: cumulative, participating, convertible, callable.',
        'Preferred prices move like bonds — inversely with interest rates.',
        '<b>ADRs</b>: receipts for foreign shares held by a U.S. bank; trade in U.S. dollars; carry <b>currency risk</b>.'
      ],
      trap: 'Cumulative preferred: missed dividends (arrears) must be paid before any common dividend.',
      fact: 'Liquidation order: secured creditors → unsecured (debentures) → subordinated debt → preferred → common.' },
    { s: 2, title: 'Rights, warrants & the DERP dividend timeline',
      src: [["Investor.gov — Ex-dividend dates", "https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and"], ["FINRA Rule 11140 — Ex-dividend transactions", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/11140"], ["Investor.gov — T+1 settlement bulletin", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"]],
      bullets: [
        '<b>Rights</b>: short-term (weeks), subscription price <u>below</u> market, protect against dilution (preemptive rights).',
        '<b>Warrants</b>: long-term (years), exercise price <u>above</u> market when issued, often attached to bonds as a "sweetener".',
        'Dividend timeline — <b>D-E-R-P</b>: <b>D</b>eclaration → <b>E</b>x-date → <b>R</b>ecord → <b>P</b>ayment.',
        'Under T+1 settlement, the <b>ex-date is the same day as the record date</b>.',
        'Buy on or after the ex-date → no dividend. Buy before the ex-date → you get it. Stock price drops by about the dividend on the ex-date.'
      ],
      formula: 'DERP:  Declaration  →  Ex-date (= Record date under T+1)  →  Record  →  Payment',
      trap: 'The ex-date is set by FINRA (or the exchange), not the board. The board sets declaration, record and payment dates.',
      fact: 'Cash dividends are taxed in the year received; qualified dividends get long-term capital gains rates.' },
    { s: 2, title: 'Debt: the bond seesaw',
      src: [["Investor.gov — Bonds", "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds"], ["FINRA — Bonds", "https://www.finra.org/investors/investing/investment-products/bonds"]],
      bullets: [
        'Par = $1,000. Price quoted as a % of par (e.g., 98 = $980).',
        '<b>Nominal yield</b> (coupon) is fixed. <b>Current yield</b> = annual interest ÷ market price.',
        '<b>YTM</b> includes the gain/loss to par at maturity. <b>YTC</b> assumes it is called early.',
        'Price and yield move <b>inversely</b>: rates ↑ → bond prices ↓.',
        'Longer maturity and lower coupon = <b>more price sensitivity</b> (interest rate risk).',
        'Zero-coupon bonds: no reinvestment risk, the most interest rate risk.'
      ],
      formula: 'Discount (price < par):  NY < CY < YTM < YTC\nPremium  (price > par):  YTC < YTM < CY < NY\nCurrent yield = annual coupon $ ÷ market price',
      trap: 'Premium bond: the coupon is the HIGHEST yield and YTC the LOWEST. Discount bond: exactly reversed.',
      fact: 'Bonds tend to be called when rates fall — that is call risk (and it caps price gains).' },
    { s: 2, title: 'Governments, munis & money markets',
      src: [["TreasuryDirect — Treasury bills", "https://www.treasurydirect.gov/marketable-securities/treasury-bills/"], ["TreasuryDirect — Treasury notes", "https://www.treasurydirect.gov/marketable-securities/treasury-notes/"], ["TreasuryDirect — TIPS", "https://www.treasurydirect.gov/marketable-securities/tips/"], ["Investor.gov — Municipal bonds overview", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-37"], ["Ginnie Mae", "https://www.ginniemae.gov/"]],
      bullets: [
        '<b>T-bills</b>: ≤ 52 weeks, sold at a discount. <b>T-notes</b>: 2–10 years. <b>T-bonds</b>: 20–30 years. <b>TIPS</b>: principal adjusts with CPI. <b>STRIPS</b>: zero-coupon.',
        'Treasury interest: federally taxable, <b>exempt from state & local</b> tax.',
        '<b>GO bonds</b>: backed by the issuer\'s taxing power (property taxes); usually need voter approval.',
        '<b>Revenue bonds</b>: backed by the facility\'s revenue (tolls, fees); feasibility study; no voter approval.',
        'Muni interest is generally exempt from federal tax (and often from state tax in-state).',
        '<b>Money market</b> instruments mature in ≤ 1 year: T-bills, commercial paper (≤ 270 days), banker\'s acceptances, negotiable CDs, repos.'
      ],
      formula: 'Tax-equivalent yield = muni yield ÷ (1 − investor\'s tax rate)',
      trap: 'Ginnie Mae is backed by the full faith and credit of the U.S.; Fannie Mae and Freddie Mac are not.',
      fact: 'Munis suit investors in high tax brackets; they make little sense inside an IRA (already tax-deferred).' },
    { s: 2, title: 'Options: calls & puts',
      src: [["Investor.gov — An introduction to options", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-63"], ["OCC — Options Disclosure Document", "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document"], ["FINRA Rule 2360 — Options", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360"]],
      bullets: [
        'One contract = 100 shares. Buyer (long) has the <b>right</b>; seller (writer, short) has the <b>obligation</b>.',
        '<b>Call buyer</b>: bullish — right to buy at the strike. <b>Put buyer</b>: bearish — right to sell at the strike.',
        '<b>Call writer</b>: bearish/neutral, obligated to sell. <b>Put writer</b>: bullish/neutral, obligated to buy.',
        'In-the-money call: market > strike. In-the-money put: market < strike.',
        'The Options Clearing Corporation (OCC) issues and guarantees listed options. The Options Disclosure Document (ODD) must be delivered by account approval.',
        'Listed options settle T+1; equity options are American style (exercise any time).'
      ],
      formula: 'Call breakeven = strike + premium   |   Put breakeven = strike − premium\nLong call: max loss = premium, max gain = unlimited\nLong put:  max loss = premium, max gain = (strike − premium) × 100\nShort (naked) call: max loss = UNLIMITED',
      trap: '"Calls up, puts down" for breakevens — for BOTH buyer and seller of the same option.',
      fact: 'Buyers\' max loss is always the premium paid. Sellers\' max gain is always the premium received.' },
    { s: 2, title: 'Investment companies',
      src: [["Investor.gov — Mutual funds", "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-funds-etfs/mutual-funds"], ["FINRA Rule 2341 — Investment company securities", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2341"], ["FINRA Regulatory Notice 09-31 — Leveraged and inverse ETFs", "https://www.finra.org/rules-guidance/notices/09-31"]],
      bullets: [
        '<b>Open-end (mutual fund)</b>: continuous new shares, bought at POP (NAV + sales charge), redeemed at NAV; forward pricing; redemption within 7 days.',
        '<b>Closed-end</b>: fixed shares, IPO then trades on an exchange at a premium or discount to NAV.',
        '<b>ETFs</b>: trade intraday on an exchange; can be bought on margin and sold short; usually low cost.',
        '<b>UITs</b>: fixed portfolio, no active management, redeemable.',
        '<b>Breakpoints</b>: lower sales charges for larger purchases; <b>letter of intent</b> covers 13 months and may be backdated up to 90 days; rights of accumulation.',
        'A fund can call itself "no-load" only if 12b-1 fees are ≤ 0.25%.'
      ],
      trap: 'Leveraged and inverse ETFs reset daily — generally unsuitable for buy-and-hold retail investors.',
      fact: '"Breakpoint selling" (keeping a purchase just below a breakpoint) is a prohibited practice.' },
    { s: 2, title: 'Annuities, REITs, DPPs & other packaged products',
      src: [["Investor.gov — Variable annuities", "https://www.investor.gov/introduction-investing/investing-basics/investment-products/annuities/variable-annuities"], ["FINRA Rule 2330 — Deferred variable annuities", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2330"], ["Investor.gov — REITs", "https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits"], ["FINRA Rule 2310 — Direct participation programs", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2310"]],
      bullets: [
        '<b>Variable annuity</b>: insurance + security. Assets in a <b>separate account</b>; the investor bears the investment risk; needs a prospectus and both securities and insurance licenses.',
        'Accumulation units (paying in) → annuity units (paying out). Growth is tax-deferred; earnings taxed as ordinary income on withdrawal; 10% penalty before 59½.',
        '<b>Fixed annuity</b>: insurer\'s general account, insurer bears the risk — not a security.',
        '<b>REITs</b>: must distribute ≥ 90% of taxable income; pass through income but <u>not</u> losses.',
        '<b>DPPs</b> (limited partnerships): pass through income <u>and losses</u>; illiquid; general partner manages (unlimited liability), limited partners are passive.',
        '<b>ETNs</b>: unsecured debt — carry the issuer\'s credit risk. <b>CMOs</b>: tranches; PAC tranche has the least prepayment risk.'
      ],
      trap: 'REITs ≠ DPPs: only DPPs pass through losses.',
      fact: '1035 exchanges let annuity/insurance contracts be swapped without current tax.' },
    { s: 2, title: 'Investment risks',
      src: [["Investor.gov — What is risk?", "https://www.investor.gov/introduction-investing/investing-basics/what-risk"]],
      bullets: [
        '<b>Systematic</b> (market-wide, cannot be diversified away): market risk, interest rate risk, purchasing power (inflation) risk.',
        '<b>Unsystematic</b> (specific to one company or industry, reduced by diversification): business risk, credit/default risk, regulatory risk, political risk.',
        '<b>Liquidity risk</b>: hard to sell without a price concession (DPPs, thinly traded stock).',
        '<b>Reinvestment risk</b>: coupons reinvested at lower rates (none for zeros).',
        '<b>Call risk</b>: issuer redeems when rates fall. <b>Currency risk</b>: foreign investments and ADRs.',
        '<b>Purchasing power risk</b> hits fixed-income investors hardest; common stock is the classic hedge.'
      ],
      trap: 'Diversification reduces unsystematic risk only. Market risk remains.',
      fact: 'Beta measures systematic risk: beta 1.0 moves with the market.' },

    /* ---------- Section 3 ---------- */
    { s: 3, title: 'Order types',
      src: [["Investor.gov — Types of orders", "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders"]],
      bullets: [
        '<b>Market order</b>: executes immediately at the best available price — execution guaranteed, price not.',
        '<b>Buy limit</b>: at or below the limit price. <b>Sell limit</b>: at or above.',
        '<b>Buy stop</b>: placed above the market — protects a short position or catches a breakout.',
        '<b>Sell stop</b>: placed below the market — protects a long position\'s gain or limits loss.',
        'A stop becomes a <b>market order</b> once triggered; a stop-limit becomes a limit order.',
        'Day orders expire at the close; GTC orders stay open until filled or cancelled.'
      ],
      formula: 'Above the market:  Buy STOP  /  Sell LIMIT\nBelow the market:  Sell STOP  /  Buy LIMIT     ("BLiSS": Buy Limit, Sell Stop below)',
      trap: 'A stop order does not guarantee the stop price — it executes at the next market price, which may gap.',
      fact: 'Customers buy at the ask (offer) and sell at the bid.' },
    { s: 3, title: 'Settlement & payment',
      src: [["SEC — T+1 settlement rule (2023-29)", "https://www.sec.gov/newsroom/press-releases/2023-29"], ["17 CFR 240.15c6-1 — Settlement cycle", "https://www.ecfr.gov/current/title-17/section-240.15c6-1"], ["Investor.gov — T+1 settlement bulletin", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"], ["12 CFR 220 — Regulation T", "https://www.ecfr.gov/current/title-12/part-220"]],
      bullets: [
        '<b>Regular way = T+1</b> for corporate stocks, corporate bonds, municipal bonds, Treasuries and listed options.',
        '<b>Cash settlement</b>: same day as the trade.',
        '<b>Reg T payment</b> in a cash account: settlement + 2 business days (T+3).',
        'If the customer does not pay, the firm sells out the position and the account is frozen for 90 days.',
        'Confirmations go out at or before completion of the trade (settlement). Account statements at least quarterly.'
      ],
      trap: '"Free-riding" = buying and selling before paying in a cash account → 90-day freeze (must pay in full before trading).',
      fact: 'Ex-date = record date because of T+1.' },
    { s: 3, title: 'Cash vs margin accounts',
      src: [["12 CFR 220 — Regulation T", "https://www.ecfr.gov/current/title-12/part-220"], ["FINRA Rule 4210 — Margin requirements", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4210"], ["Investor.gov — Margin account", "https://www.investor.gov/introduction-investing/investing-basics/glossary/margin-account"]],
      bullets: [
        '<b>Cash account</b>: pay in full. No short sales, no writing naked options.',
        '<b>Margin account</b>: borrow from the firm. Signed margin agreement = credit agreement + hypothecation agreement (+ optional loan consent).',
        '<b>Reg T</b> (Federal Reserve) initial requirement: 50%.',
        '<b>FINRA</b> minimum equity to open/trade on margin: $2,000. Long maintenance minimum: 25%.',
        'Equity = long market value − debit balance.',
        '<b>Hypothecation</b> = customer pledges securities to the firm; <b>rehypothecation</b> = firm pledges them to a bank.'
      ],
      formula: 'Equity = LMV − DR      Reg T initial = 50% of purchase',
      trap: 'Short sales must be done in a margin account. UGMA/UTMA accounts can never be margin accounts.',
      fact: 'A loan consent (to lend customer shares for short sales) is optional; the hypothecation agreement is required.' },
    { s: 3, title: 'Account types',
      src: [["IRS — IRAs", "https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras"], ["IRS — Roth IRAs", "https://www.irs.gov/retirement-plans/roth-iras"], ["IRS — Required minimum distributions", "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs"], ["IRS — Rollovers", "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions"], ["Investor.gov — Introduction to 529 plans", "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/introduction-529-plans-investor-bulletin"], ["FINRA Rule 3260 — Discretionary accounts", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3260"]],
      bullets: [
        '<b>JTWROS</b>: on death, the survivor takes everything. <b>JTIC</b>: the decedent\'s share goes to their estate.',
        '<b>UGMA/UTMA</b>: one custodian, one minor; minor\'s SSN; gifts are irrevocable; no margin; transfers at the age of majority.',
        '<b>Traditional IRA</b>: tax-deferred, often pre-tax; withdrawals taxed as ordinary income; 10% penalty before 59½; RMDs from 73.',
        '<b>Roth IRA</b>: after-tax contributions; qualified withdrawals tax-free (age 59½ + 5 years); no RMDs for the owner.',
        'Contributions require earned income. Rollovers must finish within 60 days; trustee-to-trustee transfers are unlimited.',
        '<b>529 plans</b>: education savings, municipal fund securities; <b>Coverdell ESA</b>: $2,000/year.'
      ],
      trap: 'All powers of attorney — even durable — end at death. Executors act on letters testamentary.',
      fact: 'Discretion requires the customer\'s written authorization; time & price discretion alone is good only for that trading day.' },
    { s: 3, title: 'Anti-money laundering',
      src: [["FINRA Rule 3310 — AML compliance program", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3310"], ["FINRA — Anti-money laundering", "https://www.finra.org/rules-guidance/key-topics/aml"], ["31 CFR 1010.311 — Currency transaction reports", "https://www.ecfr.gov/current/title-31/section-1010.311"], ["31 CFR 1023.320 — SARs by broker-dealers", "https://www.ecfr.gov/current/title-31/section-1023.320"], ["OFAC", "https://ofac.treasury.gov/"]],
      bullets: [
        'Three stages: <b>placement → layering → integration</b>.',
        '<b>CTR</b>: cash of more than $10,000 in one business day; filed with FinCEN within 15 days.',
        '<b>SAR</b>: suspicious activity of $5,000 or more; filed within 30 days. <b>Never tell the customer</b>.',
        '<b>Structuring</b> (splitting deposits to avoid the CTR) is itself a crime.',
        '<b>CIP</b>: verify name, date of birth, address, ID number. Check the <b>OFAC</b> SDN list.',
        'AML records are kept 5 years. Firms need a written AML program and an AML compliance officer.'
      ],
      trap: 'Placement is when cash first enters the system — the stage most likely to trigger a CTR.',
      fact: 'Tipping off a customer that a SAR was filed is prohibited.' },
    { s: 3, title: 'Prohibited activities',
      src: [["Investor.gov — Insider trading", "https://www.investor.gov/introduction-investing/investing-basics/glossary/insider-trading"], ["17 CFR 240.10b5-1 — Trading on MNPI", "https://www.ecfr.gov/current/title-17/section-240.10b5-1"], ["FINRA Rule 5270 — Front running of block transactions", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5270"], ["Investor.gov — Churning", "https://www.investor.gov/introduction-investing/investing-basics/glossary/churning"], ["FINRA Rule 2150 — Improper use of customer funds; guarantees; sharing", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2150"], ["FINRA Rule 2020 — Manipulative and fraudulent devices", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2020"], ["17 CFR 240.15l-1 — Regulation Best Interest", "https://www.ecfr.gov/current/title-17/section-240.15l-1"]],
      bullets: [
        '<b>Insider trading</b>: trading on material non-public information (MNPI); civil penalty up to 3× the profit made or loss avoided.',
        '<b>Front-running</b>: trading ahead of a known block order.',
        '<b>Churning</b>: excessive trading to generate commissions.',
        '<b>Free-riding</b>: selling before paying in a cash account. <b>Backdating</b>: falsifying records or dates.',
        '<b>Selling away</b>: private securities transactions without written notice to the firm.',
        'Manipulation: <b>marking the close</b>, <b>painting the tape</b>/wash trades, <b>spoofing</b>, pump-and-dump.',
        'Also: guaranteeing against loss, commingling customer and firm funds, unauthorized trading, sharing in accounts without approval.'
      ],
      trap: 'Sharing in an account is allowed only with written firm approval and in proportion to the rep\'s contribution (immediate family excepted).',
      fact: 'Reg BI requires broker-dealers to act in a retail customer\'s best interest; Form CRS must be delivered.' },

    /* ---------- Section 4 ---------- */
    { s: 4, title: 'Registration',
      src: [["FINRA — Registration, exams & CE", "https://www.finra.org/registration-exams-ce"], ["FINRA — SIE exam", "https://www.finra.org/registration-exams-ce/qualification-exams/securities-industry-essentials-exam"], ["FINRA Rule 1210 — Registration requirements", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1210"]],
      bullets: [
        'Anyone doing securities business for a member firm must be registered. Clerical staff need not be.',
        '<b>Form U4</b>: filed by the firm through CRD at hiring; includes fingerprints and disclosure history.',
        'U4 amendments: within 30 days of learning the facts.',
        '<b>Form U5</b>: filed within 30 days of termination; a copy goes to the individual.',
        'SIE results last <b>4 years</b>. A qualification (top-off) exam lapses <b>2 years</b> after leaving.',
        'The SIE alone does not qualify anyone to do business — a representative exam (Series 6, 7, etc.) and firm association are required.'
      ],
      trap: 'FINRA keeps jurisdiction over a former registered person for 2 years after the U5.',
      fact: 'Making false statements on a U4 can itself be a statutory disqualification.' },
    { s: 4, title: 'Statutory disqualification & discipline',
      src: [["FINRA Rule 9216 — AWC procedures", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/9216"], ["FINRA Rule 8210 — Information requests", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/8210"], ["FINRA — Arbitration & mediation", "https://www.finra.org/arbitration-mediation"]],
      bullets: [
        '<b>Statutory disqualification</b>: any felony within 10 years; certain misdemeanors (securities, fraud, theft) within 10 years; SRO expulsion; injunctions; false filings.',
        '<b>Code of Procedure</b>: FINRA disciplinary process. Settlement = Letter of Acceptance, Waiver and Consent (<b>AWC</b>).',
        'Appeals: National Adjudicatory Council (NAC) → SEC → federal court.',
        'Sanctions: censure, fine, suspension, expulsion, bar.',
        '<b>Code of Arbitration</b>: disputes; awards final and binding. Member vs member and firm vs associated person are mandatory; customers via their account agreement.',
        'Mediation is non-binding.'
      ],
      trap: 'Arbitration awards generally cannot be appealed. Discipline decisions can.',
      fact: 'Under Rule 8210, FINRA can require any member or associated person to provide information or testimony.' },
    { s: 4, title: 'Continuing education',
      src: [["FINRA — Continuing education", "https://www.finra.org/registration-exams-ce/continuing-education"], ["FINRA — Maintaining Qualifications Program", "https://www.finra.org/registration-exams-ce/qualification-exams/mqp"], ["FINRA Rule 1240 — Continuing education", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1240"]],
      bullets: [
        '<b>Regulatory Element</b>: every registered person, <b>annually</b> by December 31.',
        '<b>Firm Element</b>: firm-designed training, at least annually, based on a needs analysis.',
        'Missing the Regulatory Element → <b>CE inactive</b>: no securities business, no compensation until completed.',
        '<b>Maintaining Qualifications Program (MQP)</b>: people leaving the industry can keep qualifications up to 5 years by doing annual CE.'
      ],
      trap: 'CE inactive does not mean registration is revoked — but the person cannot work or be paid for securities business.',
      fact: 'The SIE itself does not require firm sponsorship.' },
    { s: 4, title: 'Employee conduct',
      src: [["FINRA Regulatory Notice 26-05 — $300 gift limit", "https://www.finra.org/rules-guidance/notices/26-05"], ["FINRA Rule 3220 — Gifts", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3220"], ["FINRA Rule 3270 — Outside business activities", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3270"], ["FINRA Rule 3280 — Private securities transactions", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3280"], ["FINRA Rule 3210 — Accounts at other firms", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3210"], ["MSRB Rule G-37 — Political contributions", "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-37"], ["Morgan Lewis — SEC approves FINRA Rule 3290 (not yet effective)", "https://www.morganlewis.com/pubs/2026/10/sec-approves-finra-rule-3290-reshaping-outside-activity-rules-for-broker-dealers"]],
      bullets: [
        '<b>Rule 3220 gifts</b>: max <b>$300 per person per year</b> to an employee of another firm when related to that person\'s business (Reg Notice 26-05, effective March 30, 2026). The firm aggregates all gifts and keeps records.',
        'Excluded: de minimis promotional items, personal gifts for life events (weddings, births). Business entertainment is OK if the host attends and it is not lavish.',
        '<b>Rule 3270 outside business activities</b>: prior written notice to the firm.',
        '<b>Rule 3280 private securities transactions</b>: prior written notice; if paid, the firm must approve in writing and supervise.',
        '<b>Rule 3210</b>: an employee opening an account at another firm needs the employer\'s prior written consent.',
        '<b>MSRB G-37</b>: political contributions up to $250 per election to a candidate the person can vote for; larger ones trigger a 2-year business ban.'
      ],
      trap: 'Old $100 gift limit is gone — the SIE now tests $300.',
      fact: 'New Rule 3290 (replacing 3270/3280) was SEC-approved Sept 2026 but is not yet effective — study 3270/3280.' },
    { s: 4, title: 'Communications with the public (Rule 2210)',
      src: [["FINRA Rule 2210 — Communications with the public", "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210"], ["FINRA — Advertising Regulation", "https://www.finra.org/about/how-we-operate/advertising-regulation"]],
      bullets: [
        '<b>Correspondence</b>: to 25 or fewer retail investors within 30 days.',
        '<b>Retail communication</b>: to more than 25 retail investors within 30 days — generally needs principal approval before use.',
        '<b>Institutional communication</b>: only to institutional investors.',
        'No promissory or exaggerated claims; no predictions of performance; must be fair and balanced.'
      ],
      trap: 'An email to 26 retail customers is a retail communication, not correspondence.',
      fact: 'Communications must be kept per recordkeeping rules and be available for FINRA review.' }
  ],

  cards: [
    /* ---------- Section 1 (15) ---------- */
    { s: 1, f: 'Which act created the SEC?', b: 'The Securities Exchange Act of 1934.' },
    { s: 1, f: 'Which act is the "paper act" governing new issues?', b: 'The Securities Act of 1933 — registration and prospectus.' },
    { s: 1, f: 'Minimum cooling-off period?', b: '20 days after the registration statement is filed.' },
    { s: 1, f: 'What may happen during the cooling-off period?', b: 'Red herring (preliminary prospectus) distribution and non-binding indications of interest. No sales.' },
    { s: 1, f: 'Does the MSRB enforce its rules?', b: 'No. It writes municipal rules; FINRA, the SEC and bank regulators enforce them.' },
    { s: 1, f: 'SIPC coverage limit?', b: '$500,000 per customer, of which up to $250,000 cash.' },
    { s: 1, f: 'Reg D 506(b): how many non-accredited investors?', b: 'Up to 35 (plus unlimited accredited). No general solicitation.' },
    { s: 1, f: 'Accredited investor (individual) tests?', b: 'Net worth > $1M excluding primary residence, OR income > $200k ($300k joint) for the last 2 years.' },
    { s: 1, f: 'Rule 144 volume limit?', b: 'Greater of 1% of outstanding shares or the average weekly volume over the prior 4 weeks, per 90 days.' },
    { s: 1, f: 'Rule 144 holding period (reporting company)?', b: '6 months for restricted stock. Control stock has no holding period.' },
    { s: 1, f: 'Firm commitment vs best efforts?', b: 'Firm commitment: underwriter buys the issue and bears the risk. Best efforts: acts as agent; unsold shares returned.' },
    { s: 1, f: 'Three classes of economic indicators — name a leading one.', b: 'Leading: stock prices, building permits, new orders, M2, weekly hours. (GDP is coincident; unemployment duration is lagging.)' },
    { s: 1, f: 'Who conducts fiscal policy?', b: 'Congress and the President (taxes and spending).' },
    { s: 1, f: 'Fed\'s most-used tool?', b: 'Open market operations. Buying securities eases (rates ↓); selling tightens (rates ↑).' },
    { s: 1, f: 'Discount rate vs fed funds rate — which does the Fed set directly?', b: 'The discount rate. Fed funds is a target range the Fed steers the market toward.' },

    /* ---------- Section 2 (16) ---------- */
    { s: 2, f: 'DERP stands for?', b: 'Declaration, Ex-date, Record, Payment. Under T+1, ex-date = record date.' },
    { s: 2, f: 'Rights vs warrants?', b: 'Rights: short-term, price below market. Warrants: long-term, price above market at issue, often attached to bonds.' },
    { s: 2, f: 'Cumulative preferred?', b: 'Missed dividends accumulate and must be paid before common shareholders receive dividends.' },
    { s: 2, f: 'Main extra risk of ADRs?', b: 'Currency (exchange-rate) risk.' },
    { s: 2, f: 'Yield order for a DISCOUNT bond?', b: 'Nominal < Current < YTM < YTC.' },
    { s: 2, f: 'Yield order for a PREMIUM bond?', b: 'YTC < YTM < Current < Nominal.' },
    { s: 2, f: 'Current yield formula?', b: 'Annual interest ÷ current market price.' },
    { s: 2, f: 'GO vs revenue bond backing?', b: 'GO: taxing power (property taxes), voter approval. Revenue: income from the financed facility; feasibility study.' },
    { s: 2, f: 'Tax-equivalent yield?', b: 'Muni yield ÷ (1 − tax rate).' },
    { s: 2, f: 'Call breakeven / put breakeven?', b: 'Call: strike + premium. Put: strike − premium.' },
    { s: 2, f: 'Max loss for a naked (uncovered) call writer?', b: 'Unlimited.' },
    { s: 2, f: 'Mutual fund purchase vs redemption price?', b: 'Buy at POP (NAV + sales charge); redeem at NAV (minus any redemption fee). Forward pricing.' },
    { s: 2, f: 'Letter of intent period?', b: '13 months; may be backdated up to 90 days.' },
    { s: 2, f: 'Who bears investment risk in a variable annuity?', b: 'The contract holder (assets in the separate account).' },
    { s: 2, f: 'REIT vs DPP: which passes through losses?', b: 'DPPs only. REITs pass through income (must distribute 90%) but not losses.' },
    { s: 2, f: 'Systematic vs unsystematic risk?', b: 'Systematic: market-wide (market, interest rate, inflation) — can\'t diversify. Unsystematic: company/industry-specific (business, credit, regulatory) — diversifiable.' },

    /* ---------- Section 3 (16) ---------- */
    { s: 3, f: 'Regular-way settlement for stocks, corporate and muni bonds?', b: 'T+1.' },
    { s: 3, f: 'Cash settlement?', b: 'Same day as the trade.' },
    { s: 3, f: 'Where is a buy stop placed and why?', b: 'Above the market — to protect a short position (or buy a breakout).' },
    { s: 3, f: 'Where is a sell stop placed and why?', b: 'Below the market — to protect a long position.' },
    { s: 3, f: 'What does a stop order become when triggered?', b: 'A market order.' },
    { s: 3, f: 'Reg T initial margin?', b: '50% (set by the Federal Reserve).' },
    { s: 3, f: 'FINRA minimum equity for a margin account?', b: '$2,000. Long maintenance: 25%.' },
    { s: 3, f: 'Free-riding penalty?', b: 'Account frozen for 90 days (must pay in full before trades).' },
    { s: 3, f: 'JTWROS vs JTIC on death?', b: 'JTWROS: survivor gets it all. JTIC: decedent\'s share to their estate.' },
    { s: 3, f: 'UGMA/UTMA limits?', b: 'One custodian, one minor, minor\'s SSN, no margin, gifts irrevocable.' },
    { s: 3, f: 'CTR threshold and deadline?', b: 'Cash over $10,000 in a day; filed within 15 days.' },
    { s: 3, f: 'SAR threshold and deadline?', b: '$5,000+ suspicious activity; filed within 30 days; customer must not be told.' },
    { s: 3, f: 'Three stages of money laundering?', b: 'Placement, layering, integration.' },
    { s: 3, f: 'Front-running?', b: 'Trading ahead of a customer\'s (or firm\'s) block order using knowledge of it.' },
    { s: 3, f: 'Churning?', b: 'Excessive trading in a customer account to generate commissions.' },
    { s: 3, f: 'Selling away?', b: 'Private securities transactions without written notice to the employing firm (Rule 3280).' },

    /* ---------- Section 4 (14) ---------- */
    { s: 4, f: 'Rule 3220 gift limit?', b: '$300 per person per year (since March 30, 2026; Reg Notice 26-05).' },
    { s: 4, f: 'Gifts excluded from the $300 limit?', b: 'De minimis promotional items, personal life-event gifts (wedding, birth), and business entertainment where the host attends.' },
    { s: 4, f: 'Form U4 — what and when?', b: 'Registration form filed via CRD at hiring; amend within 30 days of new facts.' },
    { s: 4, f: 'Form U5 deadline?', b: 'Within 30 days of termination; copy to the individual.' },
    { s: 4, f: 'How long is an SIE pass valid?', b: '4 years.' },
    { s: 4, f: 'Qualification exam validity after leaving the industry?', b: '2 years (up to 5 with the Maintaining Qualifications Program).' },
    { s: 4, f: 'Felony look-back for statutory disqualification?', b: '10 years.' },
    { s: 4, f: 'Regulatory Element CE frequency?', b: 'Annually, by December 31.' },
    { s: 4, f: 'Consequence of missing Regulatory Element?', b: 'CE inactive — no securities business, no compensation until done.' },
    { s: 4, f: 'Outside business activity rule?', b: 'Rule 3270 — prior written notice to the firm. (Rule 3290 approved, not yet effective.)' },
    { s: 4, f: 'Private securities transaction with compensation?', b: 'Rule 3280 — firm must approve in writing and supervise it as its own.' },
    { s: 4, f: 'AWC?', b: 'Letter of Acceptance, Waiver and Consent — a settlement of a FINRA disciplinary matter.' },
    { s: 4, f: 'Are arbitration awards appealable?', b: 'Generally no — final and binding.' },
    { s: 4, f: 'Correspondence vs retail communication cutoff?', b: '25 or fewer retail investors in 30 days = correspondence; more than 25 = retail communication.' }
  ]
};

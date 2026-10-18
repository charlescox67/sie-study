/* SIE slide decks, in FINRA content-outline order (sections 1-4). Each slide: s, title, bullets (HTML),
   optional formula, exam trap, high-yield fact, and src = [label, url] source links (all opened and checked). */
window.SIE.slides = [
  {
    "s": 1,
    "title": "Who regulates what",
    "bullets": [
      "<b>SEC</b> — federal regulator created by the Securities Exchange Act of 1934; oversees exchanges, broker-dealers and the SROs.",
      "<b>FINRA</b> — self-regulatory organization (SRO) for broker-dealers: writes rules, examines firms, enforces, runs exams.",
      "<b>MSRB</b> — writes municipal securities rules but does <u>not</u> enforce them (FINRA, SEC and bank regulators do).",
      "<b>Federal Reserve</b> — monetary policy and credit rules (Regulation T margin).",
      "<b>FDIC</b> insures bank deposits ($250,000 per depositor, per bank, per ownership category).",
      "<b>SIPC</b> — not a regulator. Protects customers if a member broker-dealer fails: up to $500,000 per customer, of which no more than $250,000 cash."
    ],
    "trap": "SIPC does not protect against market losses or bad advice — only against a failed firm's missing customer assets.",
    "fact": "MSRB = rulemaker only. If a question asks who enforces MSRB rules for broker-dealers, the answer is FINRA (and the SEC).",
    "src": [
      [
        "SEC — Mission",
        "https://www.sec.gov/about/mission"
      ],
      [
        "About FINRA",
        "https://www.finra.org/about"
      ],
      [
        "MSRB",
        "https://www.msrb.org/"
      ],
      [
        "SIPC — What SIPC protects",
        "https://www.sipc.org/for-investors/what-sipc-protects"
      ],
      [
        "FDIC — Understanding deposit insurance",
        "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance"
      ]
    ]
  },
  {
    "s": 1,
    "title": "SROs, state regulators & the Treasury",
    "bullets": [
      "<b>Self-regulatory organizations</b> write and enforce rules for their own members under SEC oversight; SRO rule changes need SEC approval.",
      "<b>FINRA</b>: broker-dealers and their associated persons — registration, exams, firm examinations, discipline, arbitration. <b>Cboe</b>: rules for its options-exchange members. <b>MSRB</b>: municipal securities dealers and municipal advisors (rulemaking only).",
      "<b>SEC</b>: enforces federal securities laws with <u>civil</u> actions; criminal cases are referred to the Department of Justice.",
      "<b>State regulators</b> enforce \"blue-sky\" laws: they register securities, broker-dealers, agents and investment advisers doing business in their state. <b>NASAA</b> is their association.",
      "<b>Treasury/IRS</b>: tax rules (retirement accounts, cost-basis reporting, 1099s). Treasury also issues government securities; its bureaus <b>FinCEN</b> (AML reports) and <b>OFAC</b> (sanctions) matter to broker-dealers."
    ],
    "trap": "NASAA writes model rules but enforces nothing — each state's securities administrator does the enforcing.",
    "fact": "SEC enforcement is civil; jail time requires a criminal case brought by the Department of Justice.",
    "src": [
      [
        "SEC — Mission",
        "https://www.sec.gov/about/mission"
      ],
      [
        "About FINRA",
        "https://www.finra.org/about"
      ],
      [
        "NASAA",
        "https://www.nasaa.org/"
      ],
      [
        "Investor.gov — Blue sky laws",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/blue-sky-laws"
      ],
      [
        "FinCEN",
        "https://www.fincen.gov/"
      ],
      [
        "OFAC",
        "https://ofac.treasury.gov/"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Market participants: investors, broker-dealers & advisers",
    "bullets": [
      "<b>Retail investors</b> are individuals. <b>Institutional</b> accounts include banks, insurance companies, registered investment companies, investment advisers and anyone with at least $50 million in total assets (FINRA Rule 4512(c)).",
      "<b>Accredited investors</b> meet SEC wealth/income or professional tests and may buy private placements.",
      "<b>Introducing broker-dealers</b> handle customers and orders but send trades to a <b>clearing (carrying) firm</b>, which executes, settles, holds customer assets and sends confirmations and statements. <b>Prime brokers</b> provide clearing, custody, financing and securities lending to hedge funds and other large clients.",
      "<b>Investment advisers</b> are paid to advise others about securities; they owe a <b>fiduciary duty</b> and register with the SEC or states under the Investment Advisers Act of 1940 (Form ADV).",
      "<b>Municipal advisors</b> advise municipal issuers on bond deals and owe them a fiduciary duty; a financial advisor generally may not switch to underwriting the same issue (MSRB G-23)."
    ],
    "trap": "An introducing firm usually does NOT hold customer cash or securities — its clearing firm does.",
    "fact": "Advisers owe a fiduciary duty; broker-dealers owe Reg BI's best-interest duty when recommending to retail customers.",
    "src": [
      [
        "Investor.gov — Accredited investors",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/accredited-investors"
      ],
      [
        "Investor.gov — Investment adviser",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/investment-adviser"
      ],
      [
        "FINRA Rule 4512 — Customer account information",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4512"
      ],
      [
        "MSRB Rule G-23 — Activities of financial advisors",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-23"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Market participants: the plumbing",
    "bullets": [
      "<b>Issuers</b> raise capital; <b>underwriters</b> (investment banks) advise on structure and price and distribute new issues.",
      "<b>Market makers</b> stand ready to buy and sell at their quoted bid and ask, earning the spread and providing liquidity. A firm quote must be honored — refusing is \"backing away\".",
      "<b>Custodians</b> (banks, trust companies) safeguard assets; a <b>trustee</b> acts for bondholders under an indenture or manages trust assets.",
      "<b>Transfer agents</b> keep the issuer's list of registered owners, issue and cancel certificates and pay dividends; a <b>registrar</b> makes sure shares outstanding never exceed shares authorized.",
      "<b>DTCC</b>: its DTC subsidiary is the central securities depository and NSCC clears and nets stock and bond trades. <b>OCC</b> issues, guarantees and clears all listed options."
    ],
    "trap": "Transfer agent = tracks who owns the shares. Registrar = audits that the share count doesn't exceed what's authorized.",
    "fact": "Most securities sit at DTC in \"street name\" and change hands by book entry, not paper certificates.",
    "src": [
      [
        "DTCC",
        "https://www.dtcc.com/"
      ],
      [
        "OCC — Options Disclosure Document",
        "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document"
      ],
      [
        "Investor.gov — How stock markets work",
        "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Underwriting & market structure",
    "bullets": [
      "<b>Primary market</b>: issuer receives the proceeds (IPOs, follow-ons). <b>Secondary market</b>: investors trade with each other.",
      "<b>Firm commitment</b>: underwriter buys the whole issue and bears the risk. <b>Best efforts</b>: agent only; unsold shares go back. <b>All-or-none</b>: cancelled unless fully sold.",
      "Spread = manager's fee + underwriting fee + <b>selling concession</b> (largest piece).",
      "<b>Exchanges</b> (NYSE, Nasdaq) vs <b>OTC</b> (dealer network, negotiated). Third market = listed stock traded OTC; fourth market = institutions trading directly (ECNs).",
      "<b>Broker</b> = agent, charges a commission. <b>Dealer</b> = principal, charges a markup/markdown. A firm cannot be both on the same trade."
    ],
    "trap": "Stabilization bids must be at or below the public offering price — never above.",
    "fact": "FINRA's 5% markup policy is a guideline, not a hard rule; fairness depends on all the facts.",
    "src": [
      [
        "FINRA Rule 2121 — Fair prices and commissions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2121"
      ],
      [
        "17 CFR 242.104 — Stabilization (Reg M)",
        "https://www.ecfr.gov/current/title-17/section-242.104"
      ],
      [
        "Investor.gov — Laws that govern the securities industry",
        "https://www.investor.gov/introduction-investing/investing-basics/role-sec/laws-govern-securities-industry"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Secondary markets: exchanges, OTC, third & fourth",
    "bullets": [
      "<b>Exchanges</b> are auction markets with listing standards — some with a physical floor (NYSE designated market makers) and some fully electronic. Nasdaq is an exchange.",
      "<b>Over-the-counter (OTC)</b>: a negotiated dealer market. Unlisted stocks and most bonds (corporate, municipal, government) trade OTC.",
      "<b>Third market</b>: exchange-listed stocks traded OTC by non-exchange-member broker-dealers.",
      "<b>Fourth market</b>: institutions trading directly with each other through electronic networks (ECNs/alternative trading systems), without a dealer in the middle.",
      "<b>Firm quote</b> = the dealer must trade at least one normal unit at that price. <b>Subject/nominal quote</b> = for information only."
    ],
    "trap": "Nasdaq is a stock exchange — not \"the OTC market\".",
    "fact": "Most bond trading happens OTC, not on exchanges.",
    "src": [
      [
        "Investor.gov — How stock markets work",
        "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work"
      ],
      [
        "FINRA Rule 5210 — Publication of transactions and quotations",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5210"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Types of offerings & shelf registration",
    "bullets": [
      "<b>Public offering</b>: registered with the SEC and sold with a prospectus. <b>Private offering</b>: exempt (e.g., Reg D); buyers get restricted securities.",
      "<b>IPO</b>: a company's first sale of stock to the public.",
      "<b>Follow-on offering</b>: an already-public company sells NEW shares — dilutive, and the company gets the money.",
      "<b>Secondary offering</b>: existing holders (often insiders or early investors) sell their shares — the SELLERS get the money and no new shares are created. A \"combined\" offering does both.",
      "<b>Shelf registration</b> (Rule 415): register now and sell in pieces as needed, generally over up to 3 years.",
      "<b>Rule 145</b>: securities offered in mergers, reclassifications and certain asset transfers are treated as sales requiring registration. <b>Rule 144A</b>: restricted securities may be resold to qualified institutional buyers."
    ],
    "trap": "In a secondary offering the company receives nothing — the selling shareholders do.",
    "fact": "Shelf registration lets an issuer move quickly when market conditions look good.",
    "src": [
      [
        "Investor.gov — Initial public offering",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/initial-public-offering-ipo"
      ],
      [
        "17 CFR 230.415 — Shelf registration",
        "https://www.ecfr.gov/current/title-17/section-230.415"
      ],
      [
        "17 CFR 230.145 — Mergers & reclassifications",
        "https://www.ecfr.gov/current/title-17/section-230.145"
      ],
      [
        "17 CFR 230.144A — Resales to QIBs",
        "https://www.ecfr.gov/current/title-17/section-230.144A"
      ]
    ]
  },
  {
    "s": 1,
    "title": "The Securities Act of 1933 — the \"paper act\"",
    "bullets": [
      "Governs the <b>primary market</b>: new issues must be registered with the SEC and sold with a prospectus.",
      "Registration statement filed → <b>cooling-off period</b> of at least 20 days.",
      "During cooling-off: preliminary prospectus (\"<b>red herring</b>\", no final price), non-binding <b>indications of interest</b>. No sales, no binding orders.",
      "Final prospectus delivered no later than with the confirmation.",
      "<b>Exempt securities</b>: U.S. government, municipal, bank securities, commercial paper ≤ 270 days, nonprofit issues."
    ],
    "trap": "SEC \"effectiveness\" is not approval. A prospectus must say the SEC has not approved or disapproved the securities.",
    "fact": "The 1934 Act governs the secondary market (trading), created the SEC, and regulates broker-dealers, margin and insider trading.",
    "src": [
      [
        "Investor.gov — Laws that govern the securities industry",
        "https://www.investor.gov/introduction-investing/investing-basics/role-sec/laws-govern-securities-industry"
      ],
      [
        "17 CFR 230.430 — Preliminary prospectus",
        "https://www.ecfr.gov/current/title-17/section-230.430"
      ],
      [
        "17 CFR 230.134 — Communications not deemed a prospectus",
        "https://www.ecfr.gov/current/title-17/section-230.134"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Offering documents & blue-sky registration",
    "bullets": [
      "<b>Statutory prospectus</b> (Securities Act §10): full disclosure for a registered offering. A <b>summary prospectus</b> (Rule 431) is a shorter version.",
      "<b>Free writing prospectus</b> (Rules 164/433): a written offer other than the statutory prospectus, used after filing; it carries a legend and is filed with the SEC.",
      "<b>Official statement</b>: the disclosure document for a municipal bond issue (munis are exempt from SEC registration). Underwriters deliver it to customers (MSRB G-32); it is posted on EMMA.",
      "<b>Program disclosure document</b>: the offering document for a 529 plan.",
      "<b>Blue-sky laws</b>: states require non-exempt offerings to be registered in the state — by <b>coordination</b> (alongside SEC registration), <b>qualification</b> (state only) or <b>notice filing</b> for federally covered securities such as listed stocks and mutual funds.",
      "FINRA Rule 2266: firms tell customers how to reach SIPC, in writing, at account opening and at least annually. Rule 2269: firms disclose any participation or interest in a distribution."
    ],
    "trap": "Municipal bonds use an official statement, not a prospectus; 529 plans use a program disclosure document.",
    "fact": "SEC \"effectiveness\" is not approval — and state registration is a separate requirement.",
    "src": [
      [
        "17 CFR 230.431 — Summary prospectuses",
        "https://www.ecfr.gov/current/title-17/section-230.431"
      ],
      [
        "17 CFR 230.433 — Free writing prospectuses",
        "https://www.ecfr.gov/current/title-17/section-230.433"
      ],
      [
        "MSRB Rule G-32 — Primary offering disclosures",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-32"
      ],
      [
        "MSRB EMMA",
        "https://emma.msrb.org/"
      ],
      [
        "Investor.gov — Blue sky laws",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/blue-sky-laws"
      ],
      [
        "FINRA Rule 2266 — SIPC information",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2266"
      ],
      [
        "FINRA Rule 2269 — Disclosure of participation in distributions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2269"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Exempt offerings: Reg D, Reg A+, Rule 147, Rule 144",
    "bullets": [
      "<b>Reg D 506(b)</b>: private placement; unlimited accredited investors + up to 35 non-accredited; no general solicitation. Form D within 15 days after first sale.",
      "<b>506(c)</b>: general solicitation allowed, but every purchaser must be accredited and verified.",
      "<b>Accredited individual</b>: net worth > $1M excluding primary residence, or income > $200,000 ($300,000 joint) in each of the last 2 years.",
      "<b>Reg A+</b>: Tier 1 up to $20M, Tier 2 up to $75M in 12 months.",
      "<b>Rule 147</b>: intrastate offerings — issuer and purchasers in one state.",
      "<b>Rule 144</b>: resale of restricted and control stock — 6-month holding period (reporting issuer); volume cap = greater of 1% of outstanding shares or average weekly volume of the prior 4 weeks; file Form 144 if > 5,000 shares or > $50,000 in 90 days."
    ],
    "formula": "Rule 144 volume limit (per 90 days) = MAX( 1% of shares outstanding , avg weekly trading volume over prior 4 weeks )",
    "trap": "Control stock has no holding period — only restricted stock does. Both are subject to volume limits for affiliates.",
    "fact": "Rule 144A lets restricted securities trade among Qualified Institutional Buyers (QIBs, generally $100M+ in securities).",
    "src": [
      [
        "SEC — Exempt offerings",
        "https://www.sec.gov/resources-small-businesses/exempt-offerings"
      ],
      [
        "17 CFR 230.506 — Reg D 506(b)/(c)",
        "https://www.ecfr.gov/current/title-17/section-230.506"
      ],
      [
        "17 CFR 230.501 — Accredited investor definition",
        "https://www.ecfr.gov/current/title-17/section-230.501"
      ],
      [
        "Investor.gov — Accredited investors bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/updated-3"
      ],
      [
        "17 CFR 230.251 — Regulation A",
        "https://www.ecfr.gov/current/title-17/section-230.251"
      ],
      [
        "17 CFR 230.147 — Intrastate offerings",
        "https://www.ecfr.gov/current/title-17/section-230.147"
      ],
      [
        "SEC — Rule 144: selling restricted and control securities",
        "https://www.sec.gov/reportspubs/investor-publications/investorpubsrule144htm.html"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Municipal underwriting",
    "bullets": [
      "<b>Competitive sale</b>: underwriters submit sealed bids and the issuer awards the deal to the lowest interest cost — typical for GO bonds.",
      "<b>Negotiated sale</b>: the issuer picks an underwriter and negotiates terms — typical for revenue bonds.",
      "Syndicates: <b>Western (divided)</b> account — each member is liable only for its own allocation. <b>Eastern (undivided)</b> account — members share liability for unsold bonds in proportion to their participation.",
      "MSRB G-11 requires written syndicate practices, including the <b>priority of orders</b> (presale, group net, designated, member).",
      "MSRB G-34: new issues get CUSIP numbers. SEC Rule 15c2-12: underwriters must make sure issuers agree to provide continuing disclosure, which is posted on <b>EMMA</b>."
    ],
    "trap": "Western = divided liability (only your own bonds). Eastern = undivided (share of whatever is left unsold).",
    "fact": "GO bonds are usually sold competitively; revenue bonds are usually negotiated.",
    "src": [
      [
        "MSRB Rule G-11 — Primary offering practices",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-11"
      ],
      [
        "MSRB Rule G-34 — CUSIP numbers",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-34"
      ],
      [
        "17 CFR 240.15c2-12 — Municipal securities disclosure",
        "https://www.ecfr.gov/current/title-17/section-240.15c2-12"
      ],
      [
        "MSRB EMMA",
        "https://emma.msrb.org/"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Monetary vs fiscal policy",
    "bullets": [
      "<b>Monetary policy</b> = Federal Reserve (FOMC). Dual mandate: maximum employment and stable prices.",
      "Tools: <b>open market operations</b> (most used), the discount rate, interest on reserve balances, reserve requirements (0% since 2020).",
      "<b>Easing</b>: Fed buys securities → money supply ↑ → rates ↓. <b>Tightening</b>: Fed sells → money supply ↓ → rates ↑.",
      "<b>Fiscal policy</b> = Congress and the President: taxes and government spending.",
      "Rates: <b>fed funds</b> (bank-to-bank overnight), <b>discount rate</b> (Fed lending to banks), <b>prime rate</b> (banks to best corporate customers).",
      "An <b>inverted yield curve</b> (short rates above long rates) has often preceded recessions."
    ],
    "trap": "The Fed does not control taxes or government spending — that is fiscal policy.",
    "fact": "The Fed sets the discount rate directly; the fed funds rate is a target it steers the market toward.",
    "src": [
      [
        "Federal Reserve — Monetary policy",
        "https://www.federalreserve.gov/monetarypolicy.htm"
      ],
      [
        "Federal Reserve — Open market operations",
        "https://www.federalreserve.gov/monetarypolicy/openmarket.htm"
      ],
      [
        "Federal Reserve — Discount window",
        "https://www.federalreserve.gov/monetarypolicy/discountrate.htm"
      ],
      [
        "Federal Reserve — Reserve requirements",
        "https://www.federalreserve.gov/monetarypolicy/reservereq.htm"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Economic indicators & the business cycle",
    "bullets": [
      "Cycle: <b>expansion → peak → contraction → trough</b>. Recession is commonly described as 2 consecutive quarters of declining real GDP.",
      "<b>Leading</b>: stock prices, building permits, new orders, average weekly hours, money supply (M2).",
      "<b>Coincident</b>: GDP, industrial production, personal income, nonfarm payrolls.",
      "<b>Lagging</b>: average duration of unemployment, CPI changes in services, prime rate, unit labor costs.",
      "<b>CPI</b> measures inflation for consumers. Deflation = falling prices; stagflation = inflation + high unemployment.",
      "<b>Defensive</b> industries (utilities, staples, healthcare) hold up in downturns; <b>cyclical</b> ones (autos, housing, durable goods) swing with the economy."
    ],
    "trap": "GDP is coincident, not leading. Stock market prices are a leading indicator.",
    "fact": "A weaker U.S. dollar helps U.S. exporters; a stronger dollar helps U.S. importers and tourists going abroad.",
    "src": [
      [
        "Conference Board — U.S. leading indicators",
        "https://www.conference-board.org/topics/us-leading-indicators/"
      ],
      [
        "BEA — Gross domestic product",
        "https://www.bea.gov/data/gdp/gross-domestic-product"
      ],
      [
        "BLS — Consumer Price Index",
        "https://www.bls.gov/cpi/"
      ],
      [
        "NBER — Business cycle dating",
        "https://www.nber.org/research/business-cycle-dating"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Financial statements",
    "bullets": [
      "<b>Balance sheet</b>: a snapshot at one point in time — assets, liabilities and shareholders' equity.",
      "<b>Income statement</b>: results over a period — revenue minus expenses equals net income.",
      "<b>Cash flow statement</b>: cash from operating, investing and financing activities.",
      "<b>Working capital</b> (current assets − current liabilities) measures short-term liquidity; the current ratio is current assets ÷ current liabilities.",
      "Public companies file an audited annual report (<b>10-K</b>) and quarterly reports (<b>10-Q</b>) with the SEC."
    ],
    "formula": "Assets = Liabilities + Shareholders' equity\nEPS = (Net income − Preferred dividends) ÷ Common shares outstanding\nWorking capital = Current assets − Current liabilities",
    "trap": "Balance sheet = a single date. Income statement = a period of time.",
    "fact": "Preferred dividends are subtracted before computing earnings per common share.",
    "src": [
      [
        "Investor.gov — Form 10-K",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/form-10-k"
      ],
      [
        "SEC — Beginners' guide to financial statements",
        "https://www.sec.gov/about/reports-publications/beginners-guide-financial-statements"
      ]
    ]
  },
  {
    "s": 1,
    "title": "Economic theories & international factors",
    "bullets": [
      "<b>Keynesian</b>: government spending and taxes (fiscal policy) should actively manage demand to smooth the business cycle.",
      "<b>Monetarist</b>: the money supply is the main driver of economic activity and inflation, so steady, controlled money growth is key.",
      "<b>GDP</b> = output produced <u>inside</u> U.S. borders. <b>GNP</b> = output produced by U.S. residents and companies <u>anywhere</u>.",
      "<b>Balance of payments</b>: the record of all transactions with other countries — the current account (trade in goods and services, income) and the financial account. A trade deficit means imports exceed exports.",
      "<b>Exchange rates</b>: a stronger dollar makes imports cheaper and U.S. exports more expensive, and can cut the dollar value of multinationals' foreign earnings and ADR prices."
    ],
    "trap": "GDP is about WHERE output is produced; GNP is about WHO produces it.",
    "fact": "Monetarists focus on money supply; Keynesians on government spending and taxation.",
    "src": [
      [
        "BEA — Gross domestic product",
        "https://www.bea.gov/data/gdp/gross-domestic-product"
      ],
      [
        "BEA — International transactions",
        "https://www.bea.gov/data/intl-trade-investment/international-transactions"
      ],
      [
        "Federal Reserve — FOMC",
        "https://www.federalreserve.gov/monetarypolicy/fomc.htm"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Equities: common, preferred, ADRs",
    "bullets": [
      "<b>Common stock</b>: ownership, voting rights (statutory or cumulative), residual claim — last in liquidation.",
      "<b>Cumulative voting</b> helps minority shareholders: votes = shares × seats, can be spread or concentrated.",
      "<b>Preferred stock</b>: fixed dividend, priority over common, usually no vote. Types: cumulative, participating, convertible, callable.",
      "Preferred prices move like bonds — inversely with interest rates.",
      "<b>ADRs</b>: receipts for foreign shares held by a U.S. bank; trade in U.S. dollars; carry <b>currency risk</b>."
    ],
    "trap": "Cumulative preferred: missed dividends (arrears) must be paid before any common dividend.",
    "fact": "Liquidation order: secured creditors → unsecured (debentures) → subordinated debt → preferred → common.",
    "src": [
      [
        "Investor.gov — Stocks",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
      ],
      [
        "Investor.gov — American Depositary Receipts",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/american-depositary-receipts-adrs"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Shareholder rights & corporate capital",
    "bullets": [
      "<b>Limited liability</b>: a stockholder can lose only what they invested.",
      "Rights: vote (statutory or cumulative), receive declared dividends, <b>preemptive rights</b> to keep their percentage, inspect certain records, receive annual reports, and a residual claim in liquidation.",
      "<b>Authorized</b> → <b>issued</b> → <b>outstanding</b>. <b>Treasury stock</b> = shares issued and then bought back: no vote, no dividends.",
      "<b>Buybacks</b> reduce shares outstanding and can lift EPS. SEC Rule 10b-18 gives issuers a safe harbor from manipulation claims if they follow timing, price, volume and single-broker conditions.",
      "<b>Control stock</b> (held by affiliates — officers, directors, 10%+ holders) and <b>restricted stock</b> (from private placements) are sold under Rule 144."
    ],
    "formula": "Outstanding shares = Issued shares − Treasury shares\nStatutory voting: 100 shares, 3 seats → up to 100 votes per seat\nCumulative voting: 100 shares, 3 seats → 300 votes, split any way",
    "trap": "Treasury stock has no voting rights and receives no dividends.",
    "fact": "Cumulative voting helps minority shareholders win board seats.",
    "src": [
      [
        "Investor.gov — Stocks",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
      ],
      [
        "17 CFR 240.10b-18 — Issuer repurchases",
        "https://www.ecfr.gov/current/title-17/section-240.10b-18"
      ],
      [
        "SEC — Rule 144",
        "https://www.sec.gov/reportspubs/investor-publications/investorpubsrule144htm.html"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Rights, warrants & the DERP dividend timeline",
    "bullets": [
      "<b>Rights</b>: short-term (weeks), subscription price <u>below</u> market, protect against dilution (preemptive rights).",
      "<b>Warrants</b>: long-term (years), exercise price <u>above</u> market when issued, often attached to bonds as a \"sweetener\".",
      "Dividend timeline — <b>D-E-R-P</b>: <b>D</b>eclaration → <b>E</b>x-date → <b>R</b>ecord → <b>P</b>ayment.",
      "Under T+1 settlement, the <b>ex-date is the same day as the record date</b>.",
      "Buy on or after the ex-date → no dividend. Buy before the ex-date → you get it. Stock price drops by about the dividend on the ex-date."
    ],
    "formula": "DERP:  Declaration  →  Ex-date (= Record date under T+1)  →  Record  →  Payment",
    "trap": "The ex-date is set by FINRA (or the exchange), not the board. The board sets declaration, record and payment dates.",
    "fact": "Cash dividends are taxed in the year received; qualified dividends get long-term capital gains rates.",
    "src": [
      [
        "Investor.gov — Ex-dividend dates",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/ex-dividend-dates-when-are-you-entitled-stock-and"
      ],
      [
        "FINRA Rule 11140 — Ex-dividend transactions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/11140"
      ],
      [
        "Investor.gov — T+1 settlement bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Debt: the bond seesaw",
    "bullets": [
      "Par = $1,000. Price quoted as a % of par (e.g., 98 = $980).",
      "<b>Nominal yield</b> (coupon) is fixed. <b>Current yield</b> = annual interest ÷ market price.",
      "<b>YTM</b> includes the gain/loss to par at maturity. <b>YTC</b> assumes it is called early.",
      "Price and yield move <b>inversely</b>: rates ↑ → bond prices ↓.",
      "Longer maturity and lower coupon = <b>more price sensitivity</b> (interest rate risk).",
      "Zero-coupon bonds: no reinvestment risk, the most interest rate risk."
    ],
    "formula": "Discount (price < par):  NY < CY < YTM < YTC\nPremium  (price > par):  YTC < YTM < CY < NY\nCurrent yield = annual coupon $ ÷ market price",
    "trap": "Premium bond: the coupon is the HIGHEST yield and YTC the LOWEST. Discount bond: exactly reversed.",
    "fact": "Bonds tend to be called when rates fall — that is call risk (and it caps price gains).",
    "src": [
      [
        "Investor.gov — Bonds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds"
      ],
      [
        "FINRA — Bonds",
        "https://www.finra.org/investors/investing/investment-products/bonds"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Bond pricing, yields & accrued interest",
    "bullets": [
      "Prices are quoted as a percent of $1,000 par. <b>Treasury notes and bonds are quoted in 32nds</b>: 99-16 = 99 16/32 = 99.5% = $995.",
      "A <b>basis point</b> is 0.01%; 100 basis points = 1%.",
      "<b>Accrued interest</b>: the buyer pays the seller interest from the last coupon date up to (not including) settlement. Corporate and municipal bonds use a <b>30/360</b> day count; Treasuries use <b>actual/actual</b>.",
      "<b>YTM</b> = total return if held to maturity (coupons plus any gain or loss to par). <b>YTC</b> assumes the bond is called on its call date.",
      "<b>Total return</b> = income plus price change — the fullest measure of performance."
    ],
    "formula": "Treasury 101-08 = 101 8/32 = 101.25% → $1,012.50\n1 basis point = 0.01%   |   50 bp = 0.50%\nCurrent yield = annual interest ÷ market price",
    "trap": "101-08 is not $1,010.80 — the number after the dash is 32nds.",
    "fact": "Longer maturities and lower coupons mean bigger price swings when rates move.",
    "src": [
      [
        "TreasuryDirect — Treasury notes",
        "https://www.treasurydirect.gov/marketable-securities/treasury-notes/"
      ],
      [
        "FINRA — Bonds",
        "https://www.finra.org/investors/investing/investment-products/bonds"
      ],
      [
        "Investor.gov — Bonds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Corporate bonds",
    "bullets": [
      "Terms are set in the <b>indenture</b>, enforced by a <b>trustee</b> for bondholders (Trust Indenture Act of 1939).",
      "<b>Secured</b>: mortgage bonds (real estate), equipment trust certificates (equipment), collateral trust bonds (securities). <b>Unsecured</b>: debentures; <b>subordinated debentures</b> rank last among debt.",
      "<b>Callable</b>: the issuer may redeem early (often after a call-protection period, sometimes at a premium). <b>Puttable</b>: the holder may sell back to the issuer.",
      "<b>Convertible bonds</b> can be exchanged for common stock; they pay lower coupons because of that option.",
      "<b>Sinking fund</b>: the issuer sets money aside to retire bonds over time.",
      "<b>Zero-coupon</b> bonds are bought at a deep discount; the yearly accretion is taxable \"phantom income\" (except on muni zeros)."
    ],
    "formula": "Conversion ratio = $1,000 par ÷ conversion price\nParity price of stock = bond price ÷ conversion ratio",
    "trap": "Bondholders are creditors with priority over all stockholders — but debenture holders are unsecured.",
    "fact": "A $1,000 convertible with a $40 conversion price converts into 25 shares.",
    "src": [
      [
        "Investor.gov — What are corporate bonds?",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/what-are"
      ],
      [
        "Investor.gov — High-yield corporate bonds",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/what-are-0"
      ],
      [
        "FINRA — Bonds",
        "https://www.finra.org/investors/investing/investment-products/bonds"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Credit ratings",
    "bullets": [
      "Rating agencies (S&P, Moody's, Fitch) are registered with the SEC as NRSROs.",
      "<b>Investment grade</b>: BBB− or better (S&P/Fitch), Baa3 or better (Moody's). Anything lower is high-yield (\"junk\").",
      "Lower rating → investors demand a higher yield. A downgrade usually pushes the bond's price down.",
      "Ratings measure <b>credit (default) risk only</b> — not interest rate, liquidity or market risk.",
      "U.S. Treasuries are treated as free of default risk."
    ],
    "trap": "A AAA bond still loses value when interest rates rise — ratings ignore interest rate risk.",
    "fact": "BBB (S&P) / Baa (Moody's) is the lowest investment-grade tier.",
    "src": [
      [
        "Investor.gov — Credit rating agencies",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/credit-rating-agencies"
      ],
      [
        "Investor.gov — High-yield corporate bonds",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/what-are-0"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Treasury, agency & mortgage-backed securities",
    "bullets": [
      "Treasuries are sold at <b>auction</b>: competitive bids name a yield; non-competitive bids accept the auction yield and are guaranteed to be filled (up to a limit).",
      "<b>Treasury receipts</b> are zero-coupon products created by broker-dealers from Treasuries; <b>STRIPS</b> are the Treasury's own zero-coupon program.",
      "<b>Agencies</b>: Ginnie Mae is backed by the full faith and credit of the U.S. government; government-sponsored enterprises (Fannie Mae, Freddie Mac, Federal Home Loan Banks, Farm Credit) are not.",
      "<b>Mortgage-backed pass-throughs</b> pay monthly interest AND principal. <b>Prepayment risk</b> rises when rates fall (homeowners refinance); <b>extension risk</b> rises when rates rise.",
      "<b>CMOs</b> split mortgage cash flows into tranches (PAC = most protected, companion = most volatile). <b>Asset-backed securities</b> are backed by auto loans, credit cards, student loans and the like."
    ],
    "trap": "Mortgage-backed securities return principal every month, so \"yield\" depends heavily on prepayment speed.",
    "fact": "Ginnie Mae is the only mortgage agency with an explicit full-faith-and-credit guarantee.",
    "src": [
      [
        "Investor.gov — Treasury securities",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/treasury-securities"
      ],
      [
        "TreasuryDirect — Treasury bills",
        "https://www.treasurydirect.gov/marketable-securities/treasury-bills/"
      ],
      [
        "Ginnie Mae",
        "https://www.ginniemae.gov/"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Governments, munis & money markets",
    "bullets": [
      "<b>T-bills</b>: ≤ 52 weeks, sold at a discount. <b>T-notes</b>: 2–10 years. <b>T-bonds</b>: 20–30 years. <b>TIPS</b>: principal adjusts with CPI. <b>STRIPS</b>: zero-coupon.",
      "Treasury interest: federally taxable, <b>exempt from state & local</b> tax.",
      "<b>GO bonds</b>: backed by the issuer's taxing power (property taxes); usually need voter approval.",
      "<b>Revenue bonds</b>: backed by the facility's revenue (tolls, fees); feasibility study; no voter approval.",
      "Muni interest is generally exempt from federal tax (and often from state tax in-state).",
      "<b>Money market</b> instruments mature in ≤ 1 year: T-bills, commercial paper (≤ 270 days), banker's acceptances, negotiable CDs, repos."
    ],
    "formula": "Tax-equivalent yield = muni yield ÷ (1 − investor's tax rate)",
    "trap": "Ginnie Mae is backed by the full faith and credit of the U.S.; Fannie Mae and Freddie Mac are not.",
    "fact": "Munis suit investors in high tax brackets; they make little sense inside an IRA (already tax-deferred).",
    "src": [
      [
        "TreasuryDirect — Treasury bills",
        "https://www.treasurydirect.gov/marketable-securities/treasury-bills/"
      ],
      [
        "TreasuryDirect — Treasury notes",
        "https://www.treasurydirect.gov/marketable-securities/treasury-notes/"
      ],
      [
        "TreasuryDirect — TIPS",
        "https://www.treasurydirect.gov/marketable-securities/tips/"
      ],
      [
        "Investor.gov — Municipal bonds overview",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-37"
      ],
      [
        "Ginnie Mae",
        "https://www.ginniemae.gov/"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Municipal securities in depth",
    "bullets": [
      "<b>GO bonds</b>: backed by taxing power (mainly property taxes); voter approval; analyzed on tax base, debt per capita and statutory debt limits.",
      "<b>Revenue bonds</b>: backed by user fees; feasibility study; protective covenants (rate, maintenance, insurance). <b>Industrial development revenue bonds</b> are backed by a corporation's lease payments — the credit is the company, not the town.",
      "Special types: <b>double-barreled</b> (revenue + taxing power), <b>moral obligation</b> (non-binding legislative pledge), <b>special tax</b> and <b>special assessment</b> bonds.",
      "Short-term notes: <b>TANs</b>, <b>RANs</b>, <b>BANs</b>, <b>TRANs</b> (tax, revenue, bond and tax-and-revenue anticipation notes).",
      "<b>Taxable munis</b> exist (e.g., private-activity bonds above federal limits, Build America Bonds).",
      "Muni interest is generally federally tax-exempt and often state-exempt in-state; <b>capital gains are taxable</b>. Prices, official statements and disclosures are on EMMA."
    ],
    "trap": "Only muni INTEREST is tax-exempt — gains from selling a muni at a profit are taxed.",
    "fact": "Anticipation notes are short-term borrowing until taxes, revenues or bond proceeds come in.",
    "src": [
      [
        "Investor.gov — Municipal bonds overview",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-37"
      ],
      [
        "MSRB EMMA",
        "https://emma.msrb.org/"
      ],
      [
        "MSRB",
        "https://www.msrb.org/"
      ]
    ]
  },
  {
    "s": 2,
    "title": "CDs, money market funds & short-term paper",
    "bullets": [
      "<b>Bank CDs</b>: FDIC-insured up to $250,000 per depositor, per bank, per ownership category. <b>Negotiable (jumbo) CDs</b> of $100,000+ trade in the money market.",
      "<b>Brokered CDs</b> are bank CDs sold through broker-dealers: FDIC-insured within limits, but often long-term or callable, and they can lose market value if sold before maturity.",
      "<b>Commercial paper</b>: short-term unsecured corporate debt sold at a discount; ≤ 270 days to stay exempt from registration.",
      "<b>Banker's acceptances</b>: short-term time drafts used to finance international trade. <b>Repos</b>: sale of securities with an agreement to buy them back.",
      "<b>Money market funds</b> invest in short-term debt and try to hold a stable value (government and retail funds aim for $1.00 per share) — but they are not FDIC-insured and can lose money."
    ],
    "trap": "FDIC insurance covers a bank failure — not a price drop when you sell a brokered CD early.",
    "fact": "Money market funds are securities, so SIPC (not FDIC) applies if the brokerage fails.",
    "src": [
      [
        "Investor.gov — Certificates of deposit",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/certificates-deposit-cds"
      ],
      [
        "Investor.gov — Money market funds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-5"
      ],
      [
        "FDIC — Understanding deposit insurance",
        "https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Options: calls & puts",
    "bullets": [
      "One contract = 100 shares. Buyer (long) has the <b>right</b>; seller (writer, short) has the <b>obligation</b>.",
      "<b>Call buyer</b>: bullish — right to buy at the strike. <b>Put buyer</b>: bearish — right to sell at the strike.",
      "<b>Call writer</b>: bearish/neutral, obligated to sell. <b>Put writer</b>: bullish/neutral, obligated to buy.",
      "In-the-money call: market > strike. In-the-money put: market < strike.",
      "The Options Clearing Corporation (OCC) issues and guarantees listed options. The Options Disclosure Document (ODD) must be delivered by account approval.",
      "Listed options settle T+1; equity options are American style (exercise any time)."
    ],
    "formula": "Call breakeven = strike + premium   |   Put breakeven = strike − premium\nLong call: max loss = premium, max gain = unlimited\nLong put:  max loss = premium, max gain = (strike − premium) × 100\nShort (naked) call: max loss = UNLIMITED",
    "trap": "\"Calls up, puts down\" for breakevens — for BOTH buyer and seller of the same option.",
    "fact": "Buyers' max loss is always the premium paid. Sellers' max gain is always the premium received.",
    "src": [
      [
        "Investor.gov — An introduction to options",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-63"
      ],
      [
        "OCC — Options Disclosure Document",
        "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document"
      ],
      [
        "FINRA Rule 2360 — Options",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Options mechanics",
    "bullets": [
      "<b>Equity options</b>: physical delivery of 100 shares; American-style (exercisable any time before expiration).",
      "<b>Index options</b>: <b>cash-settled</b>; many are European-style (exercisable only at expiration).",
      "Standard monthly options expire on the third Friday of the month; weekly expirations also exist.",
      "<b>Exercise and assignment</b>: OCC assigns exercises randomly to clearing firms; firms assign to customers randomly or first-in, first-out.",
      "Opening an options account: principal approval, the <b>ODD</b> delivered by approval, and a signed options agreement within 15 days after approval.",
      "Contracts are adjusted for stock splits and stock dividends."
    ],
    "formula": "Premium = intrinsic value + time value\nCall intrinsic = market − strike (if positive)\nPut intrinsic = strike − market (if positive)",
    "trap": "Index options settle in cash — no shares change hands.",
    "fact": "OCC is the issuer and guarantor of every listed option.",
    "src": [
      [
        "Investor.gov — An introduction to options",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-63"
      ],
      [
        "OCC — Options Disclosure Document",
        "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document"
      ],
      [
        "FINRA Rule 2360 — Options",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Options strategies",
    "bullets": [
      "<b>Long call</b> (bullish) and <b>long put</b> (bearish): risk limited to the premium.",
      "<b>Short call</b> (bearish/neutral) and <b>short put</b> (bullish/neutral): collect the premium, take on the obligation.",
      "<b>Covered call</b> = own the stock + sell a call: earns income, caps the upside, only cushions the downside.",
      "<b>Protective put</b> = own the stock + buy a put: insurance that sets a floor under the position.",
      "<b>Uncovered (naked) writing</b> carries the most risk and needs margin and the highest approval level.",
      "<b>Long straddle</b> = buy a call and a put with the same strike and expiration: profits from a big move in either direction."
    ],
    "formula": "Covered call: breakeven = stock cost − premium\n               max gain = (strike − stock cost + premium) × 100\nProtective put: breakeven = stock cost + premium\n               max loss = (stock cost + premium − strike) × 100",
    "trap": "A covered call writer still loses if the stock collapses — the premium only offsets part of it.",
    "fact": "Hedgers use options to reduce risk; speculators use them for leverage.",
    "src": [
      [
        "Investor.gov — An introduction to options",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-63"
      ],
      [
        "OCC — Options Disclosure Document",
        "https://www.theocc.com/company-information/documents-and-archives/options-disclosure-document"
      ],
      [
        "FINRA Rule 2360 — Options",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Investment companies",
    "bullets": [
      "<b>Open-end (mutual fund)</b>: continuous new shares, bought at POP (NAV + sales charge), redeemed at NAV; forward pricing; redemption within 7 days.",
      "<b>Closed-end</b>: fixed shares, IPO then trades on an exchange at a premium or discount to NAV.",
      "<b>ETFs</b>: trade intraday on an exchange; can be bought on margin and sold short; usually low cost.",
      "<b>UITs</b>: fixed portfolio, no active management, redeemable.",
      "<b>Breakpoints</b>: lower sales charges for larger purchases; <b>letter of intent</b> covers 13 months and may be backdated up to 90 days; rights of accumulation.",
      "A fund can call itself \"no-load\" only if 12b-1 fees are ≤ 0.25%."
    ],
    "trap": "Leveraged and inverse ETFs reset daily — generally unsuitable for buy-and-hold retail investors.",
    "fact": "\"Breakpoint selling\" (keeping a purchase just below a breakpoint) is a prohibited practice.",
    "src": [
      [
        "Investor.gov — Mutual funds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/mutual-funds-and-exchange-traded-funds-etfs/mutual-funds"
      ],
      [
        "FINRA Rule 2341 — Investment company securities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2341"
      ],
      [
        "FINRA Regulatory Notice 09-31 — Leveraged and inverse ETFs",
        "https://www.finra.org/rules-guidance/notices/09-31"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Mutual fund share classes, loads & fees",
    "bullets": [
      "<b>Class A</b>: front-end sales charge (FINRA caps it at 8.5% of POP), breakpoints, lower 12b-1 fees — suits larger, long-term buyers.",
      "<b>Class B</b>: back-end <b>contingent deferred sales charge</b> that declines over several years; converts to A shares.",
      "<b>Class C</b>: level load (ongoing ~1% 12b-1 fee) and usually a small CDSC in year one — suits shorter holding periods.",
      "<b>Expense ratio</b> = management fee + 12b-1 fee + other expenses, deducted from fund assets.",
      "Discounts: <b>breakpoints</b>, <b>rights of accumulation</b> (count existing holdings in the fund family), <b>letter of intent</b> (13 months, backdate up to 90 days). Breakpoint selling is prohibited (Rule 2342).",
      "Disclosures: prospectus/summary prospectus, statement of additional information on request, annual and semiannual reports. Exchanges within a family are at NAV but taxable."
    ],
    "formula": "Sales charge % = (POP − NAV) ÷ POP\nPOP = NAV ÷ (1 − sales charge %)",
    "trap": "The sales charge percentage is figured on the offering price (POP), not on NAV.",
    "fact": "Switching between funds in the same family is a taxable sale, even with no new sales charge.",
    "src": [
      [
        "Investor.gov — Mutual fund classes",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/mutual-fund-classes"
      ],
      [
        "Investor.gov — Mutual fund and ETF fees",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/mutual-fund-fees-and-expenses"
      ],
      [
        "FINRA Rule 2341 — Investment company securities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2341"
      ],
      [
        "FINRA Rule 2342 — Breakpoint sales",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2342"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Exchange-traded products: ETFs & ETNs",
    "bullets": [
      "<b>ETFs</b> are registered investment companies (open-end funds or UITs) whose shares trade on exchanges all day at market prices; authorized participants create and redeem shares, keeping prices close to NAV.",
      "Compared with mutual funds: intraday trading, limit orders, margin and short sales allowed, often lower expenses and more tax-efficient — but investors pay commissions and the bid-ask spread.",
      "<b>Passive</b> (index) funds aim to match a benchmark at low cost; <b>active</b> funds try to beat it and usually charge more.",
      "<b>Leveraged and inverse ETFs</b> reset daily — results over longer periods can differ sharply from the stated multiple.",
      "<b>ETNs</b> are unsecured debt of the issuing bank that promise an index-linked return; they hold no portfolio, carry the issuer's credit risk, and can trade away from their indicative value."
    ],
    "trap": "ETNs carry issuer credit risk; ETFs own the underlying assets.",
    "fact": "Daily-reset leveraged ETFs are generally unsuitable for buy-and-hold retail investors.",
    "src": [
      [
        "Investor.gov — Exchange-traded funds bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-24"
      ],
      [
        "FINRA Regulatory Notice 09-31 — Leveraged and inverse ETFs",
        "https://www.finra.org/rules-guidance/notices/09-31"
      ],
      [
        "Investor.gov — Exchange-traded notes bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-50"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Annuities, REITs, DPPs & other packaged products",
    "bullets": [
      "<b>Variable annuity</b>: insurance + security. Assets in a <b>separate account</b>; the investor bears the investment risk; needs a prospectus and both securities and insurance licenses.",
      "Accumulation units (paying in) → annuity units (paying out). Growth is tax-deferred; earnings taxed as ordinary income on withdrawal; 10% penalty before 59½.",
      "<b>Fixed annuity</b>: insurer's general account, insurer bears the risk — not a security.",
      "<b>REITs</b>: must distribute ≥ 90% of taxable income; pass through income but <u>not</u> losses.",
      "<b>DPPs</b> (limited partnerships): pass through income <u>and losses</u>; illiquid; general partner manages (unlimited liability), limited partners are passive.",
      "<b>ETNs</b>: unsecured debt — carry the issuer's credit risk. <b>CMOs</b>: tranches; PAC tranche has the least prepayment risk."
    ],
    "trap": "REITs ≠ DPPs: only DPPs pass through losses.",
    "fact": "1035 exchanges let annuity/insurance contracts be swapped without current tax.",
    "src": [
      [
        "Investor.gov — Variable annuities",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/annuities/variable-annuities"
      ],
      [
        "FINRA Rule 2330 — Deferred variable annuities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2330"
      ],
      [
        "Investor.gov — REITs",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits"
      ],
      [
        "FINRA Rule 2310 — Direct participation programs",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2310"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Variable annuities in depth",
    "bullets": [
      "Bought with a single or periodic payments; <b>deferred</b> (accumulate first) or <b>immediate</b> (pay out right away).",
      "<b>Accumulation units</b> while paying in; at annuitization they convert to a fixed number of <b>annuity units</b> whose value moves with the separate account versus the <b>AIR</b>.",
      "Payout options: <b>life only</b> (largest check, stops at death), <b>life with period certain</b>, <b>joint and last survivor</b>, <b>unit refund</b>.",
      "Costs: mortality & expense fees, rider fees, and <b>surrender charges</b> that decline over several years.",
      "Tax: growth is deferred; withdrawals are earnings first, taxed as ordinary income, plus 10% penalty before 59½. A <b>1035 exchange</b> swaps contracts without current tax.",
      "FINRA Rule 2330: deferred VA recommendations need a suitability basis and principal review within 7 business days of a complete application."
    ],
    "trap": "Life-only pays the most per month but nothing to heirs — even if the annuitant dies after one check.",
    "fact": "Separate account returns above the AIR raise the next payment; below the AIR lower it.",
    "src": [
      [
        "Investor.gov — Variable annuities",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/variable-annuities"
      ],
      [
        "FINRA Rule 2330 — Deferred variable annuities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2330"
      ]
    ]
  },
  {
    "s": 2,
    "title": "529 plans, LGIPs & ABLE accounts",
    "bullets": [
      "<b>Municipal fund securities</b> (MSRB Rule D-12) include 529 plans, local government investment pools and ABLE programs.",
      "<b>529 savings plans</b> invest in portfolios (market risk). <b>Prepaid tuition plans</b> lock in tuition at today's prices and usually require state residency.",
      "The <b>owner</b> controls the account and can change the <b>beneficiary</b> to another family member.",
      "Contributions are after-tax (no federal deduction); growth and <b>qualified</b> withdrawals are federally tax-free. Starting in 2026, up to $20,000 per year per student can go to K–12 tuition (was $10,000). Non-qualified earnings are taxed plus a 10% penalty.",
      "Plans are <b>direct-sold</b> (no sales charge) or <b>adviser-sold</b> (sales charges). The offering document is the program disclosure document.",
      "<b>LGIPs</b> pool cash for state and local governments — not available to individuals. <b>ABLE accounts</b> are tax-advantaged savings for people whose disability began before age 46 (raised from 26 on January 1, 2026)."
    ],
    "trap": "529 contributions aren't federally deductible (some states offer a state deduction).",
    "fact": "LGIPs serve government entities only.",
    "src": [
      [
        "Investor.gov — Introduction to 529 plans",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/introduction-529-plans-investor-bulletin"
      ],
      [
        "IRS — ABLE accounts",
        "https://www.irs.gov/government-entities/federal-state-local-governments/able-accounts-tax-benefit-for-people-with-disabilities"
      ],
      [
        "IRS — Publication 970 (education benefits)",
        "https://www.irs.gov/publications/p970"
      ],
      [
        "MSRB Rule D-12 — Municipal fund security",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/Definitional/Rule-D-12"
      ],
      [
        "MSRB Rule G-45 — Municipal fund reporting",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-45"
      ]
    ]
  },
  {
    "s": 2,
    "title": "DPPs & REITs in depth",
    "bullets": [
      "<b>Limited partnerships</b>: the general partner manages and has unlimited liability; limited partners are passive with limited liability.",
      "<b>Tenants in common (TIC)</b>: direct fractional ownership of real property, often used for 1031 like-kind exchanges.",
      "DPPs pass through income AND losses (passive losses offset passive income); they are unlisted and generally illiquid. FINRA Rule 2310 covers DPP suitability and disclosure.",
      "<b>REIT types</b>: equity (own property, earn rents), mortgage (hold loans, earn interest), hybrid.",
      "<b>Listed REITs</b> trade on exchanges. <b>Registered non-listed REITs</b> file with the SEC but don't trade — high fees and limited redemptions. <b>Private REITs</b> are exempt offerings, usually for accredited investors.",
      "REITs distribute at least 90% of taxable income, avoiding corporate-level double taxation; their dividends are mostly taxed as ordinary income."
    ],
    "trap": "Non-listed REITs are SEC-registered but NOT exchange-traded — getting out can take years.",
    "fact": "DPPs pass through losses; REITs do not.",
    "src": [
      [
        "FINRA Rule 2310 — Direct participation programs",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2310"
      ],
      [
        "Investor.gov — REITs",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/real-estate-investment-trusts-reits"
      ],
      [
        "Investor.gov — Non-traded REITs bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins-89"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Hedge funds & private equity",
    "bullets": [
      "Private funds sold in exempt offerings, generally only to accredited investors (or higher standards), with high <b>minimum investments</b>.",
      "Usually organized as <b>limited partnerships</b>: the manager is the general partner and investors are limited partners.",
      "Fees: a management fee plus a performance fee (the classic \"2 and 20\").",
      "Hedge funds may use leverage, short selling and derivatives; disclosure is lighter than for mutual funds.",
      "<b>Private equity</b> funds buy whole companies or stakes (buyouts, venture capital) and call investors' committed capital over time.",
      "Both are <b>generally illiquid</b>: lock-up periods, limited redemption windows; private equity commonly runs about a decade."
    ],
    "trap": "\"Hedge\" fund doesn't mean low risk — many are highly leveraged and speculative.",
    "fact": "Illiquidity and high minimums are the key exam features of hedge funds and private equity.",
    "src": [
      [
        "Investor.gov — Hedge funds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/private-investment-funds/hedge-funds"
      ],
      [
        "Investor.gov — Accredited investors",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/accredited-investors"
      ]
    ]
  },
  {
    "s": 2,
    "title": "Investment risks",
    "bullets": [
      "<b>Systematic</b> (market-wide, cannot be diversified away): market risk, interest rate risk, purchasing power (inflation) risk.",
      "<b>Unsystematic</b> (specific to one company or industry, reduced by diversification): business risk, credit/default risk, regulatory risk, political risk.",
      "<b>Liquidity risk</b>: hard to sell without a price concession (DPPs, thinly traded stock).",
      "<b>Reinvestment risk</b>: coupons reinvested at lower rates (none for zeros).",
      "<b>Call risk</b>: issuer redeems when rates fall. <b>Currency risk</b>: foreign investments and ADRs.",
      "<b>Purchasing power risk</b> hits fixed-income investors hardest; common stock is the classic hedge."
    ],
    "trap": "Diversification reduces unsystematic risk only. Market risk remains.",
    "fact": "Beta measures systematic risk: beta 1.0 moves with the market.",
    "src": [
      [
        "Investor.gov — What is risk?",
        "https://www.investor.gov/introduction-investing/investing-basics/what-risk"
      ]
    ]
  },
  {
    "s": 2,
    "title": "More risks & how to manage them",
    "bullets": [
      "<b>Capital risk</b>: losing principal — highest for options, speculative stock and leveraged products.",
      "<b>Prepayment risk</b> (MBS, callable bonds) when rates fall; <b>extension risk</b> when rates rise.",
      "<b>Political</b> and <b>legislative</b> risk, <b>currency</b> risk, <b>liquidity</b> risk.",
      "<b>Diversification</b> across issuers and sectors cuts unsystematic risk; <b>asset allocation</b> spreads money across stocks, bonds and cash.",
      "<b>Rebalancing</b>: periodically sell what has grown and buy what has lagged to restore the target mix.",
      "<b>Hedging</b>: offset risk with another position (e.g., protective puts). <b>Dollar-cost averaging</b>: invest a fixed amount on a schedule, buying more shares when prices are low."
    ],
    "trap": "Diversification can't remove market (systematic) risk; hedging can reduce it, at a cost.",
    "fact": "Rebalancing forces \"sell high, buy low\" discipline.",
    "src": [
      [
        "Investor.gov — Asset allocation & diversification",
        "https://www.investor.gov/introduction-investing/getting-started/asset-allocation"
      ],
      [
        "Investor.gov — Rebalancing",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/rebalancing"
      ],
      [
        "Investor.gov — Dollar cost averaging",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/dollar-cost-averaging"
      ],
      [
        "Investor.gov — What is risk?",
        "https://www.investor.gov/introduction-investing/investing-basics/what-risk"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Order types",
    "bullets": [
      "<b>Market order</b>: executes immediately at the best available price — execution guaranteed, price not.",
      "<b>Buy limit</b>: at or below the limit price. <b>Sell limit</b>: at or above.",
      "<b>Buy stop</b>: placed above the market — protects a short position or catches a breakout.",
      "<b>Sell stop</b>: placed below the market — protects a long position's gain or limits loss.",
      "A stop becomes a <b>market order</b> once triggered; a stop-limit becomes a limit order.",
      "Day orders expire at the close; GTC orders stay open until filled or cancelled."
    ],
    "formula": "Above the market:  Buy STOP  /  Sell LIMIT\nBelow the market:  Sell STOP  /  Buy LIMIT     (\"BLiSS\": Buy Limit, Sell Stop below)",
    "trap": "A stop order does not guarantee the stop price — it executes at the next market price, which may gap.",
    "fact": "Customers buy at the ask (offer) and sell at the bid.",
    "src": [
      [
        "Investor.gov — Types of orders",
        "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Order capacity, solicitation & positions",
    "bullets": [
      "<b>Agency</b> (broker): the firm executes for the customer and charges a commission. <b>Principal</b> (dealer): the firm trades from its own inventory and charges a markup or markdown.",
      "The confirmation discloses the firm's capacity. A firm may not charge both a commission and a markup on the same trade.",
      "Order tickets are marked <b>solicited</b> (rep recommended it) or <b>unsolicited</b> (customer's idea) — mismarking is falsifying records.",
      "<b>Discretionary</b> orders (rep chooses security or amount) need written authority; <b>non-discretionary</b> orders come from the customer.",
      "<b>Long</b> = own it (bullish). <b>Short</b> = sold borrowed shares (bearish). <b>Covered</b> vs <b>naked</b> describes whether an option writer owns the offsetting position."
    ],
    "trap": "Unsolicited trades don't trigger a suitability or Reg BI review — so mismarking them is serious.",
    "fact": "Dealers buy at the bid and sell at the ask; the difference is the spread.",
    "src": [
      [
        "FINRA Rule 2121 — Fair prices and commissions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2121"
      ],
      [
        "FINRA Rule 2232 — Customer confirmations",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2232"
      ],
      [
        "Investor.gov — Types of orders",
        "https://www.investor.gov/introduction-investing/investing-basics/how-stock-markets-work/types-orders"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Best execution & trading ahead",
    "bullets": [
      "<b>Best execution</b> (FINRA 5310, MSRB G-18): use reasonable diligence to find the best market so the customer's price is as favorable as possible.",
      "<b>Interpositioning</b>: putting an unnecessary third party between the customer and the best market — prohibited.",
      "<b>Trading ahead of customer orders</b> (FINRA 5320): a firm holding a customer limit order may not trade for itself at that price or better without filling the customer.",
      "<b>Front running</b> block transactions (5270) and <b>trading ahead of research reports</b> (5280) are prohibited.",
      "<b>Backing away</b>: refusing to honor a firm quote."
    ],
    "trap": "Interpositioning = adding a middleman who makes the customer's price worse.",
    "fact": "Best execution applies whether the firm acts as agent or principal.",
    "src": [
      [
        "FINRA Rule 5310 — Best execution",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5310"
      ],
      [
        "FINRA Rule 5320 — Trading ahead of customer orders",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5320"
      ],
      [
        "FINRA Rule 5280 — Trading ahead of research",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5280"
      ],
      [
        "FINRA Rule 5270 — Front running",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5270"
      ],
      [
        "MSRB Rule G-18 — Best execution",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-18"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Short sales",
    "bullets": [
      "Sell borrowed shares now, buy them back later: profit if the price falls; <b>loss potential is unlimited</b>.",
      "Must be done in a <b>margin account</b>.",
      "<b>Regulation SHO</b>: before a short sale the broker must have reasonable grounds to believe the shares can be borrowed (the \"locate\"); persistent delivery failures must be closed out.",
      "<b>Rule 201 circuit breaker</b>: if a stock drops 10% or more from the prior close, short sales are limited to prices above the national best bid for the rest of that day and the next.",
      "The short seller must pay the lender any dividends paid while the position is open."
    ],
    "trap": "A short seller owes the lender every dividend paid during the short.",
    "fact": "Buy stops above the market protect short positions.",
    "src": [
      [
        "SEC — Key points about Regulation SHO",
        "https://www.sec.gov/investor/pubs/regsho.htm"
      ],
      [
        "17 CFR 242.203 — Locate and delivery",
        "https://www.ecfr.gov/current/title-17/section-242.203"
      ],
      [
        "17 CFR 242.201 — Circuit breaker",
        "https://www.ecfr.gov/current/title-17/section-242.201"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Settlement & payment",
    "bullets": [
      "<b>Regular way = T+1</b> for corporate stocks, corporate bonds, municipal bonds, Treasuries and listed options.",
      "<b>Cash settlement</b>: same day as the trade.",
      "<b>Reg T payment</b> in a cash account: settlement + 2 business days (T+3).",
      "If the customer does not pay, the firm sells out the position and the account is frozen for 90 days.",
      "Confirmations go out at or before completion of the trade (settlement). Account statements at least quarterly."
    ],
    "trap": "\"Free-riding\" = buying and selling before paying in a cash account → 90-day freeze (must pay in full before trading).",
    "fact": "Ex-date = record date because of T+1.",
    "src": [
      [
        "SEC — T+1 settlement rule (2023-29)",
        "https://www.sec.gov/newsroom/press-releases/2023-29"
      ],
      [
        "17 CFR 240.15c6-1 — Settlement cycle",
        "https://www.ecfr.gov/current/title-17/section-240.15c6-1"
      ],
      [
        "Investor.gov — T+1 settlement bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      ],
      [
        "12 CFR 220 — Regulation T",
        "https://www.ecfr.gov/current/title-12/part-220"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Book-entry vs physical delivery",
    "bullets": [
      "<b>Book entry</b>: ownership is recorded electronically — most securities are held at DTC with no certificates.",
      "<b>Street name</b>: the broker-dealer is the registered owner and the customer is the <b>beneficial owner</b>; this makes transfers fast.",
      "Customers can register shares in their own name (Direct Registration System or, rarely, a paper certificate).",
      "Physical certificates must be in <b>good delivery</b> form: properly endorsed, in acceptable denominations, with any needed documents.",
      "Settlement timing: regular way <b>T+1</b> (stocks, corporate and muni bonds, Treasuries, options); cash settlement same day."
    ],
    "trap": "In street name the customer is the beneficial owner, not the owner of record.",
    "fact": "Street name lets the firm forward proxies and dividends to beneficial owners.",
    "src": [
      [
        "DTCC",
        "https://www.dtcc.com/"
      ],
      [
        "17 CFR 240.15c6-1 — Settlement cycle",
        "https://www.ecfr.gov/current/title-17/section-240.15c6-1"
      ],
      [
        "Investor.gov — T+1 settlement bulletin",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/new-t1-settlement-cycle-what-investors-need-know-investor-bulletin"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Investment returns & benchmarks",
    "bullets": [
      "Components of return: interest, dividends (cash or stock), <b>realized</b> gains/losses (sold) and <b>unrealized</b> gains/losses (still held).",
      "<b>Return of capital</b> is not income — it reduces the investor's cost basis.",
      "<b>Total return</b> combines income and price change; it is the fairest way to compare investments.",
      "Measures: current yield, YTM, YTC, total return, basis points.",
      "Benchmarks: <b>S&P 500</b> (500 large companies, market-cap weighted), <b>Dow Jones Industrial Average</b> (30 stocks, price-weighted), <b>Nasdaq Composite</b>, <b>Russell 2000</b> (small caps)."
    ],
    "formula": "Total return = (ending value − beginning value + income) ÷ beginning value",
    "trap": "The Dow is price-weighted; the S&P 500 is market-cap weighted.",
    "fact": "A performance comparison should use a benchmark that matches the investment's style.",
    "src": [
      [
        "Investor.gov — Stocks",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/stocks"
      ],
      [
        "Investor.gov — Bonds",
        "https://www.investor.gov/introduction-investing/investing-basics/investment-products/bonds-or-fixed-income-products/bonds"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Taxes: cost basis, gains & dividends",
    "bullets": [
      "<b>Cost basis</b> = purchase price plus commissions; sale proceeds are reduced by commissions.",
      "<b>Short-term</b> gains (held one year or less) are taxed as ordinary income; <b>long-term</b> gains (more than one year) get lower rates.",
      "<b>Qualified dividends</b> get long-term capital gains rates; other dividends are ordinary income.",
      "<b>Wash sale</b>: a loss is disallowed if substantially identical securities are bought within 30 days before or after the sale; the disallowed loss is added to the new shares' basis.",
      "Net capital losses offset gains, then up to $3,000 a year of ordinary income; the rest carries forward.",
      "Basis methods: FIFO (default), specific identification, average cost (common for mutual funds). Inherited shares get a <b>step-up</b> to date-of-death value; gifted shares keep the donor's basis for gains."
    ],
    "trap": "The wash-sale window is 30 days before AND after the sale.",
    "fact": "Brokers report cost basis to the IRS on Form 1099-B.",
    "src": [
      [
        "IRS — Topic 409: Capital gains and losses",
        "https://www.irs.gov/taxtopics/tc409"
      ],
      [
        "IRS — Topic 703: Basis of assets",
        "https://www.irs.gov/taxtopics/tc703"
      ],
      [
        "IRS — Publication 550",
        "https://www.irs.gov/publications/p550"
      ],
      [
        "Investor.gov — Wash sales",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/wash-sales"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Corporate actions",
    "bullets": [
      "<b>Stock split</b>: more shares at a lower price — total value and total cost basis unchanged. <b>Reverse split</b>: fewer shares at a higher price.",
      "<b>Stock dividend</b>: extra shares, generally not taxed when received; basis is spread over more shares.",
      "<b>Buybacks</b>, <b>tender offers</b> (offer to buy shares at a set price, usually a premium, for a limited time), <b>exchange offers</b> (swap one security for another), <b>rights offerings</b>, and <b>mergers & acquisitions</b> (paid in cash, stock or both).",
      "<b>Mandatory</b> actions (splits, cash mergers) happen automatically; <b>voluntary</b> actions (tender offers, rights) need the holder to respond by a deadline.",
      "Firms must pass on notices and deadlines; option contracts are adjusted for splits."
    ],
    "formula": "2-for-1 split: 100 sh @ $60 → 200 sh @ $30 (value $6,000 both ways)\n1-for-4 reverse: 400 sh @ $2 → 100 sh @ $8\nNew per-share basis = total basis ÷ new share count",
    "trap": "A split changes the number of shares and the price — not the value of the position.",
    "fact": "A tender offer is voluntary: holders choose whether to tender.",
    "src": [
      [
        "Investor.gov — Stock split",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/stock-split"
      ],
      [
        "Investor.gov — Tender offer",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/tender-offer"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Proxies & shareholder voting",
    "bullets": [
      "A <b>proxy</b> lets a shareholder vote without attending the meeting; the <b>proxy statement</b> describes the items to be voted on (Exchange Act Section 14).",
      "For shares in street name, firms forward proxy materials and annual reports to beneficial owners (FINRA Rule 2251); the issuer pays the reasonable costs.",
      "Brokers may vote uninstructed shares only on routine matters — never on director elections or executive pay.",
      "A <b>proxy contest</b> is a fight for board control by soliciting other shareholders' proxies."
    ],
    "trap": "A broker can't vote a customer's uninstructed shares in a director election.",
    "fact": "The issuer, not the customer, reimburses firms for forwarding proxy materials.",
    "src": [
      [
        "Investor.gov — Proxy voting",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/proxy-voting"
      ],
      [
        "FINRA Rule 2251 — Forwarding proxy materials",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2251"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Cash vs margin accounts",
    "bullets": [
      "<b>Cash account</b>: pay in full. No short sales, no writing naked options.",
      "<b>Margin account</b>: borrow from the firm. Signed margin agreement = credit agreement + hypothecation agreement (+ optional loan consent).",
      "<b>Reg T</b> (Federal Reserve) initial requirement: 50%.",
      "<b>FINRA</b> minimum equity to open/trade on margin: $2,000. Long maintenance minimum: 25%.",
      "Equity = long market value − debit balance.",
      "<b>Hypothecation</b> = customer pledges securities to the firm; <b>rehypothecation</b> = firm pledges them to a bank."
    ],
    "formula": "Equity = LMV − DR      Reg T initial = 50% of purchase",
    "trap": "Short sales must be done in a margin account. UGMA/UTMA accounts can never be margin accounts.",
    "fact": "A loan consent (to lend customer shares for short sales) is optional; the hypothecation agreement is required.",
    "src": [
      [
        "12 CFR 220 — Regulation T",
        "https://www.ecfr.gov/current/title-12/part-220"
      ],
      [
        "FINRA Rule 4210 — Margin requirements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4210"
      ],
      [
        "Investor.gov — Margin account",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/margin-account"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Options, discretionary & fee-based accounts",
    "bullets": [
      "<b>Options accounts</b>: approved by a principal at a set trading level; ODD by approval; signed agreement within 15 days.",
      "<b>Discretionary accounts</b>: prior written authorization, principal acceptance and frequent review (Rule 3260). Time-and-price-only discretion lasts one day.",
      "<b>Fee-based</b> accounts charge a percentage of assets; <b>commission</b> accounts charge per trade. Putting a buy-and-hold investor in a fee account can be <b>reverse churning</b>.",
      "<b>Margin</b>: a margin disclosure statement goes to customers before opening and annually (Rule 2264).",
      "<b>Educational accounts</b>: 529 plans, Coverdell ESAs ($2,000/year per beneficiary), UTMA/UGMA custodial accounts."
    ],
    "trap": "A fee-based account can be unsuitable for someone who rarely trades.",
    "fact": "The options agreement may come after approval — the ODD may not.",
    "src": [
      [
        "FINRA Rule 3260 — Discretionary accounts",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3260"
      ],
      [
        "FINRA Rule 2360 — Options",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2360"
      ],
      [
        "FINRA Rule 2264 — Margin disclosure statement",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2264"
      ],
      [
        "IRS — Publication 970 (Coverdell, 529)",
        "https://www.irs.gov/publications/p970"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Account types",
    "bullets": [
      "<b>JTWROS</b>: on death, the survivor takes everything. <b>JTIC</b>: the decedent's share goes to their estate.",
      "<b>UGMA/UTMA</b>: one custodian, one minor; minor's SSN; gifts are irrevocable; no margin; transfers at the age of majority.",
      "<b>Traditional IRA</b>: tax-deferred, often pre-tax; withdrawals taxed as ordinary income; 10% penalty before 59½; RMDs from 73.",
      "<b>Roth IRA</b>: after-tax contributions; qualified withdrawals tax-free (age 59½ + 5 years); no RMDs for the owner.",
      "Contributions require earned income. Rollovers must finish within 60 days; trustee-to-trustee transfers are unlimited.",
      "<b>529 plans</b>: education savings, municipal fund securities; <b>Coverdell ESA</b>: $2,000/year."
    ],
    "trap": "All powers of attorney — even durable — end at death. Executors act on letters testamentary.",
    "fact": "Discretion requires the customer's written authorization; time & price discretion alone is good only for that trading day.",
    "src": [
      [
        "IRS — IRAs",
        "https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras"
      ],
      [
        "IRS — Roth IRAs",
        "https://www.irs.gov/retirement-plans/roth-iras"
      ],
      [
        "IRS — Required minimum distributions",
        "https://www.irs.gov/retirement-plans/retirement-plan-and-ira-required-minimum-distributions-faqs"
      ],
      [
        "IRS — Rollovers",
        "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions"
      ],
      [
        "Investor.gov — Introduction to 529 plans",
        "https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/introduction-529-plans-investor-bulletin"
      ],
      [
        "FINRA Rule 3260 — Discretionary accounts",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3260"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Entity & trust accounts",
    "bullets": [
      "<b>Corporate accounts</b> need a corporate resolution naming who may trade; margin also requires authority in the charter or bylaws.",
      "<b>Partnership accounts</b>: the partnership agreement shows who can act.",
      "<b>Trusts</b>: the trustee trades under the trust agreement. <b>Revocable</b> — the grantor can change it, uses the grantor's SSN and stays in the grantor's estate. <b>Irrevocable</b> — can't be changed, has its own tax ID and is outside the estate.",
      "<b>Estates</b>: the executor needs letters testamentary and a death certificate before acting.",
      "Rule 3250: a firm may carry an account under a number or symbol if the customer signs a written statement of ownership.",
      "Rule 4512 requires each account's name, residence, whether the customer is of legal age, the responsible rep, and a signature of the principal accepting it."
    ],
    "trap": "Irrevocable trust assets leave the grantor's estate; revocable trust assets don't.",
    "fact": "Numbered accounts are allowed — anonymous accounts are not.",
    "src": [
      [
        "FINRA Rule 4512 — Customer account information",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4512"
      ],
      [
        "FINRA Rule 3250 — Designation of accounts",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3250"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Retirement plans",
    "bullets": [
      "<b>Qualified employer plans</b> (ERISA): <b>defined benefit</b> pensions (employer bears investment risk) vs <b>defined contribution</b> plans like 401(k)s (employee bears it).",
      "<b>401(k)</b>: for-profit employers. <b>403(b)</b>: public schools and nonprofits. <b>457(b)</b>: state and local governments — withdrawals after leaving the employer aren't hit with the 10% early penalty.",
      "<b>SEP IRA</b>: employer-only contributions; simple plan for small businesses and the self-employed. <b>SIMPLE IRA</b>: employers with 100 or fewer employees; employee deferrals plus employer contributions.",
      "<b>IRAs</b> need earned income. Traditional deductibility depends on income and workplace-plan coverage; Roth eligibility has income limits; converting to a Roth is taxable.",
      "RMDs generally begin at <b>73</b> (not for Roth IRA owners). Direct rollovers avoid the mandatory 20% withholding on employer-plan distributions."
    ],
    "trap": "Indirect rollovers from an employer plan get 20% withheld — a direct (trustee-to-trustee) rollover avoids it.",
    "fact": "Every IRA contribution requires earned income.",
    "src": [
      [
        "IRS — 401(k) plans",
        "https://www.irs.gov/retirement-plans/401k-plans"
      ],
      [
        "IRS — 403(b) plans",
        "https://www.irs.gov/retirement-plans/irc-403b-tax-sheltered-annuity-plans"
      ],
      [
        "IRS — 457(b) plans",
        "https://www.irs.gov/retirement-plans/irc-457b-deferred-compensation-plans"
      ],
      [
        "IRS — SEP plans",
        "https://www.irs.gov/retirement-plans/plan-sponsor/simplified-employee-pension-plan-sep"
      ],
      [
        "IRS — SIMPLE IRA plans",
        "https://www.irs.gov/retirement-plans/plan-sponsor/simple-ira-plan"
      ],
      [
        "IRS — Rollovers",
        "https://www.irs.gov/retirement-plans/plan-participant-employee/rollovers-of-retirement-plan-and-ira-distributions"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Anti-money laundering",
    "bullets": [
      "Three stages: <b>placement → layering → integration</b>.",
      "<b>CTR</b>: cash of more than $10,000 in one business day; filed with FinCEN within 15 days.",
      "<b>SAR</b>: suspicious activity of $5,000 or more; filed within 30 days. <b>Never tell the customer</b>.",
      "<b>Structuring</b> (splitting deposits to avoid the CTR) is itself a crime.",
      "<b>CIP</b>: verify name, date of birth, address, ID number. Check the <b>OFAC</b> SDN list.",
      "AML records are kept 5 years. Firms need a written AML program and an AML compliance officer."
    ],
    "trap": "Placement is when cash first enters the system — the stage most likely to trigger a CTR.",
    "fact": "Tipping off a customer that a SAR was filed is prohibited.",
    "src": [
      [
        "FINRA Rule 3310 — AML compliance program",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3310"
      ],
      [
        "FINRA — Anti-money laundering",
        "https://www.finra.org/rules-guidance/key-topics/aml"
      ],
      [
        "31 CFR 1010.311 — Currency transaction reports",
        "https://www.ecfr.gov/current/title-31/section-1010.311"
      ],
      [
        "31 CFR 1023.320 — SARs by broker-dealers",
        "https://www.ecfr.gov/current/title-31/section-1023.320"
      ],
      [
        "OFAC",
        "https://ofac.treasury.gov/"
      ]
    ]
  },
  {
    "s": 3,
    "title": "AML program, FinCEN & OFAC",
    "bullets": [
      "Every firm needs a written <b>AML program</b> (FINRA 3310; USA PATRIOT Act §352): risk-based procedures, independent testing (generally annually), a designated AML compliance officer, ongoing training, and customer due diligence.",
      "<b>Customer Identification Program</b> (PATRIOT Act §326): verify identity and check government lists.",
      "<b>§314(a)</b>: FinCEN sends requests and firms must search their records and respond. <b>§314(b)</b>: firms may voluntarily share information with each other.",
      "<b>FinCEN</b>, a Treasury bureau, receives SARs and CTRs.",
      "<b>OFAC</b> keeps the Specially Designated Nationals (SDN) list; matching transactions are blocked or rejected and reported to OFAC.",
      "Red flags: reluctance to give information, structuring, wires with no business purpose, unusual third-party activity."
    ],
    "trap": "OFAC is about sanctions (blocked people and countries) — not cash reporting.",
    "fact": "SARs go to FinCEN; blocked SDN transactions are reported to OFAC.",
    "src": [
      [
        "FINRA Rule 3310 — AML program",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3310"
      ],
      [
        "FINRA — Anti-money laundering",
        "https://www.finra.org/rules-guidance/key-topics/aml"
      ],
      [
        "FinCEN",
        "https://www.fincen.gov/"
      ],
      [
        "OFAC",
        "https://ofac.treasury.gov/"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Know your customer, suitability & Reg BI",
    "bullets": [
      "<b>Know your customer</b> (Rule 2090): know the essential facts about every customer when opening and maintaining the account.",
      "<b>Suitability</b> (Rule 2111): reasonable-basis, customer-specific and quantitative (not excessive trading). Profile: age, other investments, financial situation, tax status, objectives, experience, time horizon, liquidity needs, risk tolerance.",
      "<b>Regulation Best Interest</b>: recommendations to retail customers must be in their best interest — <b>Disclosure</b>, <b>Care</b>, <b>Conflict of interest</b> and <b>Compliance</b> obligations.",
      "<b>Form CRS</b> (relationship summary) explains services, fees and conflicts; delivered at or before the first recommendation or account opening.",
      "A <b>recommendation</b> is a call to action tailored to the customer — including advice about account types and rollovers."
    ],
    "trap": "Suitability and Reg BI apply to recommendations — not to unsolicited trades.",
    "fact": "Reg BI's care obligation includes not recommending excessive trading.",
    "src": [
      [
        "FINRA Rule 2090 — Know your customer",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2090"
      ],
      [
        "FINRA Rule 2111 — Suitability",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2111"
      ],
      [
        "17 CFR 240.15l-1 — Regulation Best Interest",
        "https://www.ecfr.gov/current/title-17/section-240.15l-1"
      ],
      [
        "Investor.gov — Form CRS",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/form-crs"
      ],
      [
        "17 CFR 240.17a-14 — Form CRS",
        "https://www.ecfr.gov/current/title-17/section-240.17a-14"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Books, records & confirmations",
    "bullets": [
      "SEC Rules <b>17a-3</b> (records to make) and <b>17a-4</b> (how long to keep them): blotters and ledgers <b>6 years</b>; order tickets, confirmations and communications generally <b>3 years</b>; account records 6 years after the account closes. The first 2 years must be easily accessible.",
      "Written customer complaints: kept <b>4 years</b> (Rule 4513).",
      "<b>Confirmations</b> (SEC 10b-10, FINRA 2232) go out at or before completion of the trade, showing price, capacity and charges.",
      "<b>Account statements</b> at least quarterly (Rule 2231).",
      "<b>Holding mail</b> (Rule 3150): only on the customer's written instructions; holds over 3 consecutive months need a reason other than convenience; the firm verifies instructions periodically.",
      "Drawing a check on a customer's account needs the customer's written authorization on file (Rule 4514)."
    ],
    "trap": "Communications are kept 3 years; blotters and ledgers 6 years.",
    "fact": "Complaint files are kept 4 years.",
    "src": [
      [
        "17 CFR 240.17a-3 — Records to be made",
        "https://www.ecfr.gov/current/title-17/section-240.17a-3"
      ],
      [
        "17 CFR 240.17a-4 — Records to be preserved",
        "https://www.ecfr.gov/current/title-17/section-240.17a-4"
      ],
      [
        "17 CFR 240.10b-10 — Confirmations",
        "https://www.ecfr.gov/current/title-17/section-240.10b-10"
      ],
      [
        "FINRA Rule 2231 — Account statements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2231"
      ],
      [
        "FINRA Rule 3150 — Holding of customer mail",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3150"
      ],
      [
        "FINRA Rule 4513 — Customer complaints",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4513"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Customer protection, privacy & business continuity",
    "bullets": [
      "<b>SEC Rule 15c3-3</b>: firms must keep possession or control of customers' fully paid and excess-margin securities and hold a reserve for customer cash — customer assets stay separate from the firm's.",
      "<b>Regulation S-P</b>: privacy notice at the start of the relationship; customers may <b>opt out</b> of sharing nonpublic personal information with nonaffiliated third parties; written safeguards.",
      "Nonpublic personal information includes Social Security numbers, account numbers and balances.",
      "The 2024 Reg S-P amendments require an incident response program and notice to affected customers within <b>30 days</b> of learning their sensitive information was accessed without authorization.",
      "<b>Business continuity plan</b> (Rule 4370): written, reviewed annually, approved by senior management; emergency contacts filed with FINRA; a summary given to customers at account opening and on request."
    ],
    "trap": "The Reg S-P opt-out covers sharing with NONaffiliated third parties.",
    "fact": "BCPs must be reviewed and updated at least annually.",
    "src": [
      [
        "17 CFR 240.15c3-3 — Customer protection",
        "https://www.ecfr.gov/current/title-17/section-240.15c3-3"
      ],
      [
        "17 CFR Part 248 — Regulation S-P",
        "https://www.ecfr.gov/current/title-17/part-248"
      ],
      [
        "FINRA Rule 4370 — Business continuity plans",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4370"
      ],
      [
        "FINRA Rule 4330 — Permissible use of customer securities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4330"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Telemarketing & do-not-call",
    "bullets": [
      "Cold calls to residences only between <b>8 a.m. and 9 p.m. local time of the person called</b> (unless there is an established business relationship or consent).",
      "Firms keep a <b>firm-specific do-not-call list</b> and must honor the <b>National Do Not Call Registry</b>, subject to exceptions such as an established business relationship.",
      "Callers must give their name, the firm's name, a phone number or address, and that the call is a sales call; caller ID must be transmitted.",
      "FINRA Rule 3230 and the FTC Telemarketing Sales Rule apply; MSRB G-39 covers municipal dealers.",
      "Communications rules (Rule 2210: retail, correspondence, institutional) apply to everything sent to the public."
    ],
    "trap": "Calling hours are based on the CALLED person's time zone.",
    "fact": "A request to be put on the firm's do-not-call list must be honored.",
    "src": [
      [
        "FINRA Rule 3230 — Telemarketing",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3230"
      ],
      [
        "National Do Not Call Registry",
        "https://www.donotcall.gov/"
      ],
      [
        "FINRA Rule 2210 — Communications with the public",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Prohibited activities",
    "bullets": [
      "<b>Insider trading</b>: trading on material non-public information (MNPI); civil penalty up to 3× the profit made or loss avoided.",
      "<b>Front-running</b>: trading ahead of a known block order.",
      "<b>Churning</b>: excessive trading to generate commissions.",
      "<b>Free-riding</b>: selling before paying in a cash account. <b>Backdating</b>: falsifying records or dates.",
      "<b>Selling away</b>: private securities transactions without written notice to the firm.",
      "Manipulation: <b>marking the close</b>, <b>painting the tape</b>/wash trades, <b>spoofing</b>, pump-and-dump.",
      "Also: guaranteeing against loss, commingling customer and firm funds, unauthorized trading, sharing in accounts without approval."
    ],
    "trap": "Sharing in an account is allowed only with written firm approval and in proportion to the rep's contribution (immediate family excepted).",
    "fact": "Reg BI requires broker-dealers to act in a retail customer's best interest; Form CRS must be delivered.",
    "src": [
      [
        "Investor.gov — Insider trading",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/insider-trading"
      ],
      [
        "17 CFR 240.10b5-1 — Trading on MNPI",
        "https://www.ecfr.gov/current/title-17/section-240.10b5-1"
      ],
      [
        "FINRA Rule 5270 — Front running of block transactions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5270"
      ],
      [
        "Investor.gov — Churning",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/churning"
      ],
      [
        "FINRA Rule 2150 — Improper use of customer funds; guarantees; sharing",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2150"
      ],
      [
        "FINRA Rule 2020 — Manipulative and fraudulent devices",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2020"
      ],
      [
        "17 CFR 240.15l-1 — Regulation Best Interest",
        "https://www.ecfr.gov/current/title-17/section-240.15l-1"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Market manipulation",
    "bullets": [
      "Manipulation = deceiving the market by artificially moving price or volume (Exchange Act §10, Rule 10b-5, FINRA 2020).",
      "<b>Market rumors</b>: spreading false information to move a price. <b>Pump and dump</b>: hype a stock, then sell into the rise.",
      "<b>Marking the open/close</b>: trading at the open or close to set an artificial price. <b>Painting the tape / wash trades</b>: fake volume.",
      "<b>Spoofing/layering</b>: orders entered with no intent to execute. <b>Backing away</b>: refusing a firm quote.",
      "<b>Front running</b>, <b>excessive trading</b> (churning) and <b>free-riding</b> are also on the outline's list.",
      "Paying someone to tout a stock in a publication without disclosure is prohibited (FINRA 5230)."
    ],
    "trap": "Backing away = failing to honor your own firm quote.",
    "fact": "Pump-and-dump schemes often target thinly traded microcap stocks.",
    "src": [
      [
        "FINRA Rule 2020 — Manipulative and fraudulent devices",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2020"
      ],
      [
        "17 CFR 240.10b-5",
        "https://www.ecfr.gov/current/title-17/section-240.10b-5"
      ],
      [
        "Investor.gov — Pump and dump schemes",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/pump-and-dump-schemes"
      ],
      [
        "FINRA Rule 5230 — Payments for publications",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5230"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Insider trading",
    "bullets": [
      "Trading while aware of <b>material nonpublic information</b> (MNPI) in breach of a duty, or tipping others.",
      "<b>Material</b>: a reasonable investor would consider it important (earnings, mergers, major legal or regulatory news). <b>Nonpublic</b>: not broadly released.",
      "Who: insiders (officers, directors, 10%+ holders), temporary insiders (lawyers, accountants, bankers), <b>tippers</b> and <b>tippees</b>, and people who misappropriate information (Rule 10b5-2).",
      "Penalties: civil fines up to 3× the profit made or loss avoided; firms that fail to supervise face their own penalties; criminal fines and prison; traders on the other side can sue (§20A); FINRA bars and expulsions.",
      "Firms need written policies, <b>information barriers</b>, and watch/restricted lists."
    ],
    "trap": "A tippee is liable too if they knew or should have known the tip came from a breach of duty.",
    "fact": "The 3× civil penalty comes from ITSFEA (1988).",
    "src": [
      [
        "Investor.gov — Insider trading",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/insider-trading"
      ],
      [
        "17 CFR 240.10b5-1 — Trading on MNPI",
        "https://www.ecfr.gov/current/title-17/section-240.10b5-1"
      ],
      [
        "17 CFR 240.10b5-2 — Duties of trust or confidence",
        "https://www.ecfr.gov/current/title-17/section-240.10b5-2"
      ]
    ]
  },
  {
    "s": 3,
    "title": "Other prohibited activities",
    "bullets": [
      "<b>IPO restrictions</b> (Rule 5130): restricted persons — broker-dealer personnel and their immediate family — generally can't buy new equity IPOs.",
      "<b>Customer funds</b> (Rule 2150): no improper use, no guarantees against loss, no sharing in accounts without written approval (proportionate to the rep's investment).",
      "<b>Borrowing/lending</b> with customers only as firm procedures allow (Rule 3240). <b>Senior exploitation</b>: firms may place temporary holds (Rule 2165).",
      "<b>Unregistered persons</b> may not solicit or take orders, and firms may not pay them transaction-based compensation (Rule 2040).",
      "<b>Signatures of convenience</b> — signing a customer's name, even with permission — are forgery.",
      "<b>Falsifying or withholding records</b>, backdating, and failing to respond to FINRA information requests (Rule 8210) are serious violations."
    ],
    "trap": "A signature of convenience is a violation even if the customer said it was fine.",
    "fact": "Failing to respond to a Rule 8210 request commonly leads to a bar.",
    "src": [
      [
        "FINRA Rule 5130 — IPO restrictions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/5130"
      ],
      [
        "FINRA Rule 2150 — Customer funds, guarantees, sharing",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2150"
      ],
      [
        "FINRA Rule 3240 — Borrowing and lending",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3240"
      ],
      [
        "FINRA Rule 2165 — Financial exploitation of specified adults",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2165"
      ],
      [
        "FINRA Rule 2040 — Payments to unregistered persons",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2040"
      ],
      [
        "FINRA Rule 4511 — Books and records",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4511"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Registration",
    "bullets": [
      "Anyone doing securities business for a member firm must be registered. Clerical staff need not be.",
      "<b>Form U4</b>: filed by the firm through CRD at hiring; includes fingerprints and disclosure history.",
      "U4 amendments: within 30 days of learning the facts.",
      "<b>Form U5</b>: filed within 30 days of termination; a copy goes to the individual.",
      "SIE results last <b>4 years</b>. A qualification (top-off) exam lapses <b>2 years</b> after leaving.",
      "The SIE alone does not qualify anyone to do business — a representative exam (Series 6, 7, etc.) and firm association are required."
    ],
    "trap": "FINRA keeps jurisdiction over a former registered person for 2 years after the U5.",
    "fact": "Making false statements on a U4 can itself be a statutory disqualification.",
    "src": [
      [
        "FINRA — Registration, exams & CE",
        "https://www.finra.org/registration-exams-ce"
      ],
      [
        "FINRA — SIE exam",
        "https://www.finra.org/registration-exams-ce/qualification-exams/securities-industry-essentials-exam"
      ],
      [
        "FINRA Rule 1210 — Registration requirements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1210"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Registered vs non-registered persons",
    "bullets": [
      "Anyone engaged in the firm's securities or investment banking business must be registered before acting.",
      "Non-registered (clerical/ministerial) staff may NOT solicit accounts or orders, discuss products, accept orders, or receive transaction-based pay.",
      "Firms must investigate applicants before registering them (Rule 3110(e)) — verifying U4 information and reviewing public records.",
      "<b>Fingerprinting</b> (SEC Rule 17f-2) is required for personnel with access to securities, money or original records.",
      "A person subject to a <b>statutory disqualification</b> can associate with a member only if FINRA approves it in an eligibility proceeding.",
      "Letting an unregistered person act as a rep is itself a violation."
    ],
    "trap": "An unregistered assistant can't take an order — even when the rep is out.",
    "fact": "Fingerprints go to the FBI through FINRA for background checks.",
    "src": [
      [
        "FINRA Rule 1210 — Registration requirements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1210"
      ],
      [
        "FINRA Rule 3110 — Supervision",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3110"
      ],
      [
        "17 CFR 240.17f-2 — Fingerprinting",
        "https://www.ecfr.gov/current/title-17/section-240.17f-2"
      ]
    ]
  },
  {
    "s": 4,
    "title": "State registration (blue-sky laws)",
    "bullets": [
      "States regulate securities business under their own laws (many based on the Uniform Securities Act), enforced by each state's securities administrator.",
      "<b>Agents</b> (reps) and <b>broker-dealers</b> must register in each state where they do business, unless exempt.",
      "Securities sold in a state must be registered there, exempt, or federally covered.",
      "<b>NASAA</b> is the association of state securities regulators."
    ],
    "trap": "FINRA registration alone isn't enough — state registration is a separate requirement.",
    "fact": "State administrators can deny, suspend or revoke registrations.",
    "src": [
      [
        "Investor.gov — Blue sky laws",
        "https://www.investor.gov/introduction-investing/investing-basics/glossary/blue-sky-laws"
      ],
      [
        "NASAA",
        "https://www.nasaa.org/"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Continuing education",
    "bullets": [
      "<b>Regulatory Element</b>: every registered person, <b>annually</b> by December 31.",
      "<b>Firm Element</b>: firm-designed training, at least annually, based on a needs analysis.",
      "Missing the Regulatory Element → <b>CE inactive</b>: no securities business, no compensation until completed.",
      "<b>Maintaining Qualifications Program (MQP)</b>: people leaving the industry can keep qualifications up to 5 years by doing annual CE."
    ],
    "trap": "CE inactive does not mean registration is revoked — but the person cannot work or be paid for securities business.",
    "fact": "The SIE itself does not require firm sponsorship.",
    "src": [
      [
        "FINRA — Continuing education",
        "https://www.finra.org/registration-exams-ce/continuing-education"
      ],
      [
        "FINRA — Maintaining Qualifications Program",
        "https://www.finra.org/registration-exams-ce/qualification-exams/mqp"
      ],
      [
        "FINRA Rule 1240 — Continuing education",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1240"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Statutory disqualification & discipline",
    "bullets": [
      "<b>Statutory disqualification</b>: any felony within 10 years; certain misdemeanors (securities, fraud, theft) within 10 years; SRO expulsion; injunctions; false filings.",
      "<b>Code of Procedure</b>: FINRA disciplinary process. Settlement = Letter of Acceptance, Waiver and Consent (<b>AWC</b>).",
      "Appeals: National Adjudicatory Council (NAC) → SEC → federal court.",
      "Sanctions: censure, fine, suspension, expulsion, bar.",
      "<b>Code of Arbitration</b>: disputes; awards final and binding. Member vs member and firm vs associated person are mandatory; customers via their account agreement.",
      "Mediation is non-binding."
    ],
    "trap": "Arbitration awards generally cannot be appealed. Discipline decisions can.",
    "fact": "Under Rule 8210, FINRA can require any member or associated person to provide information or testimony.",
    "src": [
      [
        "FINRA Rule 9216 — AWC procedures",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/9216"
      ],
      [
        "FINRA Rule 8210 — Information requests",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/8210"
      ],
      [
        "FINRA — Arbitration & mediation",
        "https://www.finra.org/arbitration-mediation"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Forms U4/U5 & reportable events",
    "bullets": [
      "U4 disclosure covers criminal matters (felonies; misdemeanors involving investments, fraud, theft and the like), regulatory and civil actions, customer complaints and arbitrations, terminations, and <b>financial events</b> — bankruptcies, compromises with creditors, unsatisfied judgments and liens.",
      "Amend the U4 within <b>30 days</b> of learning of a reportable event.",
      "Filing misleading information or leaving it out violates Rule 1122 and can lead to discipline — even a statutory disqualification.",
      "<b>U5</b>: filed within 30 days of termination with the reason (e.g., discharged, voluntary) and a copy to the individual; amended if new facts appear.",
      "Rule 4530: firms report specified events to FINRA within 30 days and customer-complaint statistics quarterly.",
      "<b>BrokerCheck</b> (Rule 8312) makes registration and disclosure history public. Rule 2263: reps get an arbitration disclosure when signing the U4."
    ],
    "trap": "Bankruptcies, liens and unsatisfied judgments are reportable even though they aren't crimes.",
    "fact": "Investors can look up any rep's disclosures on BrokerCheck.",
    "src": [
      [
        "FINRA Rule 4530 — Reporting requirements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4530"
      ],
      [
        "FINRA Rule 1122 — Misleading registration filings",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/1122"
      ],
      [
        "FINRA Rule 8312 — BrokerCheck disclosure",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/8312"
      ],
      [
        "FINRA BrokerCheck",
        "https://brokercheck.finra.org/"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Customer complaints & red flags",
    "bullets": [
      "A <b>written complaint</b> (including email or other electronic messages) is a grievance alleging wrongdoing. Firms keep a file of them with the action taken for <b>4 years</b> (Rule 4513).",
      "Firms report complaint statistics to FINRA quarterly and certain complaints (e.g., alleging theft or forgery) within 30 days (Rule 4530).",
      "Customer red flags: unusual wire requests, sudden third-party involvement, frequent address changes, signs a senior is being exploited.",
      "Rep red flags: undisclosed outside activities, borrowing from customers, frequent complaints, excessive trading, personal financial trouble."
    ],
    "trap": "An email counts as a written complaint.",
    "fact": "Complaint records are kept 4 years.",
    "src": [
      [
        "FINRA Rule 4513 — Customer complaints",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4513"
      ],
      [
        "FINRA Rule 4530 — Reporting requirements",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/4530"
      ],
      [
        "FINRA Rule 2165 — Financial exploitation of specified adults",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2165"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Employee conduct",
    "bullets": [
      "<b>Rule 3220 gifts</b>: max <b>$300 per person per year</b> to an employee of another firm when related to that person's business (Reg Notice 26-05, effective March 30, 2026). The firm aggregates all gifts and keeps records.",
      "Excluded: de minimis promotional items, personal gifts for life events (weddings, births). Business entertainment is OK if the host attends and it is not lavish.",
      "<b>Rule 3270 outside business activities</b>: prior written notice to the firm.",
      "<b>Rule 3280 private securities transactions</b>: prior written notice; if paid, the firm must approve in writing and supervise.",
      "<b>Rule 3210</b>: an employee opening an account at another firm needs the employer's prior written consent.",
      "<b>MSRB G-37</b>: political contributions up to $250 per election to a candidate the person can vote for; larger ones trigger a 2-year business ban."
    ],
    "trap": "Old $100 gift limit is gone — the SIE now tests $300.",
    "fact": "New Rule 3290 (replacing 3270/3280) was SEC-approved Sept 2026 but is not yet effective — study 3270/3280.",
    "src": [
      [
        "FINRA Regulatory Notice 26-05 — $300 gift limit",
        "https://www.finra.org/rules-guidance/notices/26-05"
      ],
      [
        "FINRA Rule 3220 — Gifts",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3220"
      ],
      [
        "FINRA Rule 3270 — Outside business activities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3270"
      ],
      [
        "FINRA Rule 3280 — Private securities transactions",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3280"
      ],
      [
        "FINRA Rule 3210 — Accounts at other firms",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3210"
      ],
      [
        "MSRB Rule G-37 — Political contributions",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-37"
      ],
      [
        "Morgan Lewis — SEC approves FINRA Rule 3290 (not yet effective)",
        "https://www.morganlewis.com/pubs/2026/10/sec-approves-finra-rule-3290-reshaping-outside-activity-rules-for-broker-dealers"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Gifts, entertainment & non-cash compensation",
    "bullets": [
      "<b>Gifts</b>: up to $300 per person per year to employees of other firms (Rule 3220). MSRB G-20 matches $300 for FINRA-member dealers from June 1, 2026.",
      "<b>Business entertainment</b> (host attends) isn't a gift but must not be so frequent or extensive that it raises questions of propriety.",
      "<b>Non-cash compensation</b> rules cover sales of DPPs (2310), variable contracts (2320), investment company shares (2341) and public offerings (5110).",
      "Generally permitted: gifts within the $300 limit not tied to sales, occasional meals and tickets, and training or education meetings that meet conditions (firm-approved attendance, not conditioned on sales, appropriate location).",
      "Firms keep records of gifts and of non-cash compensation received."
    ],
    "trap": "A trip from a product sponsor for hitting a sales target is prohibited non-cash compensation.",
    "fact": "The $300 limit was raised from $100 effective March 30, 2026.",
    "src": [
      [
        "FINRA Regulatory Notice 26-05",
        "https://www.finra.org/rules-guidance/notices/26-05"
      ],
      [
        "FINRA Rule 3220 — Gifts",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/3220"
      ],
      [
        "FINRA Rule 2341 — Investment company securities",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2341"
      ],
      [
        "MSRB Rule G-20 — Gifts and non-cash compensation",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-20"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Political contributions (MSRB G-37)",
    "bullets": [
      "Applies to municipal finance professionals (MFPs) and the dealers they work for.",
      "An MFP may give up to <b>$250 per election</b> to an issuer official they are <u>entitled to vote for</u>. Larger contributions — or any contribution to an official they can't vote for — trigger a <b>2-year ban</b> on municipal securities business with that issuer.",
      "Dealers report contributions to the MSRB quarterly on Form G-37.",
      "No soliciting or bundling contributions, and no indirect contributions to get around the rule."
    ],
    "trap": "The $250 exception works only if the contributor can vote for the candidate.",
    "fact": "The ban lasts 2 years from the contribution.",
    "src": [
      [
        "MSRB Rule G-37 — Political contributions",
        "https://www.msrb.org/Rules-and-Interpretations/MSRB-Rules/General/Rule-G-37"
      ]
    ]
  },
  {
    "s": 4,
    "title": "Communications with the public (Rule 2210)",
    "bullets": [
      "<b>Correspondence</b>: to 25 or fewer retail investors within 30 days.",
      "<b>Retail communication</b>: to more than 25 retail investors within 30 days — generally needs principal approval before use.",
      "<b>Institutional communication</b>: only to institutional investors.",
      "No promissory or exaggerated claims; no predictions of performance; must be fair and balanced."
    ],
    "trap": "An email to 26 retail customers is a retail communication, not correspondence.",
    "fact": "Communications must be kept per recordkeeping rules and be available for FINRA review.",
    "src": [
      [
        "FINRA Rule 2210 — Communications with the public",
        "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210"
      ],
      [
        "FINRA — Advertising Regulation",
        "https://www.finra.org/about/how-we-operate/advertising-regulation"
      ]
    ]
  }
];

export type Project = {
  id: string;
  title: string;
  category: string;
  tagline: string;
  context: string;
  built: string[];
  stack: string[];
  status?: string;
  where?: string;
  metrics: { value: string; label: string }[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: 'signalos',
    title: 'SignalOS',
    category: 'Political intelligence',
    tagline: 'Inspectable prediction-market intelligence built from public evidence and market data.',
    context: 'Fast-moving markets compress many competing explanations into one price. SignalOS preserves the evidence trail behind its own changing belief.',
    built: [
      'Multi-source news ingestion with explicit source health and fixture fallback behavior.',
      'Market-family contracts, structured evidence updates, and replay without future-signal leakage.',
      'Next.js analyst workspace backed by TypeScript domain modules and a specialized Python API.'
    ],
    stack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Polymarket'],
    status: 'In active development',
    metrics: [
      { value: 'Live', label: 'market monitoring thesis' },
      { value: 'Multi-source', label: 'news and market ingestion' }
    ],
    github: 'https://github.com/ilgazkuscu/SignalOS',
    demo: 'https://signalos-showcase.vercel.app/showcase'
  },
  {
    id: 'cern-atlas',
    title: 'CERN ATLAS Open Data Analysis',
    category: 'Scientific computing',
    tagline: 'Notebook-based Higgs-boson analysis using public ATLAS collision data.',
    context: 'ATLAS Open Data makes real particle-physics analysis reproducible outside the experiment, but event selection and data handling still require careful validation.',
    built: [
      'Explored Higgs-to-diphoton and four-lepton analysis workflows in Python notebooks.',
      'Compared pandas and Awkward Array approaches for columnar event data.',
      'Tested how individual selection requirements affect the resulting distributions.'
    ],
    stack: ['Python', 'Jupyter', 'pandas', 'Awkward Array', 'ATLAS Open Data'],
    where: 'LMU Munich undergraduate research using CERN ATLAS Open Data',
    metrics: [
      { value: 'H→γγ', label: 'diphoton channel explored' },
      { value: 'H→ZZ', label: 'four-lepton channel explored' }
    ],
    github: 'https://github.com/ilgazkuscu/CERN-THESIS'
  },
  {
    id: 'accidents-ml',
    title: 'US Accidents Severity Prediction',
    category: 'DATS 6202 · Group ML Project',
    tagline: 'Severity prediction on imbalanced highway accident data.',
    context: 'US Accidents dataset is large, highly imbalanced, and full of leakage traps.',
    built: [
      'Comparative modeling with XGBoost, Random Forest, MLP, and Logistic Regression.',
      'Principled undersampling for imbalance.',
      'Feature-leakage removal for Duration, End_Time, and high-cardinality categoricals.',
      "Bias checking with KS tests and Cramer's V."
    ],
    stack: ['Python', 'scikit-learn', 'XGBoost', 'pandas'],
    metrics: [
      { value: '4', label: 'model families compared' },
      { value: 'Leakage', label: 'removed before modeling' }
    ],
    github: 'https://github.com/ilgazkuscu/US-Accidents-2016-2023-'
  },
  {
    id: 'accidents-dashboard',
    title: 'US Accidents Visualization & EDA Dashboard',
    category: 'DATS 6401 Final Project',
    tagline: 'End-to-end EDA, PCA, and interactive visualization on highway accident data.',
    context: "Final project for Dr. Reza Jafari's data visualization course.",
    built: [
      'Full EDA pipeline with outlier removal.',
      'Normality testing and PCA.',
      'Interactive Plotly/Dash visualization.'
    ],
    stack: ['Python', 'pandas', 'scikit-learn', 'Plotly', 'Dash'],
    metrics: [
      { value: 'EDA', label: 'from cleaning to exploration' },
      { value: 'Dash', label: 'interactive delivery' }
    ],
    github: 'https://github.com/ilgazkuscu/US-Accidents-2016-2023-'
  },
  {
    id: 'clocka',
    title: 'Clocka',
    category: 'Desktop app',
    tagline: 'A focused, Apple-inspired time tracker for graduate students.',
    context: 'I needed to track time across five course sections without the bloat of existing tools.',
    built: [
      'Cross-platform Electron app.',
      'Per-section journals with weekly and monthly stats.',
      'Dark UI in a copper/amber palette, packaged as a macOS .dmg.'
    ],
    stack: ['Electron', 'React', 'TypeScript'],
    metrics: [
      { value: '5', label: 'course sections tracked' },
      { value: '.dmg', label: 'macOS package' }
    ]
  },
  {
    id: 'polymarket-whale',
    title: 'Polymarket Whale Detector Dashboard',
    category: 'Prediction markets',
    tagline: 'Real-time dashboard surfacing large trades on Polymarket geopolitical markets.',
    context: 'An earlier iteration of the SignalOS thesis, a standalone dashboard before the broader platform.',
    built: [
      'Polling pipeline against Polymarket APIs.',
      'Leaderboard ranking.',
      'Live trade feed.'
    ],
    stack: ['Python', 'FastAPI', 'React', 'Polymarket APIs'],
    metrics: [
      { value: 'Real-time', label: 'trade feed' },
      { value: 'Whales', label: 'ranked by activity' }
    ]
  },
  {
    id: 'gdp-nowcasting',
    title: 'GDP Nowcasting',
    category: 'Macroeconomic forecasting',
    tagline: 'Real-time GDP estimation using 30 macroeconomic indicators.',
    context: 'GDP is reported with a lag; nowcasting closes that gap.',
    built: [
      'ARIMA models on macroeconomic indicators.',
      'ARIMAX models for indicator-augmented estimation.',
      'Real-time GDP estimation workflow.'
    ],
    stack: ['Python', 'statsmodels', 'pandas'],
    metrics: [
      { value: '30', label: 'macroeconomic indicators' },
      { value: 'ARIMA', label: 'and ARIMAX models' }
    ],
    github: 'https://github.com/ilgazkuscu'
  },
  {
    id: 'sports-betting',
    title: 'Sports Betting Edge Detection',
    category: 'Probabilistic modeling',
    tagline: 'Dixon-Coles Poisson model with Kelly criterion staking.',
    context: 'Public sportsbook lines vs. a calibrated probabilistic model.',
    built: [
      'Dixon-Coles bivariate Poisson model for football match outcomes.',
      'Kelly criterion staking layer.',
      'Backtest harness.'
    ],
    stack: ['Python', 'NumPy', 'pandas'],
    metrics: [
      { value: 'Dixon-Coles', label: 'match outcome model' },
      { value: 'Kelly', label: 'staking layer' }
    ]
  },
  {
    id: 'regime-classifier',
    title: 'Financial Regime Classifier',
    category: 'Financial time series',
    tagline: 'HMM-based regime detection for financial time series.',
    context: 'Markets shift between regimes; detection enables adaptive strategies.',
    built: [
      'Hidden Markov Model classifier for regime detection.',
      'Regime-conditional analysis across financial time series.'
    ],
    stack: ['Python', 'hmmlearn', 'pandas'],
    metrics: [
      { value: 'HMM', label: 'regime detection' },
      { value: 'Adaptive', label: 'strategy framing' }
    ]
  },
  {
    id: 'housing-market',
    title: 'Housing Market Analysis',
    category: '300+ Metro Areas',
    tagline: 'Comparative analysis of housing dynamics across US metros.',
    context: 'Cross-metro housing data is fragmented; consolidated analysis reveals patterns.',
    built: [
      'Data consolidation across 300+ US metro areas.',
      'Comparative analysis of housing dynamics.',
      'Visualization for regional pattern discovery.'
    ],
    stack: ['Python', 'pandas', 'visualization'],
    metrics: [
      { value: '300+', label: 'US metro areas' },
      { value: 'Cross-metro', label: 'comparative view' }
    ],
    github: 'https://github.com/ilgazkuscu/housing-price-vs-supply-2024'
  }
];

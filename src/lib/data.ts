export const profile = {
  name: "Surya Teja Mothukuri",
  pronouns: "He/Him",
  title: "Data Scientist & ML Engineer",
  tagline:
    "Building End-to-End ML and GenAI Systems Across Healthcare and Operations",
  bio: `I build ML and GenAI systems that ship — owning the full lifecycle from raw, multi-source data to production-ready models. My work spans classical ML and modern GenAI: demand forecasting ensembles, clinical risk models with calibration-aware thresholding, RAG pipelines, agentic workflows, and LoRA fine-tuned LLMs. I work across the full stack — feature engineering, experiment tracking in MLflow, SHAP-based interpretability, ETL pipelines with dbt, and containerized deployment with Docker. I care about models that don't just perform on paper — they integrate into real workflows, explain their reasoning to non-technical stakeholders, and drive decisions at scale. Whether it's a healthcare system that needs calibrated risk scores or an operations team that needs real-time forecasts, I build for the use case, not just the benchmark.

That approach has delivered measurable results across every role I've held. At Indiana University, an XGBoost + ARIMA demand forecasting pipeline across 10M+ transactions cut procurement spend by 18%, saving ~$1.7M annually — built end-to-end from ETL design to Power BI dashboards adopted by 10+ operational stakeholders. At IU School of Medicine, a clinical ML pipeline across 90k+ surgical encounters achieved AUROC 0.82 with strong calibration (Brier 0.14), with Optuna-tuned thresholding boosting high-risk patient recall by 23% at fixed precision. At TCS, 15 automated Python + PowerShell workflows eliminated 180 staff hours monthly while a GitLab CI/CD pipeline reduced reporting rework by 25%. At Ford, a CycleGAN + ResNet-50 computer vision system hit 0.91 recall across 300k+ production images, cutting false negatives by 50%.`,
  location: "Indianapolis, IN (Open to Relocation)",
  email: "suryamothuk23@gmail.com",
  linkedin: "https://www.linkedin.com/in/surya-mothukuri/",
  github: "https://github.com/suryamothukuri",
};

export const stats = [
  { value: "$1.7M", label: "Annual Savings Delivered" },
  { value: "90k+", label: "Clinical Encounters Modeled" },
  { value: "10M+", label: "Records Processed" },
  { value: "180hrs", label: "Monthly Effort Saved" },
];

export const experiences = [
  {
    title: "Data Scientist - Operations",
    company: "Indiana University Bloomington",
    period: "Oct 2024 – May 2026",
    location: "Bloomington, IN",
    bullets: [
      "Cut forecast error (MAPE) by 80% and procurement spend by 18%, saving ~$1.7M annually, by engineering an XGBoost + ARIMA ensemble for SKU-level demand forecasting with Optuna-tuned hyperparameters, lag/rolling features, and seasonality decomposition across 10M+ transactional records.",
      "Cut data refresh latency by 40% by designing dbt + SQL ETL pipelines with incremental models and schema validation, unifying sales, event, and inventory data into a single analytics-ready layer for real-time BI consumption.",
      "Built 3 Power BI dashboards from scratch with DAX-based KPIs, inventory turnover metrics, and Python-powered anomaly detection — adopted by 10+ operational stakeholders and driving 25% faster procurement decisions.",
      "Engineered a Python + SQL rule-based alerting system with SQL triggers and email notifications for low-stock and abnormal demand patterns, cutting inventory waste by 20% and holding costs by 15%.",
    ],
    tags: ["Python", "SQL", "XGBoost", "ARIMA", "dbt", "Power BI", "ETL", "MLflow", "Optuna"],
    current: false,
  },

  {
    title: "Graduate Associate Instructor – CSCI P556 Applied Machine Learning",
    company: "Indiana University Bloomington",
    period: "Aug 2025 – May 2026",
    location: "Bloomington, IN",
    bullets: [
      "Mentored 200+ students across lab sessions and office hours on ML pipelines, model evaluation, and core ML/DL concepts including supervised learning, cross-validation, XGBoost, and Neural Networks.",
      "Guided practical implementation of algorithms in Python using scikit-learn, PyTorch, and related frameworks.",
    ],
    tags: ["Teaching", "Machine Learning", "Python", "PyTorch", "Scikit-Learn"],
    current: false,
  },

  {
    title: "Data Scientist Intern",
    company: "Indiana University School of Medicine",
    period: "May 2025 – Aug 2025",
    location: "Indianapolis, IN",
    bullets: [
      "Unified 10+ raw EHR exports across 90,000+ surgical encounters into a 200+ feature ICD-labeled delirium dataset, handling missing data, one-hot encoding, VIF-based multicollinearity removal, and L1/L2 feature selection — reducing feature space by 40% without performance loss.",
      "Benchmarked RF and XGBoost in MLflow with stratified CV and held-out testing, achieving AUROC 0.82 with strong calibration (Brier 0.14, slope 0.98) — reporting results via confusion matrices and PR/AUC curves to clinical stakeholders.",
      "Boosted high-risk patient recall by 23% at fixed precision via Optuna TPE Sampler hyperparameter tuning across 50+ stratified K-Fold trials and calibration-aware probability threshold optimization.",
      "Cut model refinement time by 31% by surfacing key delirium risk drivers via SHAP values and Odds Ratios (95% CI), enabling clinician-trusted interpretability across sedation duration, medication categories, and comorbidities.",
    ],
    tags: ["Python", "XGBoost", "MLflow", "SHAP", "Optuna", "EHR", "Healthcare ML", "Feature Engineering"],
    current: false,
  },

  {
    title: "Automation Data Engineer",
    company: "Tata Consultancy Services",
    period: "Oct 2023 – Jul 2024",
    location: "Kolkata, India",
    bullets: [
      "Saved ~180 staff hrs/month by deploying 15 Python + PowerShell workflows via Windows Task Scheduler with automated failure alerting via email notifications and reliability reporting to client management.",
      "Cut dashboard refresh times to under 30 min and compute costs by 33% by re-engineering legacy batch jobs into optimized Snowflake ETL with dbt models for daily ingests.",
      "Reduced reporting rework by 25% by implementing schema validation and exception routing via a GitLab CI/CD pipeline with Git-versioned configurations.",
      "Mitigated 55% of pipeline failures proactively by implementing structured Python logging and exception handling across all 15 automated workflows.",
    ],
    tags: ["Python", "PowerShell", "Snowflake", "dbt", "SQL", "GitLab CI/CD", "ETL", "Automation"],
    current: false,
  },

  {
    title: "Computer Vision Intern",
    company: "Ford Motor Company",
    period: "Jun 2022 – Dec 2022",
    location: "Chennai, India",
    bullets: [
      "Rebalanced class distribution 90:10 to 60:40 across 300k+ images by generating synthetic defects via CycleGAN + OpenCV augmentation, versioned with DVC for reproducibility.",
      "Cut false negatives by 50%, hitting 0.91 recall by fine-tuning ResNet-50 on augmented data with custom minority-class loss functions and defect taxonomy alignment with manufacturing engineers.",
      "Surfaced recurring failure modes via misclassification error analysis, enabling targeted augmentation strategies that directly preceded the final recall improvement.",
    ],
    tags: ["PyTorch", "TensorFlow", "CycleGAN", "ResNet-50", "OpenCV", "Computer Vision", "DVC"],
    current: false,
  },
];

export const education = [
  {
    degree: "Master of Science – Data Science",
    school: "Indiana University Bloomington",
    subtitle: "Luddy School of Informatics, Computing, and Engineering",
    location: "Bloomington, IN",
    logo: "IU",
    logoImage: "/logos/iu.png",
    period: "Aug 2024 – May 2026",
    gpa: "3.9/4.0",
    color: "#dc1f1f",
    skills: ["Applied Machine Learning", "Deep Learning", "NLP", "Data Mining", "Statistical Computing", "Big Data Applications"],
  },
  {
    degree: "Bachelor of Technology and Master of Technology – Electronics and Communication Engineering",
    school: "IIIT Chennai",
    subtitle: "Indian Institute of Information Technology, Design and Manufacturing",
    location: "Chennai, India",
    logo: "IIIT",
    logoImage: "/logos/iiitdm.png",
    period: "Aug 2018 – May 2023",
    gpa: "3.7/4.0",
    color: "#2563eb",
    skills: ["Machine Learning", "Signal Processing", "Computer Vision", "Linear Algebra", "Probability & Statistics"],
  },
];

export const skills = {
  "Programming & Scripting": [
    "Python",
    "SQL",
    "R",
    "Bash",
    "PowerShell",
    "C",
    "VBA (Excel Macros)",
    "MATLAB",
    "DAX",
  ],
  "AI & NLP": [
    "LangChain",
    "RAG Pipelines",
    "Agentic AI",
    "LoRA",
    "LLMs",
    "GPT-4",
    "Transformers",
    "LangGraph",
    "Fine-Tuning",
    "Hugging Face",
    "FAISS",
    "Vector DBs",
    "NLTK",
    "Prompt Engineering",
    "RLHF",
  ],
  "Machine Learning & Modeling": [
    "PyTorch",
    "TensorFlow/Keras",
    "Scikit-Learn",
    "XGBoost",
    "LightGBM",
    "MLflow",
    "Optuna",
    "ARIMA",
    "CNNs",
    "GANs",
    "VAEs",
    "ONNX",
    "Anomaly Detection",
    "Feature Engineering",
    "SHAP",
    "OpenCV",
    "PySpark",
  ],
  "Data Handling & Analysis": [
    "Pandas",
    "NumPy",
    "SciPy",
    "Polars",
    "dbt",
    "Airflow",
    "Databricks",
    "ETL Pipelines",
    "Statistical Modeling",
    "Feature Engineering",
  ],
  "BI & Visualization": [
    "Power BI",
    "Tableau",
    "Data Storytelling",
    "Reporting Automation",
    "KPI Dashboards",
    "DAX",
  ],
  "Databases & Tools": [
    "AWS (EC2, SageMaker, S3)",
    "MySQL",
    "MongoDB",
    "Snowflake",
    "SQLite",
    "Git",
    "Docker",
    "GitLab CI/CD",
    "Advanced Excel",
  ],
};

export const certifications = [
  {
    name: "Oracle Certified - Gen AI Professional",
    issuer: "Oracle",
    date: "2025",
    color: "#F80102",
    icon: "🧠",
  },
  {
    name: "SQL Associate",
    issuer: "Datacamp",
    date: "2025",
    color: "#077d2e",
    icon: "🤖",
  },
  {
    name: "Data Science Certificate",
    issuer: "365 Data Science",
    date: "2024",
    color: "#118ab2",
    icon: "📊",
  },
];


export const projects = [
  {
    title: "Autonomous Multi-Agent Bargain Spotter",
    description:
      "Built a GPT-4 powered multi-agent system using LangChain and FAISS-grounded retrieval to automate deal discovery and real-time offer notifications — improving deal retrieval relevance by 40% and automating 95% of offer notifications.",
    tags: ["GPT-4", "RAG", "LangChain", "FAISS", "Agentic AI", "Python"],
    color: "var(--accent)",
    icon: "🤖",
    github: "https://github.com/suryamothukuri",
    highlights: ["40% relevance improvement", "95% notifications automated", "FAISS vector retrieval"],
    period: "Sep 2025 – Dec 2025",
  },
  {
    title: "Generative AI in Online Discourse",
    description:
      "Analyzed 100k+ Reddit posts using VADER, BERTopic, and custom embeddings to track sentiment and topic shifts around GenAI adoption — improving topic coherence and reducing cluster noise by 22% via an NLTK-based normalization pipeline.",
    tags: ["Python", "BERTopic", "VADER", "NLP", "Custom Embeddings", "NLTK"],
    color: "#7c3aed",
    icon: "💬",
    github: "https://github.com/suryamothukuri/Reddit-Based-Social-Media-Analysis-of-Generative-AI",
    highlights: ["100k+ posts analyzed", "22% noise reduction", "Custom embeddings"],
    period: "Aug 2025 – Dec 2025",
  },
  {
    title: "Etsy Retail Marketing Analysis",
    description:
      "Built a progressive 20-model OLS regression framework on 10,406 Etsy listings to identify demand drivers — combining multi-tier regex feature engineering, VADER sentiment, NRC emotion scores, and VIF diagnostics to achieve R² = 0.148.",
    tags: ["Python", "statsmodels", "VADER", "NLP", "Regression", "Feature Engineering"],
    color: "#f59e0b",
    icon: "🛍️",
    github: "https://github.com/suryamothukuri",
    highlights: ["20-model OLS framework", "R² = 0.148", "10,406 listings analyzed"],
    period: "Jan 2025 – May 2025",
  },
  {
    title: "Loan Repayment Risk Modeling",
    description:
      "Built a machine learning model using multi-source borrower and credit data to predict loan repayment risk and default patterns accurately at scale.",
    github: "https://github.com/suryamothukuri/Loan-Repayment-Risk-Modeling-using-Multi-Source-Data",
    icon: "💳",
    color: "#10b981",
    highlights: [
      "Multi-source data pipeline",
      "Risk prediction",
      "Experiment tracking",
    ],
    tags: [
      "Python",
      "XGBoost",
      "Machine Learning",
      "Risk Modeling",
      "MLflow",
    ],
    period: "2024",
  },
  {
    title: "Spatio-Temporal Analysis of NYC Airbnb Market",
    description:
      "Built a spatio-temporal analysis of NYC Airbnb listings to explore pricing patterns, host behavior, availability, and neighborhood trends across 50,000+ listings.",
    github: "https://github.com/suryamothukuri/Spatio-Temporal-Analysis-and-Visual-Exploration-of-NYC-Airbnb-Market-Dynamics",
    icon: "🏙️",
    color: "#f43f5e",
    highlights: ["Spatial analysis", "Pricing patterns", "Interactive visuals"],
    tags: ["Python", "EDA", "Data Visualization", "Geospatial Analysis"],
    period: "2024",
  },
];
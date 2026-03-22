export const profile = {
  name: "Surya Mothukuri",
  pronouns: "He/Him",
  title: "Data Scientist",
  tagline:
    "Building Intelligent Systems at the Intersection of ML, GenAI, Product Analytics & Data Engineering",
  bio: `Data Scientist and AI Engineer with 3+ years of experience building intelligent data systems across healthcare, operations, and enterprise automation. I specialize in predictive modeling, LLM-powered workflows, and scalable cloud-backed pipelines using Python, SQL, AWS, Snowflake, and modern ML tooling.

I have built production-style datasets across 10M+ records, trained calibrated risk models on 90k+ surgical encounters, and developed enterprise automation workflows that improved refresh speed, reduced manual effort, and strengthened decision support. I am most interested in building systems where data engineering, machine learning, and real-world impact come together.

I enjoy turning messy, large-scale data into usable products, interpretable models, and decision-ready insights. My work spans healthcare ML, demand forecasting, automation, product analytics, and GenAI systems designed for practical, real-world impact.`,
  location: "United States",
  email: "suryamothuk23@gmail.com",
  linkedin: "https://www.linkedin.com/in/surya-teja-mothukuri/",
  github: "https://github.com/suryamothukuri",
};

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "100k+", label: "Clinical Cases" },
  { value: "10M+", label: "Records Processed" },
  { value: "40%", label: "Pipeline Speedup" },
];

export const experiences = [
    {
    title: "Data Analyst - Operations",
    company: "Indiana University Bloomington",
    period: "Oct 2024 – Present",
    location: "Bloomington, IN",
    bullets: [
      "Processed and analyzed 10M+ transactional records using Python, SQL, and Power BI to forecast SKU-level demand and support inventory planning decisions.",
      "Reduced excess procurement by 18%, waste by 20%, and holding costs by 15% by building predictive demand workflows across 500+ SKU segments.",
      "	Developed KPI dashboards, monitoring views, and rule-based alerts that accelerated operational decision-making by 25% and reduced manual reconciliation by 30%.",
      "Built ETL pipelines across sales, event, and inventory data, improving refresh latency by 40% and enabling faster access to trusted operational data.",
      "Packaged validated feature tables, scoring logic, and technical documentation for consumers, improving reproducibility and maintainability for analytics teams.",
      "Improved data quality across operational reporting pipelines by validating joins, resolving missing values, and aligning business rules across sales, event, and inventory datasets.",
      
    ],
    tags: ["Python", "SQL", "Data Pipelines", "Power BI", "ETL", "Demand Forecasting", "Data Analytics"],
    current: true,
  },

  {
    title: "Graduate Associate Instructor - Applied Machine Learning",
    company: "Indiana University Bloomington",
    period: "Aug 2025 – Present",
    location: "Bloomington, IN",
    bullets: [
      "Mentored 200+ students in CSCI-P 556 on machine learning workflows, model evaluation, and statistical reasoning using Python through hands-on technical guidance, problem solving, and clear communication of complex concepts.",
      "Guided students in debugging ML pipelines, interpreting model behavior, and strengthening core concepts for assignments, projects, and capstone work.",
    ],
    tags: ["Teaching", "Machine Learning", "Python", "Mentorship"],
    current: true,
  },

  {
    title: "Graduate Data Scientist Intern",
    company: "Indiana University School of Medicine",
    period: "May 2025 – Aug 2025",
    location: "Indianapolis, IN",
    bullets: [
      "Engineered an EHR pipeline across 90,000+ surgical encounters and unified 10+ clinical extracts into a modeling-ready dataset with 200+ validated features.",
      "Trained and evaluated XGBoost and Random Forest models with cross-validation and calibration analysis, achieving AUROC 0.82 and Brier score 0.14.",
      "Improved high-risk recall by 23% through calibration-aware threshold tuning, strengthening identification of clinically relevant risk cases",
      "Reduced model refinement time by 31% using SHAP, feature diagnostics, and error analysis to improve interpretability and accelerate iteration.",
      "Presented model behavior, risk trends, and actionable recommendations to clinical and research stakeholders, improving analytics handoff speed by 28% and supporting faster decision-ready reporting.",
    ],
    tags: ["Python", "XGBoost","MLflow", "SHAP", "Risk Modeling","Model Evaluation", "Healthcare ML"],
    current: false,
  },
  {
    title: "Intelligent Python Automation Developer",
    company: "Tata Consultancy Services",
    period: "Oct 2023 – Jul 2024",
    location: "Kolkata, India",
    bullets: [
      "Built 15 automation workflows using Python, SQL, and PowerShell, eliminating nearly 180 staff hours/month while improving reporting reliability and insight delivery.",
      "Optimized large-scale data pipelines in Snowflake & SQL, reducing load times to under 30 minutes and lowering compute costs by 33% across analytics environments.",
      "Generated business reports and diagnostic summaries from complex operational datasets using SQL, Python, and AWS S3, improving visibility into root causes and corrective actions for client stakeholders.",
      "Created monitoring views, root-cause summaries, and ad hoc analyses for stakeholders, surfacing failures 50% faster and improving response to operational risks. ",
      "Implemented Git-based testing and release workflows, decreasing reporting rework by 25% and improving consistency of stakeholder-facing analytical products.",
    ],
    tags: ["Python","AWS S3", "PowerShell", "Snowflake", "SQL", "Data Engineering", "Automation"],
    current: false,
  },
  {
    title: "Computer Vision Intern - XR/Vision Team",
    company: "Ford Motor Company",
    period: "Jun 2022 – Dec 2022",
    location: "Chennai, India",
    bullets: [
      "Processed 300k+ manufacturing images and metadata with Python and OpenCV, improving defect class balance from 90:10 to 60:40 for stronger detection workflows.",
      "Built evaluation workflows to identify recurring defect signatures and anomalies, improving traceability of failure modes and supporting more reliable quality decisions. ",
      "Retrained ResNet-based models, achieving 0.91 recall and cutting false negatives by 50%, strengthening automated quality monitoring and reporting outputs.",
      "Built feature extraction and validation workflows with Python and AWS S3, improving traceability of recurring failure patterns by 35% across iterative inspection experiments.",
    ],
    tags: ["Image Processing","Transfer Learning","Defect Detection", "OpenCV", "CycleGAN", "ResNet"],
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
    color: "#dc1f1f",
    skills: ["Usable AI", "Applied Data Science", "Data Analytics", "AI Systems"],
  },
  {
    degree: "Bachelor of Technology and Master of Technology – Electronics and Communication Engineering",
    school: "IIIT Chennai",
    subtitle: "Indian Institute of Information Technology, Design and Manufacturing",
    location: "Chennai, India",
    logo: "IIIT",
    logoImage: "/logos/iiitdm.png",
    period: "Aug 2018 – May 2023",
    color: "#2563eb",
    skills: ["Python", "Machine Learning", "Deep Learning", "Engineering"],
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
    "PostgreSQL",
    "HTML",
    "CSS",
    "Verilog"
  ],
  "AI & NLP": [
    "LangChain",
    "RAG Pipelines",
    "LoRA",
    "LLMs",
    "GPT-4",
    "Transformers",
    "LangGraph",
    "Fine-Tuning",
    "Hugging Face",
    "GANs",
    "VAEs",
    "NLTK",
    "Prompt Engineering",
    "RLHF",
  ],
  "Machine Learning & Modeling": [
    "PyTorch",
    "Tensorflow/Keras",
    "Scikit-Learn",
    "XGBoost",
    "MLFlow",
    "CNNs",
    "Clustering",
    "Contrastive Learning",
    "Anomaly Detection",
    "Time-Series Forecasting",
    "OpenCV",
    "SHAP",
  ],
  "Data Handling & Analysis": [
    "Pandas",
    "NumPy",
    "SciPy",
    "A/B Testing",
    "ETL Pipelines",
    "Risk Analytics",
    "Feature Engineering",
    "Statistical Modeling",
    "Advanced Excel",

  ],
  "BI & Visualization": [
    "Power BI",
    "Tableau",
    "Data Storytelling",
    "Reporting Automation",
    "KPI Dashboards",
    "Looker Studio",
  ],
  "Databases & Tools": [
    "MySQL",
    "MongoDB",
    "Snowflake",
    "AWS S3",
    "DynamoDB",
    "Neo4j",
    "Vector Search",
    "SQLite",
    "Git",
    "Docker",
    "MATLAB",
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
      "RAG-enhanced multi-agent system that automated deal discovery and real-time notifications using GPT-4 based workflows and retrieval-powered reasoning.",
    tags: ["GPT-4", "RAG", "Agents", "Python"],
    color: "var(--accent)",
    icon: "🤖",
    github: "https://github.com/suryamothukuri",
    highlights: ["Multi-agent workflow", "RAG pipeline", "Real-time alerts"],
  },
  {
    title: "Generative AI in Online Discourse",
    description:
      "Analyzed 100k+ Reddit posts and comments using VADER and BERTopic to study sentiment shifts and topic patterns around generative AI adoption.",
    tags: ["Python", "BERTopic", "NLP", "Sentiment Analysis"],
    color: "#7c3aed",
    icon: "💬",
    github: "https://github.com/suryamothukuri/Reddit-Based-Social-Media-Analysis-of-Generative-AI",
    highlights: ["100k+ posts", "Topic modeling", "Sentiment trends"],
  },
 {
  title: "Loan Repayment Risk Modeling using Multi-Source Data",
  description:
  "Built a machine learning model using multi-source borrower and credit data to predict loan repayment risk and default patterns accurately at scale in production.",
  github: "https://github.com/suryamothukuri/Loan-Repayment-Risk-Modeling-using-Multi-Source-Data",
  icon: "💳",
  color: "#f59e0b",
  highlights: [
    "Risk prediction",
    "Multi-source data",
    "Experiment tracking",
  ],
  tags: [
    "Python",
    "Jupyter",
    "Machine Learning",
    "Risk Modeling",
  ],
  },
  {
  title: "Spatio-Temporal Analysis of NYC Airbnb Market Dynamics",
  description:
    "Built a spatio-temporal analysis of NYC Airbnb listings to explore pricing patterns, host behavior, availability, and neighborhood trends.",
  github: "https://github.com/suryamothukuri/Spatio-Temporal-Analysis-and-Visual-Exploration-of-NYC-Airbnb-Market-Dynamics",
  icon: "🏙️",
  color: "#f43f5e",
  highlights: ["Spatial analysis", "Airbnb trends", "Interactive visuals"],
  tags: ["Python", "EDA", "Data Visualization", "Geospatial Analysis"],
  },
];
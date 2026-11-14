import { Code2, Database, Workflow, MonitorSmartphone, BrainCircuit } from "lucide-react";

export const profile = {
  name: "Vithurshajini Arumainayagam",
  shortName: "Vithurshajini",
  role: "Associate Software Engineer",
  location: "Mullaitivu District, Northern Province, Sri Lanka",
  email: "vithursha98@gmail.com",
  // Add your exact profile URLs here before publishing.
  linkedin: "",
  github: "",
};

export const focusAreas = [
  { label: "Full-stack development", icon: Code2 },
  { label: "Enterprise applications", icon: MonitorSmartphone },
  { label: "Workflow & integration", icon: Workflow },
  { label: "Data & problem solving", icon: Database },
];

export const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "PHP", "Python", "C++", "HTML", "CSS"]
  },
  {
    title: "Frameworks & libraries",
    skills: ["Spring Boot", "React", "Angular", "Node.js", "Flask"]
  },
  {
    title: "Databases & APIs",
    skills: ["MySQL", "H2", "REST API integration"]
  },
  {
    title: "Platforms & tools",
    skills: ["Workflow platforms", "Document management platforms", "Git", "Postman", "Maven", "Tomcat", "JasperReports"]
  }
];

export const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Kerk Solution Private Limited",
    period: "Professional experience",
    description: "Contribute to enterprise software development and maintenance, working across user interfaces, backend functionality, API integrations, and application improvements.",
    highlights: [
      "Develop and enhance frontend and backend features for enterprise applications.",
      "Work on API integrations, application troubleshooting, bug fixing, and testing.",
      "Contribute to workflow-oriented and document-management application features.",
      "Collaborate with team members to understand requirements and deliver maintainable solutions."
    ],
    tags: ["Full-stack development", "REST APIs", "Angular", "JavaScript", "Enterprise systems"]
  },
  {
    role: "Intern Associate Software Engineer",
    company: "Code Basys (Pvt.) Ltd.",
    period: "18 Mar 2024 – 30 Sep 2024",
    description: "Completed a six-month industrial training placement, contributing to workflow-based web application development and enterprise software features.",
    highlights: [
      "Developed and enhanced reusable web application widgets and user interface components.",
      "Worked on localization interfaces, workflow design, and API integration.",
      "Contributed to rich-text editing and PDF generation features."
    ],
    tags: ["PHP", "JavaScript", "Workflow development", "API integration", "PDF generation"]
  }
];

export const projects = [
  {
    number: "01",
    title: "Enterprise Application Development",
    category: "Enterprise development",
    type: "Professional experience",
    icon: MonitorSmartphone,
    summary: "Contributions to the development and enhancement of enterprise web applications, with an emphasis on usable interfaces and reliable application behavior.",
    details: [
      "Implemented and refined frontend features based on functional requirements.",
      "Worked with backend services and REST APIs to connect application features.",
      "Investigated issues, fixed defects, and supported testing."
    ],
    stack: ["JavaScript", "Angular", "REST APIs", "HTML", "CSS"]
  },
  {
    number: "02",
    title: "Workflow & Process Automation",
    category: "Workflow solutions",
    type: "Professional experience",
    icon: Workflow,
    summary: "Experience contributing to workflow-oriented applications and process automation features in enterprise environments.",
    details: [
      "Worked on workflow-related user interface components and enhancements.",
      "Contributed to integrating application features with backend services.",
      "Supported workflow configuration, testing, and issue resolution."
    ],
    stack: ["Java", "PHP", "JavaScript", "Workflow platforms", "API integration"]
  },
  {
    number: "03",
    title: "Document Management Solutions",
    category: "Document solutions",
    type: "Professional experience",
    icon: Database,
    summary: "Contributions to document-focused applications, including interface improvements and integration-related development.",
    details: [
      "Worked on document and collection-related user interface enhancements.",
      "Contributed to search, reporting, and document workflow features.",
      "Investigated API response issues and supported integration testing."
    ],
    stack: ["Angular", "TypeScript", "REST APIs", "Frontend", "Backend"]
  },
  {
    number: "04",
    title: "Vegetable Price Prediction",
    category: "Machine learning",
    type: "Academic project",
    icon: BrainCircuit,
    summary: "An academic machine learning project exploring vegetable price prediction using historical daily price-report data.",
    details: [
      "Prepared data based on Central Bank daily price reports from 2018–2022.",
      "Built a Random Forest Regressor model for price prediction.",
      "Used preprocessing and imputation as part of the model workflow."
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Random Forest"]
  }
];

export const education = {
  qualification: "Bachelor of Science in Computer Science",
  institution: "Eastern University, Sri Lanka",
  result: "Second Class Upper Division"
};

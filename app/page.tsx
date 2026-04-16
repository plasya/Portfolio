"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

const featuredProjects = [
  {
    title: "HAI AI Training Agent",
    period: "Analytics + AI System",
    description:
      "A backend-driven AI training assistant that turns workout and recovery data into structured insights using controlled analytics workflows.",
    stack: ["Python", "PostgreSQL", "REST APIs", "Pandas", "LLM Orchestration"],
    tags: ["Current Project"],
    details: [
      "Designed a layered backend architecture with API routing, AI orchestration, analytics execution, and feature-engineered data pipelines.",
      "Implemented an LLM orchestration layer (agent, prompt builder, tool registry) to select and execute controlled analytics functions.",
      "Built analytics workflows using SQL for aggregation and Python (pandas) for computation and metric generation.",
      "Developed feature pipelines (daily, weekly, workout-level) to support efficient querying and structured insights.",
      "Generated training metrics such as TRIMP, ACWR, HRV trends, and fatigue signals from multimodal fitness data.",
    ],
    wip: [
      "RAG-based retrieval of research-backed insights",
      "Muscle group fatigue modeling and imbalance detection",
      "Improved confidence scoring based on data coverage",
      "Real-time integrations (WhatsApp alerts, wearable platforms)",
    ],
    images: [
      "https://raw.githubusercontent.com/plasya/hai-ai-training-agent/main/assets/screenshots/compare_bench.png",
      "https://raw.githubusercontent.com/plasya/hai-ai-training-agent/main/assets/screenshots/compare_followup.png",
      "https://raw.githubusercontent.com/plasya/hai-ai-training-agent/main/assets/screenshots/data_status.png",
      "https://raw.githubusercontent.com/plasya/hai-ai-training-agent/main/assets/screenshots/planner.png",
      "/projects/hai-2.png",
      "/projects/hai-1.png",
      "/projects/hai-3.png",
    ],
    imageCaption:
      "LLM acts as planner and narrator, while analytics functions execute controlled computations on structured fitness data.",
    link: "https://github.com/plasya/hai-ai-training-agent",
  },

  {
    title: "LoreKraft",
    period: "AI-driven game systems",
    description:
      "An AI-driven game backend built at CalHacks using multi-step LLM workflows, retrieval, and persistent context.",
    stack: ["Flask", "LangChain", "MongoDB", "Pinecone"],
    tags: ["CalHacks 11.0!"],
    details: [
      "Built as a hackathon project focused on backend orchestration for dynamic quest generation.",
      "Designed multi-step LLM workflows to generate context-aware narrative and gameplay actions.",
      "Used semantic retrieval and persistent state to maintain continuity across player interactions.",
    ],
    wip: [
      "Expanded gameplay memory and longer-running quest context",
      "Cleaner architecture visualization for portfolio presentation",
    ],
    link: "https://github.com/plasya/LoreKraft",
    images: [
      "/projects/lore-1.png",
      "/projects/lore-2.png",
      "/projects/lore-3.png",
    ],
  },
  {
    title: "Scholarship Management System",
    period: "Spring Boot backend system",
    description:
      "A layered Spring Boot scholarship system supporting onboarding, application workflows, and approval flows across multiple roles.",
    stack: ["Java", "Spring Boot", "Oracle", "JPA/Hibernate", "REST APIs"],
    tags: ["Backend Project"],
    details: [
      "Designed around a layered backend structure with controllers, services, repositories, and domain entities.",
      "Supported separate workflows for students, institutions, and state-level review roles.",
      "Implemented multi-step scholarship application handling across academic, fee, contact, and personal details.",
      "Included approval and rejection flows for institution and SNO-level verification.",
    ],
    wip: [
      "Refreshing the project setup and modernizing the runnable version",
      "Adding updated documentation and cleaner architecture visuals",
      "Capturing API/demo flow for portfolio presentation",
    ],
    link: "https://github.com/veerasai/ScholarshipProjectGladiator.git",
    images: [
      "/projects/sch-1.png",
      "/projects/sch-2.png",
      "/projects/sch-3.png",
    ],
  },
  {
    title: "AI Resume Categorization System",
    period: "Applied ML product",
    description:
      "A scalable pipeline to ingest, classify, and enrich resumes with asynchronous processing and a lightweight evaluation interface.",
    stack: ["Scikit-learn", "Streamlit", "Async jobs"],
    link: "https://github.com/plasya/resume-categorizer-ml-streamlit",
    images: [
      "https://raw.githubusercontent.com/plasya/resume-categorizer-ml-streamlit/main/output.png",
      "https://raw.githubusercontent.com/plasya/resume-categorizer-ml-streamlit/main/upload.png",
    ],
  },
  {
    title: "Loan Application Tracker",
    period: "Backend application platform",
    description:
      "A Spring Boot backend for loan workflow management with structured APIs, transactional flows, and dashboard-oriented user interactions.",
    stack: ["Spring Boot", "JPA", "MySQL", "JWT"],
    link: "https://github.com/plasya/loan-application-tracker",
    images: [
      "https://raw.githubusercontent.com/plasya/loan-application-tracker/main/screenshotss/dashboard.png",
      "https://raw.githubusercontent.com/plasya/loan-application-tracker/main/screenshotss/loandetails.png",
    ],
  },
];

const experience = [
  {
    company: "CrowdDoing (NatureCounter)",
    role: "Software Engineer",
    period: "Aug 2025 - Present",
    summary:
      "Built and scaled Node.js REST APIs for 500+ active users, improving latency and reliability across health-focused workflows.",
    details: [
      "Defined API contracts and structured JSON validation to keep data consistent across backend services and downstream analytics.",
      "Optimized MongoDB aggregation and indexing strategies, reducing average API latency by about 1.2 seconds.",
      "Orchestrated GenAI-powered backend workflows that transformed unstructured inputs into structured outputs consumed by downstream services.",
    ],
  },
  {
    company: "University of California, Riverside",
    role: "Graduate Teaching Assistant",
    period: "Sep 2024 – Mar 2025",
    summary:
      "Mentored students in data structures and concurrency, focusing on debugging, problem-solving, and core system design concepts.",
    details: [
      "Reviewed Java and Python assignments covering data structures and concurrency.",
      "Led debugging sessions and provided technical feedback on code and design approaches.",
      "Guided students on problem-solving strategies and foundational system design concepts.",
    ],
  },
  {
    company: "Center for Environmental Research and Technology (CE-CERT)",
    role: "Software Engineer",
    period: "June 2024 - March 2025",
    summary:
      "Designed AWS-based distributed data pipelines that processed around 2M weekly telemetry records for analytics and ML workflows.",
    details: [
      "Built Python and SQL workflows for ML training data preparation, evaluation pipelines, and signal enrichment.",
      "Applied Spark-based distributed processing patterns to support scalable experimentation in research-driven analytics systems.",
      "Reduced end-to-end processing time by roughly 10 minutes per run while improving downstream usability for researchers.",
    ],
  },
  {
    company: "LTIMindTree (Citi Bank)",
    role: "Software Engineer",
    period: "August 2021 - July 2023",
    summary:
      "Developed backend APIs across 10+ microservices supporting enterprise banking, compliance, and KYC workflows.",
    details: [
      "Led schema evolution and migration for 1.2M+ customer records, aligning transformations with existing enterprise ETL pipelines.",
      "Optimized Oracle PL/SQL, indexing, and batch execution logic to improve runtime efficiency for compliance-driven processing jobs.",
      "Implemented Kafka-based event-driven processing and stabilized downstream data flows through root-cause analysis, CI/CD validation, and regression testing.",
    ],
  },
];

const skillCards = [
  {
    title: "Systems & Architecture",
    items: [
      "Microservices Architecture",
      "REST APIs",
      "Event-Driven / Distributed Systems",
      "LLM-Integrated Backend Workflows",
      "API Contracts & Schema Design",
      "Auth & Security (OAuth2, JWT)",
    ],
  },
  {
    title: "Backend and APIs",
    items: [
      "Node.js / Express",
      "FastAPI / Flask",
      "Spring Boot",
      "Tomcat / Jetty",
      "Maven / Gradle",
      "JPA / Hibernate",
      "SQLAlchemy",
      "OpenAPI / Swagger",
    ],
  },
  {
    title: "AI Integration",
    items: [
      "Generative AI",
      "LangChain",
      "RAG",
      "Prompt Engineering",
      "Vector Databases (FAISS, Pinecone)",
      "Hugging Face",
    ],
  },
  {
    title: "Programming Languages",
    items: ["Java", "Python", "SQL", "TypeScript", "JavaScript", "C/C++"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Oracle", "MySQL", "MongoDB", "Schema Design"],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS (EC2, S3, Lambda, RDS)",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD (GitHub Actions, Jenkins)",
      "Linux",
      "Git",
    ],
  },
  {
    title: "Data & Machine Learning",
    items: [
      "Apache Spark",
      "Hadoop",
      "ETL Pipelines",
      "Batch Processing",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Testing and Tooling",
    items: ["JUnit", "Mockito", "PyTest", "Postman", "Jira", "Confluence"],
  },
];

const certifications = [
  {
    title: "Oracle Certified Professional: Java SE 11",
    issuer: "Oracle",
    logo: "/Oracle.png",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E7064A6F62E74C703FCDD5752C2984D5D86B1C76D50C47F8FAFCA7BF1305519E",
  },
  {
    title:
      "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle",
    logo: "/Oracle.png",
    href: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=528CD9FB556E050E7D5C1E9189566BE86F8AF68EED8DFE3CC3146F3B044D3940",
  },

  {
    title: "Machine Learning Specialization",
    issuer: "Stanford / DeepLearning.AI",
    logo: "/ML.png",
    href: "https://www.coursera.org/account/accomplishments/specialization/PLJA7H3GUY25",
  },
];
const education = [
  {
    school: "University of California, Riverside",
    degree: "Master of Science in Computer Science",
    period: "Sep 2023 – Mar 2025",
    gpa: "3.78/4.0",
    highlights: [
      "Marketing Specialist — ASUCR (student government)",
      "Teaching (Data Structures and algorithms, Concurent Systems and Parallel Programming)",
    ],
  },
  {
    school: "Jawharlal Nehru Institute of Technology, Hyderabad",
    degree: "Bachelor of Technology in Information Technology",
    period: "Aug 2017 – Jul 2021",
    gpa: "8.12/10.0",
    highlights: [
      "Department Student Representative (2017 - 2021)",
      "2nd place — Academic Excellence, Department of IT (2019)",
      "Finalist — Smart India Hackathon (2020), JHUB Hackathon - Cyber Security (2019)",
    ],
  },
];
const profileLinks = {
  github: "https://github.com/plasya",
  linkedin: "https://www.linkedin.com/in/pamarthi-lasya/",
};

function ProjectPreview({
  title,
  images,
}: {
  title: string;
  images?: string[];
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!isHovered || !images || images.length <= 1) {
      if (!isHovered) {
        setActiveImage(0);
      }
      return undefined;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % images.length);
    }, 1200);

    return () => window.clearInterval(interval);
  }, [images, isHovered]);

  return (
    <div
      className="project-preview"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {images?.length ? (
        <>
          {images.map((image, index) => (
            <img
              key={`${title}-${index}`}
              src={image}
              alt={`${title} preview ${index + 1}`}
              className={
                index === activeImage
                  ? "project-preview-image project-preview-image-visible"
                  : "project-preview-image"
              }
            />
          ))}
          {images.length > 1 ? (
            <div className="project-preview-dots" aria-hidden="true">
              {images.map((_, index) => (
                <span
                  key={`${title}-dot-${index}`}
                  className={
                    index === activeImage
                      ? "project-preview-dot active"
                      : "project-preview-dot"
                  }
                />
              ))}
            </div>
          ) : null}
        </>
      ) : (
        <div className="project-preview-fallback" />
      )}
    </div>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const heroLine =
    "I build backend systems, APIs, and data-driven applications, with experience integrating AI into real-world products.";

  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "work",
      "projects",
      "stack",
      "certifications",
      "education",
      "contact",
    ];
    const observers = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    observers.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className={`page-shell theme-${theme}`}>
      <div className="page-network" aria-hidden="true" />

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">LP</span>
        </a>

        <nav className="nav">
          <a className={activeSection === "home" ? "active" : ""} href="#home">
            Home
          </a>
          <a
            className={activeSection === "about" ? "active" : ""}
            href="#about"
          >
            About
          </a>
          <a className={activeSection === "work" ? "active" : ""} href="#work">
            Work Experience
          </a>
          <a
            className={activeSection === "projects" ? "active" : ""}
            href="#projects"
          >
            Projects
          </a>
          <a
            className={activeSection === "stack" ? "active" : ""}
            href="#stack"
          >
            Technical Skills
          </a>
          <a
            className={activeSection === "education" ? "active" : ""}
            href="#education"
          >
            Education
          </a>
          <a
            className={activeSection === "contact" ? "active" : ""}
            href="#contact"
          >
            Contact
          </a>
        </nav>

        <div className="topbar-actions">
          <span className="theme-nav-label">Theme</span>
          <button
            type="button"
            className="theme-toggle theme-toggle-nav"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            <span className={`theme-toggle-knob theme-toggle-knob-${theme}`} />
          </button>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero-panel">
          <Image
            src="/thumbnail.jpg"
            alt="Lasya Pamarthi"
            width={132}
            height={132}
            className="hero-image"
          />
          <div className="hero-copy-group">
            <h1>Lasya Pamarthi</h1>
            <p className="hero-role">
              Software Engineer · Backend & Applied AI
            </p>

            <p className="hero-headline">
              Building scalable APIs and data-driven systems with real-world AI
              integration.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#contact">
                Connect
              </a>
              <a className="hero-button hero-button-secondary" href="#projects">
                View Work
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="about">
        <div className="section-head">
          <h2>About Me</h2>
        </div>
        <div className="about-card">
          <p>
            Backend-focused software engineer with 3+ years of experience
            building distributed, cloud-native systems across fintech and
            research environments. Strong in designing REST APIs, orchestrating
            data pipelines, and integrating AI and ML workflows into production
            systems using Java, Python, Node.js, AWS, Docker, and event-driven
            architectures.
          </p>
        </div>
      </section>

      <section className="content-section" id="work">
        <div className="section-head">
          <h2>Professional Experience</h2>
        </div>
        <div className="experience-shell">
          <div className="experience-timeline">
            {experience.map((item) => (
              <article className="experience-entry" key={item.company}>
                <div className="timeline-marker" aria-hidden="true">
                  <svg
                    className="timeline-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 7V5.8C8 4.81 8.81 4 9.8 4H14.2C15.19 4 16 4.81 16 5.8V7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.5 7H18.5C19.88 7 21 8.12 21 9.5V16.5C21 17.88 19.88 19 18.5 19H5.5C4.12 19 3 17.88 3 16.5V9.5C3 8.12 4.12 7 5.5 7Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="experience-content">
                  <div className="experience-top">
                    <div className="experience-topline">
                      <p className="experience-role">{item.role}</p>
                      <span>{item.period}</span>
                    </div>
                    <div className="experience-company-wrap">
                      <h3>{item.company}</h3>
                    </div>
                  </div>
                  <ul className="experience-points">
                    <li>{item.summary}</li>
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="projects">
        <div className="section-head">
          <h2>Featured Projects</h2>
        </div>
        <div className="project-rail">
          {featuredProjects.slice(0, 3).map((project, projectIndex) => (
            <article
              className="project-card project-card-rail project-card-detailed"
              key={project.title}
            >
              <div className="project-preview-shell">
                <div className="project-preview-header">
                  <p className="project-period">{project.period}</p>

                  {project.tags?.length ? (
                    <ul className="project-meta-tags">
                      {project.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>

                <ProjectPreview title={project.title} images={project.images} />
              </div>

              <div className="project-card-body project-card-body-detailed">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <ul className="tag-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <a
                  className="project-link project-link-icon"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M14 5H19V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M10 14L19 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M19 14V19H5V5H10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="stack">
        <div className="section-head">
          <h2>Technical Skills</h2>
        </div>
        <div className="skills-grid">
          {skillCards.map((card) => (
            <article className="skill-card" key={card.title}>
              <h3>{card.title}</h3>
              <ul className="plain-list">
                {card.items.map((item) => (
                  <li key={item}>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        className="content-section certifications-section"
        id="certifications"
      >
        <div className="section-head">
          <h2>Certifications</h2>
        </div>

        <div className="certifications-card">
          <div className="certifications-list">
            {certifications.map((item) => (
              <article className="certification-row" key={item.title}>
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={48}
                  height={30}
                  className="certification-logo"
                />

                <div className="certification-row-copy">
                  <h3>{item.title}</h3>
                </div>

                <a
                  className="certification-link"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${item.title}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 5H19V10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14L19 5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19 14V19H5V5H10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" id="education">
        <div className="section-head">
          <h2>Education</h2>
        </div>

        <div className="about-card">
          {education.map((edu) => (
            <div key={edu.school} className="education-item">
              <div className="education-header">
                <h3>{edu.school}</h3>
                <div className="education-meta">
                  <span className="education-date">{edu.period}</span>
                  {edu.gpa && (
                    <span className="education-gpa">GPA: {edu.gpa}</span>
                  )}
                </div>
              </div>

              <p>{edu.degree}</p>

              {edu.highlights?.length && (
                <ul className="education-highlights">
                  {edu.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" id="opportunities">
        <div className="section-head">
          <h2>What I’m Looking For</h2>
        </div>

        <div className="about-card">
          <p>
            I’m currently looking for backend or full-stack engineering roles
            where I can work on APIs, distributed systems, and data-driven
            applications. I’m especially interested in teams building scalable
            platforms or integrating AI into production systems.
          </p>
        </div>
      </section>
      <section className="content-section contact-section" id="contact">
        <div className="section-head section-head-contact">
          <h2>Let&apos;s Connect</h2>
        </div>

        <div className="contact-intro-wrap">
          <p className="contact-intro">
            Feel free to reach out if you&apos;re hiring, collaborating, or just
            want to chat about backend systems or AI.
          </p>
        </div>

        <div className="contact-card contact-card-compact">
          <div className="contact-links contact-links-compact">
            <a href="mailto:pamarthilasya09@gmail.com">
              <FiMail className="contact-icon" />
              <span>Email</span>
            </a>

            <a href={profileLinks.linkedin} target="_blank" rel="noreferrer">
              <FiLinkedin className="contact-icon" />
              <span>LinkedIn</span>
            </a>

            <a href={profileLinks.github} target="_blank" rel="noreferrer">
              <FiGithub className="contact-icon" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

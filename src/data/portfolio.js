// src/data/portfolio.js

export const expertise = [
  {
    id: 1,
    title: "Distributed Backend Systems",
    description: "Architecting reactive, event-driven microservices for high concurrency and reliability.",
    icon: "⚙️", 
    tech: ["Java", "Spring Boot", "WebFlux", "Python", "FastAPI", "Kafka", "Redis", "Saga", "Outbox"]
  },
  {
    id: 2,
    title: "Cloud Services & Infrastructure",
    description: "Orchestrating secure, multi-stage cloud environments with automated CI/CD pipelines.",
    icon: "☁️",
    tech: ["AWS", "Docker", "PostgreSQL", "CI/CD", "Grafana", "Prometheus", "Testcontainers"]
  },
  {
    id: 3,
    title: "Native Mobile Engineering",
    description: "Building high-performance, reliable native apps with a focus on fluid UI/UX.",
    icon: "📱",
    tech: ["Swift", "SwiftUI", "MVVM", "watchOS", "Widgets", "RevenueCat", "AdMob"]
  }
];

export const githubProjects = [
  {
    id: 1,
    title: "Money Transfer Orchestrator",
    description: "Distributed money transfer system implementing Saga Pattern, Transactional Outbox, and Idempotency patterns.",
    tags: ["Java", "Spring Boot", "Kafka", "Saga Pattern", "Redis"],
    link: "https://github.com/minelsaygisever/money-transfer-orchestrator",
    type: "backend",
    icon: "💸"
  },
  {
    id: 2,
    title: "Courier Tracking System",
    description: "Scalable, real-time tracking system featuring geospatial indexing with Redis and event-driven architecture.",
    tags: ["Java", "Spring Boot", "Redis Geo", "Event-Driven", "WebSocket"],
    link: "https://github.com/minelsaygisever/courier-tracking-system",
    type: "backend",
    icon: "🛵"
  },
  {
    id: 3,
    title: "Currency Converter Backend",
    description: "High-performance backend for live mobile app. Built with FastAPI and AWS ECS, handling real-time FX conversion.",
    tags: ["Python", "FastAPI", "AWS ECS", "Docker", "PostgreSQL"],
    link: "https://github.com/minelsaygisever/currency-converter-backend",
    type: "backend",
    icon: "💱"
  },
  {
    id: 4,
    title: "Reactive Weather Service",
    description: "High-throughput weather aggregation service built with Spring WebFlux. Features Circuit Breaker patterns (Resilience4j) for fault tolerance.",
    tags: ["Java", "WebFlux", "Resilience4j", "Reactive", "Grafana"],
    link: "https://github.com/minelsaygisever/weather-query-service-webflux",
    type: "backend",
    icon: "🌦️"
  },
];

export const mobileApps = [
  {
    id: 1,
    title: "Currency Tracker & Converter",
    category: "Utilities",
    description: "Deployed a full-stack currency platform as a solo developer, featuring a SwiftUI iOS/Apple Watch app with widgets and a high-performance Python (FastAPI) backend on AWS, supporting real-time conversions, historical charts, and a savings module.",
    tech: ["SwiftUI", "Python", "FastAPI", "AWS", "WidgetKit", "watchOS"],
    link: "https://apps.apple.com/tr/app/id6748993709",
    icon: "/currency-icon.png",
    color: "rgba(0, 198, 255, 0.1)"
  }
];

export const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "Macademia | Da Vinci (London, UK)",
    period: "Oct 2022 - Present",
    description: [
      "Scaled Java & Spring Boot microservices on AWS to support 500k+ monthly active users across mobile and TV platforms.",
      "Led end-to-end integration of 2 telecom partners, implementing secure SSO flows to drive user acquisition.",
      "Architected internal curation tools to automate workflows, reducing content operations time by ~40%."
    ]
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Yapi Kredi Bank | OBSS",
    period: "Jul 2021 - Oct 2022",
    description: [
      "Engineered full-stack enhancements for Loans & Insurance domain using Java Spring and JavaScript for millions of active customers.",
      "Built the web experience for Turkey's first online debt restructuring system, enabling self-service completion without branch visits.",
      "Ensured regulatory compliance and high availability for critical banking modules."
    ]
  },
  {
    id: 3,
    role: "Software Support Engineer (Part-time)",
    company: "P.I. Works",
    period: "Dec 2020 - Jul 2021",
    description: [
      "Managed large-scale ETL pipelines on distributed Linux environments for Turkcell's critical network operations.",
      "Performed root-cause analysis on high-volume datasets using advanced Oracle SQL to resolve data inconsistencies."
    ]
  },
  {
    id: 4,
    role: "Software Engineer (Part-time)",
    company: "BenzinLitre",
    period: "Jan 2020 - Dec 2020",
    description: [
      "Designed high-performance user behavior tracking services using GoLang and Redis for a location-based app with ~50K users.",
      "Developed the operations admin panel using React and PHP, enabling seamless station management."
    ]
  }
];
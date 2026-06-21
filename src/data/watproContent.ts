export type PageKey =
  | "home"
  | "about"
  | "services"
  | "industries"
  | "academy"
  | "portfolio"
  | "case-studies"
  | "insights"
  | "training-calendar"
  | "events"
  | "blog"
  | "contact";

export type IconKey =
  | "compass"
  | "rocket"
  | "academy"
  | "government"
  | "assurance"
  | "partnership"
  | "systems"
  | "commercial"
  | "analytics"
  | "people"
  | "knowledge"
  | "global"
  | "calendar"
  | "infrastructure"
  | "network"
  | "contracts"
  | "sustainability"
  | "strategy"
  | "industry"
  | "building"
  | "layers"
  | "premium";

export type NavItem = {
  key: PageKey;
  label: string;
  summary: string;
};

export type PageMeta = {
  title: string;
  description: string;
  eyebrow: string;
  heading: string;
  summary: string;
  tags: string[];
};

export type Stat = {
  value: string;
  label: string;
  detail: string;
};

export type Division = {
  name: string;
  icon: IconKey;
  description: string;
  capabilities: string[];
};

export type ServiceCategory = {
  title: string;
  icon: IconKey;
  summary: string;
  services: string[];
  outcome: string;
};

export type Industry = {
  name: string;
  icon: IconKey;
  summary: string;
  value: string;
};

export type FeaturedSolution = {
  title: string;
  icon: IconKey;
  summary: string;
  bullets: string[];
  result: string;
};

export type Principle = {
  title: string;
  icon: IconKey;
  description: string;
};

export type AcademyProgram = {
  title: string;
  icon: IconKey;
  description: string;
  formats: string[];
  outcomes: string[];
};

export type CaseStudy = {
  title: string;
  sector: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string[];
  spotlight: string;
};

export type Insight = {
  title: string;
  category: string;
  readTime: string;
  summary: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Training = {
  title: string;
  track: string;
  date: string;
  duration: string;
  format: string;
  location: string;
  audience: string;
  seats: string;
  summary: string;
};

export type EventItem = {
  title: string;
  date: string;
  format: string;
  summary: string;
  audience: string;
};

export type ContactPoint = {
  title: string;
  region: string;
  email: string;
  phone: string;
  location: string;
};

export type EngagementStep = {
  step: string;
  title: string;
  description: string;
};

export const siteIdentity = {
  name: "WATPRO Consulting",
  headline: "THE ULTIMATE SOLUTION HUB",
  tagline: "Strategy. Transformation. Delivery.",
  supportingStatement:
    "We help governments, organizations, corporations, and institutions plan, transform, manage, and deliver complex projects, programs, partnerships, and organizational change through advisory, implementation support, and professional development.",
};

export const navigation: NavItem[] = [
  { key: "home", label: "Home", summary: "Overview" },
  { key: "about", label: "About", summary: "Firm profile" },
  { key: "services", label: "Services", summary: "Capabilities" },
  { key: "industries", label: "Industries", summary: "Client sectors" },
  { key: "academy", label: "Academy", summary: "Training" },
  { key: "portfolio", label: "Portfolio", summary: "Completed projects" },
  { key: "blog", label: "Blog", summary: "Articles" },
  { key: "case-studies", label: "Case Studies", summary: "Impact" },
  { key: "insights", label: "Insights", summary: "Thought leadership" },
  { key: "training-calendar", label: "Calendar", summary: "Upcoming programs" },
  { key: "events", label: "Events", summary: "Forums & webinars" },
  { key: "contact", label: "Contact", summary: "Start a conversation" },
];

export const pageMeta: Record<PageKey, PageMeta> = {
  home: {
    title: "WATPRO Consulting | The Ultimate Solution Hub",
    description:
      "Premium advisory, transformation, project delivery, PPP, contract management, stakeholder engagement, defence acquisition, and executive training services for governments and complex organizations.",
    eyebrow: "Integrated Advisory Platform",
    heading: "Strategy-led consulting with delivery-grade execution discipline.",
    summary:
      "WATPRO brings together strategic advisory, implementation support, and capability development to help institutions move from ambition to measurable results.",
    tags: ["Advisory", "Transformation", "Project Delivery", "Executive Education"],
  },
  about: {
    title: "About WATPRO Consulting",
    description:
      "Learn how WATPRO combines strategy, transformation, delivery, and professional development to solve complex public and private sector challenges.",
    eyebrow: "About WATPRO",
    heading: "Built for organizations that need more than advice.",
    summary:
      "We are structured to diagnose complex mandates, design workable solutions, mobilize implementation, and embed capability so change lasts.",
    tags: ["Authority", "Governance", "Execution", "Capability"],
  },
  services: {
    title: "Services | WATPRO Consulting",
    description:
      "Explore WATPRO services across project management, PPP, sustainability, contract management, stakeholder engagement, defence acquisition, organization development, and training.",
    eyebrow: "Core Services",
    heading: "Specialist solutions for complex mandates, regulated environments, and mission-critical programs.",
    summary:
      "Our service architecture is designed to support clients from concept, feasibility, and governance through implementation, recovery, and knowledge transfer.",
    tags: ["Project Management", "PPP", "Sustainability", "Commercial Governance"],
  },
  industries: {
    title: "Industries | WATPRO Consulting",
    description:
      "WATPRO supports governments, public agencies, defence institutions, infrastructure programs, donors, corporations, construction firms, and energy organizations.",
    eyebrow: "Industries Served",
    heading: "Fluency across sectors where risk, governance, and delivery performance matter most.",
    summary:
      "We understand the operational realities, stakeholder complexity, and accountability requirements that shape high-consequence engagements.",
    tags: ["Government", "Infrastructure", "Defence", "Energy"],
  },
  academy: {
    title: "WATPRO Academy",
    description:
      "Executive education, professional training, certification preparation, workshops, and customized capability-building programs from WATPRO Academy.",
    eyebrow: "WATPRO Academy",
    heading: "Executive learning that strengthens institutions, delivery teams, and future leaders.",
    summary:
      "From PMP preparation to PPP structuring, PMO leadership, contract governance, and tailored in-house programs, the academy translates expertise into institutional capability.",
    tags: ["Executive Education", "Corporate Training", "Certifications", "Leadership"],
  },
  portfolio: {
    title: "Portfolio | WATPRO Consulting",
    description:
      "Explore the WATPRO project portfolio across advisory, project management, PPP, contract management, training, and organizational transformation engagements.",
    eyebrow: "Project Portfolio",
    heading: "A track record of completed projects across advisory, delivery, and capability building.",
    summary:
      "Filter our completed projects by sector and service line to see how WATPRO has supported governments, infrastructure programs, corporations, and development agencies.",
    tags: ["Completed Projects", "Sector Experience", "Delivery", "Impact"],
  },
  "case-studies": {
    title: "Case Studies | WATPRO Consulting",
    description:
      "See how WATPRO helps organizations recover complex programs, structure PPPs, improve governance, and build lasting delivery capability.",
    eyebrow: "Selected Engagements",
    heading: "From governance redesign to accelerated delivery, our focus is measurable impact.",
    summary:
      "The strongest consulting relationships are judged by outcomes: stronger governance, faster mobilization, reduced risk, better stakeholder confidence, and durable capability.",
    tags: ["Transformation", "PMO", "Recovery", "Institutional Reform"],
  },
  insights: {
    title: "Insights & Publications | WATPRO Consulting",
    description:
      "Thought leadership, executive briefs, sector insights, and practical publications on project delivery, PPP, governance, sustainability, and organizational change.",
    eyebrow: "Knowledge Center",
    heading: "Research-backed perspectives for leaders managing complexity, reform, and growth.",
    summary:
      "We publish practical insights that help executives and delivery teams make better decisions in high-stakes environments.",
    tags: ["Thought Leadership", "Publications", "Executive Briefs", "Research"],
  },
  "training-calendar": {
    title: "Training Calendar | WATPRO Academy",
    description:
      "Register for upcoming WATPRO Academy programs, executive workshops, certification bootcamps, and customized training sessions.",
    eyebrow: "Training Calendar",
    heading: "Upcoming programs designed for practical application, executive relevance, and measurable capability uplift.",
    summary:
      "Browse upcoming workshops, bootcamps, masterclasses, and in-house capability programs, then register your team directly.",
    tags: ["Open Enrollment", "Corporate Programs", "Registration", "Capability Building"],
  },
  events: {
    title: "Events | WATPRO Consulting",
    description:
      "Join WATPRO forums, masterclasses, executive roundtables, and briefing sessions across project delivery, PPP, defence governance, and organizational transformation.",
    eyebrow: "Events & Forums",
    heading: "Convening leaders, delivery teams, and institutions around the issues shaping performance.",
    summary:
      "Our event series combines practical dialogue, expert briefings, and peer exchange across strategic sectors and delivery disciplines.",
    tags: ["Roundtables", "Forums", "Masterclasses", "Executive Briefings"],
  },
  contact: {
    title: "Contact WATPRO Consulting",
    description:
      "Connect with WATPRO for advisory engagements, PMO setup, PPP support, academy partnerships, executive training, and organizational transformation programs.",
    eyebrow: "Contact Us",
    heading: "Let’s design a smarter path from strategy to delivery.",
    summary:
      "Whether you need strategic advisory, implementation support, professional training, or a multidisciplinary response team, we are ready to help.",
    tags: ["Consultation", "Advisory", "Academy", "Partnerships"],
  },
  blog: {
    title: "Blog | WATPRO Consulting",
    description:
      "Insights and analysis on infrastructure, PPP, project delivery, governance, and transformation from WATPRO Consulting. Featuring Pakistan and global perspectives.",
    eyebrow: "WATPRO Blog",
    heading: "Insights, analysis, and perspectives on the work that matters.",
    summary:
      "Our blog covers infrastructure, PPP, project delivery, governance, and transformation — with a focus on Pakistan and global best practices.",
    tags: ["Pakistan", "Global", "Infrastructure", "PPP", "Governance"],
  },
};

export const impactStats: Stat[] = [
  {
    value: "3",
    label: "Integrated business divisions",
    detail: "Advisory, Solutions, and Academy aligned under one strategy-to-execution model.",
  },
  {
    value: "8",
    label: "Specialist service domains",
    detail: "Capability spanning governance, transformation, project delivery, PPP, and institutional development.",
  },
  {
    value: "50+",
    label: "Executive programs & workshops",
    detail: "Capability-building options for leaders, technical teams, PMOs, and contract professionals.",
  },
  {
    value: "90-Day",
    label: "Mobilization mindset",
    detail: "Rapid diagnostics and implementation planning for complex, time-sensitive mandates.",
  },
];

export const divisions: Division[] = [
  {
    name: "WATPRO Advisory",
    icon: "compass",
    description:
      "Strategic consulting and advisory services for organizations facing complexity, reform, investment decisions, or delivery risk.",
    capabilities: [
      "Strategy design and policy alignment",
      "Governance and decision frameworks",
      "Business cases, feasibility, and structuring",
    ],
  },
  {
    name: "WATPRO Solutions",
    icon: "rocket",
    description:
      "Implementation support, PMO setup, transformation management, and practical delivery reinforcement for mission-critical programs.",
    capabilities: [
      "PMO design and mobilization",
      "Program recovery and assurance",
      "Transformation delivery and implementation support",
    ],
  },
  {
    name: "WATPRO Academy",
    icon: "academy",
    description:
      "Professional training, executive education, certification support, and customized institutional learning solutions.",
    capabilities: [
      "Executive workshops and masterclasses",
      "Certification bootcamps and capability tracks",
      "Corporate and public sector in-house training",
    ],
  },
];

export const serviceCategories: ServiceCategory[] = [
  {
    title: "Project Management",
    icon: "systems",
    summary:
      "Project, program, and PMO services that improve visibility, accountability, scheduling discipline, and delivery confidence.",
    services: [
      "IT Project Management",
      "Construction Project Management",
      "Program Management",
      "PMO Setup",
      "PMO Maturity Assessments",
      "Project Recovery",
      "Risk Management",
      "Monitoring & Evaluation",
    ],
    outcome: "Sharper controls, better reporting, faster decision-making, and improved delivery performance.",
  },
  {
    title: "Public Private Partnership (PPP)",
    icon: "partnership",
    summary:
      "End-to-end support for institutions developing bankable, governable, and implementable PPP programs and transactions.",
    services: [
      "PPP Advisory",
      "Feasibility Studies",
      "Transaction Advisory",
      "PPP Structuring",
      "Procurement Support",
      "Financial Modeling",
      "Project Governance",
    ],
    outcome: "Investment-ready projects with stronger structuring, governance, and procurement confidence.",
  },
  {
    title: "Sustainable Development",
    icon: "sustainability",
    summary:
      "Practical sustainability and ESG support that aligns growth, resilience, stakeholder value, and development priorities.",
    services: [
      "ESG Advisory",
      "Sustainability Frameworks",
      "SDG Alignment",
      "Climate Resilience",
      "Social Impact Programs",
      "Development Sector Advisory",
    ],
    outcome: "Clearer sustainability priorities, stronger resilience planning, and credible impact narratives.",
  },
  {
    title: "Contract & Commercial Management",
    icon: "contracts",
    summary:
      "Commercial governance and contract management services that reduce disputes, improve compliance, and protect value.",
    services: [
      "Contract Administration",
      "FIDIC Contracts",
      "Procurement Advisory",
      "Claims Management",
      "Commercial Negotiation",
      "Contract Governance",
    ],
    outcome: "More disciplined commercial administration, stronger controls, and reduced execution leakage.",
  },
  {
    title: "Stakeholder Management",
    icon: "people",
    summary:
      "Engagement strategies that align communities, sponsors, delivery teams, regulators, and decision-makers around change.",
    services: [
      "Stakeholder Mapping",
      "Community Engagement",
      "Change Management",
      "Public Consultation",
      "Strategic Communications",
    ],
    outcome: "Improved stakeholder trust, smoother implementation, and stronger license to operate.",
  },
  {
    title: "Defence Acquisition Systems",
    icon: "assurance",
    summary:
      "Structured support for defence and security institutions managing capability planning, governance, and acquisition complexity.",
    services: [
      "Acquisition Strategy",
      "Capability Development",
      "Procurement Governance",
      "Lifecycle Management",
      "Defence Program Assurance",
    ],
    outcome: "Clearer acquisition pathways, stronger oversight, and more reliable program assurance.",
  },
  {
    title: "Organization Development & Corporatization",
    icon: "strategy",
    summary:
      "Institutional design and transformation support for organizations modernizing structures, governance, processes, and mandates.",
    services: [
      "Organizational Design",
      "Institutional Reform",
      "Governance Frameworks",
      "Business Process Improvement",
      "Corporatization Programs",
      "Change Transformation",
    ],
    outcome: "More capable institutions with operating models that support performance, accountability, and growth.",
  },
  {
    title: "Training & Professional Development",
    icon: "knowledge",
    summary:
      "Practical training pathways that strengthen delivery capability from senior leadership through technical teams and PMOs.",
    services: [
      "PMP Preparation",
      "PMO Training",
      "Contract Management",
      "PPP Training",
      "Leadership Development",
      "Executive Workshops",
      "Corporate Training Programs",
      "Customized Learning Solutions",
    ],
    outcome: "Institutional capability that stays with the client long after the engagement ends.",
  },
];

export const industries: Industry[] = [
  {
    name: "Government Ministries",
    icon: "government",
    summary: "Policy execution, reform, public investment, and delivery support for ministries and central government bodies.",
    value: "Navigate policy complexity while improving delivery assurance and accountability.",
  },
  {
    name: "Public Sector Organizations",
    icon: "building",
    summary: "Transformation, governance, PMO, and corporatization support for agencies and state-owned entities.",
    value: "Strengthen institutional performance, governance, and service delivery.",
  },
  {
    name: "Defense Organizations",
    icon: "assurance",
    summary: "Acquisition planning, program assurance, lifecycle governance, and capability system strengthening.",
    value: "Improve control, traceability, and mission readiness across defence programs.",
  },
  {
    name: "Infrastructure Authorities",
    icon: "infrastructure",
    summary: "Program governance, stakeholder management, procurement support, and project controls for complex portfolios.",
    value: "Deliver infrastructure with stronger oversight, recovery capacity, and public confidence.",
  },
  {
    name: "Development Agencies",
    icon: "global",
    summary: "Advisory support for donor programs, monitoring frameworks, sustainability, and institutional development.",
    value: "Align program ambition with measurable impact and accountable delivery.",
  },
  {
    name: "Donor-Funded Programs",
    icon: "analytics",
    summary: "Program management, M&E, stakeholder coordination, and reporting for high-visibility development initiatives.",
    value: "Maintain rigorous governance while meeting funder, beneficiary, and implementation expectations.",
  },
  {
    name: "Construction Companies",
    icon: "industry",
    summary: "Commercial management, claims support, PMO discipline, and schedule recovery for capital projects.",
    value: "Protect margins, manage risk, and stabilize delivery under complex contracts.",
  },
  {
    name: "Engineering Firms",
    icon: "network",
    summary: "Project controls, stakeholder alignment, and delivery governance for design, build, and technical consulting teams.",
    value: "Create execution discipline that supports quality, deadlines, and regulatory expectations.",
  },
  {
    name: "Energy Sector Organizations",
    icon: "sustainability",
    summary: "Project delivery, stakeholder engagement, ESG, and commercial governance for energy and utilities stakeholders.",
    value: "Advance capital programs while balancing resilience, compliance, and social impact.",
  },
  {
    name: "IT Organizations",
    icon: "systems",
    summary: "Digital project management, transformation office support, program assurance, and change enablement.",
    value: "Improve delivery predictability across technology-enabled transformation agendas.",
  },
  {
    name: "Large Corporations",
    icon: "premium",
    summary: "Transformation strategy, governance design, PMO capability, executive training, and cross-functional delivery support.",
    value: "Translate enterprise ambition into coordinated execution and capability uplift.",
  },
];

export const featuredSolutions: FeaturedSolution[] = [
  {
    title: "Strategic Delivery Command Center",
    icon: "analytics",
    summary:
      "A high-visibility governance and reporting environment for complex projects, transformation programs, or multi-stakeholder initiatives.",
    bullets: [
      "Executive dashboards and risk reporting",
      "Governance cadences and escalation protocols",
      "Performance controls across workstreams",
    ],
    result: "Gives leadership clearer visibility, faster intervention capability, and stronger delivery confidence.",
  },
  {
    title: "PPP Transaction Readiness Suite",
    icon: "partnership",
    summary:
      "Structured support that moves priority projects from concept through feasibility, structuring, governance, and procurement readiness.",
    bullets: [
      "Transaction framing and option analysis",
      "Financial modeling and bankability support",
      "Institutional governance and procurement preparation",
    ],
    result: "Improves transaction quality while reducing ambiguity across public and private stakeholders.",
  },
  {
    title: "Capability Acceleration Academy",
    icon: "academy",
    summary:
      "Blended learning and coaching pathways that strengthen delivery teams during and after major programs or reforms.",
    bullets: [
      "Role-based learning tracks for leaders and teams",
      "Applied workshops tied to live client challenges",
      "Toolkits, templates, and post-program reinforcement",
    ],
    result: "Builds institutional capability that supports sustainability beyond the consulting engagement.",
  },
];

export const whyWatpro: Principle[] = [
  {
    title: "Strategy to execution under one roof",
    icon: "layers",
    description:
      "We connect strategic intent, implementation controls, and capability transfer so clients do not lose momentum between planning and delivery.",
  },
  {
    title: "Designed for complex stakeholder environments",
    icon: "people",
    description:
      "Our methods are suited to public sector, regulated, multi-party, and politically visible programs where alignment matters as much as analysis.",
  },
  {
    title: "Governance-heavy, outcome-focused",
    icon: "assurance",
    description:
      "We bring discipline to decision rights, reporting, escalation, contract administration, and risk governance without slowing delivery.",
  },
  {
    title: "Capability embedded, not outsourced",
    icon: "academy",
    description:
      "Every engagement is structured to strengthen client teams through training, coaching, templates, and management routines.",
  },
  {
    title: "Public + private sector fluency",
    icon: "global",
    description:
      "We understand how infrastructure, development, corporate, and government priorities intersect across funding, governance, and execution.",
  },
  {
    title: "Premium client experience",
    icon: "premium",
    description:
      "Senior attention, structured communications, sharp deliverables, and practical execution support define the WATPRO approach.",
  },
];

export const aboutPrinciples: Principle[] = [
  {
    title: "Authority with practical discipline",
    icon: "compass",
    description:
      "Our work is grounded in strategic clarity, but designed for operating environments where delivery constraints are real and visible.",
  },
  {
    title: "Transformation with governance integrity",
    icon: "assurance",
    description:
      "We help leaders transform institutions without losing control of accountability, procurement, stakeholder confidence, or execution rhythm.",
  },
  {
    title: "Solutions built around adoption",
    icon: "people",
    description:
      "Plans are only valuable when teams can implement them. We prioritize stakeholder alignment, ownership, and institutional uptake.",
  },
  {
    title: "Knowledge that compounds over time",
    icon: "knowledge",
    description:
      "From tools and templates to training pathways and operating routines, we leave clients stronger than we found them.",
  },
];

export const engagementModel: EngagementStep[] = [
  {
    step: "01",
    title: "Diagnose",
    description:
      "Rapidly assess ambition, constraints, governance maturity, stakeholder complexity, and delivery risk.",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Shape decision frameworks, workplans, governance models, delivery mechanisms, and capability interventions.",
  },
  {
    step: "03",
    title: "Mobilize",
    description:
      "Stand up the PMO, reporting architecture, stakeholder routines, and implementation support required for momentum.",
  },
  {
    step: "04",
    title: "Deliver",
    description:
      "Provide execution support, assurance, troubleshooting, facilitation, and performance reviews through delivery milestones.",
  },
  {
    step: "05",
    title: "Embed",
    description:
      "Transfer tools, train teams, and institutionalize practices so the client retains confidence and capability.",
  },
];

export const academyPrograms: AcademyProgram[] = [
  {
    title: "Project & PMO Excellence",
    icon: "systems",
    description:
      "Programs for project leaders, PMO managers, and sponsors focused on delivery governance, risk, reporting, and recovery.",
    formats: ["Bootcamps", "Open-enrolment workshops", "In-house masterclasses"],
    outcomes: [
      "Stronger PMO governance",
      "Improved executive reporting",
      "Better schedule and risk discipline",
    ],
  },
  {
    title: "PPP & Infrastructure Leadership",
    icon: "partnership",
    description:
      "Learning pathways for institutions and practitioners working on PPP structuring, transaction preparation, and infrastructure governance.",
    formats: ["Executive forums", "Applied workshops", "Scenario-based simulations"],
    outcomes: [
      "Sharper structuring decisions",
      "Improved procurement readiness",
      "Greater transaction confidence",
    ],
  },
  {
    title: "Contract & Commercial Governance",
    icon: "contracts",
    description:
      "Practical capability building around contract administration, procurement controls, FIDIC, claims, and negotiation.",
    formats: ["Masterclasses", "Clinic sessions", "Role-based team training"],
    outcomes: [
      "Reduced commercial leakage",
      "Improved dispute avoidance",
      "Clearer governance routines",
    ],
  },
  {
    title: "Leadership & Organizational Transformation",
    icon: "strategy",
    description:
      "Executive programs that strengthen change leadership, institutional reform capability, and stakeholder-centered transformation.",
    formats: ["Leadership labs", "Board briefings", "Transformation accelerators"],
    outcomes: [
      "Stronger change sponsorship",
      "Better stakeholder alignment",
      "Higher transformation adoption",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    title: "National Infrastructure PMO Mobilization",
    sector: "Infrastructure Authority",
    client: "Public sector client",
    challenge:
      "A major infrastructure portfolio lacked integrated reporting, common governance routines, and an escalation model for schedule and risk issues.",
    solution:
      "WATPRO designed the PMO operating model, reporting architecture, governance calendar, and executive dashboards while coaching workstream leads.",
    impact: [
      "Established a unified reporting cadence across 14 workstreams",
      "Improved escalation visibility for critical delivery risks",
      "Enabled leadership reviews with clearer performance data",
    ],
    spotlight: "PMO setup + executive reporting",
  },
  {
    title: "PPP Readiness for Transport Investment Pipeline",
    sector: "Government Ministry",
    client: "Transport sector institution",
    challenge:
      "The client needed structured support to prioritize projects, improve bankability, and prepare a stronger transaction governance framework.",
    solution:
      "WATPRO supported project screening, transaction structuring, feasibility framing, governance design, and procurement readiness planning.",
    impact: [
      "Clarified the PPP pathway for priority assets",
      "Strengthened governance roles across sponsoring institutions",
      "Created a more coherent transaction preparation roadmap",
    ],
    spotlight: "PPP advisory + structuring",
  },
  {
    title: "Organizational Design for a Reforming Public Agency",
    sector: "Public Sector Organization",
    client: "Institutional reform program",
    challenge:
      "An agency undergoing reform required a new operating model, clearer roles, and improved coordination across technical and administrative teams.",
    solution:
      "WATPRO facilitated diagnostics, organization design, governance redesign, and capability-building workshops for senior leaders and managers.",
    impact: [
      "Produced a target operating model aligned to mandate priorities",
      "Defined governance forums and decision rights",
      "Supported leadership alignment during the reform process",
    ],
    spotlight: "Organization development + change",
  },
  {
    title: "Commercial Governance Uplift for Capital Projects",
    sector: "Construction & Engineering",
    client: "Private sector consortium",
    challenge:
      "Project teams were facing inconsistent contract administration, claims ambiguity, and fragmented commercial controls across work packages.",
    solution:
      "WATPRO reviewed commercial processes, introduced governance templates, and delivered targeted training on claims, negotiation, and FIDIC administration.",
    impact: [
      "Standardized commercial review routines across project teams",
      "Improved issue escalation and decision documentation",
      "Strengthened contract administration capability in-house",
    ],
    spotlight: "Contracts + capability building",
  },
];

export const insights: Insight[] = [
  {
    title: "Why complex programs fail after strategy approval",
    category: "Project Delivery",
    readTime: "6 min read",
    summary:
      "A practical look at the governance, sponsorship, and mobilization gaps that undermine major programs in the first 90 days.",
  },
  {
    title: "Building a PPP pipeline that investors can trust",
    category: "PPP",
    readTime: "7 min read",
    summary:
      "How institutions can improve readiness, governance discipline, and transaction clarity before entering the market.",
  },
  {
    title: "The PMO as a strategic decision engine",
    category: "PMO",
    readTime: "5 min read",
    summary:
      "Why modern PMOs must move beyond reporting to provide intervention logic, executive insight, and delivery assurance.",
  },
  {
    title: "ESG without theatre: making sustainability operational",
    category: "Sustainability",
    readTime: "8 min read",
    summary:
      "Translating ESG ambition into real governance, metrics, and implementation routines that stand up to scrutiny.",
  },
  {
    title: "Corporatization programs: five governance questions leaders should answer early",
    category: "Organization Development",
    readTime: "9 min read",
    summary:
      "Key decisions that influence institutional reform outcomes long before the new structure is announced.",
  },
  {
    title: "Capability building that survives the consultancy exit",
    category: "Academy",
    readTime: "4 min read",
    summary:
      "A blueprint for embedding knowledge transfer into transformation, PMO, and commercial governance engagements.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "WATPRO brought structure, executive clarity, and a level of implementation discipline that immediately changed how our program was being governed.",
    author: "Director, Strategic Programs",
    role: "Infrastructure authority",
  },
  {
    quote:
      "Their team combined advisory quality with practical delivery support. The result was not just a report, but an operating rhythm our institution could sustain.",
    author: "Permanent Secretary",
    role: "Government client",
  },
  {
    quote:
      "The academy sessions were exceptionally relevant to our operating realities. Our PMO and contract teams started applying the tools almost immediately.",
    author: "Executive Sponsor",
    role: "Capital projects organization",
  },
];

export const trainings: Training[] = [
  {
    title: "Strategic PMO Leadership Bootcamp",
    track: "Project Management",
    date: "14 Jul 2026",
    duration: "3 days",
    format: "Hybrid",
    location: "Abuja + Live Online",
    audience: "PMO leaders, program managers, delivery sponsors",
    seats: "24 seats",
    summary:
      "A leadership-level program on PMO setup, governance cadence, dashboards, risk escalation, and executive reporting.",
  },
  {
    title: "PPP Structuring & Transaction Readiness Masterclass",
    track: "PPP",
    date: "29 Jul 2026",
    duration: "2 days",
    format: "Live Online",
    location: "Virtual Studio",
    audience: "Government teams, project sponsors, infrastructure advisors",
    seats: "30 seats",
    summary:
      "Covers project screening, structuring, feasibility framing, governance, and procurement readiness for PPP programs.",
  },
  {
    title: "FIDIC & Contract Administration Clinic",
    track: "Contracts",
    date: "12 Aug 2026",
    duration: "2 days",
    format: "In Person",
    location: "Lagos",
    audience: "Commercial managers, engineers, contract administrators",
    seats: "20 seats",
    summary:
      "A practical clinic on FIDIC, claims prevention, documentation discipline, and commercial governance routines.",
  },
  {
    title: "Executive Change & Stakeholder Alignment Lab",
    track: "Transformation",
    date: "26 Aug 2026",
    duration: "1 day",
    format: "Hybrid",
    location: "Abuja + Live Online",
    audience: "Senior leaders, reform teams, transformation sponsors",
    seats: "18 seats",
    summary:
      "Designed for leaders who need to align stakeholders, sustain sponsorship, and mobilize change under public scrutiny.",
  },
  {
    title: "Monitoring, Evaluation & Delivery Assurance Workshop",
    track: "Development",
    date: "09 Sep 2026",
    duration: "2 days",
    format: "Live Online",
    location: "Virtual Studio",
    audience: "Development agencies, program offices, M&E professionals",
    seats: "28 seats",
    summary:
      "Focuses on practical M&E frameworks, indicator quality, reporting discipline, and delivery assurance integration.",
  },
  {
    title: "Defence Program Assurance Roundtable Intensive",
    track: "Defence",
    date: "24 Sep 2026",
    duration: "1 day",
    format: "In Person",
    location: "Private Venue",
    audience: "Defence planners, assurance leads, acquisition teams",
    seats: "16 seats",
    summary:
      "A focused intensive on acquisition governance, assurance checkpoints, and lifecycle oversight for mission-critical programs.",
  },
];

export const events: EventItem[] = [
  {
    title: "Executive Forum: Governing Complex National Programs",
    date: "18 Jul 2026",
    format: "Breakfast Forum",
    summary:
      "A closed-door discussion on governance architecture, sponsor visibility, and delivery discipline across multi-stakeholder programs.",
    audience: "Government executives, agency heads, transformation sponsors",
  },
  {
    title: "Infrastructure Delivery Briefing: Recovering Stalled Projects",
    date: "07 Aug 2026",
    format: "Webinar",
    summary:
      "A practical session on schedule recovery, issue escalation, governance reset, and PMO interventions for troubled projects.",
    audience: "Infrastructure authorities, contractors, PMO teams",
  },
  {
    title: "PPP Readiness Roundtable",
    date: "03 Sep 2026",
    format: "Roundtable",
    summary:
      "Explores what public institutions must resolve before approaching the market with flagship PPP opportunities.",
    audience: "Investment promotion bodies, ministries, PPP units, advisors",
  },
  {
    title: "Leadership Session: Institutional Reform that Sticks",
    date: "22 Sep 2026",
    format: "Executive Masterclass",
    summary:
      "Focused on stakeholder alignment, organization design, governance transition, and capability reinforcement during reform programs.",
    audience: "Boards, executives, reform directors, HR and strategy leaders",
  },
];

export const contactPoints: ContactPoint[] = [
  {
    title: "Advisory & Transformation",
    region: "Africa & Middle East",
    email: "advisory@watproconsultants.com",
    phone: "+234 800 000 1201",
    location: "Abuja engagement office",
  },
  {
    title: "PPP, Infrastructure & Delivery Solutions",
    region: "Regional program support",
    email: "solutions@watproconsultants.com",
    phone: "+234 800 000 1202",
    location: "Lagos delivery office",
  },
  {
    title: "WATPRO Academy & Partnerships",
    region: "Global virtual learning support",
    email: "academy@watproconsultants.com",
    phone: "+234 800 000 1203",
    location: "Hybrid learning studio",
  },
];

export type PortfolioProject = {
  title: string;
  client: string;
  sector: string;
  service: string;
  year: string;
  duration: string;
  location: string;
  status: "Completed" | "In Delivery" | "Advisory";
  summary: string;
  highlights: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    title: "National Infrastructure PMO Mobilization",
    client: "Federal Infrastructure Authority",
    sector: "Infrastructure",
    service: "Project Management",
    year: "2025",
    duration: "9 months",
    location: "Abuja, NG",
    status: "Completed",
    summary:
      "Designed and mobilized an integrated PMO across 14 workstreams with executive reporting, governance routines, and risk escalation mechanisms.",
    highlights: ["Unified weekly reporting cadence", "Executive dashboards live in 60 days", "Risk register adopted enterprise-wide"],
  },
  {
    title: "PPP Transaction Readiness — Transport Pipeline",
    client: "Ministry of Transport",
    sector: "Government",
    service: "PPP",
    year: "2025",
    duration: "7 months",
    location: "Regional",
    status: "Completed",
    summary:
      "Supported screening, structuring, feasibility framing, and procurement readiness for a portfolio of priority transport PPP projects.",
    highlights: ["3 bankable transactions prepared", "Governance charter approved", "Procurement playbook delivered"],
  },
  {
    title: "Organizational Design for Reforming Agency",
    client: "Public Sector Reform Program",
    sector: "Public Sector",
    service: "Organization Development",
    year: "2024",
    duration: "11 months",
    location: "Lagos, NG",
    status: "Completed",
    summary:
      "Facilitated diagnostics, target operating model design, governance redesign, and capability workshops for senior leaders and managers.",
    highlights: ["New TOM aligned to mandate", "Decision rights matrix adopted", "Leadership alignment achieved"],
  },
  {
    title: "Commercial Governance Uplift — Capital Projects",
    client: "Private Construction Consortium",
    sector: "Construction",
    service: "Contract Management",
    year: "2024",
    duration: "6 months",
    location: "Multi-site",
    status: "Completed",
    summary:
      "Standardized contract administration, claims handling, and FIDIC review routines across multiple work packages.",
    highlights: ["Claims documentation standardized", "Commercial review cadence introduced", "Internal capability uplifted"],
  },
  {
    title: "Defence Acquisition Assurance Framework",
    client: "Defence Programs Office",
    sector: "Defence",
    service: "Defence Acquisition",
    year: "2025",
    duration: "8 months",
    location: "Confidential",
    status: "In Delivery",
    summary:
      "Building an acquisition assurance framework covering lifecycle checkpoints, governance gates, and program oversight reviews.",
    highlights: ["Assurance gates defined", "Oversight playbook in pilot", "Capability roadmap aligned"],
  },
  {
    title: "ESG & Sustainability Framework Rollout",
    client: "Energy Sector Operator",
    sector: "Energy",
    service: "Sustainable Development",
    year: "2024",
    duration: "5 months",
    location: "Regional",
    status: "Completed",
    summary:
      "Designed an ESG framework with metrics, governance, and reporting routines aligned to international standards.",
    highlights: ["ESG metrics established", "Disclosure templates rolled out", "Sustainability committee active"],
  },
  {
    title: "Donor Program M&E Strengthening",
    client: "Development Agency",
    sector: "Development",
    service: "Monitoring & Evaluation",
    year: "2024",
    duration: "4 months",
    location: "Multi-country",
    status: "Completed",
    summary:
      "Strengthened M&E frameworks, indicator quality, and reporting discipline for a multi-country donor-funded program.",
    highlights: ["Indicator quality reviewed", "Reporting cadence improved", "Donor confidence restored"],
  },
  {
    title: "Corporate PMO Maturity Assessment",
    client: "Energy Utility Group",
    sector: "Energy",
    service: "PMO Assessment",
    year: "2025",
    duration: "3 months",
    location: "On-site + remote",
    status: "Completed",
    summary:
      "Conducted a PMO maturity assessment across portfolio governance, reporting, and resource management with a remediation roadmap.",
    highlights: ["Maturity baseline established", "Roadmap with 24 actions", "Executive buy-in secured"],
  },
  {
    title: "Stakeholder Engagement for Major Capital Project",
    client: "Infrastructure Developer",
    sector: "Infrastructure",
    service: "Stakeholder Management",
    year: "2024",
    duration: "10 months",
    location: "Regional",
    status: "Completed",
    summary:
      "Mapped stakeholders, ran community consultations, and developed a strategic communications plan to support license to operate.",
    highlights: ["Stakeholder map established", "Community sessions delivered", "Comms plan adopted"],
  },
  {
    title: "Executive Leadership Program — Public Sector",
    client: "National Leadership Institute",
    sector: "Government",
    service: "Training & Development",
    year: "2025",
    duration: "12 weeks",
    location: "Hybrid",
    status: "Completed",
    summary:
      "Designed and delivered a multi-cohort leadership program for senior public sector executives across reform, governance, and delivery topics.",
    highlights: ["3 cohorts delivered", "Applied capstones executed", "High completion rate"],
  },
  {
    title: "IT Transformation Program Recovery",
    client: "Financial Services Group",
    sector: "Corporate",
    service: "Project Recovery",
    year: "2024",
    duration: "5 months",
    location: "Hybrid",
    status: "Completed",
    summary:
      "Diagnosed a stalled IT transformation, reset governance, mobilized recovery workstreams, and re-baselined delivery.",
    highlights: ["Recovery plan accepted", "Governance reset achieved", "Delivery confidence restored"],
  },
  {
    title: "PPP Capacity Building Workshop Series",
    client: "Investment Promotion Body",
    sector: "Government",
    service: "Academy",
    year: "2025",
    duration: "6 weeks",
    location: "Live online",
    status: "Completed",
    summary:
      "Designed a structured PPP capacity-building workshop series for institutional teams supporting transaction preparation.",
    highlights: ["6 modules delivered", "Toolkits distributed", "Cross-team alignment improved"],
  },
];


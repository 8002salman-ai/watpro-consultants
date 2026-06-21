export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  icon: string;
  features: string[];
  outcome: string;
}

export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  examples: string[];
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  readTime: string;
  featured?: boolean;
  url?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: string;
  outcome: string;
  description: string;
}

export interface AcademyProgram {
  id: string;
  title: string;
  level: string;
  duration: string;
  description: string;
  topics: string[];
  targetAudience: string;
}

export const founderProfile = {
  name: "Dr. Waseem Ali Tipu",
  title: "PhD Project Management | PPP & Sustainable Development Expert",
  shortTitle: "Founder & Principal Consultant",
  phone: "+923004122313",
  email: "waseemalitipu@gmail.com",
  linkedin: "https://www.linkedin.com/in/dr-waseem-ali-tipu-ph-d-pm-ms-pm-pmp-457a70b7",
  scholar: "https://scholar.google.com/citations?user=8xifQ6kAAAAJ&hl=en",
  photoUrl: "/dr-tipu.jpg",
  portfolio: "USD 300 Million+",
  yearsExp: "25+",
  publications: "14+",
  bio: "Dr. Waseem Ali Tipu is Pakistan's foremost authority on Public-Private Partnerships, project management, and sustainable infrastructure development. With over 25 years spanning military service, international peacekeeping, academia, and private consulting, he has shaped policy, delivered mega-projects, and trained the next generation of Pakistani infrastructure professionals. His USD 300M+ project portfolio spans defence acquisition, motorways, smart cities, and UN peacekeeping logistics — backed by a PhD in Project Management, an MS (Gold Medal), an MBA, and active PMP certification.",
  credentials: [
    "PhD – Project Management (MUST, Mirpur)",
    "MS Project Management – Gold Medal (MUST)",
    "MBA – Human Resource Management",
    "PMP (Project Management Professional – prep)",
    "Advance Diploma – Procurement & Contract Management (WISSEN)",
    "Strategic Intelligence Certification (UN)",
    "Project Performance Measurement & Management (PPMI)",
    "Supply Chain Management (PMI)",
  ],
  roles: [
    { org: "Air University Islamabad", role: "Faculty – Project Management & PPP" },
    { org: "Heavy Industries Taxila (HIT)", role: "Senior Project & Procurement Manager" },
    { org: "SDPI (Sustainable Dev Policy Institute)", role: "Consultant – PPP & Governance" },
    { org: "UN Peacekeeping Mission – Congo (MONUSCO)", role: "Logistics & Procurement Officer" },
    { org: "Pakistan Army", role: "29-year commissioned service" },
  ],
  quote: "The best infrastructure is not built from blueprints alone — it is built from strategy, trust, and relentless delivery.",
};

export const founderAwards = [
  { title: "UN Force Commander's Commendation Card", body: "United Nations", year: "Feb 2013", icon: "🏅" },
  { title: "Chief of Army Staff's Commendation Card", body: "Pakistan Army", year: "Aug 2015", icon: "🎖️" },
  { title: "Best Research Paper Award", body: "3rd International Conference on Project Management", year: "Oct 2022", icon: "📜" },
];

export const founderCertifications = [
  "Advance Diploma – Procurement & Contract Management (WISSEN)",
  "Strategic Intelligence Certification (United Nations)",
  "Project Performance Measurement and Management (PPMI)",
  "Supply Chain Management (PMI)",
  "Operational Logistic Support of UN Peacekeeping Mission",
];

export const founderPublications = [
  {
    id: "pub1",
    title: "Exploring the Nexus Between Sustainable Development Goals and Public-Private Partnerships: Empirical Evidence from Pakistan",
    journal: "Buildings",
    year: "2024",
    doi: "https://doi.org/10.3390/buildings14040948",
    type: "peer-reviewed",
    featured: true,
  },
  {
    id: "pub2",
    title: "Critical Success Factors for PPP Projects: A Systematic Literature Review",
    journal: "Journal of Construction Engineering and Management",
    year: "2023",
    doi: "",
    type: "peer-reviewed",
  },
  {
    id: "pub3",
    title: "Risk Allocation in Public-Private Partnerships: Evidence from Infrastructure Projects in Pakistan",
    journal: "International Journal of Project Management",
    year: "2022",
    doi: "",
    type: "peer-reviewed",
  },
  {
    id: "pub4",
    title: "Value for Money in PPP vs Traditional Procurement: A Comparative Study",
    journal: "Engineering, Construction and Architectural Management",
    year: "2022",
    doi: "",
    type: "peer-reviewed",
  },
  {
    id: "pub5",
    title: "Sustainable Infrastructure Financing Models for Developing Economies",
    journal: "Sustainable Cities and Society",
    year: "2021",
    doi: "",
    type: "peer-reviewed",
  },
  {
    id: "pub6",
    title: "Defence Acquisition Reform and Project Performance in Pakistan",
    journal: "Defence & Peace Economics",
    year: "2020",
    doi: "",
    type: "peer-reviewed",
  },
];

export const founderPressArticles = [
  { id: "p1", title: "Pakistan's PPP Framework: What Investors Need to Know", outlet: "The News International", year: "2023" },
  { id: "p2", title: "Why Smart Cities Need Smarter Contracts", outlet: "The News International", year: "2023" },
  { id: "p3", title: "Motorway Projects and the Lessons of Delay", outlet: "The News International", year: "2022" },
  { id: "p4", title: "Reforming Public Procurement in Pakistan", outlet: "The News International", year: "2022" },
  { id: "p5", title: "Defence Acquisition: Time for a Strategic Overhaul", outlet: "The News International", year: "2021" },
  { id: "p6", title: "The Hidden Cost of Poor Project Management", outlet: "The News International", year: "2021" },
  { id: "p7", title: "Sustainable Development and Infrastructure Finance", outlet: "The News International", year: "2020" },
  { id: "p8", title: "UN Peacekeeping Logistics: Lessons for Civil Infrastructure", outlet: "The News International", year: "2019" },
];

export const founderTrainingsDelivered = [
  "Public Private Partnership – Basic Level",
  "Public Private Partnership – Mid & Professional Level",
  "System Acquisition Process",
  "Project Management (PMBOK, MS Project, Primavera)",
  "Risk & Quality Management (PERT, Monte Carlo, AHP, SPSS, PLS)",
  "Project Management Information System",
];

export const impactStats = [
  { value: "USD 300M+", label: "Project Portfolio", icon: "💼" },
  { value: "25+", label: "Years Experience", icon: "📅" },
  { value: "14+", label: "Publications", icon: "📖" },
  { value: "UN", label: "Peacekeeping Experience", icon: "🌐" },
];

export const services: Service[] = [
  {
    id: "ppp",
    title: "Public-Private Partnership (PPP) Advisory",
    shortDesc: "Full-spectrum PPP advisory from feasibility to financial close and operations.",
    description: "WATPRO delivers end-to-end PPP advisory grounded in Dr. Tipu's decade-long research on Pakistan's PPP framework. We structure deals, assess value for money, allocate risks optimally, and guide projects from concept through financial close — aligned to SDPI, Planning Commission, and international best-practice standards.",
    icon: "🤝",
    features: ["PPP Feasibility & VfM Studies", "Risk Allocation Frameworks", "Bid Process Management", "Contract Structuring & Negotiation", "PPP Performance Monitoring", "Renegotiation & Dispute Support"],
    outcome: "Projects structured for bankability, sustainability, and long-term public value.",
  },
  {
    id: "project-management",
    title: "Project Management Consulting",
    shortDesc: "PMBOK-aligned project delivery for government and institutional clients.",
    description: "Drawing on Dr. Tipu's PhD-level expertise and USD 300M+ delivery track record, WATPRO embeds rigorous project management discipline into public sector programmes — from initiation and planning through execution, monitoring, and controlled closeout.",
    icon: "📊",
    features: ["PMO Setup & Governance", "Integrated Project Scheduling (Primavera/MS Project)", "Cost & Earned Value Management", "Risk Register & Monte Carlo Simulation", "Stakeholder Engagement Plans", "Project Health Checks & Recovery"],
    outcome: "On-time, on-budget delivery with full audit trails and governance compliance.",
  },
  {
    id: "procurement",
    title: "Procurement & Contract Management",
    shortDesc: "Strategic procurement advisory for transparent, compliant public expenditure.",
    description: "With an Advance Diploma in Procurement & Contract Management and HIT/UN procurement experience, WATPRO designs procurement strategies, manages competitive bidding, and structures contracts that protect the public interest while attracting quality private sector participation.",
    icon: "📋",
    features: ["Procurement Strategy Design", "Tender Documentation & Evaluation", "Contract Drafting & Review", "Supplier Prequalification", "PPRA/Public Procurement Rules Compliance", "Contract Claims & Disputes"],
    outcome: "Transparent, competitive procurement that maximises value and minimises legal risk.",
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development & Planning",
    shortDesc: "Strategic planning and programme management for large-scale infrastructure.",
    description: "WATPRO advises governments, development finance institutions, and private developers on the planning, programming, and financing of infrastructure — from motorways and smart cities to energy and social infrastructure — using evidence-based analytical frameworks.",
    icon: "🏗️",
    features: ["Infrastructure Master Planning", "Pre-Feasibility & Feasibility Studies", "Financial Modelling & Bankability", "Environmental & Social Safeguards Review", "Programme Governance", "Stakeholder & Community Engagement"],
    outcome: "Bankable infrastructure programmes that attract private and development finance.",
  },
  {
    id: "sustainable-development",
    title: "Sustainable Development Consulting",
    shortDesc: "SDG-aligned strategies that integrate sustainability into project design.",
    description: "Grounded in peer-reviewed research linking PPP outcomes to SDG achievement in Pakistan, WATPRO helps institutions embed sustainability into project appraisal, financing structures, and performance metrics — ensuring projects deliver lasting social, economic, and environmental value.",
    icon: "🌱",
    features: ["SDG Integration Frameworks", "ESG Assessment & Reporting", "Climate-Resilient Design Advisory", "Green Finance Structuring", "Impact Measurement", "Sustainability Reporting (GRI/SDG)"],
    outcome: "Investable projects aligned to global sustainability standards and SDG targets.",
  },
  {
    id: "defence-acquisition",
    title: "Defence Acquisition & System Acquisition",
    shortDesc: "Specialist advisory for defence procurement and system lifecycle management.",
    description: "Dr. Tipu's 29-year military career and senior role at Heavy Industries Taxila (HIT) — Pakistan's premier defence manufacturing complex — gives WATPRO unmatched insight into the System Acquisition Process, defence procurement reform, and lifecycle cost management for complex military systems.",
    icon: "⚙️",
    features: ["System Acquisition Process (SAP) Advisory", "Defence Procurement Strategy", "Lifecycle Cost Analysis", "Technical Requirements Definition", "Vendor Evaluation & Selection", "Offset Programme Management"],
    outcome: "Capability delivered on time, within budget, and through transparent process.",
  },
  {
    id: "policy",
    title: "Policy Development & Regulatory Reform",
    shortDesc: "Evidence-based policy design for enabling investment and institutional reform.",
    description: "WATPRO synthesises academic research, international benchmarks, and Pakistan-specific ground realities to craft actionable policy papers, regulatory frameworks, and institutional reform roadmaps for government ministries, provincial departments, and regulatory authorities.",
    icon: "📜",
    features: ["Policy Research & White Papers", "Regulatory Impact Assessment", "Institutional Strengthening", "Stakeholder Consultation Design", "Legislative Drafting Support", "International Benchmarking"],
    outcome: "Policy frameworks that unlock investment, improve governance, and build capacity.",
  },
  {
    id: "training",
    title: "Training & Capacity Building",
    shortDesc: "Professional development programmes that build institutional capacity.",
    description: "Through the WATPRO Academy, Dr. Tipu delivers practical, research-backed training in PPP, project management, procurement, and risk — combining PMBOK methodology, Monte Carlo simulation, and real Pakistan case studies to build enduring capability in public and private sector organisations.",
    icon: "🎓",
    features: ["PPP Basic & Advanced Programmes", "PMP Exam Preparation", "Procurement & Contract Masterclass", "Risk & Quality Management", "Project Management Information Systems", "Customised In-House Programmes"],
    outcome: "Certified, capable teams that deliver better projects independently.",
  },
];

export const industries: Industry[] = [
  { id: "govt", name: "Government & Public Sector", icon: "🏛️", description: "Federal and provincial ministries, planning bodies, and regulatory authorities seeking to modernise project delivery and attract private capital.", examples: ["Planning Commission", "PPIB", "Provincial P&D Departments", "PPRA"] },
  { id: "defence", name: "Defence & Aerospace", icon: "⚙️", description: "Pakistan's defence establishment and allied institutions, including HIT, NESCOM, and MoD-linked procurement authorities.", examples: ["HIT", "NESCOM", "Ordnance Factories", "MoD"] },
  { id: "infrastructure", name: "Transport & Infrastructure", icon: "🛣️", description: "Road, rail, port, and urban infrastructure developers, including NHA, CPEC corridor projects, and municipal development authorities.", examples: ["NHA", "FWO", "LDA", "CDA"] },
  { id: "energy", name: "Energy & Power", icon: "⚡", description: "IPPs, renewable energy developers, and utilities seeking PPP structuring, procurement support, and contract management.", examples: ["NEPRA", "PPIB", "WAPDA", "IPPs"] },
  { id: "urban", name: "Smart Cities & Urban Dev", icon: "🏙️", description: "Smart city initiatives, housing authorities, and urban regeneration programmes requiring integrated planning and financing solutions.", examples: ["Ravi Riverfront", "DHA", "CDA", "SMBR"] },
  { id: "intl", name: "International & Development", icon: "🌐", description: "UN agencies, multilateral development banks, and international NGOs implementing development programmes in Pakistan and the region.", examples: ["World Bank", "ADB", "UNDP", "UN-Habitat"] },
  { id: "academia", name: "Academic & Research", icon: "🎓", description: "Universities, think tanks, and research institutions collaborating on PPP policy, infrastructure finance, and sustainable development research.", examples: ["Air University", "MUST", "SDPI", "NUST"] },
  { id: "health", name: "Health & Social Infrastructure", icon: "🏥", description: "Hospital PPPs, education facility programmes, and social infrastructure projects where WATPRO applies VfM analysis and sustainability frameworks.", examples: ["Shaukat Khanum Model", "Sehat Sahulat", "Hospital PPPs"] },
];

export const academyPrograms: AcademyProgram[] = [
  {
    id: "ppp-basic",
    title: "Public-Private Partnership – Foundation Programme",
    level: "Foundation",
    duration: "2 Days",
    description: "An intensive introduction to PPP concepts, structures, and Pakistan's legal/regulatory framework. Designed for government officials, project managers, and private sector professionals entering the PPP space.",
    topics: ["PPP concept and rationale", "Types of PPP structures (BOT, BOOT, DBFOM)", "Pakistan's PPP framework and PPIB", "Risk identification and allocation basics", "VfM and public sector comparator", "Case studies from Pakistan"],
    targetAudience: "Government officials, planners, early-career project managers",
  },
  {
    id: "ppp-advanced",
    title: "Public-Private Partnership – Professional Programme",
    level: "Professional",
    duration: "4 Days",
    description: "Advanced PPP programme covering financial modelling, contract negotiation, performance monitoring, and renegotiation strategies. Grounded in Dr. Tipu's peer-reviewed research and real Pakistan case studies.",
    topics: ["Financial modelling and bankability analysis", "Contract drafting and key clauses", "Lender due diligence requirements", "Performance monitoring frameworks", "Renegotiation and dispute resolution", "International best practices (UK PFI, Australia PPP)"],
    targetAudience: "Senior officials, infrastructure lawyers, investment professionals, DFI staff",
  },
  {
    id: "project-mgmt",
    title: "Project Management Professional Programme",
    level: "Intermediate",
    duration: "5 Days",
    description: "Comprehensive project management training aligned with PMBOK® Guide. Covers scheduling with MS Project and Primavera P6, risk simulation, and earned value management — with PMP exam preparation included.",
    topics: ["PMBOK® process groups and knowledge areas", "WBS and schedule development", "MS Project / Primavera P6 hands-on", "Cost management and EVM", "Risk register and Monte Carlo simulation", "PMP exam preparation and question strategy"],
    targetAudience: "Project managers, PMO staff, engineers, government programme managers",
  },
  {
    id: "risk-quality",
    title: "Risk & Quality Management",
    level: "Intermediate",
    duration: "3 Days",
    description: "Practical risk and quality management using industry-standard techniques including PERT, Monte Carlo simulation, AHP, SPSS, and PLS-SEM — taught by a published researcher who uses these tools in peer-reviewed studies.",
    topics: ["Risk identification and qualitative assessment", "Quantitative risk analysis (PERT, Monte Carlo)", "AHP for multi-criteria decision making", "Quality management systems (ISO 9001)", "Statistical analysis with SPSS", "Structural equation modelling (PLS-SEM)"],
    targetAudience: "Risk managers, quality engineers, researchers, senior project managers",
  },
  {
    id: "procurement-training",
    title: "Procurement & Contract Management Masterclass",
    level: "Professional",
    duration: "3 Days",
    description: "Strategic procurement and contract management training compliant with PPRA Rules and international standards. Covers the full procurement cycle from planning through contract close-out.",
    topics: ["Procurement planning and strategy", "PPRA Rules and CPPA compliance", "Tender documentation and evaluation", "Contract types and key clauses", "Contract administration and claims", "Ethics and anti-corruption measures"],
    targetAudience: "Procurement officers, contract managers, finance professionals, auditors",
  },
  {
    id: "system-acquisition",
    title: "System Acquisition Process (SAP)",
    level: "Specialist",
    duration: "4 Days",
    description: "Specialist programme on the System Acquisition Process for defence and complex technical procurement. Based on Dr. Tipu's direct experience at HIT and Pakistan Army procurement structures.",
    topics: ["System acquisition lifecycle phases", "Requirements definition and analysis", "Source selection and evaluation", "Contract types for complex systems", "Test and evaluation planning", "Life-cycle cost management"],
    targetAudience: "Defence procurement officers, HIT/NESCOM staff, MoD planners, technical evaluators",
  },
];

export const insights: Insight[] = [
  {
    id: "sdg-ppp-2024",
    title: "Nexus Between SDGs and Public-Private Partnerships: Evidence from Pakistan",
    category: "Research",
    date: "2024",
    excerpt: "Peer-reviewed research published in Buildings journal (MDPI) establishing an empirical link between PPP project outcomes and SDG achievement in Pakistan's infrastructure sector.",
    readTime: "12 min",
    featured: true,
    url: "https://doi.org/10.3390/buildings14040948",
  },
  {
    id: "ppp-framework-2023",
    title: "Pakistan's PPP Framework: What Investors Need to Know in 2023",
    category: "Analysis",
    date: "2023",
    excerpt: "A comprehensive analysis of Pakistan's evolving PPP legislative and regulatory framework, identifying gaps and investment-readiness signals for domestic and foreign capital.",
    readTime: "8 min",
    featured: true,
  },
  {
    id: "smart-cities-2023",
    title: "Why Smart Cities Need Smarter Contracts",
    category: "Policy",
    date: "2023",
    excerpt: "Smart city projects fail not from technology gaps but from poorly structured public-private agreements. This article diagnoses the contractual failures and proposes remedies.",
    readTime: "6 min",
  },
  {
    id: "motorway-lessons-2022",
    title: "Motorway Projects and the Lessons of Delay",
    category: "Case Study",
    date: "2022",
    excerpt: "Pakistan's motorway programme has delivered transformational connectivity — but at a cost. An honest post-mortem of scheduling, procurement, and risk allocation failures.",
    readTime: "7 min",
  },
  {
    id: "procurement-reform-2022",
    title: "Reforming Public Procurement in Pakistan",
    category: "Policy",
    date: "2022",
    excerpt: "PPRA rules have improved transparency, but enforcement gaps and low capacity persist. A reform agenda grounded in international best practice and Pakistan's institutional reality.",
    readTime: "9 min",
  },
  {
    id: "defence-acquisition-2021",
    title: "Defence Acquisition: Time for a Strategic Overhaul",
    category: "Analysis",
    date: "2021",
    excerpt: "Pakistan's defence acquisition system is built for an earlier era. With HIT expanding its manufacturing mandate, the case for a modern, lifecycle-focused acquisition framework has never been stronger.",
    readTime: "10 min",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "hit-systems",
    title: "Defence Systems Procurement Programme",
    client: "Heavy Industries Taxila (HIT)",
    sector: "Defence Manufacturing",
    outcome: "Streamlined System Acquisition Process reducing procurement cycle time by 30%",
    description: "Led procurement strategy and contract management for complex defence systems at Pakistan's premier armour and vehicle manufacturing complex. Introduced lifecycle cost modelling and vendor performance frameworks.",
  },
  {
    id: "un-congo",
    title: "UN Peacekeeping Logistics & Procurement – Congo",
    client: "MONUSCO – United Nations",
    sector: "International / Peacekeeping",
    outcome: "Supply chain continuity maintained for 18-month mission with zero critical shortfalls",
    description: "Served as Logistics and Procurement Officer for the UN Mission in Congo, managing multi-million dollar supply chains in a complex operating environment. Awarded UN Force Commander's Commendation.",
  },
  {
    id: "sdpi-ppp",
    title: "PPP Policy Advisory – Federal & Provincial",
    client: "SDPI / Planning Commission",
    sector: "Policy & Governance",
    outcome: "Policy recommendations adopted in provincial PPP legislation",
    description: "Provided research-backed PPP policy advisory through SDPI, contributing to legislative reform and capacity building in provincial PPP units. Findings published in peer-reviewed journals.",
  },
  {
    id: "training-programme",
    title: "National Capacity Building Programme – PPP & PM",
    client: "Multiple Government Departments",
    sector: "Training & Capacity Building",
    outcome: "500+ officials trained across Pakistan in PPP and project management",
    description: "Designed and delivered multi-module training programmes for federal and provincial government officials, combining PMBOK methodology with Pakistan-specific PPP case studies and regulatory requirements.",
  },
];

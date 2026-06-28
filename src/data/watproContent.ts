import { FOUNDER_PHOTO } from '../assets';

// ─── TYPES ─────────────────────────────────────────────────────────────────────
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
  challenge: string;
  solution: string;
  impact: string[];
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

export interface PortfolioProject {
  title: string;
  client: string;
  sector: string;
  service: string;
  year: string;
  status: string;
  summary: string;
  highlights: string[];
  location: string;
  duration: string;
}

export interface Training {
  title: string;
  track: string;
  date: string;
  duration: string;
  summary: string;
  format: string;
  location: string;
  seats: string;
  audience: string;
}

export interface Event {
  title: string;
  format: string;
  date: string;
  summary: string;
  audience: string;
}

// ─── FOUNDER ───────────────────────────────────────────────────────────────────
export const founderProfile = {
  name: 'Dr. Waseem Ali Tipu',
  title: 'PhD Project Management | PPP & Sustainable Development Expert',
  shortTitle: 'Founder & Principal Consultant',
  phone: '+923004122313',
  email: 'info@watproconsultants.com',
  linkedin: 'https://www.linkedin.com/in/dr-waseem-ali-tipu-ph-d-pm-ms-pm-pmp-457a70b7',
  scholar: 'https://scholar.google.com/citations?user=8xifQ6kAAAAJ&hl=en',
  photoUrl: FOUNDER_PHOTO,
  portfolio: 'USD 300 Million+',
  yearsExp: '25+',
  publications: '14+',
  bio: "Dr. Waseem Ali Tipu is Pakistan's foremost authority on Public-Private Partnerships, project management, and sustainable infrastructure development. With over 25 years of experience in international peacekeeping, academia, and private consulting, he has shaped policy, delivered mega-projects, and trained the next generation of Pakistani infrastructure professionals. His USD 300M+ project portfolio spans defence acquisition, motorways, smart cities, and UN peacekeeping logistics — backed by a PhD in Project Management, an MS (Gold Medal), an MBA, and active PMP certification.",
  credentials: [
    'PhD – Project Management (MUST, Mirpur)',
    'MS Project Management – Gold Medal (MUST)',
    'MBA – Human Resource Management',
    'PMP (Project Management Professional – prep)',
    'Advance Diploma – Procurement & Contract Management (WISSEN)',
    'Strategic Intelligence Certification (UN)',
    'Project Performance Measurement & Management (PPMI)',
    'Supply Chain Management (PMI)',
  ],
  roles: [
    { org: 'Air University Islamabad', role: 'Faculty – Project Management & PPP' },
    { org: 'Heavy Industries Taxila (HIT)', role: 'Senior Project & Procurement Manager' },
    { org: 'SDPI (Sustainable Dev Policy Institute)', role: 'Consultant – PPP & Governance' },
    { org: 'UN Peacekeeping Mission – Congo (MONUSCO)', role: 'Logistics & Procurement Officer' },
    { org: 'Pakistan Army', role: '29-year commissioned service' },
  ],
  quote: 'The best infrastructure is not built from blueprints alone — it is built from strategy, trust, and relentless delivery.',
};

export const founderAwards = [
  { title: "UN Force Commander's Commendation Card", body: 'United Nations', year: 'Feb 2013', icon: '🏅' },
  { title: "Chief of Army Staff's Commendation Card", body: 'Pakistan Army', year: 'Aug 2015', icon: '🎖️' },
  { title: 'Best Research Paper Award', body: '3rd International Conference on Project Management', year: 'Oct 2022', icon: '📜' },
];

export const founderCertifications = [
  'Advance Diploma – Procurement & Contract Management (WISSEN)',
  'Strategic Intelligence Certification (United Nations)',
  'Project Performance Measurement and Management (PPMI)',
  'Supply Chain Management (PMI)',
  'Operational Logistic Support of UN Peacekeeping Mission',
];

export const founderPublications = [
  { id: 'pub1', title: 'Exploring the Nexus Between Sustainable Development Goals and Public-Private Partnerships: Empirical Evidence from Pakistan', journal: 'Buildings', year: '2024', doi: 'https://doi.org/10.3390/buildings14040948', type: 'peer-reviewed', featured: true },
  { id: 'pub2', title: 'Critical Success Factors for PPP Projects: A Systematic Literature Review', journal: 'Journal of Construction Engineering and Management', year: '2023', doi: '', type: 'peer-reviewed' },
  { id: 'pub3', title: 'Risk Allocation in Public-Private Partnerships: Evidence from Infrastructure Projects in Pakistan', journal: 'International Journal of Project Management', year: '2022', doi: '', type: 'peer-reviewed' },
  { id: 'pub4', title: 'Value for Money in PPP vs Traditional Procurement: A Comparative Study', journal: 'Engineering, Construction and Architectural Management', year: '2022', doi: '', type: 'peer-reviewed' },
  { id: 'pub5', title: 'Sustainable Infrastructure Financing Models for Developing Economies', journal: 'Sustainable Cities and Society', year: '2021', doi: '', type: 'peer-reviewed' },
  { id: 'pub6', title: 'Defence Acquisition Reform and Project Performance in Pakistan', journal: 'Defence & Peace Economics', year: '2020', doi: '', type: 'peer-reviewed' },
];

export const founderPressArticles = [
  { id: 'p1', title: "Pakistan's PPP Framework: What Investors Need to Know", outlet: 'The News International', year: '2023' },
  { id: 'p2', title: 'Why Smart Cities Need Smarter Contracts', outlet: 'The News International', year: '2023' },
  { id: 'p3', title: 'Motorway Projects and the Lessons of Delay', outlet: 'The News International', year: '2022' },
  { id: 'p4', title: 'Reforming Public Procurement in Pakistan', outlet: 'The News International', year: '2022' },
  { id: 'p5', title: 'Defence Acquisition: Time for a Strategic Overhaul', outlet: 'The News International', year: '2021' },
  { id: 'p6', title: 'The Hidden Cost of Poor Project Management', outlet: 'The News International', year: '2021' },
  { id: 'p7', title: 'Sustainable Development and Infrastructure Finance', outlet: 'The News International', year: '2020' },
  { id: 'p8', title: 'UN Peacekeeping Logistics: Lessons for Civil Infrastructure', outlet: 'The News International', year: '2019' },
];

export const founderTrainingsDelivered = [
  'Public Private Partnership – Basic Level',
  'Public Private Partnership – Mid & Professional Level',
  'System Acquisition Process',
  'Project Management (PMBOK, MS Project, Primavera)',
  'Risk & Quality Management (PERT, Monte Carlo, AHP, SPSS, PLS)',
  'Project Management Information System',
];

// ─── IMPACT STATS ──────────────────────────────────────────────────────────────
export const impactStats = [
  { value: 'USD 300M+', label: 'Project Portfolio', icon: '💼' },
  { value: '25+', label: 'Years Experience', icon: '📅' },
  { value: '14+', label: 'Publications', icon: '📖' },
  { value: 'UN', label: 'Peacekeeping Experience', icon: '🌐' },
];

// ─── SERVICES ──────────────────────────────────────────────────────────────────
export const services: Service[] = [
  { id: 'ppp', title: 'Public-Private Partnership (PPP) Advisory', shortDesc: 'Full-spectrum PPP advisory from feasibility to financial close and operations.', description: 'WATPRO delivers end-to-end PPP advisory grounded in Dr. Tipu\'s decade-long research on Pakistan\'s PPP framework. We structure deals, assess value for money, allocate risks optimally, and guide projects from concept through financial close — aligned to SDPI, Planning Commission, and international best-practice standards.', icon: '🤝', features: ['PPP Feasibility & VfM Studies','Risk Allocation Frameworks','Bid Process Management','Contract Structuring & Negotiation','PPP Performance Monitoring','Renegotiation & Dispute Support'], outcome: 'Projects structured for bankability, sustainability, and long-term public value.' },
  { id: 'project-management', title: 'Project Management Consulting', shortDesc: 'PMBOK-aligned project delivery for government and institutional clients.', description: 'Drawing on Dr. Tipu\'s PhD-level expertise and USD 300M+ delivery track record, WATPRO embeds rigorous project management discipline into public sector programmes — from initiation and planning through execution, monitoring, and controlled closeout.', icon: '📊', features: ['PMO Setup & Governance','Integrated Project Scheduling (Primavera/MS Project)','Cost & Earned Value Management','Risk Register & Monte Carlo Simulation','Stakeholder Engagement Plans','Project Health Checks & Recovery'], outcome: 'On-time, on-budget delivery with full audit trails and governance compliance.' },
  { id: 'procurement', title: 'Procurement & Contract Management', shortDesc: 'Strategic procurement advisory for transparent, compliant public expenditure.', description: 'With an Advance Diploma in Procurement & Contract Management and HIT/UN procurement experience, WATPRO designs procurement strategies, manages competitive bidding, and structures contracts that protect the public interest while attracting quality private sector participation.', icon: '📋', features: ['Procurement Strategy Design','Tender Documentation & Evaluation','Contract Drafting & Review','Supplier Prequalification','PPRA/Public Procurement Rules Compliance','Contract Claims & Disputes'], outcome: 'Transparent, competitive procurement that maximises value and minimises legal risk.' },
  { id: 'infrastructure', title: 'Infrastructure Development & Planning', shortDesc: 'Strategic planning and programme management for large-scale infrastructure.', description: 'WATPRO advises governments, development finance institutions, and private developers on the planning, programming, and financing of infrastructure — from motorways and smart cities to energy and social infrastructure — using evidence-based analytical frameworks.', icon: '🏗️', features: ['Infrastructure Master Planning','Pre-Feasibility & Feasibility Studies','Financial Modelling & Bankability','Environmental & Social Safeguards Review','Programme Governance','Stakeholder & Community Engagement'], outcome: 'Bankable infrastructure programmes that attract private and development finance.' },
  { id: 'sustainable-development', title: 'Sustainable Development Consulting', shortDesc: 'SDG-aligned strategies that integrate sustainability into project design.', description: 'Grounded in peer-reviewed research linking PPP outcomes to SDG achievement in Pakistan, WATPRO helps institutions embed sustainability into project appraisal, financing structures, and performance metrics — ensuring projects deliver lasting social, economic, and environmental value.', icon: '🌱', features: ['SDG Integration Frameworks','ESG Assessment & Reporting','Climate-Resilient Design Advisory','Green Finance Structuring','Impact Measurement','Sustainability Reporting (GRI/SDG)'], outcome: 'Investable projects aligned to global sustainability standards and SDG targets.' },
  { id: 'defence-acquisition', title: 'Defence Acquisition & System Acquisition', shortDesc: 'Specialist advisory for defence procurement and system lifecycle management.', description: 'Dr. Tipu\'s 29-year military career and senior role at Heavy Industries Taxila (HIT) — Pakistan\'s premier defence manufacturing complex — gives WATPRO unmatched insight into the System Acquisition Process, defence procurement reform, and lifecycle cost management for complex military systems.', icon: '⚙️', features: ['System Acquisition Process (SAP) Advisory','Defence Procurement Strategy','Lifecycle Cost Analysis','Technical Requirements Definition','Vendor Evaluation & Selection','Offset Programme Management'], outcome: 'Capability delivered on time, within budget, and through transparent process.' },
  { id: 'policy', title: 'Policy Development & Regulatory Reform', shortDesc: 'Evidence-based policy design for enabling investment and institutional reform.', description: 'WATPRO synthesises academic research, international benchmarks, and Pakistan-specific ground realities to craft actionable policy papers, regulatory frameworks, and institutional reform roadmaps for government ministries, provincial departments, and regulatory authorities.', icon: '📜', features: ['Policy Research & White Papers','Regulatory Impact Assessment','Institutional Strengthening','Stakeholder Consultation Design','Legislative Drafting Support','International Benchmarking'], outcome: 'Policy frameworks that unlock investment, improve governance, and build capacity.' },
  { id: 'training', title: 'Training & Capacity Building', shortDesc: 'Professional development programmes that build institutional capacity.', description: 'Through the WATPRO Academy, Dr. Tipu delivers practical, research-backed training in PPP, project management, procurement, and risk — combining PMBOK methodology, Monte Carlo simulation, and real Pakistan case studies to build enduring capability in public and private sector organisations.', icon: '🎓', features: ['PPP Basic & Advanced Programmes','PMP Exam Preparation','Procurement & Contract Masterclass','Risk & Quality Management','Project Management Information Systems','Customised In-House Programmes'], outcome: 'Certified, capable teams that deliver better projects independently.' },
];

// ─── INDUSTRIES ────────────────────────────────────────────────────────────────
export const industries: Industry[] = [
  { id: 'govt', name: 'Government & Public Sector', icon: '🏛️', description: 'Federal and provincial ministries, planning bodies, and regulatory authorities seeking to modernise project delivery and attract private capital.', examples: ['Planning Commission','PPIB','Provincial P&D Departments','PPRA'] },
  { id: 'defence', name: 'Defence & Aerospace', icon: '⚙️', description: 'Pakistan\'s defence establishment and allied institutions, including HIT, NESCOM, and MoD-linked procurement authorities.', examples: ['HIT','NESCOM','Ordnance Factories','MoD'] },
  { id: 'infrastructure', name: 'Transport & Infrastructure', icon: '🛣️', description: 'Road, rail, port, and urban infrastructure developers, including NHA, CPEC corridor projects, and municipal development authorities.', examples: ['NHA','FWO','LDA','CDA'] },
  { id: 'energy', name: 'Energy & Power', icon: '⚡', description: 'IPPs, renewable energy developers, and utilities seeking PPP structuring, procurement support, and contract management.', examples: ['NEPRA','PPIB','WAPDA','IPPs'] },
  { id: 'urban', name: 'Smart Cities & Urban Dev', icon: '🏙️', description: 'Smart city initiatives, housing authorities, and urban regeneration programmes requiring integrated planning and financing solutions.', examples: ['Ravi Riverfront','DHA','CDA','SMBR'] },
  { id: 'intl', name: 'International & Development', icon: '🌐', description: 'UN agencies, multilateral development banks, and international NGOs implementing development programmes in Pakistan and the region.', examples: ['World Bank','ADB','UNDP','UN-Habitat'] },
  { id: 'academia', name: 'Academic & Research', icon: '🎓', description: 'Universities, think tanks, and research institutions collaborating on PPP policy, infrastructure finance, and sustainable development research.', examples: ['Air University','MUST','SDPI','NUST'] },
  { id: 'health', name: 'Health & Social Infrastructure', icon: '🏥', description: 'Hospital PPPs, education facility programmes, and social infrastructure projects where WATPRO applies VfM analysis and sustainability frameworks.', examples: ['Shaukat Khanum Model','Sehat Sahulat','Hospital PPPs'] },
];

// ─── ACADEMY PROGRAMS ──────────────────────────────────────────────────────────
export const academyPrograms: AcademyProgram[] = [
  { id: 'ppp-basic', title: 'Public-Private Partnership – Foundation Programme', level: 'Foundation', duration: '2 Days', description: 'An intensive introduction to PPP concepts, structures, and Pakistan\'s legal/regulatory framework.', topics: ['PPP concept and rationale','Types of PPP structures (BOT, BOOT, DBFOM)','Pakistan\'s PPP framework and PPIB','Risk identification and allocation basics','VfM and public sector comparator','Case studies from Pakistan'], targetAudience: 'Government officials, planners, early-career project managers' },
  { id: 'ppp-advanced', title: 'Public-Private Partnership – Professional Programme', level: 'Professional', duration: '4 Days', description: 'Advanced PPP programme covering financial modelling, contract negotiation, performance monitoring, and renegotiation strategies.', topics: ['Financial modelling and bankability analysis','Contract drafting and key clauses','Lender due diligence requirements','Performance monitoring frameworks','Renegotiation and dispute resolution','International best practices (UK PFI, Australia PPP)'], targetAudience: 'Senior officials, infrastructure lawyers, investment professionals, DFI staff' },
  { id: 'project-mgmt', title: 'Project Management Professional Programme', level: 'Intermediate', duration: '5 Days', description: 'Comprehensive project management training aligned with PMBOK® Guide.', topics: ['PMBOK® process groups and knowledge areas','WBS and schedule development','MS Project / Primavera P6 hands-on','Cost management and EVM','Risk register and Monte Carlo simulation','PMP exam preparation and question strategy'], targetAudience: 'Project managers, PMO staff, engineers, government programme managers' },
  { id: 'risk-quality', title: 'Risk & Quality Management', level: 'Intermediate', duration: '3 Days', description: 'Practical risk and quality management using PERT, Monte Carlo simulation, AHP, SPSS, and PLS-SEM.', topics: ['Risk identification and qualitative assessment','Quantitative risk analysis (PERT, Monte Carlo)','AHP for multi-criteria decision making','Quality management systems (ISO 9001)','Statistical analysis with SPSS','Structural equation modelling (PLS-SEM)'], targetAudience: 'Risk managers, quality engineers, researchers, senior project managers' },
  { id: 'procurement-training', title: 'Procurement & Contract Management Masterclass', level: 'Professional', duration: '3 Days', description: 'Strategic procurement and contract management training compliant with PPRA Rules and international standards.', topics: ['Procurement planning and strategy','PPRA Rules and CPPA compliance','Tender documentation and evaluation','Contract types and key clauses','Contract administration and claims','Ethics and anti-corruption measures'], targetAudience: 'Procurement officers, contract managers, finance professionals, auditors' },
  { id: 'system-acquisition', title: 'System Acquisition Process (SAP)', level: 'Specialist', duration: '4 Days', description: 'Specialist programme on the System Acquisition Process for defence and complex technical procurement.', topics: ['System acquisition lifecycle phases','Requirements definition and analysis','Source selection and evaluation','Contract types for complex systems','Test and evaluation planning','Life-cycle cost management'], targetAudience: 'Defence procurement officers, HIT/NESCOM staff, MoD planners, technical evaluators' },
];

// ─── INSIGHTS ──────────────────────────────────────────────────────────────────
export const insights: Insight[] = [
  { id: 'sdg-ppp-2024', title: 'Nexus Between SDGs and Public-Private Partnerships: Evidence from Pakistan', category: 'Research', date: '2024', excerpt: 'Peer-reviewed research published in Buildings journal (MDPI) establishing an empirical link between PPP project outcomes and SDG achievement in Pakistan\'s infrastructure sector.', readTime: '12 min', featured: true, url: 'https://doi.org/10.3390/buildings14040948' },
  { id: 'ppp-framework-2023', title: 'Pakistan\'s PPP Framework: What Investors Need to Know in 2023', category: 'Analysis', date: '2023', excerpt: 'A comprehensive analysis of Pakistan\'s evolving PPP legislative and regulatory framework, identifying gaps and investment-readiness signals for domestic and foreign capital.', readTime: '8 min', featured: true },
  { id: 'smart-cities-2023', title: 'Why Smart Cities Need Smarter Contracts', category: 'Policy', date: '2023', excerpt: 'Smart city projects fail not from technology gaps but from poorly structured public-private agreements. This article diagnoses the contractual failures and proposes remedies.', readTime: '6 min' },
  { id: 'motorway-lessons-2022', title: 'Motorway Projects and the Lessons of Delay', category: 'Case Study', date: '2022', excerpt: 'Pakistan\'s motorway programme has delivered transformational connectivity — but at a cost. An honest post-mortem of scheduling, procurement, and risk allocation failures.', readTime: '7 min' },
  { id: 'procurement-reform-2022', title: 'Reforming Public Procurement in Pakistan', category: 'Policy', date: '2022', excerpt: 'PPRA rules have improved transparency, but enforcement gaps and low capacity persist. A reform agenda grounded in international best practice and Pakistan\'s institutional reality.', readTime: '9 min' },
  { id: 'defence-acquisition-2021', title: 'Defence Acquisition: Time for a Strategic Overhaul', category: 'Analysis', date: '2021', excerpt: 'Pakistan\'s defence acquisition system is built for an earlier era. With HIT expanding its manufacturing mandate, the case for a modern, lifecycle-focused acquisition framework has never been stronger.', readTime: '10 min' },
];

// ─── CASE STUDIES ──────────────────────────────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  { id: 'hit-systems', title: 'Defence Systems Procurement Programme', client: 'Heavy Industries Taxila (HIT)', sector: 'Defence Manufacturing', outcome: 'Streamlined System Acquisition Process reducing procurement cycle time by 30%', description: 'Led procurement strategy and contract management for complex defence systems at Pakistan\'s premier armour and vehicle manufacturing complex.', challenge: 'An outdated acquisition process was causing 40-50% schedule overruns and poor vendor performance visibility across multi-year defence contracts.', solution: 'Introduced lifecycle cost modelling, vendor performance scorecards, and a structured SAP-aligned procurement workflow across all major acquisitions.', impact: ['Procurement cycle time reduced by 30%','Vendor performance transparency increased across 15+ suppliers','Lifecycle cost visibility improved for USD 50M+ contract portfolio','SAP framework adopted as institutional standard'] },
  { id: 'un-congo', title: 'UN Peacekeeping Logistics & Procurement – Congo', client: 'MONUSCO – United Nations', sector: 'International / Peacekeeping', outcome: 'Supply chain continuity maintained for 18-month mission with zero critical shortfalls', description: 'Served as Logistics and Procurement Officer for the UN Mission in Congo, managing multi-million dollar supply chains in a complex operating environment.', challenge: 'Maintaining uninterrupted supply chains for a multi-national peacekeeping force operating across remote and insecure areas of the DRC.', solution: 'Implemented robust inventory management, pre-positioned strategic reserves, and developed local procurement frameworks to reduce import dependency.', impact: ['Zero critical supply shortfalls across 18-month deployment','Local procurement framework reduced costs by 20%','Awarded UN Force Commander\'s Commendation for logistics excellence','Supply chain model adopted as regional best practice'] },
  { id: 'sdpi-ppp', title: 'PPP Policy Advisory – Federal & Provincial', client: 'SDPI / Planning Commission', sector: 'Policy & Governance', outcome: 'Policy recommendations adopted in provincial PPP legislation', description: 'Provided research-backed PPP policy advisory through SDPI, contributing to legislative reform and capacity building in provincial PPP units.', challenge: 'Weak institutional capacity and unclear legislative frameworks were preventing provincial governments from attracting private investment in infrastructure.', solution: 'Developed evidence-based policy recommendations grounded in comparative analysis of UK, Australia, and India PPP frameworks, adapted to Pakistan\'s constitutional and fiscal realities.', impact: ['Recommendations adopted in provincial PPP legislation','PPP unit capacity built across 3 provinces','Policy brief cited by Planning Commission in PSDP deliberations','Research published in peer-reviewed journal'] },
  { id: 'training-programme', title: 'National Capacity Building Programme – PPP & PM', client: 'Multiple Government Departments', sector: 'Training & Capacity Building', outcome: '500+ officials trained across Pakistan in PPP and project management', description: 'Designed and delivered multi-module training programmes for federal and provincial government officials, combining PMBOK methodology with Pakistan-specific PPP case studies and regulatory requirements.', challenge: 'Government departments were struggling to implement PPP and PMBOK frameworks due to low awareness and absence of locally relevant training material.', solution: 'Developed a modular training curriculum combining international frameworks (PMBOK, PPP best practice) with Pakistan-specific case studies, PPRA rules, and interactive simulations.', impact: ['500+ officials trained across federal and provincial departments','Training adopted as standard for 3 provincial P&D departments','Post-training assessment scores averaging 82%','Follow-on consulting mandates generated from 4 trained departments'] },
];

// ─── PAGE META (legacy compatibility) ────────────────────────────────────────
export const pageMeta = {
  portfolio: { eyebrow: 'Project Portfolio', title: 'Delivery Track Record', subtitle: 'A snapshot of WATPRO engagements across PPP, procurement, infrastructure, and capacity building.', description: 'A snapshot of WATPRO engagements across PPP, procurement, infrastructure, and capacity building.' },
  blog: { eyebrow: 'Insights & Analysis', title: 'Knowledge From the Field', subtitle: 'Perspectives on infrastructure, PPP, project delivery, and governance from Dr. Waseem Ali Tipu.', description: 'Perspectives on infrastructure, PPP, project delivery, and governance from Dr. Waseem Ali Tipu.' },
  'training-calendar': { eyebrow: 'WATPRO Academy', title: 'Training Calendar', subtitle: 'Register for upcoming PPP, project management, and procurement programmes.', description: 'Register for upcoming PPP, project management, and procurement programmes.' },
  'case-studies': { eyebrow: 'Case Studies', title: 'Impact in Action', subtitle: 'Real engagements. Measurable outcomes. Lasting institutional capability.', description: 'Real engagements. Measurable outcomes. Lasting institutional capability.' },
  events: { eyebrow: 'Events & Conferences', title: 'WATPRO at the Podium', subtitle: 'Keynote speeches, panel discussions, and workshop facilitation by Dr. Tipu.', description: 'Keynote speeches, panel discussions, and workshop facilitation by Dr. Tipu.' },
};

// ─── PORTFOLIO PROJECTS (legacy) ──────────────────────────────────────────────
export const portfolioProjects: PortfolioProject[] = [
  { title: 'Defence Systems Procurement Reform', client: 'Heavy Industries Taxila (HIT)', sector: 'Defence', service: 'Procurement & Contracts', year: '2022', status: 'Completed', summary: 'Restructured the System Acquisition Process and introduced lifecycle cost modelling for complex defence systems.', highlights: ['SAP framework adopted as institutional standard','Procurement cycle time reduced 30%','Vendor performance scorecards introduced'], location: 'Taxila, Pakistan', duration: '14 months' },
  { title: 'UN Mission Logistics Optimisation – Congo', client: 'MONUSCO / United Nations', sector: 'International Development', service: 'Procurement & Contracts', year: '2013', status: 'Completed', summary: 'Managed multi-million dollar supply chains for a UN peacekeeping mission in the Democratic Republic of Congo.', highlights: ['Zero critical supply shortfalls across 18 months','Local procurement framework reduced costs 20%','UN Force Commander Commendation awarded'], location: 'DRC (Congo)', duration: '18 months' },
  { title: 'PPP Legislative Framework Advisory', client: 'SDPI / Planning Commission', sector: 'Government & Policy', service: 'PPP Advisory', year: '2021', status: 'Completed', summary: 'Research-backed PPP policy advisory leading to legislative adoption in multiple provincial frameworks.', highlights: ['Recommendations adopted in provincial legislation','Research published in peer-reviewed journal','PPP unit capacity built across 3 provinces'], location: 'Islamabad, Pakistan', duration: '18 months' },
  { title: 'National PPP & PM Capacity Building', client: 'Multiple Government Departments', sector: 'Government & Policy', service: 'Training & Capacity Building', year: '2023', status: 'Completed', summary: 'Multi-module training programme for 500+ federal and provincial government officials in PPP and project management.', highlights: ['500+ officials trained','Training adopted by 3 provincial P&D departments','Post-training assessment scores averaging 82%'], location: 'Islamabad / Lahore / Karachi', duration: '24 months' },
  { title: 'Air University PM & PPP Curriculum', client: 'Air University Islamabad', sector: 'Academic & Research', service: 'Training & Capacity Building', year: '2023', status: 'In Delivery', summary: 'Developed and delivers Project Management and PPP curriculum for postgraduate students at Air University.', highlights: ['Curriculum adopted for MS PM programme','PMBOK and Pakistan PPP case studies integrated','Student placement rate improved 25%'], location: 'Islamabad, Pakistan', duration: 'Ongoing' },
];

// ─── TRAININGS (legacy) ────────────────────────────────────────────────────────
export const trainings: Training[] = [
  { title: 'PPP Foundation Programme', track: 'PPP', date: 'Quarterly – Next: Q3 2026', duration: '2 Days', summary: 'An intensive introduction to PPP concepts, structures, and Pakistan\'s legal framework. Covers BOT, BOOT, DBFOM, VfM analysis, and risk allocation basics.', format: 'In-Person', location: 'Islamabad', seats: 'Limited – 20 seats', audience: 'Government officials, planners, project managers' },
  { title: 'PPP Professional Certificate', track: 'PPP', date: 'Bi-annual – Next: Sep 2026', duration: '4 Days', summary: 'Advanced PPP programme: financial modelling, contract drafting, performance monitoring, renegotiation strategies, and international best practice.', format: 'In-Person', location: 'Islamabad / Lahore', seats: 'Limited – 15 seats', audience: 'Senior officials, infrastructure lawyers, DFI staff, investment professionals' },
  { title: 'Project Management Professional Programme', track: 'Project Management', date: 'Monthly – Next: Jul 2026', duration: '5 Days', summary: 'PMBOK®-aligned programme with hands-on Primavera P6 and MS Project training, EVM, Monte Carlo risk simulation, and PMP exam preparation.', format: 'In-Person / Virtual', location: 'Islamabad / Online', seats: 'Open enrolment', audience: 'Project managers, PMO staff, engineers, programme managers' },
  { title: 'Procurement & Contract Management Masterclass', track: 'Procurement', date: 'Quarterly – Next: Aug 2026', duration: '3 Days', summary: 'Full procurement cycle training from strategy through contract close-out. PPRA Rules, tender documentation, contract drafting, and claims management.', format: 'In-Person', location: 'Islamabad', seats: 'Limited – 20 seats', audience: 'Procurement officers, contract managers, auditors, finance professionals' },
  { title: 'Risk & Quality Management', track: 'Project Management', date: 'Bi-annual – Next: Oct 2026', duration: '3 Days', summary: 'Quantitative and qualitative risk management using PERT, Monte Carlo simulation, AHP, SPSS, and PLS-SEM. ISO 9001 quality management systems included.', format: 'In-Person', location: 'Islamabad', seats: 'Limited – 15 seats', audience: 'Risk managers, quality engineers, researchers, senior project managers' },
  { title: 'System Acquisition Process (SAP)', track: 'Defence & Procurement', date: 'Annual – Next: Nov 2026', duration: '4 Days', summary: 'Specialist defence acquisition programme covering SAP lifecycle, requirements definition, source selection, lifecycle costing, and test & evaluation planning.', format: 'In-Person (restricted)', location: 'Islamabad / Taxila', seats: 'By invitation – 12 seats', audience: 'Defence procurement officers, HIT/NESCOM staff, MoD planners, technical evaluators' },
];

// ─── EVENTS (legacy) ──────────────────────────────────────────────────────────
export const events: Event[] = [
  { title: 'PPP Summit Pakistan 2026 – Keynote Speaker', format: 'Conference Keynote', date: 'Sep 2026', summary: 'Dr. Tipu presents research findings on SDG-PPP nexus and provides a roadmap for Pakistan\'s infrastructure investment pipeline over the next decade.', audience: 'Government ministers, DFI representatives, private developers, multilateral agencies' },
  { title: 'PMBOK Workshop – Air University Islamabad', format: 'Workshop', date: 'Jul 2026', summary: 'Two-day intensive PMBOK workshop for postgraduate students and faculty covering project lifecycle, scheduling, EVM, and risk management with Pakistan case studies.', audience: 'MS Project Management students, faculty, and industry partners' },
  { title: 'Procurement Reform Roundtable – Planning Commission', format: 'Roundtable', date: 'Aug 2026', summary: 'Facilitated policy roundtable on reforming Pakistan\'s public procurement framework, drawing on international benchmarks and Dr. Tipu\'s field research.', audience: 'Senior federal procurement officials, parliamentary committee members, multilateral advisors' },
  { title: 'Defence Acquisition Reform Forum – HIT', format: 'Panel Discussion', date: 'Oct 2026', summary: 'Panel discussion on modernising Pakistan\'s defence acquisition lifecycle: from requirements definition to lifecycle cost management and offset programmes.', audience: 'Defence procurement officers, HIT leadership, defence industry representatives, MoD officials' },
];

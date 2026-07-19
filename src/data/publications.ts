// ─── CENTRAL PUBLICATIONS DATA ────────────────────────────────────────────────
// Single source of truth for Dr. Tipu's publications. All pages (Publications,
// About, Home, Insights) must derive lists and counts from this file so totals
// stay synchronized when new work is added.

export interface ResearchPublication {
  id: string;
  authors: string;
  year: number;
  title: string;
  journal: string;
  volumeIssue?: string;
  pages?: string;
  link?: string;
  linkLabel: 'View DOI' | 'View Publication';
  featured?: boolean;
}

export interface PressArticle {
  id: string;
  year: number;
  date: string; // e.g. "November 18, 2024"
  title: string;
  outlet: string;
  link: string;
}

// Newest first
export const researchPublications: ResearchPublication[] = [
  {
    id: 'rp-2026-amsj-ai',
    authors: 'Tipu, W. A., Qazi, A., Rafique, A., & Nadeem, M.',
    year: 2026,
    title:
      'Mediating role of artificial intelligence in enhancing sustainable public-private partnership performance through critical success factors',
    journal: 'Administrative and Management Sciences Journal',
    volumeIssue: '4(2)',
    pages: '106–116',
    link: 'https://doi.org/10.59365/amsj.4(2).2026.193',
    linkLabel: 'View DOI',
    featured: true,
  },
  {
    id: 'rp-2024-buildings',
    authors: 'Tipu, W. A., Mughal, Y. H., Kundi, G. M., Nair, K. S., & Thurasamy, R.',
    year: 2024,
    title:
      'Enhancing the Sustainable Performance of Public–Private Partnership Projects: The Buffering Effect of Environmental Uncertainty',
    journal: 'Buildings',
    volumeIssue: '14(12)',
    pages: '3879',
    link: 'https://www.mdpi.com/2075-5309/14/12/3879',
    linkLabel: 'View Publication',
    featured: true,
  },
  {
    id: 'rp-2023-jemi-agency',
    authors: 'Ali, W., Turi, J. A., & Iqbal, S.',
    year: 2023,
    title: 'Evaluating agency problem for sustainable public-private partnership projects performance',
    journal: 'Journal of Entrepreneurship, Management, and Innovation',
    volumeIssue: '5(1)',
    pages: '1–19',
    linkLabel: 'View Publication',
  },
  {
    id: 'rp-2022-amsj-agency',
    authors: 'Tipu, W. A., & Yousaf, T.',
    year: 2022,
    title: 'Agency theory in public-private partnership projects',
    journal: 'Administrative and Management Sciences Journal',
    volumeIssue: '1(1)',
    pages: '71–78',
    link: 'https://mdripublishing.com/index.php/AMSJ/article/view/29',
    linkLabel: 'View Publication',
  },
  {
    id: 'rp-2022-jms-plm',
    authors: 'Tipu, M. W. A., Haider, F., & Imran, M.',
    year: 2022,
    title:
      'Product Life Cycle Management: Relationship between Product Lifecycle Management Centric Information and Product Quality',
    journal: 'Journal of Managerial Sciences',
    volumeIssue: '16(4)',
    pages: '46–68',
    link: 'https://journals.qurtuba.edu.pk/ojs/index.php/jms/article/view/698',
    linkLabel: 'View Publication',
  },
  {
    id: 'rp-2022-jsrd-csf',
    authors: 'Tipu, W. A., Turi, J. A., & Khan, M. A.',
    year: 2022,
    title:
      'Relationship Between Critical Success Factors for Public Private Partnership and Sustainable PPP Project Performance',
    journal: 'Journal of Social Research Development',
    volumeIssue: '3(2)',
    pages: '263–274',
    link: 'https://www.academia.edu/download/112290298/70.pdf',
    linkLabel: 'View Publication',
  },
  {
    id: 'rp-2021-pae-slr',
    authors: 'Tipu, W. A., & Khan, R. A.',
    year: 2021,
    title:
      'Evaluating critical success factors of public-private partnership for sustainable performance: A systematic literature review',
    journal: 'Psychology and Education (ISSN: 1533-6939)',
    volumeIssue: '58(5)',
    pages: '4430–4459',
    link: 'http://psychologyandeducation.net/pae/index.php/pae/article/view/6251',
    linkLabel: 'View Publication',
  },
];

// Newest first
export const pressArticles: PressArticle[] = [
  {
    id: 'pa-2026-defence-budgeting',
    year: 2026,
    date: 'July 5, 2026',
    title: 'Defence budgeting in a tight fiscal space',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.pk/tns/detail/1424040-defence-budgeting-in-a-tight-fiscal-space',
  },
  {
    id: 'pa-2026-blue-economy',
    year: 2026,
    date: 'May 17, 2026',
    title: 'Blue economy: a strategic necessity',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.pk/tns/detail/1415851-blue-economy-a-strategic-necessity',
  },
  {
    id: 'pa-2026-ppp-gulf',
    year: 2026,
    date: 'April 19, 2026',
    title: 'Public-private partnerships in the Gulf',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.pk/tns/detail/1410798-public-private-partnerships-in-the-gulf',
  },
  {
    id: 'pa-2026-privatisation-vs-ppp',
    year: 2026,
    date: 'January 4, 2026',
    title: 'Privatisation vs Public–Private Partnership',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.pk/tns/detail/1390601-privatisation-vs-public-private-partnership',
  },
  {
    id: 'pa-2025-water-security',
    year: 2025,
    date: 'October 15, 2025',
    title: 'Water Security Through Public–Private Partnerships',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.pk/tns/detail/1383714-water-security-through-public-private-partnerships',
  },
  {
    id: 'pa-2025-pak-saudi',
    year: 2025,
    date: 'September 28, 2025',
    title: 'Pak-Saudi private-public co-operation',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.com.pk/tns/detail/1346851-pak-saudi-private-public-co-operation',
  },
  {
    id: 'pa-2025-flood-management',
    year: 2025,
    date: 'September 14, 2025',
    title: 'A roadmap for flood management',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.com.pk/tns/detail/1343423-a-roadmap-for-flood-management',
  },
  {
    id: 'pa-2025-small-scale-ppp',
    year: 2025,
    date: 'August 3, 2025',
    title: 'Small-scale public-private partnership',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.com.pk/tns/detail/1332746-small-scale-public-private-partnership',
  },
  {
    id: 'pa-2025-tariffs',
    year: 2025,
    date: 'May 4, 2025',
    title: 'Using a tariffs opportunity to triumph',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.com.pk/tns/detail/1307899-using-a-tariffs-opportunity-to-triumph',
  },
  {
    id: 'pa-2025-renewable-energy',
    year: 2025,
    date: 'April 13, 2025',
    title: 'Renewable energy conundrum',
    outlet: 'The News on Sunday',
    link: 'https://www.thenews.com.pk/tns/detail/1300642-renewable-energyconundrum',
  },
  {
    id: 'pa-2024-electric-dreams',
    year: 2024,
    date: 'November 18, 2024',
    title: 'Electric dreams',
    outlet: 'The News (Money Matters)',
    link: 'https://www.thenews.com.pk/magazine/moneymatters/1251983-electric-dreams',
  },
];

// Derived counts — never hardcode these elsewhere.
export const researchCount = researchPublications.length;
export const pressCount = pressArticles.length;
export const totalPublications = researchCount + pressCount;

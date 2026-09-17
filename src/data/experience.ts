export type ExperienceItem = {
  company: string
  role: string
  period: string
  responsibilities: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Softkea Tech',
    role: 'Backend Developer',
    period: 'Present',
    responsibilities: [
      'Developed backend APIs using NestJS, Node.js, and TypeScript.',
      'Implemented business logic for backend application features and workflows.',
      'Performed API testing to validate backend functionality and identify issues.',
      'Investigated and resolved bugs during development and testing.',
      'Worked with REST APIs and backend technologies including PostgreSQL and MongoDB.',
    ],
  },
  {
    company: 'SCH Info Tech Private Limited',
    role: 'UI Developer',
    period: '3 Months',
    responsibilities: [
      'Worked on existing, pre-built UI templates and applications based on project requirements.',
      'Customized and modified existing UI components using HTML and CSS.',
      'Implemented UI changes related to layouts, styling, and page-level requirements.',
    ],
  },
  {
    company: 'Face Prep',
    role: 'Technical Trainer – DSA',
    period: '3 Months',
    responsibilities: [
      'Completed a 3-month internship as a Technical Trainer – DSA with Python.',
      'Developed and delivered training sessions related to Data Structures and Algorithms.',
      'Applied communication and problem-solving skills while delivering technical training.',
    ],
  },
]

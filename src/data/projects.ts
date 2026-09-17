export type Project = {
  id: string
  title: string
  category: string
  description: string
  technologies: string[]
  details: string[]
  /** Replace with a live demo URL when available */
  liveUrl: string
  /** Replace with a GitHub repository URL when available */
  githubUrl: string
}

export const PROJECTS: Project[] = [
  {
    id: 'food-delivery',
    title: 'Food Delivery App',
    category: 'UI/UX Design',
    description:
      'Designed a food delivery application using UI and UX design principles. Focused on presenting the application flow and interface in a user-friendly manner.',
    technologies: ['UI Design', 'UX Design'],
    details: [
      'Mapped a clear order-to-delivery flow with an emphasis on readability.',
      'Designed screens around user-friendly navigation and visual hierarchy.',
      'Presented the interface as a complete application experience, not isolated screens.',
    ],
    liveUrl: '',
    githubUrl: '',
  },
  {
    id: 'task-management',
    title: 'Task Management System',
    category: 'Web Application',
    description:
      'Developed a task management system using HTML, CSS, and JavaScript. Created an interface for managing and organizing tasks.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: [
      'Built a browser-based interface for creating and organizing tasks.',
      'Used HTML, CSS, and JavaScript to structure, style, and handle interactions.',
      'Focused on a clean layout that makes task status easy to scan.',
    ],
    liveUrl: '',
    githubUrl: '',
  },
]

export type SkillCategory =
  | 'All'
  | 'Frontend'
  | 'Backend'
  | 'Database'
  | 'Languages'
  | 'Tools'

export type Skill = {
  name: string
  category: Exclude<SkillCategory, 'All'>
  color: string
}

export const SKILL_FILTERS: SkillCategory[] = [
  'All',
  'Frontend',
  'Backend',
  'Database',
  'Languages',
  'Tools',
]

export const SKILLS: Skill[] = [
  { name: 'JavaScript', category: 'Languages', color: '#f7df1e' },
  { name: 'TypeScript', category: 'Languages', color: '#3178c6' },
  { name: 'Java', category: 'Languages', color: '#f89820' },
  { name: 'Python', category: 'Languages', color: '#3776ab' },
  { name: 'React', category: 'Frontend', color: '#61dafb' },
  { name: 'HTML5', category: 'Frontend', color: '#e34f26' },
  { name: 'CSS3', category: 'Frontend', color: '#1572b6' },
  { name: 'Bootstrap', category: 'Frontend', color: '#7952b3' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'NestJS', category: 'Backend', color: '#e0234e' },
  { name: 'Spring Boot', category: 'Backend', color: '#6db33f' },
  { name: 'REST APIs', category: 'Backend', color: '#38bdf8' },
  { name: 'PostgreSQL', category: 'Database', color: '#4169e1' },
  { name: 'MongoDB', category: 'Database', color: '#47a248' },
  { name: 'Git', category: 'Tools', color: '#f05032' },
  { name: 'DSA', category: 'Tools', color: '#a78bfa' },
]

export type Competency = {
  title: string
  icon: 'api' | 'backend' | 'ui' | 'test' | 'bug' | 'solve' | 'logic' | 'chat' | 'team' | 'lead' | 'decide' | 'dsa'
}

export const COMPETENCIES: Competency[] = [
  { title: 'Backend Development', icon: 'backend' },
  { title: 'REST API Development', icon: 'api' },
  { title: 'UI Development', icon: 'ui' },
  { title: 'API Testing', icon: 'test' },
  { title: 'Bug Resolution', icon: 'bug' },
  { title: 'Problem Solving', icon: 'solve' },
  { title: 'Logical Thinking', icon: 'logic' },
  { title: 'Communication', icon: 'chat' },
  { title: 'Team Collaboration', icon: 'team' },
  { title: 'Leadership', icon: 'lead' },
  { title: 'Decision Making', icon: 'decide' },
  { title: 'Data Structures & Algorithms', icon: 'dsa' },
]

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
};

export type Project = {
  title: string;
  type: string;
  description: string;
  problem: string;
  technologies: string[];
  features: string[];
  accent: string;
};

export const skills = [
  { name: 'React.js', category: 'Frontend', level: 'Advanced' },
  { name: 'Vue.js', category: 'Frontend', level: 'Advanced' },
  { name: 'JavaScript', category: 'Frontend', level: 'Advanced' },
  { name: 'TypeScript', category: 'Frontend', level: 'Experienced' },
  { name: 'HTML5 & CSS3', category: 'Frontend', level: 'Advanced' },
  { name: 'Tailwind CSS', category: 'Frontend', level: 'Experienced' },
  { name: 'Redux / Pinia', category: 'State', level: 'Experienced' },
  { name: 'React Router', category: 'Routing', level: 'Experienced' },
  { name: 'Node.js', category: 'Backend', level: 'Working knowledge' },
  { name: 'Express.js', category: 'Backend', level: 'Working knowledge' },
  { name: 'REST APIs', category: 'Backend', level: 'Experienced' },
  { name: 'MongoDB', category: 'Database', level: 'Learning' },
  { name: 'Git & GitHub', category: 'Tools', level: 'Advanced' },
  { name: 'Vite / Webpack', category: 'Tools', level: 'Experienced' },
  { name: 'Jest', category: 'Testing', level: 'Working knowledge' },
  { name: 'Accessibility', category: 'Practice', level: 'Experienced' },
  { name: 'Performance', category: 'Practice', level: 'Experienced' },
  { name: 'Responsive Design', category: 'Practice', level: 'Advanced' },
];

export const experience: Experience[] = [
  {
    role: 'Frontend Developer', company: 'Capgemini', location: 'Bengaluru, India', period: 'June 2026 — Present', current: true,
    summary: 'Building thoughtful interfaces and dependable frontend experiences with a focus on quality and collaboration.',
    highlights: ['Develop and maintain modern web applications using React.js and frontend technologies.', 'Build reusable and scalable UI components.', 'Integrate REST APIs and handle frontend data flows.', 'Collaborate with designers, backend developers, QA engineers, and product teams.', 'Improve application performance, responsiveness, and accessibility.'],
  },
  {
    role: 'Frontend Developer', company: 'Consark Advisory Services LLP / Consark.ai', location: 'Bengaluru, India', period: 'September 2022 — April 2026',
    summary: 'Delivered responsive product interfaces across Vue.js and React.js environments.',
    highlights: ['Worked across Vue.js, React.js, JavaScript, and TypeScript applications.', 'Integrated REST APIs and created reusable component patterns.', 'Applied state management and responsive UI practices to evolving products.', 'Partnered with cross-functional teams in an Agile/Scrum environment.'],
  },
  {
    role: 'Frontend Developer', company: 'Pudding App India Private Limited', location: 'India', period: 'May 2021 — December 2021',
    summary: 'Contributed to frontend development and web application experiences.',
    highlights: ['Developed responsive web interfaces with modern frontend technologies.', 'Supported reusable UI patterns and application improvements.', 'Worked with teammates to deliver maintainable product experiences.'],
  },
  {
    role: 'Web Developer / Production Agent', company: 'Zealous Services', location: 'Chennai, India', period: 'June 2017 — May 2018',
    summary: 'Supported web production workflows and delivered accurate digital work.',
    highlights: ['Created and maintained web pages and digital content.', 'Managed production tasks with a focus on consistency and quality.'],
  },
];

export const projects: Project[] = [
  { title: 'Task Management Dashboard', type: 'Sample project', description: 'A focused workspace for creating, organizing, filtering, and tracking tasks across a team.', problem: 'Designed to make busy work visible and actionable without adding unnecessary complexity.', technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'], features: ['Authentication', 'CRUD operations', 'Task filtering', 'Search & pagination', 'Responsive UI'], accent: 'coral' },
  { title: 'Employee Management System', type: 'Sample project', description: 'A practical admin experience for managing people, roles, and operational data.', problem: 'Designed to bring everyday employee workflows into one clear, searchable interface.', technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'], features: ['Employee CRUD', 'Search & filtering', 'Authentication', 'Role-based access', 'REST API'], accent: 'blue' },
  { title: 'E-Commerce Dashboard', type: 'Sample project', description: 'A data-rich commerce control center for products, orders, customers, and insights.', problem: 'Designed to give operators a concise view of the work that keeps a store moving.', technologies: ['React.js', 'TypeScript', 'Redux', 'Node.js', 'MongoDB'], features: ['Product management', 'Order workflows', 'Customer records', 'Dashboard analytics', 'Authentication'], accent: 'mint' },
];

export const socialLinks = {
  github: 'https://github.com/Dineshe1994',
  linkedin: 'https://www.linkedin.com/in/dineshgokulan/',
  email: 'mailto:dineshgokulan1994@gmail.com',
};

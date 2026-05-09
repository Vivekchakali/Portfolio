// Pure data — no JSX here. Icons are rendered in components.
export const skillsData = {
  Frontend: [
    { name: 'HTML', iconName: 'FaHtml5', color: '#E34F26' },
    { name: 'CSS', iconName: 'FaCss3Alt', color: '#1572B6' },
    { name: 'JavaScript', iconName: 'FaJs', color: '#F7DF1E' },
    // { name: 'React', iconName: 'FaReact', color: '#61DAFB' },
    // { name: 'Tailwind CSS', iconName: 'SiTailwindcss', color: '#06B6D4' },
  ],
  // Backend: [
  // { name: 'Node.js', iconName: 'FaNodeJs', color: '#339933' },
  //{ name: 'Express.js', iconName: 'SiExpress', color: '#FFFFFF' },
  //],
  Database: [
    { name: 'MySQL', iconName: 'SiMysql', color: '#4479A1' },
    //{ name: 'MongoDB', iconName: 'SiMongodb', color: '#47A248' },
  ],
  ProgrammingLanguages: [
    { name: 'Java', iconName: 'FaJava', color: '#007396' },
    { name: 'Python', iconName: 'FaPython', color: '#3776AB' },
    { name: 'C', iconName: 'SiC', color: '#A8B9CC' },
  ],
  Tools: [
    { name: 'Git', iconName: 'FaGitAlt', color: '#F05032' },
    { name: 'GitHub', iconName: 'FaGithub', color: '#FFFFFF' },
    { name: 'VS Code', iconName: 'VsCode', color: '#007ACC' },
    // { name: 'Figma', iconName: 'FaFigma', color: '#F24E1E' },
  ],
};

export const featuredProject = {
  title: 'AI-Powered Teen Finance Guidance Platform',
  description:
    'A modern financial literacy and career guidance platform designed for teenagers. The system integrates AI-driven learning, scam awareness education, personalized finance lessons, and intelligent internship recommendations to help students build safe financial habits and career readiness from an early stage.',
  image:
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',

  techStack: ['React', 'Node.js', 'Flask', 'React UI', 'Gemini API', 'Python', 'MySQL'],
  features: [
    'AI-powered Finance Assistant using Google Gemini API',
    'Scam Awareness and Prevention',
    'Personalized Finance Lessons',
    'Intelligent Internship Recommendations',
    'Personalized finance learning paths based on age and interests'
  ],
  challenges:
    'Integrating an external AI API seamlessly with an intuitive frontend without compromising performance.',
  liveDemo: 'https://teen-finance-guidance.onrender.com/',
  githubRepo: 'https://github.com/sathwika-dasari/teen-finance-guidance',
};

export const projectsData = [
  {
    title: 'FlexiRent',
    category: 'Frontend',
    image:
      'https://brokernetwork.in/wp-content/uploads/2025/01/blog-size-52.jpg',
    description:
      'Developed a responsive rental platform for users to list and discover rental properties.Implemented additional services such as transportation and home assistance.',
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    liveDemo: 'https://flexirent1.ccbp.tech/',
    githubRepo: 'https://github.com/Vivekchakali/Flexirent',
  },
  {
    title: 'Airport Lounge Inventory Monitoring System',
    category: 'Full Stack',
    image:
      'https://qz.com/cdn-cgi/image/width=1920,quality=85,format=auto/https://assets.qz.com/media/ebc481e45c705431d1cf034806644077.jpg',
    description:
      'Developed a full-stack web application to manage airport lounge inventory with secure role-based authentication for admin and staff. Implemented real-time inventory tracking, item sales processing, threshold monitoring, and automated stock status classification like Normal, Low, Critical.',
    techStack: ['Flask', 'Python', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    liveDemo: 'https://quadrahack-1.onrender.com/',
    githubRepo: 'https://github.com/Vivekchakali/QuadraHack/tree/master',
  },



];

export const certificationsData = [
  {
    title: 'Build Your Own Static Website',
    issuer: 'NxtWave',
    date: 'July 29,2025',
    image:
      'https://media-content.ccbp.in/certificates/share/LAPDWFLKRG.png',
    link: 'https://certificates.ccbp.in/academy/static-website?id=LAPDWFLKRG',
  },
  {
    title: 'Build Your Own Responsive Website',
    issuer: 'NxtWave',
    date: 'August 12, 2025',
    image:
      'https://media-content.ccbp.in/certificates/share/CYTJKZOAIZ.png',
    link: 'https://certificates.ccbp.in/academy/build-your-own-responsive-website?id=CYTJKZOAIZ#',
  },
  {
    title: 'Introduction to Databases',
    issuer: 'NxtWave',
    date: 'April 5, 2026',
    image:
      'https://media-content.ccbp.in/certificates/share/OLRGSBPHGF.png',
    link: 'https://certificates.ccbp.in/academy/introduction-to-databases?id=OLRGSBPHGF',
  },
  {
    title: 'HackWithAI Offline AI Hackathon',
    issuer: 'Hackathons',
    date: 'Feb 2026',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
    link: 'https://d2c-cdn-mumbai.s3.ap-south-1.amazonaws.com/lambda-pdfs/certificate-images/20611b95-8281-4467-998d-8bd5c9f7ac43.pdf',
  },
];

export const experienceTimeline = [
  {
    year: '2024',
    title: 'Started Coding Journey',
    description:
      'Began exploring Computer Science — writing first lines of code in C and Python, discovering a passion for logic and problem solving.',
  },
  {
    year: '2025',
    title: 'Web Development Focus',
    description:
      'Learned HTML, CSS, JavaScript, and React. Built foundational projects and explored backend technologies with Node.js and Express.',
  },
  {
    year: '2026',
    title: 'Full Stack & Hackathons',
    description:
      'Developed full-stack applications including the Teen Finance Platform. Participated in multiple coding hackathons.',
  },
  {
    year: '2026',
    title: 'AI Integration & Advanced Tech',
    description:
      'Integrated Gemini API into projects, mastered Tailwind + Framer Motion UI workflows, and achieved key certification milestones.',
  },
];


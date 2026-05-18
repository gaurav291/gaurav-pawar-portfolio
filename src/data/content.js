// Single source of truth for all portfolio content.
// Update this file to change resume info, projects, etc.

export const personal = {
  name: 'Gaurav Pawar',
  initials: 'GP',
  role: 'Cybersecurity Analyst / VAPT Enthusiast',
  tagline: 'Ethical Hacking | VAPT | AI Security',

  about:
    "Cybersecurity enthusiast and Python Developer focused on Ethical Hacking, Web Application Security, and AI-powered security systems. Currently working on VAPT, reconnaissance, and penetration testing using industry-standard tools.",

  location: 'Pune, Maharashtra',

  email: 'gauravkpawar001@gmail.com',

  phone: '+91 8669076354',

  resumeUrl: '/Resume.pdf',

  profileImage: '/profile.png',

  socials: {
    linkedin: 'https://linkedin.com/in/YOUR-LINKEDIN',
    github: 'https://github.com/gaurav291',
  },

  badges: [
    { icon: 'MapPin', label: 'Pune, Maharashtra' },
    { icon: 'GraduationCap', label: 'B.E. Computer Engineering — CGPA 8.06' },
    { icon: 'Shield', label: 'CEH v13 Training Completed' },
  ],
};

export const aboutText = [
  "I'm a Cybersecurity enthusiast and Python Developer currently focused on Vulnerability Assessment & Penetration Testing (VAPT), Ethical Hacking, and AI-powered security systems.",

  "I have hands-on experience with cybersecurity tools including Burp Suite, Nmap, Wireshark, Metasploit, Nessus, and OWASP ZAP. I enjoy testing web applications for vulnerabilities such as SQL Injection, XSS, authentication flaws, and insecure APIs.",

  "Currently working as a Cybersecurity Intern at SecurWires Technologies and Services LLP where I'm gaining practical exposure to reconnaissance, OSINT, web security testing, GRC concepts, and attack simulations.",

  "Alongside cybersecurity, I'm also passionate about AI integration in security systems. I built an AI-powered surveillance system using OpenCV and TensorFlow capable of detecting suspicious activities and generating real-time alerts.",
];

export const skills = [
  {
    category: 'Cybersecurity',
    items: [
      { name: 'VAPT', icon: 'ShieldAlert' },
      { name: 'Ethical Hacking', icon: 'Shield' },
      { name: 'Burp Suite', icon: 'Bug' },
      { name: 'Nmap', icon: 'Radar' },
      { name: 'Wireshark', icon: 'Network' },
      { name: 'Metasploit', icon: 'Terminal' },
      { name: 'OWASP ZAP', icon: 'Flame' },
      { name: 'OSINT', icon: 'Search' },
    ],
  },

  {
    category: 'Programming',
    items: [
      { name: 'Python', icon: 'Code2' },
      { name: 'JavaScript', icon: 'FileCode2' },
      { name: 'Bash', icon: 'TerminalSquare' },
      { name: 'ReactJS', icon: 'Atom' },
    ],
  },

  {
    category: 'Backend & APIs',
    items: [
      { name: 'Django', icon: 'Server' },
      { name: 'Flask', icon: 'Boxes' },
      { name: 'FastAPI', icon: 'Globe' },
      { name: 'REST APIs', icon: 'Webhook' },
      { name: 'JWT', icon: 'KeyRound' },
    ],
  },

  {
    category: 'Database & Platforms',
    items: [
      { name: 'MySQL', icon: 'Database' },
      { name: 'MongoDB', icon: 'DatabaseZap' },
      { name: 'PostgreSQL', icon: 'DatabaseBackup' },
      { name: 'Linux', icon: 'MonitorCog' },
      { name: 'Kali Linux', icon: 'Skull' },
      { name: 'Git & GitHub', icon: 'GitBranch' },
    ],
  },

  {
    category: 'AI & Security',
    items: [
      { name: 'TensorFlow', icon: 'BrainCircuit', glow: true },
      { name: 'OpenCV', icon: 'ScanEye', glow: true },
      { name: 'AI Security', icon: 'Sparkles', glow: true },
      { name: 'GenAI', icon: 'Bot', glow: true },
    ],
  },
];

export const experience = [
  {
    period: 'Jan 2026 - Present',

    title: 'Cybersecurity Intern',

    company: 'SecurWires Technologies and Services LLP',

    location: 'Thane, Maharashtra',

    points: [
      'Performing Vulnerability Assessment & Penetration Testing (VAPT) on web applications and networks using Burp Suite and OWASP ZAP.',

      'Identifying security vulnerabilities such as SQL Injection, XSS, authentication flaws, and insecure configurations.',

      'Conducting reconnaissance, OSINT, network scanning, and traffic analysis using Nmap and Wireshark.',

      'Gaining practical exposure to Information Security concepts, GRC frameworks, and Digital Forensics.',

      'Participating in cybersecurity labs, attack simulations, and secure testing practices.',
    ],

    tech: [
      'Burp Suite',
      'OWASP ZAP',
      'Nmap',
      'Wireshark',
      'VAPT',
      'Kali Linux',
    ],
  },

  {
    period: 'Jan 2024',

    title: 'Web Developer Intern',

    company: 'Oasis Infobyte',

    location: 'Remote',

    points: [
      'Built responsive web applications using HTML, CSS, and JavaScript.',

      'Developed mini projects including Calculator, To-Do App, and Temperature Converter.',

      'Worked on frontend UI improvements, event handling, and debugging.',
    ],

    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const projects = [
  {
    title: 'Web Application Security Testing',

    description:
      'Performed Vulnerability Assessment & Penetration Testing (VAPT) on web applications. Identified vulnerabilities including SQL Injection, XSS, and authentication flaws using Burp Suite and OWASP ZAP. Suggested mitigation techniques based on OWASP Top 10.',

    tech: [
      'Burp Suite',
      'OWASP ZAP',
      'VAPT',
      'Kali Linux',
      'OWASP Top 10',
    ],

    github: 'https://github.com/gaurav291',

    live: null,

    image:
      'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?w=800&h=400&fit=crop',

    color: 'green',
  },

  {
    title: 'AI-CAMX Surveillance System',

    description:
      'Developed an AI-powered surveillance system using OpenCV and TensorFlow to detect suspicious activities such as violence and accidents. Integrated AWS S3 for secure cloud storage and implemented real-time alert mechanisms.',

    tech: [
      'Python',
      'TensorFlow',
      'OpenCV',
      'AWS S3',
      'AI',
    ],

    github: 'https://github.com/gaurav291',

    live: null,

    image:
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=400&fit=crop',

    color: 'blue',

    badge: 'AI Security',
  },
];

export const certifications = [
  {
    name: 'Certified Ethical Hacker (CEH v13)',
    issuer: 'EC-Council',
    status: 'Training Completed',
  },

  {
    name: 'Systems and Usable Security',
    issuer: 'NPTEL - IIT Indore',
    status: 'Completed',
  },

  {
    name: 'Object-Oriented Programming using C++',
    issuer: 'PICT',
    status: 'Completed',
  },

  {
    name: 'HackerRank SQL Badge',
    issuer: 'HackerRank',
    status: '2 Star Badge',
  },
];
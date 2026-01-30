const navLinks = {
  hello: 'Hello',
  aboutMe: 'About Me',
  skills: 'Skills',
  journey: 'Journey',
  achievements: 'Achievements',
  featuredProjects: 'Featured Projects'
};

//todo: Splash Screen
const splashScreen = {
  enabled: true,
  duration: 2000
};

const introduction = {
  username: 'Ismael Ulises Petrone',
  title: 'I\'m Ismael.',
  welcomeAvatar: "../../assets/images/intro.jpg",
  subTitle:
    `I\'m a passionate Full Stack Developer 👨‍💻 based in Barcelona.
    I\'ve been fascinated by computers since my teenage years - assembling PCs, optimizing systems, and diving deep into technology.
    \nWith experience in building scalable applications and leading technical teams, I love solving complex problems and creating innovative solutions.
    \nLet\'s connect to discuss a project or just say hi! My inbox is always open.`
  ,
  resumeLink: '',
  display: true
};


const socialMediaLinks = {
  github: 'https://github.com/ismaelpetrone',
  linkedin: 'https://www.linkedin.com/in/ismael-ulises-petrone-9a6767188/',
  gmail: 'ismaelpetrone@gmail.com',
  gitlab: '',
  medium: '',
  stackoverflow: '',
  display: true
};


const skillsSection = {
  title: 'About Me',
  skillsAvatar: "../../assets/images/avatar.png",
  subTitle: 'A passionate Full Stack Developer with expertise in modern web technologies and cloud architecture',
  skills: [
    '⚡ I\'ve been passionate about computers since my teenage years - assembling hardware, optimizing systems, and exploring technology.',
    '⚡ After secondary education, I completed a 2-year course in Informatics Microsystems in Viladecans, Barcelona.',
    '⚡ My programming journey began with a Multiplatform Development course where I learned PHP, Python, C#, and Java.',
    '⚡ I have 8+ years of professional experience as a Full Stack Developer, Team Lead, and Technical Lead.',
    '⚡ Led the digital transformation of Barcelona City Council\'s administrative procedures from monolithic to microservices architecture.',
    '⚡ Specialized in building scalable applications, mentoring teams, and designing robust system architectures.',
    '⚡ Outside of work, I enjoy sports, listening to music, reading at least one book a year, and currently learning Portuguese.'
  ],

  /* Make Sure to add badge links from https://github.com/alexandresanlim/Badges4-README.md-Profile */
  softwareSkillsHeader: 'Technologies I work with...',
  softwareSkillsImage: "../../assets/images/reading.png",
  softwareSkills: [
    {
      skillName: 'HTML5',
      badgeURL: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
      skillName: 'CSS3',
      badgeURL: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      skillName: 'JavaScript',
      badgeURL: 'https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E'
    },
    {
      skillName: 'TypeScript',
      badgeURL: 'https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white'
    },
    {
      skillName: 'Web APIs',
      badgeURL: 'https://img.shields.io/badge/Web_APIs-0058A3?style=for-the-badge&logo=web-api&logoColor=white'
    },
    {
      skillName: 'Angular',
      badgeURL: 'https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white'
    },
    {
      skillName: 'SCSS',
      badgeURL: 'https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white'
    },
    {
      skillName: 'CSS Grid',
      badgeURL: 'https://img.shields.io/badge/CSS_Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      skillName: 'Flexbox',
      badgeURL: 'https://img.shields.io/badge/Flexbox-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
      skillName: 'Material UI',
      badgeURL: 'https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white'
    },
    {
      skillName: 'Bootstrap',
      badgeURL: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'
    },
    {
      skillName: 'NPM',
      badgeURL: 'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white'
    },
    {
      skillName: 'Yarn',
      badgeURL: 'https://img.shields.io/badge/Yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white'
    },
    {
      skillName: 'Node.js',
      badgeURL: 'https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'
    },
    {
      skillName: 'Express.js',
      badgeURL: 'https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white'
    },
    {
      skillName: 'Java',
      badgeURL: 'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white'
    },
    {
      skillName: 'Spring Boot',
      badgeURL: 'https://img.shields.io/badge/Spring_Boot-F2F4F9?style=for-the-badge&logo=spring-boot'
    },
    {
      skillName: 'Spring MVC',
      badgeURL: 'https://img.shields.io/badge/Spring_MVC-6DB33F?style=for-the-badge&logo=spring&logoColor=white'
    },
    {
      skillName: 'Spring Batch',
      badgeURL: 'https://img.shields.io/badge/Spring_Batch-6DB33F?style=for-the-badge&logo=spring&logoColor=white'
    },
    {
      skillName: 'Python',
      badgeURL: 'https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white'
    },
    {
      skillName: 'PHP',
      badgeURL: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white'
    },
    {
      skillName: 'REST Services',
      badgeURL: 'https://img.shields.io/badge/REST_Services-005C84?style=for-the-badge&logo=api'
    },
    {
      skillName: 'WebSockets',
      badgeURL: 'https://img.shields.io/badge/WebSockets-010101?style=for-the-badge&logo=socketdotio'
    },
    {
      skillName: 'OpenAPI',
      badgeURL: 'https://img.shields.io/badge/OpenAPI-6BA539?style=for-the-badge&logo=openapi-initiative&logoColor=white'
    },
    {
      skillName: 'Swagger',
      badgeURL: 'https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white'
    },
    {
      skillName: 'OracleSQL',
      badgeURL: 'https://img.shields.io/badge/OracleSQL-F80000?style=for-the-badge&logo=oracle&logoColor=white'
    },
    {
      skillName: 'PostgreSQL',
      badgeURL: 'https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'
    },
    {
      skillName: 'MySQL',
      badgeURL: 'https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white'
    },
    {
      skillName: 'Redis',
      badgeURL: 'https://img.shields.io/badge/redis-%23DD0031.svg?&style=for-the-badge&logo=redis&logoColor=white'
    },
    {
      skillName: 'Hibernate',
      badgeURL: 'https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=hibernate&logoColor=white'
    },
    {
      skillName: 'JPA',
      badgeURL: 'https://img.shields.io/badge/JPA-59666C?style=for-the-badge&logo=hibernate&logoColor=white'
    },
    {
      skillName: 'Postman',
      badgeURL: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white'
    },
    {
      skillName: 'Git',
      badgeURL: 'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white'
    },
    {
      skillName: 'Docker',
      badgeURL: 'https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white'
    },
    {
      skillName: 'Docker Compose',
      badgeURL: 'https://img.shields.io/badge/Docker_Compose-2496ED?style=for-the-badge&logo=docker&logoColor=white'
    },
    {
      skillName: 'Kubernetes',
      badgeURL: 'https://img.shields.io/badge/kubernetes-326ce5.svg?&style=for-the-badge&logo=kubernetes&logoColor=white'
    },
    {
      skillName: 'Nginx',
      badgeURL: 'https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white'
    },
    {
      skillName: 'MVC',
      badgeURL: 'https://img.shields.io/badge/MVC-4285F4?style=for-the-badge'
    },
    {
      skillName: 'Microservices',
      badgeURL: 'https://img.shields.io/badge/Microservices-326ce5?style=for-the-badge&logo=kubernetes&logoColor=white'
    },
    {
      skillName: 'Lazy Loading',
      badgeURL: 'https://img.shields.io/badge/Lazy_Loading-FFD43B?style=for-the-badge&logo=python&logoColor=blue'
    },
    {
      skillName: 'n8n',
      badgeURL: 'https://img.shields.io/badge/n8n-FF6C37?style=for-the-badge&logo=n8n&logoColor=white'
    }
  ],
  display: true
};

//include education, work expericence and others
const myJourney = {
  display: true,
  experience: [
    {
      role: 'Technical Lead',
      company: 'Deloitte',
      short_note: 'Full Stack Developer, Team Lead, Architecture Designer',
      companyLogo: "",
      date: '5 Years',
      desc: '',
      keyNotes: [
        '🏆 IMI Barcelona - Administrative Procedures: Launched digital transformation project transitioning from monolithic to microservices architecture for Barcelona City Council.',
        '🏆 IMI Barcelona - Service Independence: Achieved platform independence by decoupling core modules, enabling 24/7 service availability.',
        'Volkswagen Project: Served as Technical Referent and Full Stack Developer for platform development and maintenance.',
        'Led technical teams and designed scalable system architectures.',
        'Mentored developers and established best practices for enterprise-level applications.'
      ]
    },
    {
      role: 'Full Stack Developer',
      company: 'Novaltra',
      short_note: 'R&D Developer',
      companyLogo: "",
      date: '3 Years',
      desc: '',
      keyNotes: [
        'Amida Project: Developed new functionalities for building construction logistics platform.',
        'Urban Project: Built features for urbanification planning system and conducted R&D initiatives.',
        'Work Project: Created additional features and improvements for construction management platform.',
        'Gained expertise in full stack development and research & development methodologies.'
      ]
    },
    {
      role: 'Intern',
      short_note: 'Educational Platform',
      company: 'Clickedu',
      companyLogo: "",
      date: '1 Year',
      desc: '',
      keyNotes: [
        'My first professional experience in a tech environment.',
        'Learned professional development workflows and best practices.',
        'Worked on educational platform solutions.'
      ]
    }
  ]
};

/* Your Open Source Section to View Your GitHub Pinned Projects
To know how to get GitHub key look at readme.md */
const openSource = {
  showGithubProfile: 'true', // Set true or false to show Contact profile using GitHub, defaults to true
  display: false // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: 'Key Achievements 🏆',
  subtitle:
    'Major milestones and accomplishments throughout my career',

  achievementsCards: [
    {
      title: 'Digital Transformation Leader',
      subtitle:
        'Led the digital transformation project for Barcelona City Council, successfully transitioning administrative procedures from monolithic to microservices architecture',
      image: "../../assets/images/microservices.png",
      imageAlt: 'Digital Transformation Achievement',
      footerLink: []
    },
    {
      title: 'Platform Independence Achievement',
      subtitle:
        'Achieved platform independence by decoupling core modules from external integrations, enabling 24/7 service availability for critical city services',
      image: "../../assets/images/service_independence.png",
      imageAlt: 'Service Independence Achievement',
      footerLink: []
    }
  ],
  display: true
};

const majorProjects = {
  title: 'Featured Projects 🚀',
  subtitle: '1-Day Practice Projects with no experience',
  projects: [
    {
      role: 'Chat CMD | Local Network Chat Application',
      company: 'Personal Challenge',
      short_note: 'Python, Sockets, Threading',
      companyLogo: "../../assets/images/chat.png",
      date: 'Python Core Project',
      downloadLink: "../../assets/chat.zip",
      desc: 'A console-based real-time chat system that enables communication between multiple users within a local network. This project was born as a personal challenge to learn networking fundamentals and backend development from scratch, without frameworks, using pure Python.',
      keyNotes: [
        'Networking: Used sockets (TCP/IP) to establish stable connections between client and server.',
        'Concurrency: Implemented threading to allow message sending and receiving to occur simultaneously without blocking the terminal.',
        '💡 Multi-threaded Network Scanning (Auto-Discovery): The client includes an automatic network scanner that launches parallel threads to track IPs and find active servers.',
        '💡 Transmission Protocol: Custom class acting as a minimalist protocol to distinguish between messages, sound alerts, or connection events.',
        '💭 Personal Reflection: "This was my first contact with programming. It taught me the importance of concurrency, real-time error handling, and the satisfaction of seeing two computers \'talking\' to each other for the first time."'
      ]
    },
    {
      role: '🐍 PetroSnake',
      company: 'First Programming Project',
      short_note: 'Python, Pygame',
      companyLogo: "../../assets/images/snake.png",
      date: 'Autodidact Logic',
      downloadLink: "../../assets/snake.zip",
      desc: 'A tribute to the classic Snake game developed to master the basics of programming. This project was my first real foray into software development. Developed entirely in Python using the Pygame library, it was born when I had zero previous experience.',
      keyNotes: [
        'Full Game Logic: Implementation of movement mechanics, dynamic growth, and collision detection.',
        'Dynamic Difficulty: Progression system where the game speed (FPS) increases gradually.',
        'State Management: Start, active game, and Game Over screens with real-time statistics.',
        '💡 The "Pink Trick": I learned to manage "old school" transparencies using set_colorkey to remove fuchsia backgrounds in images.',
        '💡 Progression Math: Algorithms for mathematical difficulty scaling (points * 1.8).',
        '💡 Low-level Experimentation: Use of msvcrt library to capture keys, exploring hardware-software communication.'
      ]
    }
  ],
  display: true
};

const chatbot = {
  title: 'Ismael',
  status: 'Online',
  placeholder: 'Type a message...',
  initialMessage: 'Hello, what information do you need about Ismael?',
  error: 'Max tokens reached',
  close: 'Close',
  chat: 'Chat'
};

export {
  navLinks,
  majorProjects,
  introduction,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  myJourney,
  openSource,
  achievementSection,
  chatbot
};

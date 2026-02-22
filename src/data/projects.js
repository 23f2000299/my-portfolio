const projects = [
  {
    id: "quiz-master",
    title: "Quiz-Master Application",
    shortDesc:
      "Scalable multi-user quiz platform with authentication and automated scoring.",

    description: `
Developed a scalable multi-user quiz platform using Flask and SQLite3 featuring secure authentication, 
dynamic question rendering, automated scoring, and result tracking.

Designed admin controls for question management and user performance monitoring. 
Structured the application for modular scalability and future feature expansion.
    `,

    technologies: ["Flask", "SQLite3", "HTML", "CSS", "Authentication"],

    github: "https://github.com/23f2000299"
  },

  {
    id: "quality-inspection",
    title: "Quality Inspection System",
    shortDesc:
      "CNN-based automated defect detection system for water bottle inspection.",

    description: `
Built a CNN-based image classification system to automate defect detection in water bottle quality inspection workflows.

Designed a role-based architecture (Admin, Supervisor, Operator) to manage uploads, validation, and reporting processes.

Automated image handling and report generation to improve inspection accuracy and reduce manual errors.
    `,

    technologies: ["Python", "CNN", "Flask", "SQLite", "Machine Learning"],

    github: "https://github.com/23f2000299"
  },

  {
    id: "hospital-management",
    title: "Hospital Management System",
    shortDesc:
      "Full-stack role-based system with REST APIs, Redis caching and background jobs.",

    description: `
Developed a full-stack Hospital Management System using Flask REST APIs and VueJS frontend.

Implemented JWT-based authentication for secure access control.

Integrated Redis caching to optimize performance and reduce database load.

Automated background processes using Celery for daily reminders, monthly reports, and CSV exports.

Designed scalable architecture for appointment scheduling, treatment records, and patient history tracking.
    `,

    technologies: ["Flask", "VueJS", "SQLite", "Redis", "Celery", "JWT"],

    github: "https://github.com/23f2000299"
  },
  {
  id: "ai-smart-scheduler",
  title: "AI Smart Scheduler",
  shortDesc: "A personalized AI-driven scheduling system that analyzes user patterns, priorities, and productivity habits to generate adaptive task plans. Supports dynamic adjustments based on user behavior and provides insightful recommendations.",
  description: `AI Smart Scheduler is a web-based application designed to help users plan and manage their tasks intelligently. 
It collects user preferences, analyzes study/work patterns, and automatically generates optimized schedules that adapt over time. 
Key features include dynamic task prioritization, personalized recommendations, and automated notifications to improve productivity and time management.`,
  technologies: [
    "Python", 
    "Flask", 
    "SQLite3", 
    "HTML", 
    "CSS", 
    "JavaScript", 
    "Jinja2"
  ],
  github: "https://github.com/23f2000299/ai-smart-scheduler"
}
];

export default projects;
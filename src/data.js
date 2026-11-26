// Edit this file to change the content of your portfolio.
const GH = 'https://github.com/prashanth-420'

export const links = {
  email: 'prashanthdaaji7@gmail.com',
  github: GH,
  linkedin: 'https://www.linkedin.com/in/prashanth-ram-mantri-536620315/',
}

export const nav = [['home','Start'],['play','Play'],['about','Player'],['jam','Jam'],['experience','Quests'],['projects','Levels'],['papers','Papers'],['skills','Skills'],['achievements','Awards'],['contact','Contact']]

export const titles = ['AI Developer', 'Full-Stack Builder', 'Researcher', 'Game Dev Club Tech Lead']

export const edu = [
  ['B.Tech, Artificial Intelligence · Anurag University', 'CGPA 7.12 · 2026'],
  ['12th · Bharathratna Jr College, Banswada', '87.3% · 2022'],
  ['10th CBSE · C.R.P.F Public School', '61% · 2020'],
]

export const jam = [
  ['ROLE', 'Programmer', 'Gameplay logic, backend systems and AI behaviour. I turn ideas into working builds fast.'],
  ['SPEED RUN', 'Hackathon Tested', 'Built projects under time limits at the GDG Hackathon (Dec 2025) and the Anurag University Hackathon (Oct 2024).'],
  ['TEAM BUFF', 'Tech Lead', 'Led technical planning for a game dev club and mentored interns through an 8-week programme.'],
  ['SPECIAL MOVE', 'AI + Systems', 'Constraint solvers, computer vision and graph learning, useful for smart NPCs, procedural content and tools.'],
]

export const jobs = [
  { date: 'MAY – JUL 2025', title: 'AI Developer Intern', org: 'VISWAM.ai (Swecha & IIIT-Hyderabad)',
    points: ['Contributed to India’s first regional Telugu LLM for low-resource languages across the Global South.', 'Built AI validation interfaces with Streamlit and worked with GitLab.', 'Collected, validated and curated Telugu audio and text datasets.', 'Mapped regional speech datasets to downstream fine-tuning tasks.'],
    tags: ['Streamlit', 'GitLab', 'LLM', 'Datasets'] },
  { date: 'AUG 2024 – MAY 2026', title: 'Technical Lead', org: 'MetaVerse Animation & Game Development Club, Anurag University',
    points: ['Led technical planning and execution of club events and workshops.', 'Managed technical setup, troubleshooting and event support.'] },
  { date: 'MAY – JUL 2025', title: 'Technical Lead, Summer of AI', org: 'VISWAM.AI (Swecha, in association with Meta)',
    points: ['Mentored interns and unblocked their progress through the 8-week programme.', 'Helped with programme logistics for the full cohort.'] },
]

export const projects = [
  { lvl: 'LEVEL 1 · NOV 2025 – NOW', title: 'CampusMind',
    link: 'https://github.com/prashanth-420/CampusMind',
    desc: 'AI-powered LMS that auto-generates conflict-free college timetables with the CP-SAT solver, assigns substitute faculty when instructors are unavailable, and offers role-based dashboards for admins, faculty and students. Secured with Supabase RBAC and Row-Level Security.',
    tags: ['React', 'Flask', 'Python', 'Supabase', 'OR-Tools'] },
  { lvl: 'LEVEL 2 · SEP 2025 – NOW', title: 'Face Recognition Attendance',
    link: 'https://github.com/prashanth-420/face-recognition-attendance-system',
    desc: 'Real-time attendance system using OpenCV and face_recognition with duplicate-proof marking, live camera streaming, analytics dashboards and JWT-secured role-based access. Face encodings are stored in MongoDB.',
    tags: ['React', 'FastAPI', 'OpenCV', 'MongoDB'] },
  { lvl: 'LEVEL 3 · JAN – FEB 2026', title: 'Sentiment Analysis App',
    link: 'https://github.com/prashanth-420/sentiment-analysis-app',
    desc: 'Full-stack NLP web app that classifies text as Positive, Negative or Neutral with polarity and subjectivity scores. A React + TypeScript frontend talks to a Flask REST API (/analyze) that runs TextBlob for real-time results.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Flask', 'TextBlob'] },
]
export const papers = [
  { badge: 'PUBLISHED · ICETCE 2026', title: 'FALCON: Temporal Graph Learning for Failure Propagation Analysis and Availability Assessment in Mobile Applications',
    desc: 'Research on temporal failure propagation in mobile app review data. Proposes a graph framework using Temporal Graph Attention Networks (T-GAT) for failure dependency analysis, plus the Availability Resilience Index (ARI) to quantify app resilience.',
    tags: ['T-GAT', 'Temporal Graphs', 'ARI'], link: '#' },
  { badge: 'RESEARCH · MAY – JUL 2026', alt: true, title: 'MedGraphX: A Graph-Based Explainable ML Framework for Early Disease Prediction',
    desc: 'Healthcare framework using Patient Similarity Networks for explainable disease prediction, combining Graph Attention Networks, Clinical Data Quality Assessment and Explainable AI. Architecture and roadmap built with PyTorch Geometric on public EHR datasets.',
    tags: ['GAT', 'XAI', 'PyTorch Geometric'] },
]

export const skills = {
  Languages: ['Python', 'JavaScript', 'Java', 'SQL'],
  Frameworks: ['Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'React.js', 'Node.js', 'Express.js', 'FastAPI', 'Flask', 'REST APIs', 'JWT Auth'],
  Databases: ['MySQL', 'MongoDB'],
  'Dev Tools': ['Git', 'GitHub', 'Postman', 'VS Code'],
}

export const awards = [
  ['🏆 DEC 2025', 'Google Developer Groups Hackathon', 'Collaborated on developing a software project.'],
  ['🏆 OCT 2024', 'Anurag University Hackathon', 'Designed and built a project under time constraints.'],
]

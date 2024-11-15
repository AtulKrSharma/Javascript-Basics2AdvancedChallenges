const complexObject = {
  name: 'Alex',
  age: 30,
  isEmployed: true,
  contact: {
    email: 'alex@example.com',
    phone: {
      home: '123-456-7890',
      mobile: '987-654-3210',
    },
    address: {
      street: '123 Maple St',
      city: 'Toronto',
      country: 'Canada',
    },
  },
  hobbies: ['reading', 'traveling', 'coding'],
  education: [
    {
      degree: 'B.Sc. Computer Science',
      institution: 'University of Toronto',
      year: 2016,
      courses: [
        { courseName: 'Data Structures', grade: 'A' },
        { courseName: 'Algorithms', grade: 'A-' },
      ],
    },
    {
      degree: 'M.Sc. Software Engineering',
      institution: 'University of Waterloo',
      year: 2018,
      courses: [
        { courseName: 'Machine Learning', grade: 'A+' },
        { courseName: 'Database Systems', grade: 'A' },
      ],
    },
  ],
  skills: {
    languages: ['JavaScript', 'Python', 'Java'],
    frameworks: ['React', 'Node.js', 'Express'],
    tools: {
      versionControl: ['Git', 'GitHub'],
      testing: ['Jest', 'Playwright', 'k6'],
    },
  },
  workExperience: [
    {
      company: 'Tech Corp',
      position: 'Software Engineer',
      years: 3,
      projects: [
        {
          name: 'Project Alpha',
          role: 'Backend Developer',
          techStack: ['Node.js', 'Express', 'MongoDB'],
        },
        {
          name: 'Project Beta',
          role: 'Frontend Developer',
          techStack: ['React', 'Redux', 'GraphQL'],
        },
      ],
    },
    {
      company: 'Dev Solutions',
      position: 'Senior Developer',
      years: 2,
      projects: [
        {
          name: 'Project Gamma',
          role: 'Full Stack Developer',
          techStack: ['Angular', 'Java', 'MySQL'],
        },
      ],
    },
  ],
};

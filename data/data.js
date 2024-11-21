import University1 from "../public/assets/universities/art1.svg";
import University2 from "../public/assets/universities/art2.svg";
import University3 from "../public/assets/universities/art3.svg";
import Job1 from "../public/assets/logo/job1.png";
import Job2 from "../public/assets/logo/job2.png";
import C1 from "../public/assets/logo/job1.svg";
import C3 from "../public/assets/logo/cabincrue.svg";
import C4 from "../public/assets/logo/ground.svg";

export const topMenus = [
  { id: 1, title: "Countries" },
  { id: 2, title: "Exams" },
  { id: 3, title: "Resources" },
  { id: 4, title: "More" },
];

export const courses = [
  {
    category: "12 with PCM",
    license: {
      title: "License",
      items: [
        "Pilot Training",
        "Aircraft Maintenance Engineering",
        "Aircraft Maintenance Engineering",
      ],
    },
    graduation: {
      title: "Graduation",
      items: [
        "BBA in Aviation",
        "B.Sc Aeronautical",
        "B.Sc in Aviation",
        "B.sc in AME",
      ],
    },
    diploma: {
      title: "Diploma",
      items: [
        "Aeronautical Engineering",
        "Aerospace Engineering",
        "Aeronautical Engineering",
      ],
    },
    certification: {
      title: "Certification",
      items: ["Cabin Crew", "Airport Management", "Airport Ground Staff"],
    },
    engineering: {
      title: "Engineering",
      items: ["Cabin Crew", "Airport Management", "Airport Ground Staff"],
    },
  },
  {
    category: "12 With Non-PCM",
    license: {
      title: "License",
      items: ["Aircraft Maintenance Engineering (EASA)"],
    },
    graduation: {
      title: "Graduation",
      items: ["BBA in Aviation"],
    },
    diploma: {
      title: "Diploma",
      items: [
        "Aircraft Maintenance Engineering",
        "Aeronautical Engineering",
        "Aerospace Engineering",
      ],
    },
    cert: {
      title: "Cert",
      items: ["Cabin Crew", "Airport Management", "Airport Ground Staff"],
    },
  },
  {
    category: "Diploma",
    license: {
      title: "License",
      items: [
        "Pilot",
        "Aircraft Maintenance Engineering",
        "Aircraft Maintenance Engineering(EASA)",
      ],
    },
    engineering: {
      title: "Engineering",
      items: ["Aeronautical Engineering", "Aerospace Engineering"],
    },
  },
  {
    category: "10th",
    license: {
      title: "License",
      items: ["Aircraft Maintenance Engineering(EASA)"],
    },
    diploma: {
      title: "Diploma",
      items: [
        "Aircraft Maintenance Engineering",
        "Aeronautical Engineering",
        "Aerospace Engineering",
      ],
    },
  },
];

export const categories = ["12 with PCM", "12 With Non-PCM", "Diploma", "10th"];

export const aviationCourse = [
  {
    id: 1,
    icon: C1,
    title: "Commercial Pilot license",
    isActive: true,
  },
  {
    id: 2,
    icon: C1,
    title: "Pilot Training Programs",
    isActive: false,
  },
  {
    id: 3,
    icon: C3,
    title: "Cabin Crew Programs",
    isActive: false,
  },
  {
    id: 4,
    icon: C4,
    title: "Ground ",
    isActive: false,
  },
];

export const aviationTypeCourse = [
  {
    id: 1,
    title: "Bachelor’s Courses in Aviation",
    description:
      "Commerical Pilot License\n Pilot Training Programs\nCabin Crew Training\nBachelor of Science (BSc) in Aviation\nBachelor of Business Administration (BBA) in Aviation Management\nBachelor of Science in Aeronautical Engineering\nBachelor of Science in Air Traffic Management\nBachelor of Science in Aviation Maintenance Technology\nBachelor of Science in Airport and Airline Management",
    isActive: false,
  },
  {
    id: 2,
    title: "Master’s Courses in Aviation",
    description:
      "Master of Science in Aviation Management\nMBA in Aviation\nMaster of Science in Aeronautics and Aerospace Engineering\nMaster of Science in Air Transport Management\nMaster of Science in Aviation Safety\nMaster of Science in Airport Management",
    isActive: true,
  },
  {
    id: 3,
    title: "Diploma Courses in Aviation",
    description:
      "Diploma in Aviation Management\nDiploma in Aircraft Maintenance Engineering\nDiploma in Air Hostess Training\nDiploma in Air Traffic Control\nDiploma in Airport Ground Services\nDiploma in Pilot Training (Commercial or Private Pilot)",
    isActive: false,
  },
  {
    id: 4,
    title: "Certificate Courses in Aviation",
    description:
      "Certificate in Airline and Airport Ground Services\nCertificate in Aviation Safety\nCertificate in Air Traffic Control\nDiploma in Air Traffic Control\nCertificate in Flight Attendant Training\nCertificate in Aviation Security\nPrivate Pilot License (PPL) Certificate\nCommercial Pilot License (CPL) Certificate\nAircraft Maintenance Certification (AMT)",
    isActive: false,
  },
];

export const regions = [
  {
    name: "North America",
    countries: ["United States", "Canada"],
    universities: [
      {
        name: "Embry-Riddle Aeronautical University",
        description:
          "Known for aviation management, aeronautics, and pilot training.",
        location: "United States",
        lat: 29.1905,
        lon: -81.0481,
      },
      {
        name: "Purdue University",
        description: "Offers Aerospace Engineering and Aviation Management",
        location: "United States",
        lat: 40.4237,
        lon: -86.9212,
      },
    ],
  },
  { name: "Australia", countries: ["Australia"] },
  { name: "UAE", countries: ["United Arab Emirates"] },
  { name: "South Africa", countries: ["South Africa"] },
];

export const topLinks = [
  { id: 1, label: "Diploma" },
  { id: 2, label: "Certification" },
  { id: 3, label: "Bachelor" },
  { id: 4, label: "Master" },
];

export const faqData = [
  {
    question:
      "What are the graduate admission requirements to study in Canada?",
    answer:
      "The admission requirements for graduate programs at the Canadian universities are course-specific. Generally students need a bachelor's degree in a relevant field with 70% aggregate, 1-3 years of work experience, GRE score of 300 or GMAT score of 580-600.",
  },
  {
    question: "What are the requirements to study in Australia?",
    answer: "",
  },
  {
    question: "How to secure admission to the top German universities?",
    answer: "",
  },
];

export const supportLinks = [
  "About",
  "Contact",
  "Service Not Included",
  "FAQ",
  "UDAAN JEE",
  "Articles",
  "Terms of use",
  "Privacy Policy",
  "Report Vulnerability",
  "Exam",
  "University Partner",
  "E-Books",
  "Accommodation",
  "Alumni Connect",
  "JEE Rank Calculator",
];

export const topDestinations = [
  "Study in USA",
  "Study in Germany",
  "Study in Canada",
  "Study in UK",
  "Study in Australia",
];

export const masterPrograms = [
  "MS in Germany- III",
  "MBA in Germany- III",
  "MS in CS/Data/AI- III",
  "MS in Data Analytics in USA, Clark University",
  "MS in Project Management in USA, Clark University",
  "MS in IT in USA, Clark University",
  "MS in Data Analytics & Visualization in USA, Northeastern University",
  "MS in Artificial Intelligence in USA, Northern University",
  "MS in Cybersecurity - Northern University",
];

export const studyAbroadBlogs = [
  "Cost of Study Germany",
  "Cost of Study Canada",
  "Cost of Study USA",
  "Cost of Study UK",
  "Cost of Study Australia",
  "Cost of Study NewZealand",
  "Cost of Study Ireland",
  "Cost of Study Singapore",
  "Cost of Study China",
  "Cost of Study Russia",
];

export const salaryData = [
  {
    title: "Commercial",
    role: "Pilot",
    averageSalary: "120,000",
    icon: Job1,
  },
  {
    title: "Air Traffic",
    role: "Controller",
    averageSalary: "110,000",
    icon: Job2,
  },
  {
    title: "Aircraft",
    role: "Mechanic",
    averageSalary: "60,000",
    icon: Job1,
  },
  {
    title: "Aircraft",
    role: "Manager",
    averageSalary: "80,000",
    icon: Job1,
  },
];

export const universities = [
  {
    name: "Aircraft Maintenace Engineering fees in india and Abroad ",
    location: "5 min read",
    image: University1,
    isActive: true,
  },
  {
    name: "Aircraft Maintenace Engineering career opportunity in india ",
    location: "5 min read",
    image: University2,
  },
  {
    name: "with 100 Aircraft Qatar ",
    location: "",
    image: University3,
  },
];

export const coursesData = {
  mba: [
    {
      title: "University Canada West",
      country: "Canada",
      duration: "11 Months",
      tag: "STEM",
    },
    {
      title: "Clarkson University",
      country: "USA",
      duration: "12 Months",
      tag: "Popular",
    },
    {
      title: "Berlin Business School",
      country: "Germany",
      duration: "18 Months",
      tag: "Popular",
    },
    {
      title: "Paris Institute of Management",
      country: "France",
      duration: "24 Months",
      tag: "Premium",
    },
  ],
  management: [
    {
      title: "Dundalk Institute of Technology",
      country: "Ireland",
      duration: "11 Months",
      tag: "Online",
    },
    {
      title: "St Marys University London",
      country: "UK",
      duration: "1 Year",
      tag: "Online",
    },
    {
      title: "Clark University",
      country: "USA",
      duration: "7 Months",
      tag: "STEM",
    },
    {
      title: "Helsinki School of Management",
      country: "Finland",
      duration: "15 Months",
      tag: "Advanced",
    },
  ],
};

export const countryData = {
  usa: [
    { title: "Harvard University", stream: "Business Analytics" },
    { title: "MIT", stream: "Data Science" },
    { title: "Stanford University", stream: "Artificial Intelligence" },
    { title: "Stanford University", stream: "Artificial Intelligence" },
    { title: "Stanford University", stream: "Artificial Intelligence" },
    { title: "Stanford University", stream: "Artificial Intelligence" },
  ],
  australia: [
    { title: "University of Sydney", stream: "Healthcare Management" },
    { title: "University of Sydney", stream: "Healthcare Management" },
    { title: "University of Sydney", stream: "Healthcare Management" },
    { title: "Monash University", stream: "Business Management" },
    { title: "Monash University", stream: "Business Management" },
    { title: "Monash University", stream: "Business Management" },
  ],
  canada: [
    { title: "University of Toronto", stream: "Data Science" },
    { title: "University of Toronto", stream: "Data Science" },
    { title: "University of Toronto", stream: "Data Science" },
    { title: "University of Toronto", stream: "Data Science" },
    { title: "McGill University", stream: "Cyber Security" },
    { title: "McGill University", stream: "Cyber Security" },
    { title: "McGill University", stream: "Cyber Security" },
    { title: "McGill University", stream: "Cyber Security" },
  ],
  uk: [
    { title: "London School of Economics", stream: "Digital Marketing" },
    { title: "London School of Economics", stream: "Digital Marketing" },
    { title: "London School of Economics", stream: "Digital Marketing" },
    { title: "University of Oxford", stream: "Accounting" },
    { title: "University of Oxford", stream: "Accounting" },
    { title: "University of Oxford", stream: "Accounting" },
    { title: "University of Oxford", stream: "Accounting" },
  ],
  germany: [
    { title: "University of Munich", stream: "Healthcare Management" },
    { title: "University of Munich", stream: "Healthcare Management" },
    { title: "University of Munich", stream: "Healthcare Management" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
  ],
  ireland: [
    { title: "Trinity College Dublin", stream: "Nursing" },
    { title: "Trinity College Dublin", stream: "Nursing" },
    { title: "Trinity College Dublin", stream: "Nursing" },
    { title: "Trinity College Dublin", stream: "Nursing" },
    { title: "University College Dublin", stream: "Management" },
    { title: "University College Dublin", stream: "Management" },
    { title: "University College Dublin", stream: "Management" },
    { title: "University College Dublin", stream: "Management" },
  ],
};

export const moreData = {
  tools: [
    {
      title: "GPA Calculator",
      image: "",
      description:
        "Convert percentage marks to GPA effortlessly with our calculator!",
    },
    {
      title: "Expense Calculator",
      image: "",
      description:
        "Plan your study abroad expenses with our comprehensive calculator!",
    },
    {
      title: "IELTS Band Calculator",
      image: "",
      description:
        "Estimate your IELTS band score with our accurate calculator!",
    },
    {
      title: "Education Loan Calculator",
      image: "",
      description:
        "Discover your eligible loan amount limit with our education calculator!",
    },
  ],
  others: [
    {
      title: "University Partner",
      image: "",
      description:
        "Explore growth and opportunities with our university partnership!",
    },
    {
      title: "Events",
      image: "",
      description: "Join our events to grow your network and skills!",
    },
    {
      title: "Scholarship Program",
      image: "",
      description: "Find the best scholarships tailored to your needs!",
    },
    {
      title: "Offline Centres",
      image: "",
      description: "Visit our offline centres to learn more!",
    },
  ],
};

export const resourcesData = {
  articles: [
    { title: "Accounting Courses", stream: "Business Analytics" },
    { title: "MIT", stream: "Data Science" },
    { title: "Stanford University", stream: "Artificial Intelligence" },
  ],
  scholarships: [
    { title: "University of Sydney", stream: "Healthcare Management" },
    { title: "Monash University", stream: "Business Management" },
  ],
  ebooks: [
    { title: "University of Toronto", stream: "Data Science" },
    { title: "McGill University", stream: "Cyber Security" },
  ],
  full_form: [
    { title: "London School of Economics", stream: "Digital Marketing" },
    { title: "University of Oxford", stream: "Accounting" },
  ],
  webinars: [
    { title: "University of Munich", stream: "Healthcare Management" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
  ],
};

export const examData = {
  ielts: [
    { title: "Accounting Courses", stream: "Why Study Abroad" },
    { title: "MIT", stream: "How to Study Abroad for Free" },
    { title: "Stanford University", stream: "Study Abroad Consultants" },
    { title: "Stanford University", stream: "Study Abroad Scholarships" },
    { title: "Stanford University", stream: "Cost of Studying Abroad" },
    { title: "Stanford University", stream: "Study Abroad Myths" },
    {
      title: "Stanford University",
      stream: "How to Choose a Study Abroad Destination ",
    },
  ],
  gre: [
    { title: "University of Sydney", stream: "Healthcare Management" },
    { title: "Monash University", stream: "Business Management" },
  ],
  gmat: [
    { title: "University of Toronto", stream: "Data Science" },
    { title: "McGill University", stream: "Cyber Security" },
  ],
  toefl: [
    { title: "London School of Economics", stream: "Digital Marketing" },
    { title: "University of Oxford", stream: "Accounting" },
  ],
  pte: [
    { title: "University of Munich", stream: "Healthcare Management" },
    { title: "Technical University of Berlin", stream: "Business Analytics" },
  ],
  duolingo: [
    { title: "Trinity College Dublin", stream: "Nursing" },
    { title: "University College Dublin", stream: "Management" },
  ],
};

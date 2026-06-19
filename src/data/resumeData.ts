/**
 * Дані для резюме: контакти, навички, досвід роботи, освіта та проекти.
 */
export const resumeData = {
  name: "Denys Yorsh",
  role: "Full Stack Developer",
  /* Додаткова інформація про роль (другий рядок) */
  roleLine2: "&",
  /* Спеціалізація або додаткова роль (третій рядок) */
  roleLine3: "Power BI Data Analyst",
  photo: "/image_me.jpeg",
  /* Контактна інформація */
  contact: {
    email: "denis_my_mail@yahoo.com",
    phone: "",
    location: "Ukraine",
    linkedin: "linkedin.com/in/denys-yorsh-53601b243/",
    github: "github.com/denys-yorsh",
    signal: "signal.me/#eu/denys_yorsh.99"
  },

  /* Коротке резюме про розробника */
  summary: `I am a Full Stack Developer and Power BI Data Analyst dedicated to driving digital transformation by bridging the gap between software engineering and data science. With a broad technical background, I specialize in building robust applications while seamlessly integrating modern analytics into existing infrastructures to unlock the true value of operational data.

  My expertise spans the entire development and data lifecycle, from designing responsive user interfaces to optimizing backend logic and managing complex SQL/NoSQL databases. Having experience with multiple programming languages, frameworks, and environments, I build scalable systems that ensure data is captured accurately, stored securely, and processed efficiently.

  Focused on practical, real-world impact, I leverage Power BI to transform messy datasets into clear, interactive executive dashboards. By setting up automated data collection workflows and advanced modeling, I help organizations eliminate manual reporting, optimize internal workflows, and make critical decisions based on real-time insights.`,

  /* Категорії навичок */
  skillCategories: [
    {
      title: "Front-End",
      skills: [
        { name: "React / Angular / Vue", level: 90 },
        { name: "TypeScript / JavaScript", level: 95 },
        { name: "HTML5 / CSS3 / SASS", level: 95 },
        { name: "Tailwind / Bootstrap", level: 90 }
      ]
    },
    {
      title: "Back-End",
      skills: [
        { name: "Java / Spring Boot", level: 85 },
        { name: "REST API / Hibernate / JPA", level: 85 },
        { name: "Node.js / Nest.js / Express.js", level: 80 },
        { name: "Python / PHP", level: 75 },
        { name: "SQL / JPQL / NoSQL", level: 85 },
        { name: "OOP / SOLID / ACID", level: 85 }
      ]
    },
    {
      title: "BI & Analytics",
      skills: [
        { name: "Power BI / DAX", level: 85 },
        { name: "Power Query / M Language", level: 85 },
        { name: "Data Modeling / ETL Processes", level: 80 },
        { name: "Advanced SQL / Window Functions", level: 90 },
        { name: "Python (Pandas / NumPy / Matplotlib / Seaborn)", level: 80 },
        { name: "Data Visualization / Dashboards", level: 85 }
      ]
    },
    {
      title: "Desktop",
      skills: [
        { name: "C / C++ / Qt", level: 80 },
        { name: "C# (.NET) / WPF / Avalonia", level: 75 }
      ]
    },
    {
      title: "Mobile",
      skills: [
        { name: "Swift / UIKit / SwiftUI", level: 70 },
        { name: "Kotlin / Jetpack Compose", level: 65 },
        { name: "Mobile Design Patterns", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "ChatGPT / Gemini", level: 90 },
        { name: "BASH / Docker / Git", level: 80 },
        { name: "MySQL / SQLite / H2 Database", level: 85 },
        { name: "PostgreSQL / MongoDB", level: 85 },
        { name: "English — B1", level: 100 }
      ]
    }
  ],
  /* Досвід роботи */
  experience: [
    {
      company: "Armed Forces of Ukraine (Military Unit A5006)",
      role: "Digitalization & Transformation Specialist",
      period: "03.2026 - Present time",
      description: "Responsible for the implementation and deployment of digital solutions within military infrastructure. Modernizing internal workflows through software integration, automating administrative systems, and maintaining specialized digital platforms.",
    },
    {
      company: "Armed Forces of Ukraine (Military Unit A5006)",
      role: "Military Service / Combat Operations",
      period: "09.2024 - 03.2026",
      description: "Served in a high-pressure environment within a combat unit. Demonstrated strong resilience, team coordination, and problem-solving skills under challenging conditions. Successfully managed operational tasks and equipment maintenance while ensuring mission objectives.",
    },
    {
      company: "Freelance / Personal Projects",
      role: "Full Stack Developer",
      period: "2022 - 09.2024",
      description: "Application development using a modern technology stack. Database management, REST API design, and responsive interface development.",
    }
  ],
  
  /* Освіта та сертифікати */
  education: [
    {
      school: "Corsera",
      degree: "Microsoft Power BI Data Analyst Professional Certificate",
      period: "Jun 2026",
      sertificate: "/public/microsoft_power_bi_data_analyst_professional_certificate.jpg",
      acreditation: "https://www.coursera.org/account/accomplishments/specialization/8YUIBFH3XHFJ",
    },
    {
      school: "Corsera",
      degree: "Google Business Intelligence Professional Certificate",
      period: "Jun 2026",
      sertificate: "/public/google_business_intelligence_professional_certificate.jpg",
      acreditation: "https://www.coursera.org/account/accomplishments/specialization/UEV6NNAZO14F",
    },
    {
      school: "Corsera",
      degree: "Google Advanced Data Analytics Professional Certificate",
      period: "Jun 2026",
      sertificate: "/public/google_advanced_data_analytics_professional_certificate.jpg",
      acreditation: "https://www.coursera.org/account/accomplishments/specialization/70H727KSJPA0",
    },
    {
      school: "Corsera",
      degree: "Google Data Analytics Professional Certificate",
      period: "Jun 2026",
      sertificate: "/public/google_data_analytics_professional_certificate.jpg",
      acreditation: "https://www.coursera.org/account/accomplishments/specialization/NCXBTO2WTO2S",
    },
    {
      school: "Corsera",
      degree: "Google AI Professional Certificate",
      period: "May 2026",
      sertificate: "/public/google_ai_professional_certificate.png",
      acreditation: "https://www.coursera.org/account/accomplishments/specialization/XJY3YQKSE4KT",
    },
    {
      school: "It Step Academy Ukraine",
      degree: "Java, Java Script, Sprihg Boot, Databace",
      period: "November 2022 - October 2023",
      sertificate: "/public/diploma_it_step.jpeg"
    },
    {
      school: "IT School Hillel",
      degree: "Java",
      period: "April 2022 - October 2022",
      sertificate: "/public/hillel_sertificate.jpeg",
    },
    {
      school: "Kharkov National Economic University",
      degree: "Specialist, Economics of enterprises",
      period: "2004 - 2009",
    },
  ],
  
  /* Список проектів */
  projects: [
    {
      name: "Full Stack Developer (React) - Resume (Source files)",
      description: "Developed a web application (resume) using React.",
      link: "https://github.com/Denys-Yorsh/resume-react",
    },
    {
      name: "Duty Schedule (C++)",
      description: "Developed a C++ application for automating the creation and management of duty schedules in a military unit of the Armed Forces of Ukraine (AFU).",
      link: "https://github.com/Denys-Yorsh/duty-manager",
    },
    {
      name: "Weather App (React)",
      description: "A small web application for viewing weather built with React, using an API to retrieve real-time data.",
      link: "https://github.com/Denys-Yorsh/weather-app",
    },
    {
      name: "Currency converter (Angular)",
      description: "An app for converting currencies using the NBU exchange rate in real time, without any extra buttons.",
      link: "https://github.com/Denys-Yorsh/currency-converter-angular",
    },
    {
      name: "Adaptive resume",
      description: "Source code of the resume page using modern layout techniques.",
      link: "https://denys-yorsh.github.io/resume-adaptic-page/",
    },
    {
      name: "Diploma project (Spring Boot)",
      description: "A comprehensive server-side application built on Java Spring Boot, demonstrating database and business logic skills.",
      link: "https://github.com/Denys-Yorsh/diploma-itstep",
    },
  ],
  
  /* Приклади коду (пасхалки) */
  codeSamples: [
    {
      title: "Custom C++ Easter Egg",
      language: "C++",
      code: `#include <iostream>

// If this works, I don\u2019t know why. :)

int main() {
    const char message[] = {
        0b01010100, 0b01101000, 0b01100101, 0b01110010, 0b01100101,
        0b00100000, 0b01101001, 0b01110011, 0b00100000, 0b01101110,
        0b01101111, 0b00100000, 0b01100010, 0b01110101, 0b01100111,
        0b00101100, 0b00100000, 0b01101111, 0b01101110, 0b01101100,
        0b01111001, 0b00100000, 0b01110101, 0b01101110, 0b01100101,
        0b01111000, 0b01110000, 0b01100101, 0b01100011, 0b01110100,
        0b01100101, 0b01100100, 0b00100000, 0b01100110, 0b01100101,
        0b01100001, 0b01110100, 0b01110101, 0b01110010, 0b01100101,
        0b01110011, 0b00101110, 0
    };

    std::cout << message << std::endl;
    return 0;
}`
    },
    {
      title: "Custom Angular Easter Egg",
      language: "C++",
      code: `import { Component } from \u0027@angular/core\u0027;

// I wrote this code. Please don\u2019t touch it. :)

@Component({
  selector: 'app-easter-egg',
  template:\u0060
    <div style="font-family: monospace; padding: 20px;">
      <pre>{{ decoded }}</pre>
    </div>
  \u0060
})
export class EasterEggComponent {

  private message = [
    0b01000111, 0b01101111, 0b01101111, 0b01100100, 0b00100000,
    0b01100011, 0b01101111, 0b01100100, 0b01100101, 0b00100000,
    0b01110011, 0b01110000, 0b01100101, 0b01100001, 0b01101011,
    0b01110011, 0b00100000, 0b01100110, 0b01101111, 0b01110010,
    0b00100000, 0b01101001, 0b01110100, 0b01110011, 0b01100101,
    0b01101100, 0b01100110, 0b00101110
  ];

  decoded: string = this.message
    .map(b => String.fromCharCode(b))
    .join('');
}`
    }
  ],
};

export const header = {
  name: "Elaine Han",
  year: "4A Honors Bachelor of Computer Science",
  email: "elaine.han@uwaterloo.ca",
  emailLink: "mailto:elaine.han@uwaterloo.ca",
  phone: "403-966-8805",
  linkedIn: "elainehan3",
  linkedInLink: "https://ca.linkedin.com/in/elainehan3",
  site: "elainehan3.github.io",
  siteLink: "https://elainehan3.github.io",
  github: "elainehan3",
  githubLink: "https://github.com/elainehan3",
}

export const skills = [{
  id: "languages",
  title: "Languages",
  items: "JavaScript/TypeScript, Python, C/C++, SQL, GraphQL, Kotlin, HTML/CSS, Bash",
},
{
  id: "techs",
  title: "Tools & Technologies",
  items: "React/Redux, Django, React Native, Next.js, Node.js, PostgreSQL, SQLite, Apollo, Figma",
}
]

/* <div className="entry">
                <div className="line">
                  <div className="plainline">
                    <h3>{rdata.resumeSite.title}</h3><h5> | {rdata.resumeSite.techs}</h5>
                  </div>
                  <a href={rdata.resumeSite.link}><p>elainehan3.github.io</p></a>
                </div>
                <p>∙ Designed, developed, and deployed a mobile-friendly & responsive portfolio website with interactive elements</p>
                <p>∙ Site also hosts small projects such as:</p>

                <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; Needle in a Haystack</strong> - Fully functioning and responsive i-Spy minigame</p>
                <p><strong>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp; Weather</strong> - Mobile-friendly and responsive weather web app using OpenWeather API</p>
              </div> */

export const projectsNotResume = [
  {
    id: "hay",
    title: "Needle In A Haystack",
    techs: "React, JavaScript, HTML/SCSS",
    did:
      [
        "Fully functioning and responsive i-Spy minigame",
      ],
    desc: "A silly i-Spy minigame created with React.",
    img: "assets/needleinhay.png",
    demo: "/showcase#findneedle",
    demoName: "See it here!",
    link: "https://github.com/elainehan3/elainehan3.github.io",
    linkName: "On GitHub",
  },
  {
    id: "weather",
    title: "Weather Web App",
    techs: "React, Node.js, JavaScript/HTML/CSS",
    did:
      [
        "Mobile-friendly and responsive on all screen sizes and browsers, with data fetched from OpenWeather API",
        "Implemented search autocomplete for country and error handling messages"
      ],
    desc: "Mobile-friendly and responsive weather web app using OpenWeather API. Can search by city and country, or city alone, and includes suggestions for countries.",
    img: "assets/weatherapp.png",
    demo: "/showcase#weather",
    demoName: "Find it here!",
    link: "https://github.com/elainehan3/elainehan3.github.io",
    linkName: "On GitHub",
    resumeLink: "https://elainehan3.github.io/#/showcase",
    resumeLinkName: "elainehan3.github.io/#/showcase",
  },
  {
    id: "mealtime",
    title: "MealTime",
    techs: "Kotlin, Android Studio",
    did:
      [
        "Collaborated to design and develop an Android meal planning app with recipe suggestions and grocery list planning",
        "Prototyped and implemented front-end and navigation",
        "Awarded \"Most Liked\" project at Project Program Hackathon",
      ],
    desc: "Android meal planning app with recipe suggestions and grocery list planning",
    img: "assets/mealtime.jpeg",
    demo: "",
    demoName: "",
    link: "https://github.com/Miniapple8888/MealTime",
    linkName: "On Github",
    resumeLink: "https://github.com/Miniapple8888/MealTime",
    resumeLinkName: "github.com/Miniapple8888/MealTime",
  },
]

export const projectsResume = [
  {
    id: "site",
    title: "Personal Website",
    techs: "React, Node.js, JavaScript/HTML/CSS",
    did:
      [
        "Designed, developed, and deployed a mobile-friendly & responsive portfolio website with interactive elements, minigames",
      ],
    desc: "Responsive, mobile-friendly portfolio website with interactive elements",
    img: "assets/siteSS.png",
    demo: "",
    demoName: "",
    link: "https://github.com/elainehan3/elainehan3.github.io",
    linkName: "Source code here",
    resumeLink: "https://elainehan3.github.io",
    resumeLinkName: "elainehan3.github.io",
  },
  
  {
    id: "biquadris",
    title: "Biquadris",
    techs: "C++",
    did:
      [
        "Fully-functioning two-player Tetris game with XWindow graphical user interface",
        "Utilized object-oriented design patterns such as MVC, observer, and decorator to optimize maintainability",
        "Received a grade of 100%",
      ],
    desc: "Fully-functioning two-player Tetris game with XWindow graphical user interface, using object-oriented design patterns such as MVC, observer, and decorator. Recieved grade of 100%.",
    img: "assets/biquadris.png",
    demo: "",
    demoName: "",
    link: "mailto:elaine.han@uwaterloo.ca",
    linkName: "Code available upon request",
    resumeLink: "mailto:elaine.han@uwaterloo.ca",
    resumeLinkName: "Code available upon request",
  },
]

export const projects = projectsNotResume.concat(projectsResume);

export const experience = [
  {
    id: "goeasy",
    img:
      "./assets/goeasy.png",
    icon: "./assets/goeasy.png",
    title: "Front-End Developer",
    company: "goeasy LTD",
    start: "Sep 2023",
    end: "Dec 2023",
    where: "Toronto, ON",
    techs: "JavaScript, GraphQL, Apollo, Next.js",
    desc: "",
    did:
      [
        
        "Collaborated to revamp vulnerability scan protocol in the development pipeline, improving detection and mitigation",
        "Designed and developed a successful proof-of-concept AI education tool and delivered demonstrations to executives and employees, securing executive approval for its integration",
        "Redesigned team branching strategy to meet project requirements and industry standards, communicated the improved processes through presentations and comprehensive documentation",

        //"Revamped team branching strategy to meet project requirements and industry standards and collaborated with security personnel to enhance vulnerability scan protocol in the development pipeline, improving detection and mitigation",
        //"Communicated the improved processes through presentations and comprehensive documentation",
        "Streamlined front-end codebase and optimized Apollo GraphQL queries through strategic refactoring, improving maintainability and performance",
      ],
  },
  {
    id: "ford",
    img:
      "https://www.ford.co.nz/content/dam/Ford/website-assets/ap/nz/about/use_of_logo/desktop-1.jpg/jcr:content/renditions/small.jpg",
    icon: "https://pbs.twimg.com/profile_images/1397213512523468800/Ua8S36A7_400x400.jpg",
    title: "Unreal Engine Developer",
    company: "Ford Motor Companies",
    start: "Jan 2023",
    end: "Apr 2023",
    where: "Ottawa, ON (Remote)",
    techs: "C++, Unreal Engine 4",
    desc: "",
    did:
      [
        "Developed new features and fixes for in-vehicle infotainment system using C++ and Unreal Engine 4",
        "Implemented and configured 10+ analytics actions system-wide to provide valuable user insights to developers",
        //"Investigated and reported application bugs and performed bug-fixes",
      ],
  },
  {
    id: "fleet",
    icon:
      "https://media-exp1.licdn.com/dms/image/C4E0BAQGPwM5BYD6zxw/company-logo_200_200/0/1600215946485?e=2147483647&v=beta&t=iHX1efR3ES2jHZcoKDHP87gxKHPIlLlARiIeMEFWr5U",
    img: "https://media-exp1.licdn.com/dms/image/C4E0BAQGPwM5BYD6zxw/company-logo_200_200/0/1600215946485?e=2147483647&v=beta&t=iHX1efR3ES2jHZcoKDHP87gxKHPIlLlARiIeMEFWr5U",
    title: "Full-Stack Software Engineer",
    company: "Move With Fleet",
    start: "May 2022",
    end: "Aug 2022",
    where: "Toronto, ON (Remote)",
    techs: "React, Django, Typescript, Python, PostgreSQL",
    desc: "",
    did:
      [
        "Launched a user approval web tool with custom React components, managing data from 250+ users via Django REST",
        "Implemented end-to-end CRUD operations, including batch user rollouts/removals and Stripe activations",
        "Built quick-add trip logging tool with custom screens to handle user reporting for 9000+ monthly trips in React Native",
        //"Configured 10+ analytics actions app-wide to optimize user insights and efficiency with Segment",
        //"Investigated and reported IOS/Android app bugs using Bugsnag and performed ad-hoc bug-fixes",
        "Designed various UI components for web and mobile app with Figma",
        // "Launched a user approval web tool with custom React components, managing data from 250+ users via Django REST",
        // "Implemented end-to-end CRUD operations, including batch user rollouts/removals and Stripe activations, using Django ORM and transactions, with PostgreSQL database",
        // "Built quick-add trip logging tool with custom screens to handle user reporting for 9000+ monthly trips in React Native",
        // "Overhauled mobile navigation and developed consolidated screens to decouple code and streamline user interface",
        // //"Configured 10+ analytics actions app-wide to optimize user insights and efficiency with Segment",
        // //"Investigated and reported IOS/Android app bugs using Bugsnag and performed ad-hoc bug-fixes",
        // "Designed various UI components for web and mobile app with Figma",
      ],
    },
  {
    id: "deloitte",
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png",
    icon: "https://media-exp1.licdn.com/dms/image/C4E0BAQHda-o9KT2w5Q/company-logo_200_200/0/1625689676984?e=2147483647&v=beta&t=y4-UjyA7OEgXO-8QfS0XFMZcQg8Ku-1k3P3Ux_nu-2M",
    icon2: "https://upload.wikimedia.org/wikipedia/commons/2/2b/DeloitteNewSmall.png",
    title: "Cyber Security Intern",
    company: "Deloitte",
    start: "Sep 2021",
    end: "Dec 2021",
    where: "Vancouver, BC (Remote)",
    desc: "",
    did:
      [
        "Developed tools in Python to automate a text formatting process, removing the need for manual editing and improving team's publishing workflow by ~1 hour per day",
        //"Automated and improved a time-tracking Jira dashboard gadget, reducing documentation workflow by ~10 minutes",
        "Analyzed client web infrastructure for vulnerabilities and created reports with client-specific recommendations",
        //"Researched, produced and published daily technical reports analyzing computer vulnerabilities and malicious software",
      ],
  },
  // {
  //   id: "idealab",
  //   img:
  //     "./assets/idealab.jpeg",
  //   icon: "./assets/idealab.jpeg",
  //   title: "STEM Instructor",
  //   company: "IdeaLab Kids Calgary",
  //   start: "Nov 2019",
  //   end: "Aug 2021",
  //   where: "Calgary, AB",
  //   desc: "Lead science, math, robotics, and programming classes of 10+ students in afterschool programs and summer camps",
  //   did:
  //     [
  //       "Lead science, math, robotics, and programming classes of 10+ students in afterschool programs and summer camps",
  //     ],

  // }
]

export const activities = [
  {
    id: "discord",
    icon: "https://csclub.uwaterloo.ca/images/logo-icon.svg",
    img:
      "https://csclub.uwaterloo.ca/images/logo-icon.svg",
    title: "Bot Developer",
    techs: "TypeScript, Docker, SQLite",
    company: "Computer Science Club (CSC)",
    start: "Sep 2021",
    end: "Present",
    desc:
      "I help develop CS club's discord bot!",
    did:
      [
        "Worked with development team to brainstorm, plan, and implement new and requested features for CSC server Discord bot",
        "Collaborated to implement mock interview scheduling and server currency features ",
      ],

  },
]

export const activitiesNotResume = [
  {
    id: "kpop",
    icon: "./assets/uwkpop.png",
    img:
      "./assets/uwkpop.png",
    title: "Graphic Design Manager",
    techs: "",
    company: "UW KPop",
    start: "Sep 2021",
    end: "Present",
    desc:
      "I lead the club's design team in creating advertisements!",
    did:
      [
        "Lead a design team to create club advertisements",
      ],
  },
  {
    id: "3",
    icon: "https://csclub.uwaterloo.ca/images/logo-icon.svg",
    img:
      "https://csclub.uwaterloo.ca/images/logo-icon.svg",
    title: "Event Coordinator",
    techs: "",
    company: "Computer Science Club",
    start: "Jan 2021",
    end: "Present",
    desc:
      "I help coordinate club events!",
    did:
      [
        "Lead a design team of 3 to create advertisements",
      ],
  },
]

export const education = {
  id: "uw",
  title: "University of Waterloo",
  program: "Bachelor of Computer Science (BCS)",
  start: "2020",
  end: "2025 (expected)",
  howAreMyGradesDoing: "Excellent Standing",
}
import Section from "../../components/Section";
import Header from "../../components/Header";
import { FaDownload } from "react-icons/fa";

const Careers = () => {
  const careerCategories = {
    "Beginner Levels": [
      {
        id: 1,
        title: "Frontend Beginner",
        description: "Learn the basics of frontend development.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf",
      },
      {
        id: 2,
        title: "Backend Beginner",
        description: "Understand the fundamentals of backend development.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/backend.pdf",
      },
      {
        id: 3,
        title: "DevOps Beginner",
        description: "Get introduced to DevOps principles and practices.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
    ],
    "Core Development": [
      {
        id: 4,
        title: "Frontend",
        description:
          "Dive deeper into frontend development with advanced concepts.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/frontend.pdf",
      },
      {
        id: 5,
        title: "Backend",
        description:
          "Learn backend development, databases, and server-side logic.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/backend.pdf",
      },
      {
        id: 6,
        title: "Full Stack",
        description: "Master both frontend and backend development.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/full-stack.pdf",
      },
      {
        id: 7,
        title: "API Design",
        description: "Learn how to design and develop effective APIs.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/api-design.pdf",
      },
    ],
    "Specialized Roles": [
      {
        id: 8,
        title: "QA",
        description: "Master software testing and quality assurance.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/qa.pdf",
      },
      {
        id: 9,
        title: "DevOps",
        description:
          "Gain expertise in CI/CD, automation, and cloud technologies.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
      {
        id: 10,
        title: "Android",
        description:
          "Learn Android development and mobile application creation.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
      {
        id: 11,
        title: "iOS",
        description: "Master iOS development for Apple's ecosystem.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
      {
        id: 12,
        title: "PostgreSQL",
        description:
          "Get proficient with PostgreSQL, an advanced SQL database.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
    ],
    // "Leadership & Management": [
    //   {
    //     id: 13,
    //     title: "Software Architect",
    //     description: "Design scalable software systems.",
    //     downloadLink: "/path/to/software-architect.pdf",
    //   },
    //   {
    //     id: 14,
    //     title: "Technical Writer",
    //     description: "Document technical solutions and architectures.",
    //     downloadLink: "/path/to/technical-writer.pdf",
    //   },
    //   {
    //     id: 15,
    //     title: "DevRel Engineer",
    //     description: "Build relationships between the company and developers.",
    //     downloadLink: "/path/to/devrel-engineer.pdf",
    //   },
    //   {
    //     id: 16,
    //     title: "Product Manager",
    //     description: "Oversee the development and delivery of products.",
    //     downloadLink: "/path/to/product-manager.pdf",
    //   },
    //   {
    //     id: 17,
    //     title: "Engineering Manager",
    //     description: "Lead and mentor engineering teams.",
    //     downloadLink: "/path/to/engineering-manager.pdf",
    //   },
    // ],
    "AI & Data": [
      {
        id: 18,
        title: "AI and Data Scientist",
        description: "Work with machine learning models and data analysis.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
      {
        id: 19,
        title: "AI Engineer",
        description: "Develop and implement AI systems and solutions.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/devops.pdf",
      },
      {
        id: 20,
        title: "Data Analyst",
        description: "Analyze data to provide business insights.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/data-analyst.pdf",
      },
      {
        id: 21,
        title: "MLOps",
        description: "Implement machine learning pipelines and operations.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/mlops.pdf",
      },
    ],
    // "Game Development": [
    //   {
    //     id: 22,
    //     title: "Client Side Game Dev.",
    //     description: "Develop games for client-side platforms.",
    //     downloadLink: "https://roadmap.sh/pdfs/roadmaps/mlops.pdf",
    //   },
    //   {
    //     id: 23,
    //     title: "Server Side Game Dev.",
    //     description: "Work on server-side game mechanics and systems.",
    //     downloadLink: "https://roadmap.sh/pdfs/roadmaps/mlops.pdf",
    //   },
    // ],
    "Design & Architecture": [
      {
        id: 26,
        title: "Blockchain",
        description: "Develop decentralized applications and solutions.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/blockchain.pdf",
      },
      {
        id: 27,
        title: "Cyber Security",
        description: "Work on protecting systems from cyber threats.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/cyber-security.pdf",
      },
    ],
    "Skills & Technologies": [
      {
        id: 29,
        title: "GraphQL",
        description: "Learn to query APIs using GraphQL.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/graphql.pdf",
      },
      {
        id: 30,
        title: "Git and GitHub",
        description: "Master version control with Git and GitHub.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/git-github.pdf",
      },
      {
        id: 31,
        title: "React",
        description: "Learn to build dynamic UIs with React.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/react.pdf",
      },
      {
        id: 32,
        title: "Vue",
        description: "Create fast and scalable applications with Vue.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/vue.pdf",
      },
      {
        id: 33,
        title: "Angular",
        description: "Build web applications with Angular.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/angular.pdf",
      },
      {
        id: 34,
        title: "Spring Boot",
        description: "Create Java-based web applications using Spring Boot.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/spring-boot.pdf",
      },
      {
        id: 35,
        title: "ASP.NET Core",
        description: "Develop web applications with ASP.NET Core.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/aspnet-core.pdf",
      },
      {
        id: 36,
        title: "JavaScript",
        description:
          "Learn to build interactive web applications with JavaScript.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/javascript.pdf",
      },
      {
        id: 37,
        title: "TypeScript",
        description: "Type-safe JavaScript for building large applications.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/typescript.pdf",
      },
      {
        id: 38,
        title: "Node.js",
        description: "Use Node.js to build scalable server-side applications.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/nodejs.pdf",
      },
      {
        id: 39,
        title: "PHP",
        description: "Server-side scripting for web development with PHP.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/php.pdf",
      },
      {
        id: 40,
        title: "C++",
        description: "Learn C++ for system-level programming.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/c++.pdf",
      },
      {
        id: 41,
        title: "Go",
        description: "Build efficient and scalable software with Go.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/go.pdf",
      },
      {
        id: 42,
        title: "Rust",
        description: "Learn the systems programming language Rust.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/rust.pdf",
      },
      {
        id: 43,
        title: "Python",
        description: "Work with Python for various programming tasks.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/python.pdf",
      },
      {
        id: 44,
        title: "Java",
        description: "Learn Java for enterprise-level applications.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/java.pdf",
      },
      {
        id: 45,
        title: "SQL",
        description: "Master structured query language for databases.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/sql.pdf",
      },
      {
        id: 46,
        title: "Docker",
        description: "Learn containerization with Docker.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/docker.pdf",
      },
      {
        id: 47,
        title: "Kubernetes",
        description: "Manage containerized applications with Kubernetes.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/kubernetes.pdf",
      },
      {
        id: 48,
        title: "AWS",
        description: "Get familiar with cloud computing using AWS.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/aws.pdf",
      },
      {
        id: 51,
        title: "React Native",
        description: "Develop mobile apps with React Native.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/react-native.pdf",
      },
      {
        id: 52,
        title: "Flutter",
        description: "Build cross-platform mobile apps with Flutter.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/flutter.pdf",
      },
      {
        id: 53,
        title: "MongoDB",
        description: "Get hands-on with NoSQL database MongoDB.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/mongodb.pdf",
      },
      {
        id: 54,
        title: "Redis",
        description: "Learn Redis for high-performance caching.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/redis.pdf",
      },
    ],
    // "Computer Science": [
    //   {
    //     id: 55,
    //     title: "Computer Science",
    //     description: "Learn the foundations of computer science.",
    //     downloadLink: "/path/to/computer-science.pdf",
    //   },
    //   {
    //     id: 56,
    //     title: "Data Structures",
    //     description: "Master essential data structures for programming.",
    //     downloadLink: "/path/to/data-structures.pdf",
    //   },
    //   {
    //     id: 57,
    //     title: "System Design",
    //     description: "Understand how to design scalable and efficient systems.",
    //     downloadLink: "/path/to/system-design.pdf",
    //   },
    // ],
    "Other Skills": [
      {
        id: 59,
        title: "Code Review",
        description:
          "Get skilled in reviewing code for quality and efficiency.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/code-review.pdf",
      },
      {
        id: 60,
        title: "Prompt Engineering",
        description: "Work with AI systems by designing effective prompts.",
        downloadLink: "https://roadmap.sh/pdfs/roadmaps/prompt-engineering.pdf",
      },
    ],
  };

  return (
    <>
      <Header />
      <Section
        id="careers"
        className="pt-[12rem] -mt-[5.25rem]"
        crosses
        crossesOffset="lg:translate-y-[5.25rem]"
        customPaddings
      >
        <div className="container">
          <h2 className="h2 mb-8">Careers at Ainexim</h2>
          {Object.entries(careerCategories).map(([category, careers]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold mb-4">{category}</h3>
              <ul className="list-none space-y-6">
                {careers.map((career) => (
                  <li
                    key={career.id}
                    className="bg-gray-900 p-4 rounded-lg shadow-lg flex items-center justify-between"
                  >
                    <div>
                      <h4 className="font-semibold">{career.title}</h4>
                      <p>{career.description}</p>
                    </div>
                    <a
                      href={career.downloadLink}
                      className="flex items-center text-blue-500"
                    >
                      <FaDownload className="mr-2" /> Download
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Careers;

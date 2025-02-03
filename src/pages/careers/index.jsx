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
        downloadLink:
          "https://roadmap.sh/pdfs/roadmaps/backend?r=backend-beginner#",
      },
      {
        id: 3,
        title: "DevOps Beginner",
        description: "Get introduced to DevOps principles and practices.",
        downloadLink:
          "https://roadmap.sh/pdfs/roadmaps/devops?r=devops-beginner#",
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
        downloadLink: "/path/to/android.pdf",
      },
      {
        id: 11,
        title: "iOS",
        description: "Master iOS development for Apple's ecosystem.",
        downloadLink: "/path/to/ios.pdf",
      },
      {
        id: 12,
        title: "PostgreSQL",
        description:
          "Get proficient with PostgreSQL, an advanced SQL database.",
        downloadLink: "/path/to/postgresql.pdf",
      },
    ],
    "Leadership & Management": [
      {
        id: 13,
        title: "Software Architect",
        description: "Design scalable software systems.",
        downloadLink: "/path/to/software-architect.pdf",
      },
      {
        id: 14,
        title: "Technical Writer",
        description: "Document technical solutions and architectures.",
        downloadLink: "/path/to/technical-writer.pdf",
      },
      {
        id: 15,
        title: "DevRel Engineer",
        description: "Build relationships between the company and developers.",
        downloadLink: "/path/to/devrel-engineer.pdf",
      },
      {
        id: 16,
        title: "Product Manager",
        description: "Oversee the development and delivery of products.",
        downloadLink: "/path/to/product-manager.pdf",
      },
      {
        id: 17,
        title: "Engineering Manager",
        description: "Lead and mentor engineering teams.",
        downloadLink: "/path/to/engineering-manager.pdf",
      },
    ],
    "AI & Data": [
      {
        id: 18,
        title: "AI and Data Scientist",
        description: "Work with machine learning models and data analysis.",
        downloadLink: "/path/to/ai-and-data-scientist.pdf",
      },
      {
        id: 19,
        title: "AI Engineer",
        description: "Develop and implement AI systems and solutions.",
        downloadLink: "/path/to/ai-engineer.pdf",
      },
      {
        id: 20,
        title: "Data Analyst",
        description: "Analyze data to provide business insights.",
        downloadLink: "/path/to/data-analyst.pdf",
      },
      {
        id: 21,
        title: "MLOps",
        description: "Implement machine learning pipelines and operations.",
        downloadLink: "/path/to/mlops.pdf",
      },
    ],
    "Game Development": [
      {
        id: 22,
        title: "Client Side Game Dev.",
        description: "Develop games for client-side platforms.",
        downloadLink: "/path/to/client-side-game-dev.pdf",
      },
      {
        id: 23,
        title: "Server Side Game Dev.",
        description: "Work on server-side game mechanics and systems.",
        downloadLink: "/path/to/server-side-game-dev.pdf",
      },
    ],
    "Design & Architecture": [
      {
        id: 24,
        title: "UX Design",
        description: "Focus on user experience and interaction design.",
        downloadLink: "/path/to/ux-design.pdf",
      },
      {
        id: 25,
        title: "Design System",
        description: "Create and maintain consistent design patterns.",
        downloadLink: "/path/to/design-system.pdf",
      },
      {
        id: 26,
        title: "Blockchain",
        description: "Develop decentralized applications and solutions.",
        downloadLink: "/path/to/blockchain.pdf",
      },
      {
        id: 27,
        title: "Cyber Security",
        description: "Work on protecting systems from cyber threats.",
        downloadLink: "/path/to/cyber-security.pdf",
      },
    ],
    "Skills & Technologies": [
      {
        id: 28,
        title: "Skill Based Roadmaps",
        description: "Create personalized learning paths.",
        downloadLink: "/path/to/skill-based-roadmaps.pdf",
      },
      {
        id: 29,
        title: "GraphQL",
        description: "Learn to query APIs using GraphQL.",
        downloadLink: "/path/to/graphql.pdf",
      },
      {
        id: 30,
        title: "Git and GitHub",
        description: "Master version control with Git and GitHub.",
        downloadLink: "/path/to/git-and-github.pdf",
      },
      {
        id: 31,
        title: "React",
        description: "Learn to build dynamic UIs with React.",
        downloadLink: "/path/to/react.pdf",
      },
      {
        id: 32,
        title: "Vue",
        description: "Create fast and scalable applications with Vue.",
        downloadLink: "/path/to/vue.pdf",
      },
      {
        id: 33,
        title: "Angular",
        description: "Build web applications with Angular.",
        downloadLink: "/path/to/angular.pdf",
      },
      {
        id: 34,
        title: "Spring Boot",
        description: "Create Java-based web applications using Spring Boot.",
        downloadLink: "/path/to/spring-boot.pdf",
      },
      {
        id: 35,
        title: "ASP.NET Core",
        description: "Develop web applications with ASP.NET Core.",
        downloadLink: "/path/to/aspnet-core.pdf",
      },
      {
        id: 36,
        title: "JavaScript",
        description:
          "Learn to build interactive web applications with JavaScript.",
        downloadLink: "/path/to/javascript.pdf",
      },
      {
        id: 37,
        title: "TypeScript",
        description: "Type-safe JavaScript for building large applications.",
        downloadLink: "/path/to/typescript.pdf",
      },
      {
        id: 38,
        title: "Node.js",
        description: "Use Node.js to build scalable server-side applications.",
        downloadLink: "/path/to/nodejs.pdf",
      },
      {
        id: 39,
        title: "PHP",
        description: "Server-side scripting for web development with PHP.",
        downloadLink: "/path/to/php.pdf",
      },
      {
        id: 40,
        title: "C++",
        description: "Learn C++ for system-level programming.",
        downloadLink: "/path/to/c++.pdf",
      },
      {
        id: 41,
        title: "Go",
        description: "Build efficient and scalable software with Go.",
        downloadLink: "/path/to/go.pdf",
      },
      {
        id: 42,
        title: "Rust",
        description: "Learn the systems programming language Rust.",
        downloadLink: "/path/to/rust.pdf",
      },
      {
        id: 43,
        title: "Python",
        description: "Work with Python for various programming tasks.",
        downloadLink: "/path/to/python.pdf",
      },
      {
        id: 44,
        title: "Java",
        description: "Learn Java for enterprise-level applications.",
        downloadLink: "/path/to/java.pdf",
      },
      {
        id: 45,
        title: "SQL",
        description: "Master structured query language for databases.",
        downloadLink: "/path/to/sql.pdf",
      },
      {
        id: 46,
        title: "Docker",
        description: "Learn containerization with Docker.",
        downloadLink: "/path/to/docker.pdf",
      },
      {
        id: 47,
        title: "Kubernetes",
        description: "Manage containerized applications with Kubernetes.",
        downloadLink: "/path/to/kubernetes.pdf",
      },
      {
        id: 48,
        title: "AWS",
        description: "Get familiar with cloud computing using AWS.",
        downloadLink: "/path/to/aws.pdf",
      },
      {
        id: 49,
        title: "Linux",
        description: "Learn Linux for system administration.",
        downloadLink: "/path/to/linux.pdf",
      },
      {
        id: 50,
        title: "Terraform",
        description: "Automate infrastructure provisioning with Terraform.",
        downloadLink: "/path/to/terraform.pdf",
      },
      {
        id: 51,
        title: "React Native",
        description: "Develop mobile apps with React Native.",
        downloadLink: "/path/to/react-native.pdf",
      },
      {
        id: 52,
        title: "Flutter",
        description: "Build cross-platform mobile apps with Flutter.",
        downloadLink: "/path/to/flutter.pdf",
      },
      {
        id: 53,
        title: "MongoDB",
        description: "Get hands-on with NoSQL database MongoDB.",
        downloadLink: "/path/to/mongodb.pdf",
      },
      {
        id: 54,
        title: "Redis",
        description: "Learn Redis for high-performance caching.",
        downloadLink: "/path/to/redis.pdf",
      },
    ],
    "Computer Science": [
      {
        id: 55,
        title: "Computer Science",
        description: "Learn the foundations of computer science.",
        downloadLink: "/path/to/computer-science.pdf",
      },
      {
        id: 56,
        title: "Data Structures",
        description: "Master essential data structures for programming.",
        downloadLink: "/path/to/data-structures.pdf",
      },
      {
        id: 57,
        title: "System Design",
        description: "Understand how to design scalable and efficient systems.",
        downloadLink: "/path/to/system-design.pdf",
      },
    ],
    "Other Skills": [
      {
        id: 58,
        title: "Design and Architecture",
        description:
          "Learn the principles of design and software architecture.",
        downloadLink: "/path/to/design-and-architecture.pdf",
      },
      {
        id: 59,
        title: "Code Review",
        description:
          "Get skilled in reviewing code for quality and efficiency.",
        downloadLink: "/path/to/code-review.pdf",
      },
      {
        id: 60,
        title: "Prompt Engineering",
        description: "Work with AI systems by designing effective prompts.",
        downloadLink: "/path/to/prompt-engineering.pdf",
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

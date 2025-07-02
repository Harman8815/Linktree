import { jsx } from "react/jsx-runtime";
import Projects from "../components/sections/Projects";

export const frontendProjects = [
  {
    title: "Apple UI Clone",
    logo: "https://cdn.freelogovectors.net/wp-content/uploads/2023/03/apple_logo-freelogovectors.net_-1.png", // Replace with actual icon component or path
    subdescription: "iPhone 15 launch website clone using 3D models and animations.",
    description:
      "A stunning recreation of the iPhone 15 launch website using React, GSAP, and Three.js. Features smooth transitions, 3D visuals, and a focus on visual storytelling to mimic the Apple user experience.",
    techStack: ["React", "TailwindCSS", "GSAP", "Three.js"],
    liveLink: "https://appple-clone-harman.netlify.app/",
    githubLink: "https://github.com/Harman8815/Apple-UI",
  },
  {
    title: "Portfolio",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s",
    subdescription: "Responsive personal portfolio with animations and dark mode.",
    description:
      "A modern and fully responsive developer portfolio built with React, TailwindCSS, GSAP, and Three.js. Includes animated sections, a 3D About Me component, and support for light/dark mode toggling.",
    techStack: ["React", "Three.js", "TailwindCSS", "GSAP"],
    liveLink: "https://portfolioharman-react.netlify.app/",
    githubLink: "#",
  },
  // {
  //   title: "SaaS Landing Page",
  //   logo: "https://img.freepik.com/free-vector/branding-identity-corporate-vector-logo-s-design_460848-8637.jpg",
  //   subdescription: "Clean and responsive marketing UI template for SaaS startups.",
  //   description:
  //     "A pixel-perfect SaaS landing page template with modular design components, call-to-actions, testimonials, and pricing sections. Ideal for marketing early-stage SaaS products or tools.",
  //   techStack: ["React", "TailwindCSS"],
  //   liveLink: "#",
  //   githubLink: "#",
  // },
  {
    title: "Zentry Clone",
    logo: "https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/151113782034/original/1FWLSjPmqXjuOhNM1gBpXgtda55-D2BnnQ.png",
    subdescription: "A frontend UI clone inspired by a productivity dashboard.",
    description:
      "A visually dynamic frontend-only clone of Zentry’s homepage UI. Features smooth scroll animations, custom components, and utility-first layout powered by TailwindCSS and GSAP.",
    techStack: ["React", "TailwindCSS", "GSAP"],
    liveLink: "https://zentri-clone.netlify.app/",
    githubLink: "https://github.com/Harman8815/Zentry-animated-website",
  },
  {
    title: "Sundown Studio Animated Website",
    logo: "https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg",
    subdescription: "Creative agency site clone with scroll-based animations.",
    description:
      "A visually rich animated website inspired by Sundown Studio. Built using vanilla JS and GSAP for scroll-triggered animations and transitions to highlight creative storytelling.",
    techStack: ["HTML", "CSS", "JavaScript", "GSAP"],
    liveLink: "https://sundown-website-clone.netlify.app/",
    githubLink: "https://github.com/Harman8815/Sundown-animated-website",
  },
  {
    title: "3D T-Shirt Website",
    logo: "https://i.pinimg.com/736x/55/97/a9/5597a9e2ad98912f550e2719cd673d6b.jpg",
    subdescription: "Interactive t-shirt customization experience using 3D models.",
    description:
      "A fully interactive 3D product customization page built with React Three Fiber and Tailwind. Users can change shirt colors, upload logos, and view real-time 3D previews.",
    techStack: ["React", "Three.js", "TailwindCSS"],
    liveLink: "https://3d-tshirt-editter.netlify.app/",
    githubLink: "https://github.com/Harman8815/tshirt-3d-website",
  },
];
export const fullstackProjects = [
  {
    title: "Gmail Clone",
    logo: "https://images.icon-icons.com/2642/PNG/512/google_mail_gmail_logo_icon_159346.png", // replace with actual icon
    description:
      "A full-featured Gmail clone built with Firebase and React. Includes real-time mailbox sync, user authentication, routing, and responsive layout that closely mimics the Gmail experience.",
    techStack: ["React", "Firebase", "Firestore", "EmailJS"],
    liveLink: "#",
    githubLink: "https://github.com/Harman8815/Gmail-Clone",
  },
  {
    title: "Harvest Horizon",
    logo: "https://t4.ftcdn.net/jpg/06/43/74/99/360_F_643749925_2y3oCguT4NLWJqOFSfUIDYk4rLQJEwu6.jpg",
    description:
      "A machine learning–powered crop prediction system that analyzes yield and health status. Built using a Python Flask backend and integrated with an Express/React-based frontend dashboard.",
    techStack: ["React", "Express", "MongoDB", "Python Flask", "ML"],
    liveLink: "https://harvest-horizon.onrender.com/",
    githubLink: "https://github.com/Harman8815/Harvest-Horizon",
  },
  {
    title: "DGA Domain Detection",
    logo: "https://images.seeklogo.com/logo-png/32/1/dga-logo-png_seeklogo-327455.png",
    description:
      "An Intrusion Detection System that identifies DGA-based attacks using metadata and ML classification. Combines Python backend models with a React-powered visualization dashboard for real-time alerts.",
    techStack: ["React", "Python", "Scikit-learn", "Flask", "ML"],
    liveLink: "https://dgadetection-harman.netlify.app/",
    githubLink: "#",
  },
  {
    title: "Admin Dashboard ",
    logo: "https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg",
    description:
      "A modular admin dashboard featuring student progress tracking, integrated calendar, task whiteboard, and data visualizations. Built with SCSS for styling and MongoDB as the primary datastore.",
    techStack: ["React", "SCSS", "Node.js", "MongoDB"],
    liveLink: "https://admin-dashboard-harman.netlify.app/",
    githubLink: "https://github.com/Harman8815/Admin-Dashboard",
  },
  {
    title: "Project Management System",
    logo: "https://images-platform.99static.com//979ew2eYmqF1PQhuf9MFQTjWn84=/0x0:1058x1058/fit-in/500x500/projects-files/49/4991/499142/20cfa402-5689-4eea-be2e-08406663e87d.jpg",
    description:
      "A fullstack task management platform built with Next.js. Includes JWT-based authentication, protected routes, PostgreSQL for persistence, and a role-based team management interface.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "JWT"],
    liveLink: "#",
    githubLink: "https://github.com/Harman8815/Project-Management",
  },
];





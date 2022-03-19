/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Kenny",
  logo_name: "😎",
  nickname: "harry / picleric",
  full_name: "Kenny",
  subTitle:
    "Senior iOS & MacOS Developer 🧑🏻‍💻, product builder ✨. Always learning 🔥",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:dkhuong291@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/khuong291",
  linkedin: "https://www.linkedin.com/in/khuong-pham-kenny-7b1635108",
  gmail: "dkhuong291@gmail.com",
  twitter: "https://twitter.com/khuong291",
  stackoverflow: "https://stackoverflow.com/users/4742830/khuong",
  medium: "https://medium.com/@dkhuong291"
};

// Projects Page
const projectsHeader = {
  title: "My Apps",
  description:
    "My apps make use of a vast variety of latest technology tools to provide best experience to user. Below are some of my apps.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Baby Lover",
      url: "https://apps.apple.com/vn/app/baby-lover/id1593197907?platform=iphone",
      description: "Monitoring your baby's development with ease",
      languages: [
        {
          name: "Swift",
          iconifyClass: "logos-swift",
        },
      ],
    },
    {
      id: "1",
      name: "App Icon Hero",
      url: "https://appiconhero.co/",
      description:
        "Free service to generate app icons for all platforms",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        }
      ],
    },
    {
      id: "2",
      name: "Bookmarks Lite",
      url: "https://apps.apple.com/vn/app/bookmarks-lite/id1614129680?mt=12",
      description:
        "Never miss any links and easy to organize bookmarks",
      languages: [
        {
          name: "Swift",
          iconifyClass: "logos-swift",
        }
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  projectsHeader,
  contactPageData,
  projects,
};

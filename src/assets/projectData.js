import pems1 from "./screenUI/pems/login.png";
import pems2 from "./screenUI/pems/dashboard.png";
import pems3 from "./screenUI/pems/viewAlerts.png";
import nu1 from "./screenUI/nuGallery/nuDashboard.JPG"
import nu2 from "./screenUI/nuGallery/About.JPG"
import nu3 from "./screenUI/nuGallery/Gallery.JPG"
import blog1 from "./screenUI/blogSite/blog.JPG"
import blog2 from "./screenUI/blogSite/blog2.JPG"
import blog3 from "./screenUI/blogSite/blog3.JPG"

export const projects = [
  {
    id: 1,
    images: [pems1, pems2, pems3],
    title: "Poultry Environment Monitoring System",
    description: "IoT Integrated System built using vite + react & firebase, Provides alerts and Data analytics based on environmental data gathered",
    link: "https://pems-web.vercel.app/",
  },
  {
    id: 2,
    images: [nu1, nu2, nu3],
    title: "National University Gallery",
    description: "Built using JavaScript & html, provides a showcase of landmarks and services found in national university manila",
    link: "https://nugallery-lyart.vercel.app/",
  },
  {
    id: 3,
    images: [blog1, blog2, blog3],
    title: "Blog Website",
    description: "Built using vite + react & mongodb, the application provides a journal for owner to voice their opinion",
    link: "https://madrigal-iota.vercel.app/",
  },
];

export const aboutDescription = `
Hoping to improve not only in programming but also in collaboration,
especially in areas such as team communication, task coordination,
and contributing to group problem-solving.
`;

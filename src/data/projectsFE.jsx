// Projects Cover
import DausagiCover from '../assets/dausagi/Dausagi.webp';
import KatalogyCover from '../assets/katalaogy/Katalogy.webp';
import DevForumCover from '../assets/devForum/DevForum.webp';
import C2MainMapCover from '../assets/c2NextGen/C2MainMap.webp';
import HolaNotesCover from '../assets/holaNotes/HolaNotes.webp';

// Projects Logo
import DausagiLogo from '../assets/dausagi/DausagiLogo.svg';
import KatalogyLogo from '../assets/katalaogy/KatalogyLogo.svg';
import DevForumLogo from '../assets/devForum/DevForumLogo.svg';
import HolaNotesLogo from '../assets/holaNotes/HolaNotesLogo.svg';
import C2Logo from '../assets/c2NextGen/C2Logo.svg';

//Projects Documentation
import DausagiDoc1 from '../assets/dausagi/Doc1.webp';
import KatalogyDoc1 from '../assets/katalaogy/Doc1.webp';
import DevForumDoc1 from '../assets/devForum/Doc1.webp';
import HolaNotesDoc1 from '../assets/holaNotes/Doc1.webp';
import HolaNotesDoc2 from '../assets/holaNotes/Doc2.webp';
import C2NextDoc1 from '../assets/c2NextGen/Doc1.webp';
import C2NextDoc2 from '../assets/c2NextGen/Doc2.webp';
import C2NextDoc3 from '../assets/c2NextGen/Doc3.webp';
import C2NextDoc4 from '../assets/c2NextGen/Doc4.webp';
import C2NextDoc5 from '../assets/c2NextGen/Doc5.webp';

export const projectsFE = [
  {
    id: 'P012023',
    name: 'Dausagi',
    link: 'https://dausagi.netlify.app/',
    role: 'Frontend Developer',
    description:
      "Dausagi is a garbage bank platform that I created with my team. This project is the final assignment in the Studi Independen Bersertifikat Kampus Mereka program. We created this web application with the hope of reducing waste where it shouldn't be. This application can be used by people who want to store waste and get feedback/benefits from the waste exchange process provided.",
    client: 'Capstone Projects SIB x dicoding',
    year: '2023',
    goals: [
      "Citizen's awareness. With this application, people can understand better so they don't throw garbage where they shouldn't",
      'Waste management. One of the problems regarding waste is the accumulation of waste, so an alternative to digital waste management has been created.',
      'Information. This application can provide information about waste banks and how to manage waste.',
    ],
    audience:
      "The target audience for this application is the general public, especially those who care about the local environment and those who don't know Dausagi",
    roles: [
      'UI/UX designer. I collect application requirements from the results of team discussions, create wareframes, create mockups and show them to the team.',
      'Frontend Developer. Turning a design into a usable web application is one of my tasks. This means that I am also involved in making the frontend of this web application.',
    ],
    scope: [
      'Home Page',
      'Waste Bank Page',
      'Recycle Page',
      'Services Page',
      'Story Page (About)',
      'Trash Exchange Feature',
    ],
    tech: [
      'Reactjs',
      'SASS',
      'Axios',
      'Cheerio JS',
      'jspdf for creating PDF document form javascript',
      'Eslint',
      'Restful API',
    ],
    image: DausagiCover,
    logo: DausagiLogo,
    docs: [DausagiDoc1],
  },
  {
    id: 'P022023',
    name: 'Katalogy',
    link: 'https://katalogy.netlify.app/',
    role: 'Frontend Developer',
    description:
      'Katalogy is a website that displays restaurant catalogs along with restaurant profiles such as restaurant addresses and restaurant menus. Users can also provide a review on an existing restaurant.',
    client: 'Submission Front-End Developer Expert Dicoding',
    year: '2022',
    goals: [
      'As a final assignment in the class Becoming a Front-End Developer Expert in Dicoding',
      'Assist in providing recommendations of favorite restaurants with high ratings',
      'Applications that have high accessibility',
      'Applications that are responsive to devices and quickly loaded by browsers',
      'Build applications that are minimal bugs',
    ],
    audience:
      'The target audience of this application is those who are looking for recommended restaurants to visit',
    roles: [
      'Frontend Developer. Creating applications from the frontend side with the criteria specified in the class Becoming a Front-End Developer Expert such as implementing Progressive Web App(s), Integration Tests, End To End Tests, Bundle Optimization, Image Optimization and Code Quality',
    ],
    scope: [
      'Home Page',
      'Favorite Page',
      'Story Page (About)',
      'Restaurant Detail',
      'Favorite Feature',
      'End To End and Integration Test',
      'Implement Progressive Web Apps',
      'Image and Code Optimization with Webpack',
    ],
    tech: [
      'HTML5',
      'Javascript',
      'SASS',
      'Karma JS',
      'Progressive Web Apps ',
      'Eslint',
      'Restful API',
    ],
    image: KatalogyCover,
    logo: KatalogyLogo,
    docs: [KatalogyDoc1],
  },
  {
    id: 'P032023',
    name: 'Dev Forum',
    link: '',
    role: 'Frontend Developer',
    description:
      'DevForum is a web application for asking questions about anything, especially about technology. The features contained in this application are that users can create a thread, do like & unlike threads/comments, make comments on threads and filter threads that you want to appear on the page.',
    client: 'Submission Menjadi React Web Developer Expert Dicoding',
    year: '2023',
    goals: [
      'As a submission to the class Become a React Web Developer Expert in Dicoding',
      'Become a forum for developers to discuss this application',
      'User-friendly application',
    ],
    audience:
      'The target audience for this application is developers who want to discuss anything related to programming',
    roles: [
      'UI/UX Designer. Make an interface design in the application that is user-friendly and makes a visual design that is attractive but still easy for users to understand.',
      'Frontend Developer. Creating applications from the frontend side with the criteria specified in the Become a React Web Developer Expert class such as implementing state management with Redux and Clean Code.',
    ],
    scope: [
      'Login/Signup Page',
      'Home Page',
      'Thread Detail Page',
      'LIke & Unlike Feature',
      'Leaderboards Page',
      'Discuss & Comment Feature',
      'Implement State Managament with Redux',
    ],
    tech: ['Reactjs', 'Tailwindcss', 'Redux', 'Eslint', 'Restful API'],
    image: DevForumCover,
    logo: DevForumLogo,
    docs: [DevForumDoc1],
  },
  {
    id: 'P042023',
    name: 'C2 Next Generation',
    link: '',
    role: 'Frontend Developer',
    description:
      "Dausagi is a garbage bank platform that I created with my team. This project is the final assignment in the Studi Independen Bersertifikat Kampus Mereka program. We created this web application with the hope of reducing waste where it shouldn't be. This application can be used by people who want to store waste and get feedback/benefits from the waste exchange process provided.",
    client: 'Internship Project at PT Len Industri (Persero)',
    year: '2023',
    goals: [
      'As one of the tasks of the Independent Campus Certified Internship activity',
      'Upgraded from the previous C2 Maps System',
      'Application that can be used on multiple devices',
    ],
    audience:
      'The target audience for this application are those within the scope of Indonesian defense',
    roles: [
      'Frontend Developer. Designing interfaces for applications, troubleshooting, feature creation and code optimization',
    ],
    scope: [
      'Base Map Feature',
      'User Management Page',
      'Login Page',
      'Area Scaling Feature',
      'Zoom Feature',
      'Range Scaling Feature',
      'Area Scale Feature',
    ],
    tech: [
      'Reactjs',
      'Tailwindcss',
      'Redux',
      'Micro Frontend',
      'Webpack',
      'OpenLayers',
      'Restful API',
    ],
    image: C2MainMapCover,
    logo: C2Logo,
    docs: [
      C2NextDoc1,
      C2MainMapCover,
      C2NextDoc2,
      C2NextDoc3,
      C2NextDoc4,
      C2NextDoc5,
    ],
  },
  {
    id: 'P052023',
    name: 'HolaNotes',
    link: '',
    role: 'Frontend Developer',
    description:
      'HolaNotes is a personal notes application. Some of the features contained in this application are login/signup, users can see a list of active and archived notes, users can also create and delete notes. In addition, there are features to change the theme and language contained in this application',
    client: 'Submission React Fundamental Dicoding',
    year: '2022',
    goals: [
      'Users can create, delete and archive notes',
      'Users can change the application theme',
      'Users can change the language on the application',
      'Users can search records',
    ],
    audience:
      'Users who want to make personal notes through a website-based application to make it easier and simpler',
    roles: [
      'Frontend Developer. Designing interfaces for applications, troubleshooting, feature creation and code optimization',
    ],
    scope: [
      'Login/Signup Page',
      'New Notes Page',
      'Active or Archived Notes Feature',
      'Detail Page',
      'Theme & Language',
      'Search Notes',
    ],
    tech: ['Reactjs', 'CSS3', 'Sweetalert', 'Restful API', 'Eslint'],
    image: HolaNotesCover,
    logo: HolaNotesLogo,
    docs: [HolaNotesDoc1, HolaNotesDoc2],
  },
];

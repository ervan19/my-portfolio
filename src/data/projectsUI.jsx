// Project Cover
import DapurOnlineCover from '../assets/dapurOnline/DapurOnline.webp';
import DocuCover from '../assets/docu/Docu.webp';
import WarehouseCover from '../assets/warehouse/Warehouse.webp';

// Project Logo
import DapurOnlineLogo from '../assets/dapurOnline/DapurOnlineLogo.svg';
import DocuLogo from '../assets/docu/DocuLogo.svg';
import WarehouseLogo from '../assets/warehouse/WarehouseLogo.svg';

// Project Documentation
import DesignSystem from '../assets/dapurOnline/DesignSystem.webp';
import Doc1 from '../assets/dapurOnline/Doc1.webp';
import Doc2 from '../assets/dapurOnline/Doc2.webp';
import DocuDoc1 from '../assets/docu/DocuDoc1.webp';
import DocuDoc2 from '../assets/docu/DocuDoc2.webp';
import DocuDoc3 from '../assets/docu/DocuDoc3.webp';
import DocuDesignSystem from '../assets/docu/DesignSystem.webp';
import WarehouseDoc from '../assets/warehouse/Doc1.webp';

export const projectsUI = [
  {
    id: 'PUI012023',
    name: 'Dapur Online',
    link: '',
    role: 'UI/UX Designer',
    description:
      'Dapur Online is a food delivery application created to help small traders sell their products online without large application fees.',
    client: 'Research Project',
    year: '2022',
    goals: [
      'Create applications that are easy for users to use',
      'The ordering process is simple and payments can be made via e-wallet or cash',
      "From the seller's side, the client wants to add sales and income recording features to the application",
    ],
    audience:
      'The target of this application is traders who want to sell their products through the application',
    roles: [
      'UI/UX designer. I collect application requirements from the results of team discussions, create wareframes, create mockups and show them to the team.',
    ],
    scope: [
      'Home Page',
      'Login/Signup Page',
      'Product Page',
      'Checkout & Payment Page',
      'Cart Page',
      'Order Page',
      'Profile Page',
      'Settings Page',
      'Notes Page',
    ],

    image: DapurOnlineCover,
    logo: DapurOnlineLogo,
    docs: [DesignSystem, Doc1, Doc2],
  },
  {
    id: 'PUI022023',
    name: 'Docu',
    link: '',
    role: 'UI/UX Designer',
    description:
      'Docu is an application of services and services to increase company sales through digital marketing strategies.',
    client: 'Research Project',
    year: '2022',
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
      'Jobs Page',
      'UMKM Page',
      'Login/Signup Page',
      'Services Page',
      'Project Page',
      'Training Page',
      'Settings Page',
      'Dashboard Page',
    ],

    image: DocuCover,
    logo: DocuLogo,
    docs: [DocuDesignSystem, DocuDoc1, DocuDoc2, DocuDoc3],
  },
  {
    id: 'PUI032023',
    name: 'Warehouse Management System',
    link: '',
    role: 'UI/UX Designer',
    description:
      'WMS is an administrator application for managing defense equipment resources. This application is made with Microfrontend architecture.',
    client: 'Internship Project at PT Len Industri (Persero)',
    year: '2023',
    goals: [
      'The application is made to facilitate the management of alusista resources',
      'The application is built with a micro frontend architect to increase the independence of each feature',
    ],
    audience: 'Admin manager of defense equipment resources',
    roles: [
      'UI/UX designer. I collect application requirements from the results of team discussions, create wareframes, create mockups and show them to the team.',
      'Frontend Developer. Turning a design into a usable web application is one of my tasks. This means that I am also involved in making the frontend of this web application.',
    ],
    scope: [
      'Login Page',
      'Dashboard',
      'Users Page',
      'Inbound & Outbound Page',
      'Products Page',
    ],
    image: WarehouseCover,
    logo: WarehouseLogo,
    docs: [WarehouseDoc],
  },
];

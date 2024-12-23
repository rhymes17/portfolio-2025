import { FaBitcoin } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiWeb3Dotjs } from 'react-icons/si';
import { BsLightningChargeFill } from 'react-icons/bs';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';

export const skillsData = [
  {
    id: 1,
    title: 'React.js',
    subtitle: 'Frontend Framework',
    icon: <FaReact className="text-xl text-[#01D2F8] md:text-3xl" />,
  },
  {
    id: 2,
    title: 'TypeScript',
    subtitle: 'Programming Language',
    icon: <SiTypescript className="text-xl text-[#0077C6] md:text-3xl" />,
  },
  {
    id: 3,
    title: 'JavaScript',
    subtitle: 'Programming Language',
    icon: <IoLogoJavascript className="text-xl text-[#F8D903] md:text-3xl" />,
  },
  {
    id: 4,
    title: 'Web3.js',
    subtitle: 'Blockchain Library',
    icon: <SiWeb3Dotjs className="text-xl text-[#F98200] md:text-3xl" />,
  },
  {
    id: 5,
    title: 'Bitcoin Dev',
    subtitle: 'Bitcoin Environment',
    icon: <FaBitcoin className="text-xl text-[#F7931A] md:text-3xl" />,
  },
  {
    id: 6,
    title: 'Lightning Dev',
    subtitle: 'Lightning Network Environment',
    icon: (
      <BsLightningChargeFill className="text-xl text-[#76F3CD] md:text-3xl" />
    ),
  },
  {
    id: 7,
    title: 'TailwindCSS',
    subtitle: 'CSS Framework',
    icon: <RiTailwindCssFill className="text-xl text-[aqua] md:text-3xl" />,
  },
  {
    id: 8,
    title: 'Node.js',
    subtitle: 'Backend Runtime Environment',
    icon: <FaNodeJs className="text-xl text-[green] md:text-3xl" />,
  },
  {
    id: 9,
    title: 'MongoDB',
    subtitle: 'NoSQL Database',
    icon: <SiMongodb className="text-xl text-[green] md:text-3xl" />,
  },
  {
    id: 10,
    title: 'Redux Toolkit',
    subtitle: 'State Management Library',
    icon: <SiRedux className="text-xl text-[violet] md:text-3xl" />,
  },
  {
    id: 11,
    title: 'Express.js',
    subtitle: 'Backend Framework',
    icon: <SiExpress className="text-xl text-[orange] md:text-3xl" />,
  },
  {
    id: 12,
    title: 'HTML',
    subtitle: 'Markup Language',
    icon: <FaHtml5 className="text-xl text-[#F87516] md:text-3xl" />,
  },
  {
    id: 13,
    title: 'CSS',
    subtitle: 'Style Sheet Language',
    icon: <FaCss3Alt className="text-xl text-[#1E92ED] md:text-3xl" />,
  },
  {
    id: 14,
    title: 'Java',
    subtitle: 'Programming Language',
    icon: <FaJava className="text-xl text-[#E42C2D] md:text-3xl" />,
  },
];

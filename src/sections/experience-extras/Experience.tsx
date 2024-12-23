import ExperienceItem from '../components/ExperienceItem';
import SectionTitle from '../components/SectionTitle';

const data = [
  {
    companyName: 'Tides Network',
    duration: 'August 2024 - Present',
    position: 'Solutions Engineer I',
    description: [
      'Converted Figma designs into responsive React components for high-quality UIs.',
      'Worked with Bitcoin Development Environment (BDE) and Lightning Development Environment (LDE) to support Bitcoin and Lightning transactions.',
      'Developed features for sending, receiving, and creating Lightning Network invoices in LDE.',
      'Integrated smart contract interactions into the Portal extension for secure on-chain transactions.',
      ' Built an SDK for seamless cross-chain swaps between Bitcoin and Ethereum, enhancing user experience with smooth blockchain integration.',
    ],
  },
  {
    companyName: 'Fetch AI',
    duration: 'November 2023 - August 2024',
    position: 'Full Stack Developer',
    description: [
      'Worked on Cosmos blockchain environment',
      'Implemented a complete UI redesign based on Figma mockups, translating detailed designs into interactive React components.',
      'Optimized components for performance and maintainability.',
      "Developed a centralized store to track and store user's transactions, improving UI/UX by providing real-time data instead of relying on stale API responses.",
      'Enabled cross-platform use of the store, making it accessible to both web and mobile teams.',
      'Implemented a custom nonce management system, enabling users to initiate multiple blockchain transactions concurrently without waiting for previous transactions to complete.',
      'Provided management support by fixing the UI bugs and also functionality errors',
    ],
  },
  {
    companyName: 'Tides Network',
    duration: 'August 2024 - Current',
    position: 'Solutions Engineer I',
    description: [
      'Converted Figma designs into responsive React components for high-quality UIs.',
      'Worked with Bitcoin Development Environment (BDE) and Lightning Development Environment (LDE) to support Bitcoin and Lightning transactions.',
      'Developed features for sending, receiving, and creating Lightning Network invoices in LDE.',
      'Integrated smart contract interactions into the Portal extension for secure on-chain transactions.',
      ' Built an SDK for seamless cross-chain swaps between Bitcoin and Ethereum, enhancing user experience with smooth blockchain integration.',
    ],
  },
];

const Experience = () => {
  return (
    <div className="mt-section-title bg-black px-5 py-[5rem]">
      <SectionTitle title="Experience" />

      <div className="mt-section-title text-[#CDCEC3]">
        <ExperienceItem top="20vh" marginBottom="8.75rem" data={data[0]} />
        <ExperienceItem top="26vh" marginBottom="4.5rem" data={data[1]} />
        {/* <ExperienceItem top="32vh" marginBottom="7rem" data={data[2]} /> */}
        <div className="h-[30vh]" />
      </div>
    </div>
  );
};

export default Experience;

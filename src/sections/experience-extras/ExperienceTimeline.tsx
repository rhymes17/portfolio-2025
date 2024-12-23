import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SectionTitle from '../../components/SectionTitle';
import { FaBitcoin } from 'react-icons/fa6';
import { FaEthereum } from 'react-icons/fa';

const experiencesData = [
  {
    date: 'Aug 2024 - current',
    icon: <FaBitcoin className="text-[orange]" />,
    title: 'Tides Network',
    location: 'Remote',
    description:
      'I am a self-taught creative frontend developer, web designer, and UI/UX designer based in India. I am passionate in catering my works for emerging start ups and small businesses that make an impact, inspire and connect with people 😎.',
  },
  {
    date: 'Nov 2023 - Aug 2024',
    icon: <FaEthereum className="text-[#3397f0]" />,
    title: 'Fetch AI',
    location: 'Remote',
    description:
      'I am a self-taught creative frontend developer, web designer, and UI/UX designer based in India. I am passionate in catering my works for emerging start ups and small businesses that make an impact, inspire and connect with people 😎.',
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="mt-section-title px-5 py-[5rem]">
      <SectionTitle title="Experience" />
      <div className="mb-section-title" />
      <VerticalTimeline lineColor="black" className="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: '#262626',
                boxShadow: 'none',
                border: '1px solid #262626',
                textAlign: 'left',
                padding: '1.3rem 2rem',
                zIndex: 100,
              }}
              contentArrowStyle={{
                borderRight: '0.4rem solid #262626',
              }}
              date={item.date}
              dateClassName="text-[#D0D1C6]/60 lg:text-black"
              icon={item.icon}
              iconStyle={{
                background: 'rgba(255, 255, 255)',
                fontSize: '2.5rem',
              }}
            >
              <h3 className="font-semibold capitalize text-[#D0D1C6]">
                {item.title}
              </h3>
              <p className="!mt-0 font-normal text-[#D0D1C6]">
                {item.location}
              </p>
              <p className="!mt-1 !font-normal text-[#D0D1C6]/80">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

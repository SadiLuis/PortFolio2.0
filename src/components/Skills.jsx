/* eslint-disable react/prop-types */
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'C#', icon: '/cshart.png' },
  { name: 'Python', icon: '/python.jpg' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'React', icon: '/react.png' },
  { name: 'React-Native', icon: '/react.png' },
  { name: 'Next.js', icon: '/next-js.png' },
  { name: 'Tailwind', icon: '/tailwind.png' },
  { name: 'Flutter', icon: '/flutter.jpeg' },
  { name: 'GitHub', icon: '/github.png' },
  { name: 'BloC', icon: '/bloc.png' },
  { name: 'Jest', icon: '/jest.png' },
  { name: 'Node.js', icon: '/node.png' },
  { name: 'Express', icon: '/express.png' },
  { name: 'Django', icon: '/django.jpg' },
  { name: 'Firebase', icon: '/firebase.png' },
  { name: 'MongoDB', icon: '/mongo.png' },
];

const Skill = ({ name, icon }) => (
  <motion.div
    className='shadow-md rounded shadow-white duration-1000'
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 20 }}
  >
    <div className='w-20 mx-auto h-20 flex items-center justify-center'>
      <img className='w-full h-full' src={icon} alt={`${name} icon`} />
    </div>
    <p className='my-4'>{name}</p>
  </motion.div>
);

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div name='skills' className='w-full h-screen  mt-60 text-white'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-5xl font-lato inline border-b-4 border-emerald-500'>Skills</p>
          
          <p className='py-4'>These are the technologies I have worked with; my favorite is React.js!!</p>
        </div>

        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Skills;

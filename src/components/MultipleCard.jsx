import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/cards_img/course1.jpg";
import img2 from "../assets/cards_img/course2.jpg";

const MultipleCard = () => {
  const containerRef = useRef(null);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const [mouseX, setMouseX] = React.useState(0);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const centerX = rect.width / 2;
    
    // Calculate scroll speed based on mouse position
    const scrollSpeed = (x - centerX) / centerX;
    setMouseX(scrollSpeed * 5);
  };

  React.useEffect(() => {
    if (!containerRef.current) return;
    let scrollTimeout;
    const scrollContainer = containerRef.current;
    
    const animate = () => {
      scrollContainer.scrollLeft += mouseX;
      scrollTimeout = requestAnimationFrame(animate);
    };
    
    scrollTimeout = requestAnimationFrame(animate);
    
    return () => {
      if (scrollTimeout) {
        cancelAnimationFrame(scrollTimeout);
      }
    };
  }, [mouseX]);

  const x = useTransform(scrollXProgress, [0, 1], [0, -100]);

  return (    
    <div className="flex h-[70vh] justify-center items-center">
      <section className="relative h-full w-full">
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMouseX(0)}
          className="flex gap-6 h-full items-center px-12 overflow-x-scroll scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

const Card = ({card}) => {
  return (
    <div className="multi-cards relative h-[50vh] w-[calc(100vw/10)] min-w-[250px] flex-shrink-0 group cursor-pointer">
    <motion.div
      key={card.id}
      className="absolute inset-0"
      initial={{ scale: 1 }}
      variants={{
        hover: {
          scale: 1.1,
          height: "50vh",
          transition: {
            delay: 0.1,
            duration: 0.2,
            ease: "easeOut",
          },
        }
      }}
      whileHover={window.innerWidth >= 1024 ? "hover" : ""}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${card.url})`,
        }}
      />
      {/* Original gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      
      {/* Yellow overlay that appears on group hover */}
      <div 
        className="absolute bottom-0 left-0 w-full h-1/2 opacity-0 transition-opacity duration-500 ease-out lg:group-hover:opacity-100"
        style={{
          transitionDelay: '0.1s',
          background: 'linear-gradient(to top, #ffe434, transparent)',
        }}
      />

      <motion.p 
        className="absolute bottom-0 left-0 p-6 text-2xl font-bold text-white z-10"
      >
        {card.title}
      </motion.p>
    </motion.div>
  </div>
  );
};


export default MultipleCard;

const cards = [
  {
    url: img1,
    title: "AWS Services",
    id: 1,
  },
  {
    url: img2,
    title: "UI/UX Design",
    id: 2,
  },
  {
    url: img1,
    title: "Full Stack Development",
    id: 3,
  },
  {
    url: img2,
    title: "DV Tools",
    id: 4,
  },
  {
    url: img1,
    title: "Photography",
    id: 5,
  },
  {
    url: img2,
    title: "Cyber Security",
    id: 6,
  },
  {
    url: img1,
    title: "Backend Development",
    id: 7,
  },
  {
    url: img2,
    title: "Cyber Security",
    id: 8,
  },
  {
    url: img1,
    title: "Backend Development",
    id: 9,
  },
];

// Add CSS to hide scrollbar
const style = document.createElement('style');
style.textContent = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
document.head.appendChild(style);
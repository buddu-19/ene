import React from 'react';
import { Brain, Workflow, LineChart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}> = ({ title, description, icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="bg-gradient-to-br from-dark-400 to-dark-500 p-8 rounded-2xl card-hover border border-dark-300 relative overflow-hidden group"
    >
      <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-primary-500/10 group-hover:bg-primary-500/20 transition-all duration-500"></div>
      
      <div className="relative z-10">
        <div className="w-16 h-16 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 text-primary-400 group-hover:bg-primary-500/30 transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        
        <p className="text-gray-300 mb-6">{description}</p>
        
        <a href="#contact" className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors">
          Learn more 
          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "AI-driven Business Intelligence",
      description: "Transform your data into strategic insights with our cutting-edge AI analytics tools. Uncover hidden opportunities and make data-backed decisions.",
      icon: <Brain className="h-8 w-8" />,
    },
    {
      title: "Automation & Workflow Systems",
      description: "Streamline operations with intelligent automation solutions. Eliminate repetitive tasks and optimize your team's productivity.",
      icon: <Workflow className="h-8 w-8" />,
    },
    {
      title: "Market Strategy Design",
      description: "Develop competitive market positioning with AI-powered strategy frameworks. Stay ahead of market trends and outperform competitors.",
      icon: <LineChart className="h-8 w-8" />,
    },
    {
      title: "Digital Presence Consulting",
      description: "Establish a compelling online presence that resonates with your target audience. Leverage digital channels for maximum impact.",
      icon: <Globe className="h-8 w-8" />,
    }
  ];

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-dark-500 to-dark-400">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            We offer a comprehensive suite of services designed to help businesses
            leverage the power of AI and data-driven strategies to achieve extraordinary results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
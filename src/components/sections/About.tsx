import React from 'react';
import { LineChart, Lightbulb, Users, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutCard: React.FC<{
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
      className="bg-dark-400/50 backdrop-blur-sm p-6 rounded-xl card-hover border border-dark-300"
    >
      <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center mb-4 text-primary-400">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </motion.div>
  );
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable business intelligence that drives growth and innovation.",
      icon: <LineChart className="h-6 w-6" />,
    },
    {
      title: "AI-Powered Solutions",
      description: "Custom AI solutions that automate processes and unlock new possibilities for your business.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "Strategic Partnerships",
      description: "We work as an extension of your team, focusing on your unique goals and challenges.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Results-Focused",
      description: "Our success is measured by your outcomes - growth, efficiency, and competitive advantage.",
      icon: <Target className="h-6 w-6" />,
    }
  ];

  return (
    <section id="about" className="section-padding grid-bg">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About <span className="text-gradient">Laventry</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Laventry is a forward-thinking startup in the AI and business intelligence industry, 
            dedicated to transforming how modern companies harness technology for growth. 
            We empower startups and innovation-centric businesses to reimagine their potential.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AboutCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
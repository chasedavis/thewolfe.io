import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, imageUrl }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden">
        <Image 
          src={imageUrl}
          alt={name}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
      <h3 className="text-2xl font-normal mb-2">{name}</h3>
      <p className="text-lg text-gray-600 font-light mb-4">{role}</p>
      <p className="text-gray-600 font-light max-w-md">{bio}</p>
    </motion.div>
  );
};

export default TeamMember;
import { motion } from 'framer-motion';

const Transition = ({ children }) => {
  return (
    <motion.div
      initial="pageInitial"
      animate="pageAnimate"
      exit="pageExit"
      variants={{
        pageInitial: {
          opacity: 0,
          y: 50,
        },
        pageAnimate: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        },
        pageExit: {
          opacity: 0,
          y: 50,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default Transition;

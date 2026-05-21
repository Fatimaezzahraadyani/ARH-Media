import { motion } from "framer-motion";

const RevealText = ({ text, className = "", once = true, delay = 0 }) => {
  const words = text.split(" ");

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-10% 0px -12% 0px" }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.035,
            delayChildren: delay,
          },
        },
      }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="mr-[0.24em] inline-block"
            variants={{
              hidden: { y: "115%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};

export default RevealText;

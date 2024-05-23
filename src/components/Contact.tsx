import { CONTACT } from "../constants";
import resumePDF from "../assets/Arnav_Kawatra_resume.pdf";
import { MouseEvent } from "react";
import { motion } from "framer-motion";

export const Contact = () => {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.open(resumePDF, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="border-b border-neutral-900 pb-20 text-center">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center flex justify-center">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href={`mailto:${CONTACT.email}`}
          className="border-b mr-3"
        >
          {CONTACT.email}
        </motion.a>
        <div>|</div>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          href="/"
          onClick={handleClick}
          className="cursor-pointer ml-3"
        >
          View Resume
        </motion.a>
      </div>
    </div>
  );
};

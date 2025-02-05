import EnyardLogo from "./assets/Enyard new.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import image from "./assets/20147.jpg";

export default function App() {
  const text = "We'll Be".split("");
  const text2 = "Right Back".split("");

  return (
    <div className="mt-10 text-white font-sans">
      <section className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 mx-auto max-w-6xl gap-20 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-8"
        >
          <img
            src={EnyardLogo}
            alt="enyard logo"
            className="bg-white rounded-3xl w-[180px] h-[30px]  md:w-[200px] md:h-[40px] object-contain"
          />
          <motion.h1
            className="text-6xl  md:text-8xl font-bold text-white relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {text.map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block ${
                  index === 4 ? "text-[#FFD700]" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: index === 4 ? -180 : -10,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.3, rotate: 5, color: "#FFD700" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.h1
            className="text-6xl  md:text-8xl font-bold text-white relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {text2.map((letter, index) => (
              <motion.span
                key={index}
                className={`inline-block ${
                  index === 6 ? "text-[#FFD700]" : ""
                }`}
                initial={{
                  opacity: 0,
                  y: 50,
                  rotate: index === 6 ? -180 : -10,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  rotate: 0,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ scale: 1.3, rotate: 5, color: "#FFD700" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.h1>

          <div className="flex flex-col gap-3 text-gray-200">
            <p>
              We’re working hard to bring you something amazing! Our website is
              under construction and will be live soon. Stay tuned for updates.
            </p>
            <p>Thank you for your patience!</p>
          </div>

          <button
            className="border border-yellow-400 w-fit p-2 px-4 text-xl hover:border-purple-500 transition-colors duration-300"
            onClick={() => (window.location.href = "tel:+919840513007")}
          >
            Contact Us
          </button>

          <div className="flex gap-4 items-center">
            <h1 className="text-lg font-semibold">Get Social</h1>
            <span className="w-[100px] h-[1px] bg-gray-300" />
            <FaFacebook className="text-yellow-400 text-xl hover:text-purple-500 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaTwitter className="text-yellow-400 text-xl hover:text-purple-500 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
            <FaInstagram className="text-yellow-400 text-xl hover:text-purple-500 transform hover:-translate-y-1 transition-transform duration-300 cursor-pointer" />
          </div>
        </motion.div>

        {/* SECOND ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 1.5,
          }}
          className="relative flex justify-center items-center "
        >
          <motion.svg
            className={` absolute -z-10 w-[250px] h-[250px] md:h-[350px] md:w-[350px] lg:w-[400px] lg:h-[400px]`}
            // width="400"
            // height="400"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: "scale(1.6)",
              opacity: 1,
              left: "50%",
              translate: "-50%",
            }}
          >
            <path
              fill="#FFD700"
              d="M50.2,-58.6C65.9,-46.6,80.8,-31.7,84.7,-14.9C88.7,1.9,81.6,21.6,72.2,39.3C62.7,57,51,72.7,36.3,77.4C21.5,82.1,3.7,75.8,-15.1,72.5C-33.8,69.2,-53.4,68.8,-66.8,58C-80.2,47.2,-87.3,26.1,-89.3,3.1C-91.2,-19.8,-88,-43.7,-74.6,-56.7C-61.1,-69.8,-37.4,-71.9,-16.1,-72C5.1,-72.1,27.5,-70.5,50.2,-58.6Z"
              transform="translate(100 100)"
            />
          </motion.svg>

          <motion.img
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className="rounded-full w-full h-auto -ml-5 "
            src={image}
            alt="Profile"
          />
        </motion.div>
      </section>

      <footer className="text-center py-5 text-gray-400 text-sm mt-10">
        @ {new Date().getFullYear()} Enyard. All rights reserved.
      </footer>
    </div>
  );
}

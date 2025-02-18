import { MoveRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "motion/react";

const Contact = ({ isDarkTheme }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/contact_bg.png')] bg-[length:90%_auto] dark:bg-none bg-center bg-no-repeat"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Connect with me
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-center text-5xl font-Ovo"
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
        className="max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <motion.input
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.6 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ${
              isDarkTheme ? "text-black" : ""
            }`}
          />
          <motion.input
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ${
              isDarkTheme ? "text-black" : ""
            }`}
          />
        </div>
        <motion.textarea
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.3, delay: 0.6 }}
          name="message"
          placeholder="Enter your message"
          rows={6}
          required
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 ${
            isDarkTheme ? "text-black" : ""
          }`}
        />

        {isDarkTheme ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className={`px-10 py-3 border border-white rounded-full bg-white text-black flex items-center gap-2 duration-500 mx-auto`}
          >
            Send <MoveRight />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type="submit"
            className={`px-10 py-3 border border-white rounded-full bg-black/80 hover:bg-black duration-500 text-white flex items-center gap-2 mx-auto`}
          >
            Send <MoveRight />
          </motion.button>
        )}

        <p className="mt-4 text-center">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;

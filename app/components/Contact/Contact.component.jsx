import { MoveRight } from "lucide-react";
import React, { useState } from "react";

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
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/contact_bg.png')] bg-[length:90%_auto] dark:bg-none bg-center bg-no-repeat"
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect with me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback, please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ${
              isDarkTheme ? "text-black" : ""
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className={`flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white ${
              isDarkTheme ? "text-black" : ""
            }`}
          />
        </div>
        <textarea
          name="message"
          placeholder="Enter your message"
          rows={6}
          required
          className={`w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 ${
            isDarkTheme ? "text-black" : ""
          }`}
        />

        {isDarkTheme ? (
          <button
            type="submit"
            className={`px-10 py-3 border border-white rounded-full bg-white text-black flex items-center gap-2 duration-500 mx-auto`}
          >
            Send <MoveRight />
          </button>
        ) : (
          <button
            type="submit"
            className={`px-10 py-3 border border-white rounded-full bg-black/80 hover:bg-black duration-500 text-white flex items-center gap-2 mx-auto`}
          >
            Send <MoveRight />
          </button>
        )}

        <p className="mt-4 text-center">{result}</p>
      </form>
    </div>
  );
};

export default Contact;

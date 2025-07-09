import React, { useState, useEffect, useRef } from "react";
import TitleHeader from "../components/TitleHeader";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => setIsSubmitted(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    setLoading(true);

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
         setFormData({ name: "", email: "", message: "" });
        
    } catch (error) {
        console.log("Error sending message:", error);
        
    }finally{
       setLoading (false);
    }
    
    setIsSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
     
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative z-10 flex-center section-padding bg-black overflow-hidden"
    >
      <div className="w-full h-full md:px-10 px-5 max-w-4xl mx-auto">
        <TitleHeader
          title="Let's Get in Touch"
          sub="📬 Want to collaborate? Let's talk"
        />

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-10 text-white"
            ref={formRef}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-[#1C1F26] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-[#1C1F26] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            className="bg-[#1C1F26] p-4 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            required
          ></textarea>

       <button
  type="submit"
  disabled={isSubmitting}
  className={`group bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 cursor-pointer flex items-center justify-center gap-2 ${
    isSubmitting ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>

  {!isSubmitting && (
    <img
      src="/images/arrow-right.svg"
      alt="arrow"
      className="w-5 h-5 filter invert transform transition-transform duration-300 group-hover:translate-x-1"
    />
  )}
</button>


          {isSubmitted && (
            <p className="text-green-400 mt-4">✅ Message sent successfully!</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, Loader2 } from "lucide-react";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_2elcfsk",    
        "Contact Form",   
        form.current,
        "XQxBdpaIaZSENofoQ"  
      )
      .then(
        () => {
          setIsSending(false);
          setIsSuccess(true);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        () => {
          setIsSending(false);
          setIsSuccess(false);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

 return (
  <section className="bg-black text-white px-6 py-24 min-h-screen">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

      {/* Form Side */}
      <div className="pt-6">
        <h2 className="text-4xl font-light mb-6 tracking-tight">
          Let’s connect
        </h2>

        <p className="text-lg mb-10 text-gray-400 max-w-md">
          Have a project in mind or just want to say hello?  
          I’d love to hear from you.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 max-w-md">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-neutral-700 focus:border-white focus:outline-none transition"
          />

          <input
            type="email"
            name="email_id"
            placeholder="Email"
            required
            className="w-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-neutral-700 focus:border-white focus:outline-none transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full bg-neutral-900 text-white placeholder-gray-500 px-4 py-3 border border-neutral-700 h-36 resize-none focus:border-white focus:outline-none transition"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`mt-4 inline-flex items-center gap-2 px-8 py-3 border border-white text-white font-medium tracking-wide transition-all duration-300 ${
              isSending
                ? "opacity-60 cursor-not-allowed"
                : "hover:bg-white hover:text-black"
            }`}
          >
            {isSending ? "Sending..." : "Send message"}
          </button>

          {status && (
            <p
              className={`text-sm mt-2 ${
                isSuccess ? "text-pink-400" : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
{/* Image Side */}
<div className="hidden md:flex justify-center items-center relative">
  <div className="relative w-full max-w-md">

    {/* Visible gradient glow */}
    <div
      className="
        absolute -inset-12
        bg-gradient-to-tr
        from-pink-500/30
        via-purple-500/20
        to-blue-500/30
        blur-3xl
        opacity-80
      "
    />

    {/* Image */}
    <img
      src="/images/FormImg.png"
      alt="Contact Illustration"
      className="
        relative
        z-10
        w-full
        rounded-md
        object-cover
        shadow-2xl
      "
    />
  </div>
</div>
    </div>
  </section>
);

}

export default Contact;

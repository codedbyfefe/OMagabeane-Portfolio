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
        "your_service_id",     
        "your_template_id",    
        form.current,
        "your_public_key"      
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
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
        {/* Form Side */}
        <div>
          <h2 className="text-4xl font-bold mb-6 tracking-wide">Contact</h2>
          <p className="text-lg mb-8 text-gray-400">
            Let’s work together and build great experiences — I’d love to hear from you.
          </p>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full bg-gray-200 text-black placeholder-gray-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full bg-gray-200 text-black placeholder-gray-500 px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-white"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full bg-gray-200 text-black placeholder-gray-500 px-4 py-3 rounded h-40 resize-none focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              type="submit"
              disabled={isSending}
              className={`bg-white text-black px-6 py-3 rounded font-semibold flex items-center gap-2 transition-all duration-300 ${
                isSending ? "opacity-70 cursor-not-allowed" : "hover:bg-gray-200"
              }`}
            >
              {isSending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                  Sent!
                </>
              ) : (
                <>Send</>
              )}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Image Side */}
        <div className="hidden md:block">
          <img
            src="/images/grad.jpg" 
            alt="Contact Illustration"
            className="w-full rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;

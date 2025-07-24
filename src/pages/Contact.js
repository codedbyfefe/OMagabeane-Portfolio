function Contact() {
  return (
    <section className="max-w-xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <p className="text-lg mb-4 text-gray-700">Let’s work together — I’d love to hear from you.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full" />
        <input type="email" placeholder="Email" className="w-full" />
        <textarea placeholder="Message" className="w-full h-32" />
        <button type="submit" className="bg-black text-white px-6 py-2 rounded">Send</button>
      </form>
    </section>
  );
}

export default Contact;

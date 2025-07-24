export default function HeroSection() {
  return (
    <section className="h-[90vh] flex items-center justify-center bg-gray-100 text-center px-6">
      <div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">I design thoughtful experiences.</h1>
        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          A designer and developer passionate about crafting beautiful interfaces.
        </p>
        <a href="/portfolio" className="inline-block bg-black text-white px-6 py-3 rounded">View Work</a>
      </div>
    </section>
  )
}

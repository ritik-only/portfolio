const Contact = () => (
  <section
    id="contact"
    className="px-4 py-20 min-h-screen flex items-center justify-center"
  >
    <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-white/10">
      <h2 className="text-3xl font-semibold text-white mb-6 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        Contact Me
      </h2>

      {/* Form can stay if you still want inputs (optional) */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your Message"
          className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <div className="flex justify-center">
          <a
            href="https://wa.me/919992272191?text=Hello%20Ritik%2C%20I%20would%20like%20to%20connect%20with%20you!"
            target="_blank"
            rel="noopener noreferrer"
            className="w-80 text-center bg-green-600 text-white font-semibold py-3 rounded-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-green-700"
          >
            Send Message
          </a>
        </div>
      </form>
    </div>
  </section>
);

export default Contact;

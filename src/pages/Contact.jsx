import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: You can handle form submission logic here (e.g., email sending or backend call)
    setSubmissionStatus('Form submitted successfully!');
  };

  const handleSendMessage = (platform) => {
    if (!formData.name || !formData.email || !formData.message) {
      setSubmissionStatus('Please fill all fields before sending!');
      return;
    }
    setSubmissionStatus('Redirecting to WhatsApp...');
    // Already handled by <a> tag
  };

  return (
    <section
      id="contact"
      className="px-4 py-20 min-h-screen flex items-center justify-center"
    >
      <div className="bg-black/30 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-white/10">
        <h2 className="text-3xl font-semibold text-white mb-6 text-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
          Contact Me
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full bg-black/20 border border-white/10 text-white placeholder-white px-4 py-3 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="flex justify-center">
            <a
              onClick={() => handleSendMessage('whatsapp')}
              href={`https://wa.me/919992272191?text=Hello%20Ritik,%20my%20name%20is%20${encodeURIComponent(formData.name)}.%20My%20email%20is%20${encodeURIComponent(formData.email)}.%20Message:%20${encodeURIComponent(formData.message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-80 text-center bg-green-600 text-white font-semibold py-3 rounded-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:bg-green-700 ${
                !formData.name || !formData.email || !formData.message ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              Send Message
            </a>
          </div>

          {submissionStatus && (
            <p className="text-center mt-4 text-sm text-gray-300 animate-fade-in">
              {submissionStatus}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

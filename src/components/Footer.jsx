const Footer = () => (
  <footer className="bg-white text-center py-6 mt-20 shadow-inner">
    <p style={{ color: '#163a7c' }} className="text-sm font-medium">
      © {new Date().getFullYear()} Ritik. All rights reserved.
    </p>
    <p style={{ color: '#163a7c' }} className="text-sm font-medium">
      Built with <span className="font-semibold">React</span> & <span className="font-semibold">Tailwind CSS</span>
    </p>
  </footer>
);

export default Footer;

const Navbar = () => (
  <nav className="flex flex-wrap justify-center gap-4 p-4 bg-white shadow-lg fixed w-full z-10 top-0">
    <a
      href="#home"
      className="px-4 py-2 rounded-2xl hover:text-white transition"
      style={{
        color: '#163a7c',
        border: '2px solid #163a7c',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#163a7c';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#163a7c';
      }}
    >
      Home
    </a>
    <a
      href="#about"
      className="px-4 py-2 rounded-2xl hover:text-white transition"
      style={{
        color: '#163a7c',
        border: '2px solid #163a7c',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#163a7c';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#163a7c';
      }}
    >
      About
    </a>
    <a
      href="#projects"
      className="px-4 py-2 rounded-2xl hover:text-white transition"
      style={{
        color: '#163a7c',
        border: '2px solid #163a7c',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#163a7c';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#163a7c';
      }}
    >
      Projects
    </a>
    <a
      href="#contact"
      className="px-4 py-2 rounded-2xl hover:text-white transition"
      style={{
        color: '#163a7c',
        border: '2px solid #163a7c',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#163a7c';
        e.currentTarget.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
        e.currentTarget.style.color = '#163a7c';
      }}
    >
      Contact
    </a>
  </nav>
);

export default Navbar;

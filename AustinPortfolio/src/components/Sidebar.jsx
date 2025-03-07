export function Sidebar() {
  return (
    <nav className="w-64 bg-[#181818] p-6">
      <h2 className="text-2xl font-bold mb-6">My Portfolio</h2>
      <ul className="space-y-3">
        <li>
          <a href="/" className="block text-gray-300 hover:text-white transition">🏠 Home</a>
        </li>
        <li>
          <a href="/projects" className="block text-gray-300 hover:text-white transition">📂 Projects</a>
        </li>
        <li>
          <a href="/about" className="block text-gray-300 hover:text-white transition">👤 About</a>
        </li>
        <li>
          <a href="/contact" className="block text-gray-300 hover:text-white transition">✉️ Contact</a>
        </li>
      </ul>
    </nav>
  );
}

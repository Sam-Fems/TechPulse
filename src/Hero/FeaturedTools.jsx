import { FaCode, FaWrench, FaTools } from 'react-icons/fa';

const tools = [
  { name: 'CodePen', desc: 'Online code editor for frontend developers.', icon: <FaCode />, link: 'https://codepen.io/' },
  { name: 'Figma', desc: 'Collaborative UI/UX design tool.', icon: <FaWrench />, link: 'https://figma.com' },
  { name: 'Postman', desc: 'API testing and development environment.', icon: <FaTools />, link: 'https://postman.com' },
];

const FeaturedTools = () => {
  return (
    <section className="py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-400">🧰 Featured Tools</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <a
            key={index}
            href={tool.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-xl shadow hover:shadow-lg transition-all hover:scale-105 cursor-pointer"
          >
            <div className="text-3xl mb-3 text-blue-600">{tool.icon}</div>
            <h3 className="text-xl font-semibold mb-1 text-gray-50">{tool.name}</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">{tool.desc}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default FeaturedTools;

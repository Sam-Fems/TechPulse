import { Link } from 'react-router-dom';

const mockThreads = [
  {
    id: 1,
    title: 'React vs Svelte: Which Should You Learn in 2025?',
    user: 'dev_ade',
    replies: 22,
  },
  {
    id: 2,
    title: 'Best Dev Tools for Productivity (Share yours!)',
    user: 'queen_code',
    replies: 18,
  },
  {
    id: 3,
    title: 'Tailwind Tips that Blew Your Mind',
    user: 'stackmaniac',
    replies: 30,
  },
];

const TrendingThreads = () => {
  return (
    <section className="my-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">🔥 Trending Threads</h2>
        <Link
          to="/community"
          className="text-blue-600 font-medium hover:underline cursor-pointer"
        >
          View all
        </Link>
      </div>

      <div className="space-y-4">
        {mockThreads.map((thread) => (
          <Link
            key={thread.id}
            to={`/thread/${thread.id}`}
            className="block p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {thread.title}
            </h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              by @{thread.user} • {thread.replies} replies
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default TrendingThreads;

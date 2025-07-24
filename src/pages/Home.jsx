import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import WhyJoin from '../Hero/WhyJoin';
import TrendingThreads from '../Hero/TrendingThreads';
import FeaturedTools from '../Hero/FeaturedTools';

const Home = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 space-y-24">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className="text-blue-600">TechPulse</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          A vibrant tech community to connect, learn, and grow together. Explore tools, discussions, and job opportunities – all in one place.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Link
            to="/community"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Join the Community
          </Link>
          <Link
            to="/tools"
            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-medium transition duration-300"
          >
            Explore Tools
          </Link>
        </motion.div>
      </div>
      <WhyJoin />
      <TrendingThreads />
      <FeaturedTools />
    </section>
  );
};

export default Home;

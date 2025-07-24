import { Lightbulb, Users, MessageSquareText, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Users className="text-blue-600 w-6 h-6" />,
    title: 'Connect with Developers',
    description: 'Meet and collaborate with devs across different tech stacks.',
  },
  {
    icon: <MessageSquareText className="text-blue-600 w-6 h-6" />,
    title: 'Join Meaningful Conversations',
    description: 'Discuss trends, tools, and ideas in a focused community.',
  },
  {
    icon: <Lightbulb className="text-blue-600 w-6 h-6" />,
    title: 'Learn & Grow',
    description: 'Access insights, tips, and resources from experienced devs.',
  },
  {
    icon: <Zap className="text-blue-600 w-6 h-6" />,
    title: 'Get Real Feedback',
    description: 'Share your work and get helpful critiques from peers.',
  },
];

const WhyJoin = () => {
  return (
    <section className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-50">Why Join <span className='text-blue-400'>TechPulse?</span></h2>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-md rounded-2xl transition hover:shadow-xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2 text-center text-blue-400">{item.title}</h3>
            <p className="text-sm text-center text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyJoin;

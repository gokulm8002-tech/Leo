import { motion } from 'motion/react';
import { Lock, TrendingUp, Zap, Users } from 'lucide-react';

const TEMPLATES = [
  { id: '1', name: 'The Mystery Frame', description: 'Start with a close-up of something unrecognizable.', category: 'Mystery' },
  { id: '2', name: 'The Bold Statement', description: 'Challenge a common belief in the first second.', category: 'Bold' },
  { id: '3', name: 'The "Before" Reveal', description: 'Show the messy start before the perfect finish.', category: 'Educational' },
  { id: '4', name: 'The Rapid Question', description: 'Ask a question that viewers immediately want the answer to.', category: 'Entertainment' },
];

export default function TemplateLibrary() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-24 border-t border-white/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="text-4xl mb-2">TEMPLATE LIBRARY</h2>
          <p className="text-gray-400">Proven frameworks for every niche.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors">
            All
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors">
            Mystery
          </button>
          <button className="px-6 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-bold hover:bg-white/10 transition-colors">
            Bold
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TEMPLATES.map((template) => (
          <motion.div
            key={template.id}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col justify-between group cursor-pointer"
          >
            <div>
              <div className="w-12 h-12 bg-brand/10 rounded-xl flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:text-black transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="text-xl mb-2">{template.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {template.description}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{template.category}</span>
              <button className="text-brand text-xs font-bold">Use Template</button>
            </div>
          </motion.div>
        ))}

        {/* Pro Templates */}
        {[1, 2].map((i) => (
          <div key={`pro-${i}`} className="relative group">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-10 rounded-2xl flex flex-col items-center justify-center text-center p-6 border border-brand/20">
              <Lock className="text-brand mb-2" size={24} />
              <span className="text-brand font-bold text-sm mb-1">PRO ONLY</span>
              <p className="text-xs text-gray-400">Unlock Trending Now hooks</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl blur-[4px]">
              <div className="w-12 h-12 bg-white/10 rounded-xl mb-6" />
              <div className="h-6 bg-white/10 rounded w-3/4 mb-2" />
              <div className="h-4 bg-white/10 rounded w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Pro Section */}
      <div className="mt-32 bg-brand p-1 rounded-[2rem]">
        <div className="bg-dark rounded-[1.8rem] p-12 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold mb-6">
              <TrendingUp size={14} />
              GO VIRAL FASTER
            </div>
            <h2 className="text-5xl mb-6">UPGRADE TO PRO</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <Zap size={12} />
                </div>
                Unlimited Hook Generations
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <Zap size={12} />
                </div>
                Access to "Trending Now" Viral Hooks
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand">
                  <Users size={12} />
                </div>
                Private Community of Top Editors
              </li>
            </ul>
            <button className="w-full md:w-auto px-12 py-4 bg-brand text-black font-bold rounded-2xl hover:scale-105 transition-all">
              Start 7-Day Free Trial
            </button>
          </div>
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-brand mb-1">10M+</div>
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Views Generated</div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
              <div className="text-3xl font-bold text-brand mb-1">500+</div>
              <div className="text-xs text-gray-500 uppercase font-bold tracking-widest">Pro Templates</div>
            </div>
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 col-span-2">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-dark" />
                  ))}
                </div>
                <div className="text-sm text-gray-400 italic">"This app doubled my retention rate in a week."</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

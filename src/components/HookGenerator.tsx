import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Layout, Type as TypeIcon, Brain, Loader2, ChevronRight } from 'lucide-react';
import { generateHooks } from '../lib/gemini';
import { HookSuggestion } from '../types';

export default function HookGenerator() {
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [hooks, setHooks] = useState<HookSuggestion[]>([]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;
    
    setLoading(true);
    try {
      const results = await generateHooks(topic);
      setHooks(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl mb-4"
        >
          HOOK<span className="text-brand">LAB</span>
        </motion.h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Stop the scroll. Generate high-retention openers that keep viewers watching past the 3-second mark.
        </p>
      </div>

      <form onSubmit={handleGenerate} className="mb-16">
        <div className="relative group">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="What is your video about? (e.g., 'How to cook the perfect steak')"
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl px-6 py-5 text-xl focus:outline-none focus:border-brand transition-all pr-32"
          />
          <button
            type="submit"
            disabled={loading || !topic.trim()}
            className="absolute right-2 top-2 bottom-2 bg-brand text-black px-6 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            {loading ? 'Analyzing...' : 'Generate'}
          </button>
        </div>
      </form>

      <div className="space-y-8">
        <AnimatePresence mode="popLayout">
          {hooks.map((hook, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden group hover:border-brand/50 transition-colors"
            >
              <div className="p-8">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <h3 className="text-2xl text-brand">{hook.title}</h3>
                  <div className="flex items-center gap-2 px-3 py-1 bg-brand/10 text-brand rounded-full text-xs font-bold uppercase tracking-wider">
                    <Brain size={14} />
                    {hook.retentionStrategy}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest">
                      <TypeIcon size={16} />
                      Script Opener
                    </div>
                    <p className="text-xl leading-relaxed italic">
                      "{hook.script}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-400 text-sm font-bold uppercase tracking-widest">
                      <Layout size={16} />
                      Visual Layout
                    </div>
                    <p className="text-gray-300">
                      {hook.visualLayout}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 px-8 py-4 flex items-center justify-between border-t border-white/5">
                <span className="text-xs text-gray-500">PROVEN RETENTION PATTERN #{index + 1}</span>
                <button className="text-brand text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  Copy Script <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

import HookGenerator from './components/HookGenerator';
import TemplateLibrary from './components/TemplateLibrary';
import { Github, Twitter, Instagram } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="border-b border-white/10 px-6 py-4 flex items-center justify-between sticky top-0 bg-dark/80 backdrop-blur-xl z-50">
        <div className="flex items-center gap-2 font-display text-2xl font-bold">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center text-black">H</div>
          HOOK<span className="text-brand">LAB</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-400">
          <a href="#" className="hover:text-brand transition-colors">Generator</a>
          <a href="#" className="hover:text-brand transition-colors">Templates</a>
          <a href="#" className="hover:text-brand transition-colors">Pricing</a>
          <button className="bg-white text-black px-6 py-2 rounded-xl hover:bg-brand transition-colors">
            Login
          </button>
        </div>
      </nav>

      <main className="flex-grow">
        <HookGenerator />
        <TemplateLibrary />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 font-display text-xl font-bold">
            HOOK<span className="text-brand">LAB</span>
          </div>
          <div className="flex gap-6 text-gray-500">
            <Twitter size={20} className="hover:text-brand cursor-pointer transition-colors" />
            <Instagram size={20} className="hover:text-brand cursor-pointer transition-colors" />
            <Github size={20} className="hover:text-brand cursor-pointer transition-colors" />
          </div>
          <div className="text-gray-500 text-sm">
            © 2026 Hook-Lab. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

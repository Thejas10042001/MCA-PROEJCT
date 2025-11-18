
import React from 'react';
import Dashboard from './components/Dashboard';
import FeatureCard from './components/FeatureCard';
import { CameraIcon } from './components/icons/CameraIcon';
import { EyeIcon } from './components/icons/EyeIcon';
import { CursorClickIcon } from './components/icons/CursorClickIcon';
import { BrainIcon } from './components/icons/BrainIcon';
import { ChipIcon } from './components/icons/ChipIcon';
import { ChartBarIcon } from './components/icons/ChartBarIcon';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-950 font-sans">
      <div className="absolute inset-0 -z-10 h-full w-full bg-gray-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Hero Section */}
        <section className="text-center mb-20 md:mb-32">
          <div className="inline-block bg-cyan-500/10 text-cyan-400 text-sm font-medium px-4 py-1 rounded-full mb-4">
            Human–AI Co-Learning System
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
            NeuroLens AI
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-gray-400">
            Real-time Cognitive State Analytics. We decode human intent by reading facial micro-expressions, eye tracking patterns, and interaction logs to measure attention, stress, and curiosity.
          </p>
        </section>

        {/* How It Works Section */}
        <section className="mb-20 md:mb-32">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CameraIcon />}
              title="Facial Micro-Expressions"
              description="Our AI analyzes subtle, involuntary facial movements to accurately gauge emotional and cognitive states."
            />
            <FeatureCard
              icon={<EyeIcon />}
              title="Eye Tracking & Gaze"
              description="We monitor pupil dilation and gaze patterns to measure focus, cognitive load, and areas of interest."
            />
            <FeatureCard
              icon={<CursorClickIcon />}
              title="Interaction Logs"
              description="By analyzing clicks, hovers, and typing patterns, we understand user engagement and hesitation."
            />
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="mb-20 md:mb-32">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Live Analytics Dashboard</h2>
           <Dashboard />
        </section>

        {/* Why NeuroLens Section */}
        <section className="mb-20 md:mb-32 bg-gray-900/50 p-8 md:p-12 rounded-2xl border border-gray-800">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Why NeuroLens AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             <div className="flex flex-col items-center">
              <div className="p-4 bg-sky-500/10 rounded-full mb-4 border border-sky-500/20">
                <BrainIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-sky-400">Neuroscience</h3>
              <p className="text-gray-400">Grounded in proven principles of cognitive neuroscience for unparalleled accuracy.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="p-4 bg-cyan-500/10 rounded-full mb-4 border border-cyan-500/20">
                <ChipIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-cyan-400">Advanced AI</h3>
              <p className="text-gray-400">Utilizes state-of-the-art machine learning models for real-time, multi-modal analysis.</p>
            </div>
             <div className="flex flex-col items-center">
              <div className="p-4 bg-violet-500/10 rounded-full mb-4 border border-violet-500/20">
                <ChartBarIcon />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-violet-400">Behavioral Analytics</h3>
              <p className="text-gray-400">Combines physical and digital cues for a holistic view of the user's cognitive state.</p>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 bg-gray-900 rounded-lg border border-gray-800 transition-all hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10">
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">Adaptive E-Learning</h3>
              <p className="text-gray-400">
                Dynamically adjusts course difficulty and content based on a student's attention and stress levels, creating a personalized learning path for maximum retention and engagement.
              </p>
            </div>
            <div className="p-8 bg-gray-900 rounded-lg border border-gray-800 transition-all hover:border-violet-500/50 hover:shadow-2xl hover:shadow-violet-500/10">
              <h3 className="text-2xl font-bold mb-3 text-violet-400">Workplace Wellness</h3>
              <p className="text-gray-400">
                Monitors employee cognitive load and stress to suggest timely breaks, prevent burnout, and optimize focus periods, fostering a healthier and more productive work environment.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gray-800">
        <p className="text-gray-500">Created by Thejas Sreenivasu | &copy; {new Date().getFullYear()} NeuroLens AI. Pioneering the future of human-computer interaction.</p>
      </footer>
    </div>
  );
};

export default App;
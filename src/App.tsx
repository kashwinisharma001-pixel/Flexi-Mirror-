import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  AlertCircle, 
  CheckCircle2, 
  ChevronRight, 
  Cpu, 
  Eye, 
  Heart, 
  Info, 
  Layers, 
  Layout, 
  Mic, 
  Smartphone, 
  Target, 
  TrendingUp, 
  Users, 
  Zap,
  Menu,
  X,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onNavigate, currentView }: { onNavigate: (view: string) => void, currentView: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home', view: 'landing' },
    { name: 'Features', id: 'features', view: 'landing' },
    { name: 'Plans', id: 'plan', view: 'landing' },
    { name: 'Contacts', id: 'contacts', view: 'landing' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.view !== currentView) {
      onNavigate(item.view);
    }
    setIsMobileMenuOpen(false);
    if (item.view === 'landing') {
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'liquid-glass py-3 m-4 rounded-2xl' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => onNavigate('landing')}
        >
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/40 transition-all" />
            <img 
              src="https://picsum.photos/seed/flexilogo/200/200" 
              className="w-full h-full object-contain relative z-10 rounded-lg border border-white/10" 
              alt="Flexi Mirror Logo"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="text-2xl font-display font-bold tracking-tighter hidden sm:block">
            Flexi Mirror<span className="text-primary">™</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-sm font-medium text-gray-300 hover:text-white nav-link-hover transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
          <button 
            onClick={() => onNavigate('shop')}
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(59,130,246,0.5)]"
          >
            Buy Now
          </button>
        </div>

        <button className="md:hidden p-2 glass rounded-lg" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-4 right-4 mt-2 liquid-glass rounded-2xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navItems.map((item) => (
              <button 
                key={item.name}
                onClick={() => handleNavClick(item)}
                className="text-left py-2 border-b border-white/5"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => { onNavigate('shop'); setIsMobileMenuOpen(false); }}
              className="bg-primary text-white w-full py-3 rounded-xl font-semibold shadow-lg shadow-primary/20"
            >
              Buy Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Zap className="w-3 h-3" /> AI-Powered Fitness Revolution
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-[0.9] mb-6 uppercase tracking-tighter">
              YOUR MIRROR IS YOUR <span className="gradient-text">PERSONAL TRAINER.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg leading-relaxed">
              Flexi Mirror™ uses advanced AI and computer vision to correct your posture in real-time, preventing injuries and maximizing your workout efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 transition-all group">
                Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="glass hover:bg-white/10 text-white px-8 py-4 rounded-full text-lg font-bold transition-all">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-gray-500">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/user${i}/100/100`} className="w-10 h-10 rounded-full border-2 border-background" alt="User" referrerPolicy="no-referrer" />
                ))}
              </div>
              <p>Joined by <span className="text-white font-bold">2,500+</span> fitness enthusiasts</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/20 shadow-2xl shadow-primary/20">
              <img 
                src="https://picsum.photos/seed/smartmirror/800/1000" 
                className="w-full aspect-[4/5] object-cover" 
                alt="Flexi Mirror in Action" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* AI UI Overlay Simulation */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="glass p-3 rounded-2xl flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold uppercase tracking-widest">Live Posture Analysis</span>
                </div>
                <div className="glass p-3 rounded-2xl flex flex-col items-end">
                  <span className="text-xs text-gray-400">Heart Rate</span>
                  <span className="text-xl font-bold text-red-400">128 BPM</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <p className="text-xs text-gray-400">Current Exercise</p>
                    <p className="text-lg font-bold">Deep Squats</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Reps</p>
                    <p className="text-2xl font-bold text-primary">12 / 15</p>
                  </div>
                </div>
                <div className="mt-3 glass p-3 rounded-xl bg-red-500/20 border-red-500/30 flex items-center gap-3">
                  <AlertCircle className="text-red-500 w-5 h-5" />
                  <p className="text-xs font-medium">Correction: Keep your back straight!</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent/30 blur-3xl rounded-full" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/30 blur-3xl rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    {
      icon: <AlertCircle className="text-red-400" />,
      stat: "70%",
      text: "of gym injuries happen due to incorrect posture."
    },
    {
      icon: <TrendingUp className="text-orange-400" />,
      stat: "₹20k+",
      text: "Monthly cost of a personal trainer in metro cities."
    },
    {
      icon: <Info className="text-blue-400" />,
      stat: "85%",
      text: "of beginners feel confused about correct form."
    }
  ];

  return (
    <section id="importance" className="py-24 bg-surface/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">The Problem with Traditional Workouts</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Working out alone can be dangerous. Without proper guidance, you're not just wasting time—you're risking your health.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-3xl text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {p.icon}
              </div>
              <h3 className="text-5xl font-display font-bold mb-2 gradient-text">{p.stat}</h3>
              <p className="text-gray-400">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "Real-Time Posture Correction",
      desc: "Detects wrong knee angles in squats and alerts if your back bends incorrectly during deadlifts.",
      icon: <Eye className="w-6 h-6 text-primary" />
    },
    {
      title: "Rep Counting & Tracking",
      desc: "Automatically counts your reps and sets so you can focus entirely on your performance.",
      icon: <Layers className="w-6 h-6 text-accent" />
    },
    {
      title: "Injury Risk Alert System",
      desc: "Advanced algorithms detect excessive joint stress and alert you before an injury occurs.",
      icon: <AlertCircle className="w-6 h-6 text-red-400" />
    },
    {
      title: "Personalized Workout Plans",
      desc: "Custom plans based on your BMI, age, and goals—whether it's fat loss or muscle gain.",
      icon: <Target className="w-6 h-6 text-green-400" />
    },
    {
      title: "Voice Coaching",
      desc: "Real-time audio feedback like 'Straighten your back' or 'Lower your hips' just like a real trainer.",
      icon: <Mic className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Progress Analytics",
      desc: "Deep dive into your performance metrics with a comprehensive dashboard on the mirror and app.",
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl mb-4">Intelligent Features for a <span className="text-primary">Smarter You.</span></h2>
            <p className="text-gray-400">Flexi Mirror™ combines hardware excellence with cutting-edge AI to provide an unparalleled fitness experience.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Features <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-primary"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PersonalizedPlan = () => {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(170);
  const [goal, setGoal] = useState('muscle');
  const [plan, setPlan] = useState<any>(null);

  const calculatePlan = () => {
    const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
    let recommendation = "";
    let focus = [];
    
    if (goal === 'muscle') {
      recommendation = "Hypertrophy Phase";
      focus = ["Strength Training", "Progressive Overload", "High Protein Diet"];
    } else if (goal === 'fatloss') {
      recommendation = "Metabolic Conditioning";
      focus = ["HIIT Sessions", "Caloric Deficit", "Active Recovery"];
    } else {
      recommendation = "Functional Longevity";
      focus = ["Mobility Work", "Core Stability", "Balanced Nutrition"];
    }

    setPlan({ bmi, recommendation, focus });
  };

  return (
    <section id="plan" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Get Your <span className="text-accent">Personalized Plan</span></h2>
            <p className="text-gray-400 mb-8">Tell us about yourself, and our AI will generate a preview of how Flexi Mirror™ can transform your fitness journey.</p>
            
            <div className="space-y-6 glass p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Weight (kg)</label>
                  <input 
                    type="number" 
                    value={weight} 
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Height (cm)</label>
                  <input 
                    type="number" 
                    value={height} 
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Your Primary Goal</label>
                <div className="grid grid-cols-3 gap-3">
                  {['muscle', 'fatloss', 'health'].map(g => (
                    <button 
                      key={g}
                      onClick={() => setGoal(g)}
                      className={`py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${goal === g ? 'bg-primary text-white' : 'glass text-gray-400 hover:bg-white/10'}`}
                    >
                      {g === 'muscle' ? 'Muscle Gain' : g === 'fatloss' ? 'Fat Loss' : 'General Health'}
                    </button>
                  ))}
                </div>
              </div>

              <button 
                onClick={calculatePlan}
                className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-bold text-lg transition-all"
              >
                Generate My Plan
              </button>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {plan ? (
                <motion.div 
                  key="plan-result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="glass p-10 rounded-[40px] border-2 border-primary/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-6">
                    <Activity className="text-primary w-12 h-12 opacity-20" />
                  </div>
                  
                  <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-8">AI Analysis Complete</h3>
                  
                  <div className="flex items-end gap-4 mb-10">
                    <span className="text-7xl font-display font-bold">{plan.bmi}</span>
                    <div className="pb-2">
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Your BMI</p>
                      <p className="text-sm font-medium text-green-400">Healthy Range</p>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-2">Recommended Strategy</p>
                      <p className="text-3xl font-bold">{plan.recommendation}</p>
                    </div>

                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-4">Key Focus Areas</p>
                      <div className="flex flex-wrap gap-3">
                        {plan.focus.map((f: string, i: number) => (
                          <span key={i} className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 p-6 bg-white/5 rounded-3xl border border-white/10">
                    <p className="text-sm text-gray-400 italic">"Based on your profile, Flexi Mirror™ will prioritize deep squat depth and back alignment during your initial 4-week strength phase."</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="plan-placeholder"
                  className="glass p-10 rounded-[40px] border-dashed border-2 border-white/20 flex flex-col items-center justify-center text-center min-h-[500px]"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-6">
                    <Cpu className="text-gray-500 w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-400">Awaiting Your Input</h3>
                  <p className="text-gray-500 max-w-xs">Fill out the form to see how our AI tailors your fitness journey.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Simple, Transparent <span className="text-primary">Pricing.</span></h2>
          <p className="text-gray-400">Invest in your health with the most advanced fitness technology in India.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Hardware */}
          <div className="glass p-10 rounded-[40px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-primary px-6 py-2 rounded-bl-3xl text-sm font-bold">Best Value</div>
            <h3 className="text-2xl font-bold mb-2">Flexi Mirror™ Hardware</h3>
            <p className="text-gray-400 text-sm mb-8">The complete smart mirror setup with 4K display and HD camera.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-display font-bold">₹40,000</span>
              <span className="text-gray-500 font-medium">one-time</span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                "43-55 inch Smart Screen",
                "HD Camera & Depth Sensors",
                "Embedded AI Processing Chip",
                "Free Delivery & Installation",
                "1 Year Hardware Warranty"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-primary w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-black py-4 rounded-2xl font-bold hover:bg-gray-200 transition-all">Buy Now</button>
          </div>

          {/* Subscription */}
          <div className="glass p-10 rounded-[40px] border-accent/30">
            <h3 className="text-2xl font-bold mb-2">Flexi Premium</h3>
            <p className="text-gray-400 text-sm mb-8">Unlock the full power of AI coaching and personalized analytics.</p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-display font-bold">₹999</span>
              <span className="text-gray-500 font-medium">/ month</span>
            </div>
            <ul className="space-y-4 mb-10">
              {[
                "Real-time Posture Correction",
                "Unlimited Personalized Plans",
                "Advanced Progress Analytics",
                "Live Voice Coaching",
                "Multi-User Profiles (up to 5)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <CheckCircle2 className="text-accent w-5 h-5" /> {item}
                </li>
              ))}
            </ul>
            <button className="w-full glass border-accent/50 text-white py-4 rounded-2xl font-bold hover:bg-accent/10 transition-all">Start 14-Day Free Trial</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-surface/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass rounded-[50px] p-8 md:p-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Ready to <span className="gradient-text">Transform?</span></h2>
            <p className="text-gray-400 mb-8 text-lg">Join the waitlist for our next batch and get an exclusive ₹5,000 early-bird discount.</p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0">
                  <Users className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Join the Community</h4>
                  <p className="text-sm text-gray-500">Access exclusive workout sessions with top Indian influencers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shrink-0">
                  <Smartphone className="text-accent" />
                </div>
                <div>
                  <h4 className="font-bold">Mobile App Sync</h4>
                  <p className="text-sm text-gray-500">Track your progress on the go with our seamless mobile integration.</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-12 glass rounded-3xl"
              >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">You're on the list!</h3>
                <p className="text-gray-400">We'll contact you soon with your exclusive discount code.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input 
                    required
                    placeholder="First Name" 
                    className="w-full glass rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                  />
                  <input 
                    required
                    placeholder="Last Name" 
                    className="w-full glass rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                  />
                </div>
                <input 
                  required
                  type="email"
                  placeholder="Email Address" 
                  className="w-full glass rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                />
                <select className="w-full glass rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all text-gray-400">
                  <option>Interested in...</option>
                  <option>Home Use</option>
                  <option>Gym / Studio Use</option>
                  <option>Corporate Wellness</option>
                </select>
                <textarea 
                  placeholder="Any specific fitness goals?" 
                  rows={4}
                  className="w-full glass rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
                />
                <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
                  Secure My Early-Bird Discount
                </button>
                <p className="text-center text-xs text-gray-500">By signing up, you agree to our Terms of Service and Privacy Policy.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Activity className="text-white w-5 h-5" />
            </div>
            <span className="text-xl font-display font-bold tracking-tighter">Flexi Mirror™</span>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
              <Heart className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 cursor-pointer transition-all">
              <Users className="w-5 h-5" />
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-gray-600">
          © 2026 Flexi Mirror™ Technology. All rights reserved. Made with ❤️ in India.
        </div>
      </div>
    </footer>
  );
};

const ShopPage = () => {
  const basePrice = 40000;
  const discount = 0.10; // 10% off
  const discountedPrice = basePrice * (1 - discount);
  const [isSpecialOccasion, setIsSpecialOccasion] = useState(true);

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid lg:grid-cols-2 gap-16 items-start"
      >
        {/* Product Display */}
        <div className="space-y-8">
          <div className="liquid-glass rounded-[40px] overflow-hidden aspect-square relative group">
            <img 
              src="https://picsum.photos/seed/flexiproduct/1000/1000" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              alt="Flexi Mirror Product" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/30">
                Premium AI Edition
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3].map(i => (
              <div key={i} className="glass rounded-2xl overflow-hidden aspect-square cursor-pointer hover:border-primary transition-all">
                <img src={`https://picsum.photos/seed/flexi${i}/300/300`} className="w-full h-full object-cover" alt="Gallery" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
        </div>

        {/* Checkout Details */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl font-display font-bold mb-4">Flexi Mirror<span className="text-primary">™</span></h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Activity key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-gray-400">4.9/5 (128 Reviews)</span>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-4xl font-display font-bold">₹{isSpecialOccasion ? discountedPrice.toLocaleString() : basePrice.toLocaleString()}</span>
                {isSpecialOccasion && (
                  <span className="text-xl text-gray-500 line-through">₹{basePrice.toLocaleString()}</span>
                )}
              </div>
              {isSpecialOccasion && (
                <div className="inline-flex items-center gap-2 text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  <Zap className="w-3 h-3" /> 10% Special Occasion Discount Applied
                </div>
              )}
            </div>
          </div>

          <div className="glass p-8 rounded-3xl space-y-6">
            <h3 className="text-xl font-bold">Secure Checkout</h3>
            <div className="space-y-4">
              <input placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none" />
              <input placeholder="Shipping Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="City" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none" />
                <input placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none" />
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/10 space-y-3">
              <div className="flex justify-between text-sm text-gray-400">
                <span>Subtotal</span>
                <span>₹{basePrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-green-400">
                <span>Discount</span>
                <span>-₹{(basePrice * discount).toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-primary">₹{discountedPrice.toLocaleString()}</span>
              </div>
            </div>

            <button className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
              Complete Purchase <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> Secure Payment</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-3 h-3" /> 1 Year Warranty</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const StatementSection = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-display font-black leading-none tracking-tighter uppercase italic">
            THE FUTURE <br />
            <span className="gradient-text">REFLECTED</span> <br />
            IN YOU.
          </h2>
        </motion.div>
      </div>
    </section>
  );
};

const TodoListSection = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Morning 15-min Yoga session", completed: true },
    { id: 2, text: "Complete 3 sets of Deep Squats", completed: false },
    { id: 3, text: "Check posture analysis report", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <section className="py-20 bg-surface/20">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Daily <span className="text-primary">Fitness Checklist</span></h2>
          <p className="text-gray-400">Stay on track with your daily goals. Flexi Mirror™ helps you stay consistent.</p>
        </div>

        <div className="liquid-glass p-8 rounded-[32px] border-primary/20">
          <form onSubmit={addTask} className="flex gap-3 mb-8">
            <input 
              type="text" 
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new workout goal..."
              className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-primary outline-none transition-all"
            />
            <button 
              type="submit"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-4 rounded-2xl font-bold transition-all flex items-center gap-2"
            >
              Add <Zap className="w-4 h-4" />
            </button>
          </form>

          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {tasks.map((task) => (
                <motion.div 
                  key={task.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className={`flex items-center justify-between p-5 rounded-2xl border transition-all ${task.completed ? 'bg-green-500/5 border-green-500/20 opacity-60' : 'glass border-white/5'}`}
                >
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => toggleTask(task.id)}
                      className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${task.completed ? 'bg-green-500 border-green-500' : 'border-white/20 hover:border-primary'}`}
                    >
                      {task.completed && <CheckCircle2 className="w-4 h-4 text-white" />}
                    </button>
                    <span className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : 'text-white'}`}>
                      {task.text}
                    </span>
                  </div>
                  <button 
                    onClick={() => deleteTask(task.id)}
                    className="p-2 hover:bg-red-500/10 rounded-xl text-gray-500 hover:text-red-400 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {tasks.length === 0 && (
              <div className="text-center py-12 text-gray-500 italic">
                No goals set for today. Add one above!
              </div>
            )}
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-sm">
            <p className="text-gray-400">
              {tasks.filter(t => t.completed).length} of {tasks.length} goals completed
            </p>
            <div className="flex items-center gap-2 text-primary font-bold">
              <TrendingUp className="w-4 h-4" /> Keep it up!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [view, setView] = useState('landing');

  return (
    <div className="min-h-screen selection:bg-primary/30">
      <Navbar onNavigate={setView} currentView={view} />
      <main>
        {view === 'landing' ? (
          <>
            <Hero />
            <TodoListSection />
            <StatementSection />
            <ProblemSection />
            <Features />
            <PersonalizedPlan />
            <Pricing />
            <ContactForm />
          </>
        ) : (
          <ShopPage />
        )}
      </main>
      <Footer />
    </div>
  );
}

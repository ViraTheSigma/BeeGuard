import { motion } from "motion/react";
import { 
  Bug as Bee, 
  Sprout, 
  ShieldAlert, 
  Heart, 
  ArrowRight, 
  CheckCircle2, 
  Mail, 
  ChevronDown,
  Globe,
  Utensils,
  Wind,
  Droplets,
  Facebook,
  Twitter,
  Instagram,
  Quote
} from "lucide-react";
import { useState } from "react";

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-bee-yellow/20">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-bee-yellow p-1.5 rounded-lg">
          <Bee className="w-6 h-6 text-bee-dark" />
        </div>
        <span className="font-display font-bold text-xl tracking-tighter">BEEGUARD</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium">
        <a href="#problem" className="hover:text-bee-green transition-colors">The Problem</a>
        <a href="#crisis" className="hover:text-bee-green transition-colors">The Crisis</a>
        <a href="#solutions" className="hover:text-bee-green transition-colors">Solutions</a>
        <a href="#donate" className="bg-bee-yellow px-5 py-2 rounded-full font-bold hover:bg-yellow-500 transition-all">Donate Now</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?auto=format&fit=crop&q=80&w=2000" 
        alt="Bee on flower" 
        className="w-full h-full object-cover brightness-50"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bee-dark/40 via-transparent to-bee-cream"></div>
    </div>
    
    <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span className="inline-block bg-bee-yellow/20 text-bee-yellow border border-bee-yellow/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
          Critical Alert: Global Bee Populations are Vanishing
        </span>
        <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.1] mb-6">
          Without Them, <span className="text-bee-yellow italic">Our Future</span> Withers.
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Bees pollinate 1 in every 3 bites of food we eat. If they disappear, our entire ecosystem collapses. Join the fight to save our most vital workers.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#donate" className="btn-primary text-lg">
            Save the Bees Today <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#problem" className="btn-secondary text-lg">
            Learn Why It Matters
          </a>
        </div>
      </motion.div>
    </div>
    
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="w-8 h-8 text-bee-dark/50" />
    </div>
  </section>
);

const Problem = () => {
  const facts = [
    {
      icon: <Utensils className="w-8 h-8 text-bee-green" />,
      title: "1 in 3 Bites",
      desc: "Bees are responsible for pollinating one-third of the global food supply, including most fruits, nuts, and vegetables."
    },
    {
      icon: <Globe className="w-8 h-8 text-bee-green" />,
      title: "Ecosystem Backbone",
      desc: "They support the growth of trees, flowers, and other plants that serve as food and shelter for countless species."
    },
    {
      icon: <Droplets className="w-8 h-8 text-bee-green" />,
      title: "$15 Billion Value",
      desc: "In the US alone, honey bees contribute over $15 billion annually to the economy through increased crop yields."
    }
  ];

  return (
    <section id="problem" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Why Bees Are Our Greatest Ally</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bees aren't just insects; they are the silent engineers of our natural world. Their disappearance isn't just a loss for nature—it's a threat to humanity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {facts.map((fact, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="p-8 rounded-3xl bg-bee-cream border border-bee-yellow/10 flex flex-col items-center text-center"
            >
              <div className="bg-white p-4 rounded-2xl shadow-sm mb-6">
                {fact.icon}
              </div>
              <h3 className="text-2xl mb-3">{fact.title}</h3>
              <p className="text-gray-600 leading-relaxed">{fact.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Crisis = () => {
  const causes = [
    {
      title: "Habitat Loss",
      desc: "Urban sprawl and industrial farming have destroyed the wild meadows bees need to survive.",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Toxic Pesticides",
      desc: "Neonicotinoids and other chemicals attack bee nervous systems, causing confusion and death.",
      img: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Climate Change",
      desc: "Rising temperatures disrupt the timing of flower blooms, leaving bees with nothing to eat.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="crisis" className="section-padding bg-bee-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-bee-yellow/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-bee-yellow font-bold uppercase tracking-widest text-sm">The Crisis</span>
            <h2 className="text-4xl md:text-5xl mt-2">A Silent Extinction is Underway</h2>
          </div>
          <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-2xl flex items-center gap-4">
            <ShieldAlert className="w-8 h-8 text-red-500" />
            <div>
              <p className="text-sm font-bold text-red-500">URGENCY LEVEL: CRITICAL</p>
              <p className="text-xs text-white/60">40% of pollinator species face extinction.</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {causes.map((cause, i) => (
            <motion.div 
              key={i} 
              className="group cursor-pointer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6">
                <img 
                  src={cause.img} 
                  alt={cause.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bee-dark to-transparent opacity-60"></div>
              </div>
              <h3 className="text-2xl mb-3 text-bee-yellow">{cause.title}</h3>
              <p className="text-white/70 leading-relaxed">{cause.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SocialProof = () => (
  <section className="py-16 bg-white border-y border-bee-yellow/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <div className="flex items-center gap-2 font-bold text-xl"><Globe className="w-6 h-6" /> UN Environment</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Heart className="w-6 h-6" /> WWF Partner</div>
        <div className="flex items-center gap-2 font-bold text-xl"><CheckCircle2 className="w-6 h-6" /> Science Daily</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Wind className="w-6 h-6" /> Green Alliance</div>
      </div>
      
      <div className="mt-20 max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-10 rounded-3xl relative"
        >
          <Quote className="absolute top-6 left-6 w-12 h-12 text-bee-yellow/20" />
          <p className="text-2xl italic text-bee-dark/80 leading-relaxed text-center mb-8">
            "If the bee disappeared off the surface of the globe, then man would have only four years of life left. No more bees, no more pollination, no more plants, no more animals, no more man."
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-bee-yellow flex items-center justify-center font-bold">AE</div>
            <div>
              <p className="font-bold">Attributed to Albert Einstein</p>
              <p className="text-sm text-gray-500">Theoretical Physicist</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const actions = [
    {
      title: "Plant Wildflowers",
      desc: "Turn your garden or balcony into a bee sanctuary with native, nectar-rich plants.",
      icon: <Sprout className="w-6 h-6" />
    },
    {
      title: "Go Chemical-Free",
      desc: "Stop using synthetic pesticides that poison bees and contaminate the soil.",
      icon: <ShieldAlert className="w-6 h-6" />
    },
    {
      title: "Build a Bee Hotel",
      desc: "Provide nesting sites for solitary bees who have lost their natural habitats.",
      icon: <Utensils className="w-6 h-6" />
    },
    {
      title: "Support Local",
      desc: "Buy honey and produce from local beekeepers who practice sustainable methods.",
      icon: <Heart className="w-6 h-6" />
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-bee-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">How You Can Be a Hero</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Saving the bees doesn't require a miracle—it requires millions of small, intentional actions. Start your journey today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-bee-yellow/5 hover:border-bee-yellow/30 transition-all"
            >
              <div className="w-12 h-12 bg-bee-yellow/10 rounded-2xl flex items-center justify-center text-bee-earth mb-6">
                {action.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{action.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{action.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DonationBlock = () => {
  const [amount, setAmount] = useState(25);
  const tiers = [10, 25, 50, 100];

  return (
    <section id="donate" className="section-padding bg-white">
      <div className="max-w-5xl mx-auto bg-bee-dark rounded-[3rem] overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        <div className="lg:w-1/2 p-12 flex flex-col justify-center">
          <h2 className="text-4xl text-white mb-6">Your Contribution Saves Lives</h2>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3 text-white/80">
              <CheckCircle2 className="w-5 h-5 text-bee-yellow" />
              <span>$10 plants 100 square feet of wildflowers</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <CheckCircle2 className="w-5 h-5 text-bee-yellow" />
              <span>$25 provides nesting sites for 500 bees</span>
            </li>
            <li className="flex items-center gap-3 text-white/80">
              <CheckCircle2 className="w-5 h-5 text-bee-yellow" />
              <span>$50 funds pesticide-free farming research</span>
            </li>
          </ul>
          <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
            <p className="text-sm text-white/60 italic">"I donated because I want my children to know a world where flowers still bloom and food is plenty." — Sarah M., Donor</p>
          </div>
        </div>
        
        <div className="lg:w-1/2 bg-bee-yellow p-12 flex flex-col justify-center">
          <p className="font-bold text-bee-dark uppercase tracking-widest text-sm mb-6">Select Donation Amount</p>
          <div className="grid grid-cols-2 gap-3 mb-6">
            {tiers.map((t) => (
              <button 
                key={t}
                onClick={() => setAmount(t)}
                className={`py-4 rounded-2xl font-bold transition-all ${amount === t ? 'bg-bee-dark text-white scale-105 shadow-lg' : 'bg-white/50 text-bee-dark hover:bg-white'}`}
              >
                ${t}
              </button>
            ))}
          </div>
          <button className="w-full bg-bee-dark text-white py-5 rounded-2xl font-bold text-xl hover:bg-gray-800 transition-all shadow-xl flex items-center justify-center gap-3">
            Donate ${amount} Now <Heart className="w-6 h-6 fill-current" />
          </button>
          <p className="text-center mt-6 text-bee-dark/60 text-xs">Secure payment processed via Stripe. 100% of proceeds go to conservation.</p>
        </div>
      </div>
    </section>
  );
};

const EmailCapture = () => (
  <section className="section-padding bg-bee-green text-white">
    <div className="max-w-4xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8"
      >
        <Mail className="w-10 h-10 text-bee-yellow" />
      </motion.div>
      <h2 className="text-4xl mb-4">Get Your Free "Bee-Friendly" Guide</h2>
      <p className="text-lg text-white/80 mb-10">
        Join 50,000+ others receiving our weekly tips on how to save bees, plant native gardens, and live sustainably.
      </p>
      <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          className="flex-1 px-6 py-4 rounded-full bg-white text-bee-dark focus:outline-none focus:ring-4 focus:ring-bee-yellow/30"
          required
        />
        <button className="bg-bee-yellow text-bee-dark font-bold px-8 py-4 rounded-full hover:bg-yellow-500 transition-all whitespace-nowrap">
          Send Me the Guide
        </button>
      </form>
      <p className="mt-6 text-xs text-white/40">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    {
      q: "Do bees really matter that much?",
      a: "Absolutely. Without bees, our diet would be extremely limited and expensive. They are essential for the reproduction of 75% of the world's food crops."
    },
    {
      q: "Can one person actually make a difference?",
      a: "Yes! If every household planted just one square foot of native flowers, we could create massive 'pollinator corridors' across the country."
    },
    {
      q: "Where does my donation go?",
      a: "Your funds support wildflower restoration projects, pesticide policy advocacy, and educational programs for schools and farmers."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-bee-cream border border-bee-yellow/10"
            >
              <h3 className="text-xl font-bold mb-3 flex items-start gap-3">
                <span className="text-bee-yellow">Q:</span> {faq.q}
              </h3>
              <p className="text-gray-600 leading-relaxed pl-8">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-bee-dark text-white/60 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 text-white mb-6">
            <div className="bg-bee-yellow p-1.5 rounded-lg">
              <Bee className="w-6 h-6 text-bee-dark" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tighter">BEEGUARD</span>
          </div>
          <p className="max-w-sm mb-8 leading-relaxed">
            BeeGuard is a non-profit organization dedicated to the protection and restoration of global bee populations. Together, we can ensure a blooming future.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bee-yellow hover:text-bee-dark transition-all"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bee-yellow hover:text-bee-dark transition-all"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-bee-yellow hover:text-bee-dark transition-all"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#problem" className="hover:text-bee-yellow transition-colors">Why Bees Matter</a></li>
            <li><a href="#crisis" className="hover:text-bee-yellow transition-colors">The Crisis</a></li>
            <li><a href="#solutions" className="hover:text-bee-yellow transition-colors">Our Solutions</a></li>
            <li><a href="#donate" className="hover:text-bee-yellow transition-colors">Donate Now</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li>123 Nature Way</li>
            <li>San Francisco, CA 94103</li>
            <li>hello@beeguard.org</li>
            <li>+1 (555) 123-4567</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <p>© 2026 BeeGuard Conservation. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Crisis />
      <SocialProof />
      <Solutions />
      <DonationBlock />
      <EmailCapture />
      <FAQ />
      <Footer />
    </div>
  );
}

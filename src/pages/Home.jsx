import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";
import usePageContent from "../hooks/usePageContent";

export default function Home() {
  const { getField, withMediaBase, loading } = usePageContent("home");

  if (loading) return <div className="h-screen flex items-center justify-center">Loading Experience...</div>;

  // --- 1. HERO SECTION -----
  const hero = {
    title: getField("hero_title", "title") || "Transforming Finance with Artificial Intelligence",
    subtitle: getField("hero_text") || "Automate accounting, audits, and compliance with XpertAI Global's next-gen solutions.",
    image: withMediaBase(getField("hero_image", "image")) || "https://images.unsplash.com/photo-1551434678-e076c2236033?q=80&w=2068&auto=format&fit=crop",
    ctaText: getField("cta_button") || "Get Started Today",
  };

  // --- 2. DYNAMIC STATS SECTION ---
  // Fetch from CMS or fallback to defaults
  const stats = [
    { label: getField("stat1_label") || "Clients Served", value: getField("stat1_value") || "500+" },
    { label: getField("stat2_label") || "Revenue Managed", value: getField("stat2_value") || "$10M+" },
    { label: getField("stat3_label") || "Compliance Rate", value: getField("stat3_value") || "100%" },
  ];

  // --- 3. FEATURES SECTION ---
  const features = {
    title: getField("features_title", "title") || "Why Choose XpertAI?",
    list: [
      { 
        title: getField("feature1_title", "title") || "AI-Driven Insights", 
        desc: getField("feature1_desc") || "Predictive analytics to grow your business.",
        icon: <TrendingUp size={30} className="text-blue-500" />
      },
      { 
        title: getField("feature2_title", "title") || "Bank-Grade Security", 
        desc: getField("feature2_desc") || "Your financial data is encrypted and safe.",
        icon: <Shield size={30} className="text-green-500" />
      },
      { 
        title: getField("feature3_title", "title") || "Expert Team", 
        desc: getField("feature3_desc") || "Led by industry veterans and tech experts.",
        icon: <Users size={30} className="text-orange-500" />
      },
    ]
  };

  // --- 4. DYNAMIC CTA SECTION ---
  const cta = {
    title: getField("cta_title", "title") || "Ready to upgrade your finance game?",
    text: getField("cta_text") || "Join hundreds of businesses trusting XpertAI.",
    btnText: getField("cta_button_text") || "Get in Touch"
  };

  return (
    <div className="overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase">Future of Finance</span>
            <h1 className="text-5xl md:text-7xl font-bold mt-6 leading-tight" dangerouslySetInnerHTML={{ __html: hero.title }}></h1>
            <p className="mt-6 text-lg text-gray-300 max-w-lg leading-relaxed">{hero.subtitle}</p>
            <div className="mt-8 flex gap-4">
              <Link to="/contact" className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2">
                {hero.ctaText} <ArrowRight size={20} />
              </Link>
              <Link to="/services" className="border border-gray-500 hover:border-white text-gray-300 hover:text-white px-8 py-4 rounded-full font-bold transition-all">View Services</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-30"></div>
            <img src={hero.image} alt="Hero" className="relative rounded-2xl shadow-2xl w-full object-cover border border-gray-700/50" />
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, duration: 0.5 }} className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-full text-green-400"><CheckCircle size={24} /></div>
                <div><p className="text-sm text-gray-300">Audit Status</p><p className="text-white font-bold">100% Compliant</p></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS STRIP (Dynamic) */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container mx-auto px-6 flex flex-wrap justify-center md:justify-between gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-4xl font-extrabold text-gray-900">{stat.value}</h3>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES (Dynamic) */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">{features.title}</h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.list.map((feature, index) => (
              <motion.div key={index} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA (Dynamic) */}
      <section className="py-20 px-6">
        <div className="container mx-auto bg-blue-600 rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">{cta.title}</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto relative z-10">{cta.text}</p>
          <Link to="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg relative z-10">
            {cta.btnText}
          </Link>
        </div>
      </section>

    </div>
  );
}

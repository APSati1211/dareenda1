import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServicesPageData } from "../api"; // Updated API Call
import { ArrowRight, Briefcase, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getServicesPageData()
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="h-screen flex items-center justify-center">Loading Services...</div>;

  const { hero, cta, services_list } = data || {};

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white pt-32 pb-24 text-center px-6 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 relative z-10"
        >
          {hero?.title}
        </motion.h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto relative z-10">
          {hero?.subtitle}
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 relative z-20">
        <div className="grid md:grid-cols-3 gap-8">
          {services_list?.map((service, index) => (
            <motion.div 
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border border-slate-100 group flex flex-col"
            >
              <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                {/* Icon handling logic can be added here if needed, using lucide-react mapping */}
                <Briefcase size={32} />
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">{service.short_description}</p>
              
              <Link to={`/services/${service.slug}`} className="inline-flex items-center text-blue-600 font-bold hover:translate-x-2 transition-transform mt-auto">
                Read More <ArrowRight size={18} className="ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {cta && (
        <div className="max-w-5xl mx-auto px-6 mt-24">
            <div className="bg-white border border-slate-200 rounded-3xl p-12 text-center shadow-xl">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">{cta.title}</h2>
                <p className="text-slate-600 mb-8 max-w-2xl mx-auto">{cta.text}</p>
                <Link to="/contact" className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
                    {cta.button_text}
                </Link>
            </div>
        </div>
      )}
    </div>
  );
}
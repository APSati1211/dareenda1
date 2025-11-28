import { useEffect, useState } from "react";
// Sahi import path: api folder se getLegalPageData function
import { getLegalPageData } from "../api"; 
import { motion } from "framer-motion";

// Props 'slug' receive karega (jo App.jsx se pass hoga)
export default function LegalPage({ slug }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getLegalPageData(slug)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [slug]); // Slug change hone par dubara fetch karega

  if (loading) return <div className="h-screen flex items-center justify-center text-blue-600">Loading Policy...</div>;
  if (error || !data) return <div className="h-screen flex items-center justify-center text-red-500">Page Not Found</div>;

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-20">
      
      {/* Header */}
      <div className="bg-slate-900 text-white py-16 text-center px-6 mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          {data.title}
        </motion.h1>
        <p className="text-slate-400 mt-4">Last Updated: {data.last_updated}</p>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.2 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 prose prose-lg prose-slate max-w-none"
        >
          {/* HTML Content Render */}
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </motion.div>
      </div>

    </div>
  );
}
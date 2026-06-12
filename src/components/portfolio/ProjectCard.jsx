import { motion } from 'framer-motion';
import { Badge } from '../ui/Badge';

const ProjectCard = ({ title, client, image, categories = [] }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer flex flex-col gap-4"
    >
      {/* Container Gambar */}
      <div className="relative aspect-[4/5] overflow-hidden bg-vintage-black/5 w-full">
        {/* mix-blend-multiply membantu gambar terlihat menyatu dengan background vintage (tergantung warna gambar) */}
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          src={image || "https://images.unsplash.com/photo-1621619856624-42fd193a0661?q=80&w=800&auto=format&fit=crop"} 
          alt={title}
          className="w-full h-full object-cover mix-blend-multiply" 
          loading="lazy"
        />
      </div>

      {/* Konten Teks */}
      <div className="flex flex-col gap-1">
        <div className="flex gap-2 flex-wrap mb-1">
          {categories.map((cat, i) => (
            <Badge key={i}>{cat}</Badge>
          ))}
        </div>
        <h3 className="font-serif font-bold text-2xl group-hover:text-vintage-red transition-colors">{title}</h3>
        <p className="text-vintage-gray text-sm uppercase tracking-widest font-semibold">{client}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

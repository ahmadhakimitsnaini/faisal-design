import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 uppercase tracking-wider text-sm font-bold transition-colors inline-flex items-center justify-center";
  const variants = {
    primary: "bg-vintage-red text-vintage-cream hover:bg-vintage-black",
    secondary: "bg-transparent border-2 border-vintage-black text-vintage-black hover:bg-vintage-black hover:text-vintage-cream"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;

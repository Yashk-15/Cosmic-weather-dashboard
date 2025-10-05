import { motion } from "framer-motion";
import "../App.css";

export default function AnimatedBackground({ condition }) {
  const getClassName = () => {
    if (condition.includes("cloud")) return "cloudy background";
    if (condition.includes("rain")) return "rain background";
    if (condition.includes("clear")) return "clear-sky background";
    return "clear-sky background"; // default fallback
  };

  return (
    <motion.div
      className={getClassName()}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
}

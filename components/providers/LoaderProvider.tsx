"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Loader from "@/components/ui/loader";

export default function LoaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: loading ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { categories } from "@/assets/assets";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

const Collections = () => {
  // to navigate user
  const navigate = useNavigate();

  // refs for heading and category grid
  const gridRef = useRef(null);
  const headingRef = useRef(null);

  // Animation triggers
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isGridInView = useInView(gridRef, { once: true, amount: 0.2 });

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      <motion.h2
        ref={headingRef}
        initial={{ opacity: 0, y: 30 }}
        animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-bold mb-6 bg-red-50 border border-red-100 w-max px-4 py-2 rounded-xl p-8 shadow-sm"
      >
        🌟 Explore Our <span className="text-red-600">Collections</span>
      </motion.h2>

      {/* Mapping Categories */}
      <div
        ref={gridRef}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
      >
        {categories.slice(0, 6).map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            animate={
              isGridInView
                ? {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }
                : {}
            }
            transition={{
              duration: 0.6,
              delay: isGridInView ? index * 0.15 : 0,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            {/* Individual category */}
            <Card
              className="group cursor-pointer border-none shadow-lg hover:shadow-xl transition duration-300 ease-in-out rounded-2xl"
              onClick={() => {
                navigate(`/products/${category.path.toLowerCase()}`);
                scrollTo(0, 0);
              }}
              style={{ backgroundColor: category.bgColor }}
            >
              <CardContent className="flex flex-col items-center justify-center py-6">
                <motion.img
                  src={category.image}
                  alt={category.text}
                  className="w-24 h-24 object-contain"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </CardContent>
              <CardFooter className="text-center">
                <motion.p
                  className="text-md font-semibold text-gray-800 group-hover:text-black"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {category.text}
                </motion.p>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
      <Separator className="my-8" />
    </div>
  );
};

export default Collections;

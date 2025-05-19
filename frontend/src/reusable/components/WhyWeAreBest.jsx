import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Truck, RefreshCcw, Award, HandCoins } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const WhyWeAreBest = () => {
  // Refs for scroll animations
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const trustRef = useRef(null);

  // Check if elements are in view
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.5 });
  const isFeaturesInView = useInView(featuresRef, { once: true, amount: 0.2 });
  const isTrustInView = useInView(trustRef, { once: true, amount: 0.5 });

  // Get scroll progress for parallax effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const features = [
    {
      icon: Truck,
      title: "Fastest Delivery",
      description:
        "Get your products delivered within 24-48 hours, no matter where you are.",
    },
    {
      icon: RefreshCcw,
      title: "Easy Returns & Exchange",
      description: "Hassle-free 30-day return policy with no questions asked.",
    },
    {
      icon: HandCoins,
      title: "Affordable Prices",
      description:
        "Premium quality products at prices that won't break the bank.",
    },
    {
      icon: Award,
      title: "Trusted by Thousands",
      description:
        "Join our community of 50,000+ satisfied customers nationwide.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{ y: backgroundY }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header with animated elements */}
        <motion.div
          ref={headingRef}
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeadingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <motion.div
              className="h-1 w-12 bg-red-600 rounded"
              initial={{ width: 0 }}
              animate={isHeadingInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Why We're the <span className="text-red-600">Best</span>
            </h2>
            <motion.div1
              className="h-1 w-12 bg-red-600 rounded"
              initial={{ width: 0 }}
              animate={isHeadingInView ? { width: 48 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          <motion.p
            className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isHeadingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We pride ourselves on delivering exceptional service and value to
            all our customers. Here's what sets us apart from the competition.
          </motion.p>
        </motion.div>

        {/* Features grid with staggered animations */}
        <div
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={
                isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
              }
              transition={{
                duration: 0.6,
                delay: isFeaturesInView ? index * 0.2 : 0,
                ease: "easeOut",
              }}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full border-red-100 rounded-lg bg-red-50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-6">
                  <motion.div
                    className="mb-5 flex justify-center"
                    initial={{ scale: 0.8 }}
                    animate={isFeaturesInView ? { scale: 1 } : { scale: 0.8 }}
                    transition={{
                      duration: 0.5,
                      delay: isFeaturesInView ? 0.2 + index * 0.2 : 0,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                      <feature.icon size={32} strokeWidth={1.5} />
                    </div>
                  </motion.div>

                  <motion.h3
                    className="text-xl font-semibold text-red-900 text-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: isFeaturesInView ? 0.4 + index * 0.2 : 0,
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-red-700/70 text-center"
                    initial={{ opacity: 0 }}
                    animate={isFeaturesInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: isFeaturesInView ? 0.6 + index * 0.2 : 0,
                    }}
                  >
                    {feature.description}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators with scroll animations */}
        <motion.div
          ref={trustRef}
          className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-red-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isTrustInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={
              isTrustInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold">24/7</span>
            </div>
            <span className="font-medium">Customer Support</span>
          </motion.div>

          <div className="h-8 w-px bg-red-200 hidden md:block"></div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={
              isTrustInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold">100%</span>
            </div>
            <span className="font-medium">Secure Payment</span>
          </motion.div>

          <div className="h-8 w-px bg-red-200 hidden md:block"></div>

          <motion.div
            className="flex items-center gap-2"
            initial={{ x: -20, opacity: 0 }}
            animate={
              isTrustInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }
            }
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <span className="text-red-600 font-bold">4.9</span>
            </div>
            <span className="font-medium">Customer Rating</span>
          </motion.div>
        </motion.div>
      </div>
      <Separator className="my-10"/>
    </section>
  );
};

export default WhyWeAreBest;

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const NewsletterSection = () => {
  // Form state
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formState, setFormState] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  // Refs for scroll animations
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const decorationRef = useRef(null);

  // Check if elements are in view
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isFormInView = useInView(formRef, { once: true, amount: 0.5 });
  const isDecorationInView = useInView(decorationRef, {
    once: true,
    amount: 0.5,
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setFormState("error");
      setErrorMessage("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setFormState("success");
      setIsSubmitting(false);
      setEmail("");
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      className="py-8 px-6 md:px-16 lg:px-24 xl:px-32 relative overflow-hidden "
    >
      <div className="w-full max-w-9xl mx-auto bg-red-50 border border-red-100 rounded-lg p-32">
        <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left side content */}
          <motion.div
            className="md:col-span-2"
            ref={decorationRef}
            initial={{ opacity: 0, x: -50 }}
            animate={
              isDecorationInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-48 h-48 rounded-full bg-red-200 opacity-70"
                  initial={{ scale: 0 }}
                  animate={isDecorationInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
              <div className="relative flex justify-center">
                <motion.div
                  className="w-32 h-32 rounded-full bg-red-600 flex items-center justify-center text-white"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={
                    isDecorationInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -20 }
                  }
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <Mail size={64} strokeWidth={1} />
                </motion.div>
              </div>
            </div>

            <motion.div
              className="mt-8 text-center md:text-left"
              initial={{ opacity: 0 }}
              animate={isDecorationInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <h4 className="text-xl font-semibold text-red-900">
                Stay Updated
              </h4>
              <p className="text-gray-500 mt-2">
                Get exclusive offers, new arrivals, and insider-only discounts
                directly to your inbox.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side form */}
          <motion.div
            className="md:col-span-3"
            ref={formRef}
            initial={{ opacity: 0, y: 30 }}
            animate={
              isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
            }
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-6 md:p-14 border-red-100 shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-2">
                  Subscribe to Our Newsletter
                </h3>
                <div className="h-1 w-16 bg-red-600 rounded mb-4"></div>
                <p className="text-red-700/80 mb-6">
                  Join MegaMart newsletter and be the first to know about new
                  collections, special offers, and exclusive events.
                </p>
              </motion.div>

              {formState === "success" ? (
                <motion.div
                  className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 text-green-800"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="text-green-600" size={24} />
                  <p>
                    Thank you for subscribing! Check your email for
                    confirmation.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-red-800 mb-1"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`pl-10 border-red-200 focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50 ${
                            formState === "error" ? "border-red-500" : ""
                          }`}
                          disabled={isSubmitting}
                          required
                        />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail size={16} className="text-red-400" />
                        </div>
                      </div>
                      {formState === "error" && (
                        <motion.p
                          className="mt-1 text-sm text-red-600 flex items-center gap-1"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AlertCircle size={14} /> {errorMessage}
                        </motion.p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md transition-all duration-200 flex items-center justify-center gap-2"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Subscribing...</span>
                          </>
                        ) : (
                          <>
                            <span>Subscribe Now</span>
                            <Send size={16} />
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
              )}

              <motion.p
                className="mt-4 text-sm text-gray-500 text-center"
                initial={{ opacity: 0 }}
                animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                By subscribing, you agree to our Privacy Policy and consent to
                receive updates from our company.
              </motion.p>

              <motion.div
                className="mt-6 flex items-center justify-center gap-4"
                initial={{ opacity: 0 }}
                animate={isFormInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <div className="flex flex-col items-center">
                  <span className="text-red-900 font-bold text-xl">10k+</span>
                  <span className="text-base text-gray-500 ">Subscribers</span>
                </div>
                <div className="h-8 w-px bg-red-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-red-900 font-bold text-xl">Weekly</span>
                  <span className="text-base text-gray-500 ">Updates</span>
                </div>
                <div className="h-8 w-px bg-red-200"></div>
                <div className="flex flex-col items-center">
                  <span className="text-red-900 font-bold text-xl">15%</span>
                  <span className="text-base text-gray-500 ">First Order</span>
                </div>
              </motion.div>
            </Card>
          </motion.div>
        </div>
      </div>
      <Separator className="my-10"/>
    </section>
  );
};

export default NewsletterSection;

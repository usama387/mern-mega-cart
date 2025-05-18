import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  CreditCard,
  Truck,
  ShieldCheck,
  Heart,
} from "lucide-react";

const Footer = () => {
  // Refs for scroll animations
  const footerRef = useRef(null);
  const isFooterInView = useInView(footerRef, { once: true, amount: 0.1 });

  // Current year for copyright
  const currentYear = new Date().getFullYear();

  // Footer navigation links
  const footerLinks = {
    shop: [
      { name: "All Products", href: "/products" },
      { name: "Deals & Offers", href: "#" },
      { name: "New Arrivals", href: "#" },
      { name: "Best Sellers", href: "#" },
      { name: "Trending Now", href: "#" },
    ],
    categories: [
      { name: "Electronics", href: "#" },
      { name: "Fashion", href: "#" },
      { name: "Home & Kitchen", href: "#" },
      { name: "Beauty & Personal Care", href: "#" },
      { name: "Sports & Outdoors", href: "#" },
    ],
    customerService: [
      { name: "My Account", href: "#" },
      { name: "Track Order", href: "#" },
      { name: "Returns & Exchanges", href: "#" },
      { name: "Shipping Policy", href: "#" },
      { name: "FAQ", href: "#" },
    ],
  };

  // Payment methods
  const paymentMethods = [
    "Visa",
    "Mastercard",
    "American Express",
    "PayPal",
    "Apple Pay",
    "Google Pay",
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-red-600 text-white pt-16 pb-8 relative overflow-hidden mx-2 mt-20 mb-2 rounded-lg"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-5 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-5 translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Top section with logo and newsletter mini-form */}
        <motion.div
          className="grid md:grid-cols-2 gap-8 pb-12 border-b border-white/20"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.6 }}
        >
          {/* Logo and tagline */}
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <h2 className="text-red-600 font-bold text-2xl">MegaMart</h2>
              </div>
            </div>
            <p className="mt-4 text-red-100/80 max-w-md">
              Your one-stop destination for all your shopping needs. Quality
              products, affordable prices, and exceptional service.
            </p>

            {/* Trust badges */}
            <div className="mt-6 flex flex-wrap gap-6">
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Truck size={20} className="text-white" />
                </div>
                <span className="text-sm text-red-100">Fast Delivery</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <span className="text-sm text-red-100">Secure Payment</span>
              </motion.div>

              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                  <Heart size={20} className="text-white" />
                </div>
                <span className="text-sm text-red-100">Quality Products</span>
              </motion.div>
            </div>
          </div>

          {/* Mini newsletter */}
          <div className="md:ml-auto md:max-w-sm">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <p className="text-red-100/80 mb-4">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 py-2 px-4 rounded-l-md text-gray-800 text-sm focus:outline-none"
              />
              <motion.button
                className="bg-red-600 hover:bg-red-500 py-2 px-4 rounded-r-md text-white text-sm font-medium"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </div>

            {/* Social media */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">Follow Us</h4>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Youtube, label: "YouTube" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    aria-label={`Follow us on ${social.label}`}
                    className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20"
                    whileHover={{ y: -3 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isFooterInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <social.icon size={18} className="text-red-100" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main footer links section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12 border-b border-white/20">
          {/* Shop links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white flex items-center gap-1"
                  >
                    <ChevronRight size={14} />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {footerLinks.categories.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white flex items-center gap-1"
                  >
                    <ChevronRight size={14} />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Customer Service */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              {footerLinks.customerService.map((link, index) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white flex items-center gap-1"
                  >
                    <ChevronRight size={14} />
                    <span>{link.name}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={
              isFooterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
            }
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-white mt-0.5 flex-shrink-0" />
                <span className="text-white/80">
                  Precint 31, Bahria Town,Karachi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-white flex-shrink-0" />
                <span className="text-white/80">+923193507558</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white flex-shrink-0" />
                <span className="text-white/80">usamarazaaq3@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-white flex-shrink-0" />
                <span className="text-white/80">Mon-Sat: 9AM - 9PM</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section with payment methods and copyright */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Payment methods */}
            <motion.div
              className="order-2 md:order-1"
              initial={{ opacity: 0 }}
              animate={isFooterInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm text-red-100/70">We Accept:</span>
                <div className="flex gap-2">
                  <div className="bg-white/10 rounded px-2 py-1">
                    <CreditCard size={20} className="text-white" />
                  </div>
                  {paymentMethods.map((method, index) => (
                    <div key={method} className="bg-white/10 rounded px-2 py-1">
                      <span className="text-xs text-white">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Copyright */}
            <motion.div
              className="order-1 md:order-2 text-center md:text-right"
              initial={{ opacity: 0 }}
              animate={isFooterInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <p className="text-sm text-white/70">
                &copy; {currentYear} MegaMart. All rights reserved.
              </p>
              <div className="flex justify-center md:justify-end gap-4 mt-2">
                <a href="#" className="text-xs text-white/70 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-xs text-white/70 hover:text-white">
                  Terms of Service
                </a>
                <a href="#" className="text-xs text-white/70 hover:text-white">
                  Sitemap
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

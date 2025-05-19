import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { assets } from "@/assets/assets";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/cartSlice";
import { toast } from "sonner";

const ProductCard = ({ product, index }) => {
  // hook to navigate user
  const navigate = useNavigate();

  // to update state in reducer
  const dispatch = useDispatch();

  // refs for animation
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  // to access cart items that hold product id and quantity
  const cartItems = useSelector((state) => state.cart?.items || {});

// function to add a product in cart
  const handleAddToCart = () => {
    if (!product?._id) {
      toast.error("Product ID missing");
      return;
    }
    dispatch(addToCart(product._id));
    toast.success("Added to Cart");
  };

  // function to remove a product from cart
  const handleRemoveItem = () => {
    if (!product?._id) return;
    dispatch(removeFromCart(product._id));
    toast.success("Removed from Cart");
  };

  return (
    product && (
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: "easeOut",
                },
              }
            : {}
        }
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Card className="border border-red-100 rounded-lg p-4 bg-red-50 w-64 transition-shadow hover:shadow-lg">
          <motion.div
            className="group cursor-pointer flex items-center justify-center mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <motion.img
              className="max-h-40 object-contain"
              src={product.image[0]}
              alt={product.name}
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <motion.p
              className="text-gray-500 text-sm"
              initial={{ x: -10 }}
              animate={isInView ? { x: 0 } : {}}
            >
              {product.category}
            </motion.p>

            <motion.h3
              className="text-gray-800 font-semibold truncate"
              initial={{ x: 10 }}
              animate={isInView ? { x: 0 } : {}}
            >
              {product.name}
            </motion.h3>

            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              {Array(5)
                .fill("")
                .map((_, i) => (
                  <img
                    key={i}
                    className="md:w-3.5 w-3"
                    src={i < 4 ? assets.star_icon : assets.star_dull_icon}
                  />
                ))}
              <span className="text-gray-500 text-sm">(4)</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-between pt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: index * 0.1 + 0.4 }}
            >
              <div className="space-y-1">
                <motion.p
                  className="text-red-600 font-bold text-xl"
                  initial={{ scale: 0.9 }}
                  animate={isInView ? { scale: 1 } : {}}
                >
                  {product.offerPrice} PKR
                </motion.p>
                <p className="text-gray-500 text-sm line-through">
                  {product.price} PKR
                </p>
              </div>

              {!cartItems[product._id] ? (
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.1 }}
                >
                  <Button
                    variant="default"
                    className="bg-red-600 hover:bg-red-700 text-white gap-2 transition duration-300 hover:scale-105"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag />
                    Add
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  className="flex items-center gap-3 bg-red-100 px-3 py-1 rounded-full"
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                >
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-200 h-6 w-6 p-0 rounded-full"
                      onClick={handleRemoveItem}
                    >
                      -
                    </Button>
                  </motion.div>
                  <span className="text-red-600 font-medium">
                    {cartItems[product._id]}
                  </span>
                  <motion.div whileTap={{ scale: 0.8 }}>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-600 hover:bg-red-200 h-6 w-6 p-0 rounded-full"
                      onClick={handleAddToCart}
                    >
                      +
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </Card>
      </motion.div>
    )
  );
};

export default ProductCard;

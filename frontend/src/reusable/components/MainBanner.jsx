import { ShoppingBag, TrendingUp, Truck, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const MainBanner = () => {
  // Array of carousel images
  const carouselImages = [
    {
      src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
      alt: "Woman shopping with red bag",
    },
    {
      src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1931&auto=format&fit=crop",
      alt: "Headphones and accessories",
    },
    {
      src: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      alt: "Colorful shopping bags",
    },
    {
      src: "https://images.unsplash.com/photo-1591085686350-798c0f9faa7f?q=80&w=2031&auto=format&fit=crop",
      alt: "Red shoes and accessories",
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      <section className="w-full py-12 md:py-24 lg:py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            {/* LEFT SIDE CONTENT */}
            <div className="flex flex-col justify-center space-y-6 bg-red-50 border border-red-100 rounded-2xl p-8 shadow-sm">
              <Badge
                variant="outline"
                className="w-fit bg-red-100 text-red-700 border-red-200 hover:bg-red-200 text-sm px-3 py-1"
              >
                New Season Collection
              </Badge>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl leading-tight">
                Shop Smarter, <span className="text-red-600">Live Better</span>
              </h1>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Discover thousands of products with fast shipping and secure
                payments. Your one-stop destination for all your shopping needs.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-lg px-6 py-4 transition duration-300 hover:scale-105"
                >
                  Shop Now
                  <ShoppingBag className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-red-200 text-red-600 hover:bg-red-50 text-lg px-6 py-4 transition duration-300 hover:scale-105"
                >
                  View Collections
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-semibold">Free Shipping</span>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-semibold">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-red-600" />
                  <span className="text-sm font-semibold">Best Deals</span>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE IMAGE - Now a carousel */}
            <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-red-50 to-red-100 p-6 shadow-xl">
              <Carousel className="w-full h-full" opts={{ loop: true }}>
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative h-full w-full flex items-center justify-center">
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-xl mb-8"
                        />
                        <div className="absolute bottom-4 right-4 rounded-lg bg-white/90 p-2 backdrop-blur-sm shadow">
                          <Badge className="bg-red-600 hover:bg-red-700 text-white">
                            30% OFF
                          </Badge>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainBanner;

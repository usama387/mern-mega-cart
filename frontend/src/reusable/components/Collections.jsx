import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { categories } from "@/assets/assets";
import { useAppContext } from "@/context/AppContext";
import { Separator } from "@/components/ui/separator";

const Collections = () => {
  const { navigate } = useAppContext();

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-red-50 border border-red-100 w-max px-4 py-2 rounded-xl p-8 shadow-sm">
        🌟 Explore Our <span className="text-red-600">Collections</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {categories.map((category, index) => (
          <Card
            key={index}
            className="group cursor-pointer border-none shadow-lg hover:shadow-xl transition duration-300 ease-in-out rounded-2xl"
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`);
              scrollTo(0, 0);
            }}
            style={{ backgroundColor: category.bgColor }}
          >
            <CardContent className="flex flex-col items-center justify-center py-6">
              <img
                src={category.image}
                alt={category.text}
                className="w-24 h-24 object-contain group-hover:scale-110 transition-transform duration-200"
              />
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-md font-semibold text-gray-800 roup-hover:text-black">
                {category.text}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
      <Separator className="my-8"/>
    </div>
  );
};

export default Collections;

import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div name="pricing" className="w-full h-fit text-white bg-gray-900">
      <div className="flex flex-col items-center justify-center max-w-screen-xl mx-auto h-full px-3 py-12">
        <div className="px-4 py-12 text-center">
          <h2 className="text-5xl font-bold ">Pricing</h2>
          <p className="text-xl py-8 text-gray-500 text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            sint cupiditate, debitis qui unde quia laudantium magni ab nobis
            voluptatibus dolores quasi quae ipsum tempora ipsam perferendis
            necessitatibus dicta sequi nemo aspernatur iste a molestiae porro
            voluptatem. Minima adipisci quia, placeat iusto facilis ea, ratione
            id consequatur quidem totam ducimus? loew
          </p>
        </div>
        <div className="grid md:grid-cols-2">
          {/** pricing card */}
          <PricingCard
            priceCategory="hobby"
            dolar="55"
            feature={[
              { id: 1, title: "Feature One" },
              { id: 2, title: "Feature Two" },
              { id: 3, title: "Feature three" },
            ]}
          />
          <PricingCard
            priceCategory="hobby"
            dolar="55"
            feature={[
              { id: 1, title: "+ Feature One" },
              { id: 2, title: "+ Feature Two" },
              { id: 3, title: "+ Feature three" },
            ]}
          />
          {/** pricing card ends */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

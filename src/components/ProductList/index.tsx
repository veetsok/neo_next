import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { dataHeadphones } from "@/assets/bd";
import ProductCard from "../ProductCard";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const renderProductSection = (title: string, variant: number) => (
    <div className="flex flex-col gap-[23.89px]">
      <TextAtom
        type={TextAtomEnum.enum_h2}
        className="text-accent-gray font-semibold"
      >
        {title}
      </TextAtom>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {dataHeadphones
          .filter((e) => e.variant === variant)
          .map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              old={product.old}
              rate={product.rate}
            />
          ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-[28.35px]">
      {renderProductSection("Наушники", 1)}
      {renderProductSection("Беспроводные наушники", 2)}
    </div>
  );
};

export default React.memo(ProductList);

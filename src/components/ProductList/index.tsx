import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { dataHeadphones } from "@/assets/bd";
import ProductCard from "../ProductCard";

interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  const renderProductSection = (title: string, variant: number) => (
    <>
      <TextAtom type={TextAtomEnum.enum_h2}>{title}</TextAtom>
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
    </>
  );

  return (
    <>
      {renderProductSection("Наушники", 1)}
      {renderProductSection("Беспроводные наушники", 2)}
    </>
  );
};

export default React.memo(ProductList);

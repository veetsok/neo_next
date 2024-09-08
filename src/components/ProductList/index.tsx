import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { dataHeadphones } from "@/assets/bd";
import ProductCard from "../ProductCard";
interface ProductListProps {}

const ProductList: React.FC<ProductListProps> = () => {
  return (
    <>
      <TextAtom type={TextAtomEnum.enum_h2}>Наушники</TextAtom>
      {dataHeadphones.map((e, index) => (
        <ProductCard
          key={index}
          image={e.image}
          title={e.title}
          price={e.price}
          old={e.old}
          rate={e.rate}
          variant={e.variant}
        />
      ))}
      <TextAtom type={TextAtomEnum.enum_h2}>Беспроводные наушники</TextAtom>
    </>
  );
};

export default React.memo(ProductList);

import { dataHeadphones } from "@/assets/bd";
import ProductCard from "@/components/items/product-card";
import TextAtom from "@/components/ui/Atoms/Text.Atom";
import TextAtomEnum from "@/components/ui/Atoms/Text.Atom/enum";

export default function Home() {
  const renderProductSection = (title: string, variant: number) => {
    const products = dataHeadphones.reduce((acc, product, index) => {
      if (product.variant === variant) {
        acc.push(
          <ProductCard
            key={index}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            old={product.old}
            rate={product.rate}
          />
        );
      }
      return acc;
    }, [] as JSX.Element[]);

    return (
      <div className="flex flex-col gap-[23.89px]">
        <TextAtom
          type={TextAtomEnum.enum_h2}
          className="text-accent-gray font-semibold"
        >
          {title}
        </TextAtom>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {products}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-[28.35px] mt-7">
      {renderProductSection("Наушники", 1)}
      {renderProductSection("Беспроводные наушники", 2)}
    </div>
  );
}

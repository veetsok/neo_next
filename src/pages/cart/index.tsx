import ProductCart from "@/components/items/product-cart";
import ButtonAtom from "@/components/ui/Atoms/Button.Atom";
import ButtonAtomEnum from "@/components/ui/Atoms/Button.Atom/enum";
import TextAtom from "@/components/ui/Atoms/Text.Atom";
import TextAtomEnum from "@/components/ui/Atoms/Text.Atom/enum";
import useCartStore from "@/lib/store/localstorage/useCartStore";
import React from "react";

interface CartProps {}

const Cart: React.FC<CartProps> = () => {
  const { items, total } = useCartStore();

  return (
    <div className="flex flex-col gap-[13px]">
      <TextAtom type={TextAtomEnum.enum_h2}>Корзина</TextAtom>
      <div className="flex">
        <div className="flex flex-col gap-5 overflow-y-auto w-full max-h-[694px]">
          {items?.map((e, index: number) => (
            <ProductCart key={index} {...e} />
          ))}
        </div>
        <div className="flex flex-col bg-white-background rounded-[30px] w-full max-w-[350px] shadow-card-box font-semibold">
          <div className="flex justify-between pt-[21px] pb-[15px] px-[17px] uppercase">
            <TextAtom type={TextAtomEnum.enum_h4}>ИТОГО</TextAtom>
            <TextAtom type={TextAtomEnum.enum_h4}>₽ {total}</TextAtom>
          </div>
          <ButtonAtom
            type={ButtonAtomEnum.enum_defaultButton}
            className="py-5 px-[13px] bg-accent-black text-white-background rounded-[20px]"
          >
            <TextAtom type={TextAtomEnum.enum_h3}>
              Перейти к оформлению
            </TextAtom>
          </ButtonAtom>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cart);

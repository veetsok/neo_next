import React, { useCallback } from "react";
import { THeadphones } from "@/lib/types";
import Image from "next/image";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import StarIcon from "@/assets/icons/star.svg?react";
import useCartStore from "@/lib/store/localstorage/useCartStore";
import ButtonAtom from "../ui/Atoms/Button.Atom";
import ButtonAtomEnum from "../ui/Atoms/Button.Atom/enum";

interface ProductCardProps extends Partial<THeadphones> {
  id: number;
}

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { id, title, price, image, old, rate, variant } = props;

  const { addItem } = useCartStore();

  const handleAddToCart = useCallback(() => {
    const newItem = {
      id: id,
      title: title ?? "",
      price: price ?? 0,
      image: image ?? "",
      old: old ?? 0,
      rate: rate ?? 0,
      variant: variant ?? 1,
      quantity: 1,
      sum: price ? price * 1 : 0,
      isSelected: false,
    };

    addItem(newItem);
  }, [addItem, id, title, price, image, old, rate, variant]);

  return (
    <div
      className="flex flex-col bg-white-background max-w-[382px] max-h-[428px] py-[32px] px-[21px] rounded-[30px] transition-all duration-300 hover:scale-[1.05]
     font-semibold w-full h-full justify-between shadow-card-box"
    >
      {image && title && (
        <Image
          src={`/images/${image}`}
          alt={title}
          width={300}
          height={300}
          className="w-[219.61px] h-[237.07px] my-0 mx-auto"
        />
      )}
      <div className="flex justify-between h-[45px]">
        <TextAtom type={TextAtomEnum.enum_h4} className="text-accent-blue">
          {title}
        </TextAtom>
        <div className="flex flex-col text-accent-orange">
          <TextAtom type={TextAtomEnum.enum_h4}>{price} ₽</TextAtom>
          {old && (
            <TextAtom
              type={TextAtomEnum.enum_h4}
              className="line-through font-light text-light-orange"
            >
              {old} ₽
            </TextAtom>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex items-start gap-[10px]">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<StarIcon />}
            className="fill-light-orange w-[23.3px] h-[21.93px]"
          />
          <TextAtom type={TextAtomEnum.enum_h4} className="text-light-gray">
            {rate}
          </TextAtom>
        </div>
        <ButtonAtom
          type={ButtonAtomEnum.enum_defaultButton}
          onClick={handleAddToCart}
          className="hover:text-accent-orange"
        >
          <TextAtom type={TextAtomEnum.enum_h4}>Купить</TextAtom>
        </ButtonAtom>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);

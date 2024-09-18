import React, { useCallback } from "react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import TrashIcon from "@/assets/icons/trash.svg?react";
import { CartStoreItems } from "@/lib/types";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import Image from "next/image";
import useCartStore from "@/lib/store/localstorage/useCartStore";
import IncreaseIcon from "@/assets/icons/increase.svg?react";
import DecreaseIcon from "@/assets/icons/decrease.svg?react";

interface ProductCartProps extends Partial<CartStoreItems> {}

const ProductCart: React.FC<ProductCartProps> = (props) => {
  const { image, title, price, id, quantity, sum } = props;

  const { removeItem, increaseQuantity, decreaseQuantity } = useCartStore();

  const handleRemoveItem = useCallback(() => {
    if (id !== undefined) {
      removeItem(id);
    }
  }, [id, removeItem]);

  // Обработчик для увеличения количества
  const handleIncreaseQuantity = useCallback(() => {
    if (id !== undefined) {
      increaseQuantity(id);
    }
  }, [id, increaseQuantity]);

  // Обработчик для уменьшения количества
  const handleDecreaseQuantity = useCallback(() => {
    if (id !== undefined) {
      decreaseQuantity(id);
    }
  }, [id, decreaseQuantity]);

  return (
    <div
      className="flex flex-col bg-white-background rounded-[30px]
     pt-[18px] pb-[15px] pr-[28px] pl-[18px]
     relative w-full max-w-[633px]"
    >
      <div className="flex items-center gap-[23.44px]">
        <div className="flex flex-col gap-[19px]">
          {image && title && (
            <Image
              src={`/images/${image}`}
              alt={title}
              width={300}
              height={300}
              className="w-[146.53px] h-[136px]"
            />
          )}
          <div className="flex items-center gap-[25px]">
            <ImageAtom
              className="fill-white bg-accent-orange w-[30px] h-[30px] rounded-full cursor-pointer items-center justify-center"
              type={ImageAtomEnum.enum_defaultSvg}
              icon={<DecreaseIcon />}
              onClick={handleDecreaseQuantity}
            />
            <TextAtom type={TextAtomEnum.enum_h3}>{quantity}</TextAtom>
            <ImageAtom
              className="fill-white bg-accent-orange w-[30px] h-[30px] rounded-full cursor-pointer items-center justify-center"
              type={ImageAtomEnum.enum_defaultSvg}
              icon={<IncreaseIcon />}
              onClick={handleIncreaseQuantity}
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <TextAtom type={TextAtomEnum.enum_h3}>{title}</TextAtom>
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="text-light-gray font-semibold"
          >
            {price?.toLocaleString()} ₽
          </TextAtom>
        </div>
      </div>
      <ImageAtom
        type={ImageAtomEnum.enum_defaultSvg}
        icon={<TrashIcon />}
        onClick={handleRemoveItem}
        className="absolute top-[18px] right-[28px] cursor-pointer"
      />
      <TextAtom
        type={TextAtomEnum.enum_h4}
        className="text-accent-blue font-semibold absolute bottom-[21px] right-[28px]"
      >
        {sum?.toLocaleString()} ₽
      </TextAtom>
    </div>
  );
};

export default React.memo(ProductCart);

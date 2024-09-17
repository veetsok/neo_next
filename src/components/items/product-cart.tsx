import React from "react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import TrashIcon from "@/assets/icons/trash.svg?react";
import { CartStoreItems } from "@/lib/types";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import Image from "next/image";

interface ProductCartProps extends Partial<CartStoreItems> {}

const ProductCart: React.FC<ProductCartProps> = (props) => {
  const { image, title, price } = props;

  return (
    <div
      className="flex flex-col bg-white-background rounded-[30px]
     pt-[18px] pb-[15px] pr-[28px] pl-[18px]
     relative w-full max-w-[633px]"
    >
      <div className="flex items-center gap-[23.44px]">
        {image && title && (
          <Image
            src={`/images/${image}`}
            alt={title}
            width={300}
            height={300}
            className="w-[219.61px] h-[237.07px] my-0 mx-auto"
          />
        )}
        <div className="flex flex-col gap-3">
          <TextAtom type={TextAtomEnum.enum_h3}>{title}</TextAtom>
          <TextAtom type={TextAtomEnum.enum_h4}>{price} ₽</TextAtom>
        </div>
      </div>
      <ImageAtom
        type={ImageAtomEnum.enum_defaultSvg}
        icon={<TrashIcon />}
        className="absolute top-0 right-0"
      />
    </div>
  );
};

export default React.memo(ProductCart);

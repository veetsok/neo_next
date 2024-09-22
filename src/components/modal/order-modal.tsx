import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { CartStore, CartStoreItems } from "@/lib/types";

interface OrderModalProps extends Partial<CartStore & CartStoreItems> {}

const OrderModal: React.FC<OrderModalProps> = (props) => {
  const { title, quantity, sum, total } = props;

  return (
    <>
      <TextAtom type={TextAtomEnum.enum_h2} className="text-accent-blue">
        Спасибо за заказ
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        {title}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        {quantity}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        {sum}
      </TextAtom>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        {total}
      </TextAtom>
    </>
  );
};

export default React.memo(OrderModal);

import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { CreateOrderResult } from "@/lib/types";

interface OrderModalProps extends Partial<CreateOrderResult> {}

const OrderModal: React.FC<OrderModalProps> = ({ selectedItems, total }) => {
  return (
    <div className="flex flex-col">
      <TextAtom type={TextAtomEnum.enum_h1} className="text-accent-blue">
        Спасибо за заказ
      </TextAtom>
      {selectedItems?.map((item) => (
        <div key={item.id} className="flex justify-between">
          <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
            {item.title} (x{item.quantity})
          </TextAtom>
          <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
            {item.sum} ₽
          </TextAtom>
        </div>
      ))}
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        Общая сумма: {total} ₽
      </TextAtom>
    </div>
  );
};

export default React.memo(OrderModal);

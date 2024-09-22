import React from "react";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import { CreateOrderResult } from "@/lib/types";

interface OrderModalProps extends Partial<CreateOrderResult> {}

const OrderModal: React.FC<OrderModalProps> = ({ selectedItems, total }) => {
  return (
    <div className="flex flex-col w-full gap-7">
      <TextAtom type={TextAtomEnum.enum_h1} className="text-accent-blue">
        Спасибо за заказ
      </TextAtom>
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-6 gap-4 items-center">
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="text-accent-blue col-span-4"
          >
            Наименование товара
          </TextAtom>
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="text-accent-blue col-span-1"
          >
            Количество
          </TextAtom>
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="text-accent-blue col-span-1 text-right"
          >
            Сумма
          </TextAtom>
        </div>

        {selectedItems?.map((item) => (
          <div className="grid grid-cols-6 gap-4 items-center" key={item.id}>
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className="text-accent-blue col-span-4"
            >
              {item.title}
            </TextAtom>
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className="text-accent-blue col-span-1"
            >
              x{item.quantity}
            </TextAtom>
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className="text-accent-blue col-span-1 text-right"
            >
              {item.sum} ₽
            </TextAtom>
          </div>
        ))}
      </div>
      <TextAtom type={TextAtomEnum.enum_h3} className="text-accent-blue">
        Общая сумма: {total} ₽
      </TextAtom>
    </div>
  );
};

export default React.memo(OrderModal);

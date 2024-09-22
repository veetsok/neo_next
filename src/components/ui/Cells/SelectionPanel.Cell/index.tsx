import useCartStore from "@/lib/store/localstorage/useCartStore";
import React, { useCallback, useMemo } from "react";
import CheckBoxAtom, { CheckboxAtomEnum } from "../../Atoms/CheckBox.Atom";
import TextAtom from "../../Atoms/Text.Atom";
import TextAtomEnum from "../../Atoms/Text.Atom/enum";
import ButtonAtom from "../../Atoms/Button.Atom";
import ButtonAtomEnum from "../../Atoms/Button.Atom/enum";

interface SelectionPanelProps {}

const SelectionPanel: React.FC<SelectionPanelProps> = () => {
  const { items, clearCart, deselectAllItems, selectAllItems } = useCartStore();

  const handleSelectAll = useCallback(() => {
    const allSelected = items.every((item) => item.isSelected);
    if (allSelected) {
      deselectAllItems();
    } else {
      selectAllItems();
    }
  }, [items, selectAllItems, deselectAllItems]);

  const handleDeleteSelected = useCallback(() => {
    const selectedIds = items
      .filter((item) => item.isSelected)
      .map((item) => item.id);
    selectedIds.forEach(() => {
      clearCart();
    });
  }, [items, clearCart]);

  const selectAllChecked = useMemo(() => {
    return items.length > 0 && items.every((item) => item.isSelected);
  }, [items]);

  return (
    <div className="flex justify-between items-start rounded-lg border border-borderColor text-textColor bg-bgGen py-[30px]">
      <div onClick={handleSelectAll} className="flex gap-4 cursor-pointer">
        <CheckBoxAtom
          type={CheckboxAtomEnum.CHECKBOX}
          className="my-auto"
          checked={selectAllChecked}
          onChange={handleSelectAll}
        />
        <TextAtom
          type={TextAtomEnum.enum_h4}
          className="font-medium text-textColor"
        >
          Выбрать всё
        </TextAtom>
      </div>
      {selectAllChecked ? (
        <ButtonAtom
          onClick={handleDeleteSelected}
          type={ButtonAtomEnum.enum_defaultButton}
        >
          <TextAtom
            type={TextAtomEnum.enum_h4}
            className="font-semibold text-accent-blue"
          >
            Удалить всё
          </TextAtom>
        </ButtonAtom>
      ) : (
        ""
      )}
    </div>
  );
};

export default React.memo(SelectionPanel);

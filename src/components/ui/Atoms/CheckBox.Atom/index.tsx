import React, { useMemo } from "react";

export const checkboxStyle =
  "w-5 h-5 peer size-3.5 appearance-none rounded border border-accent-orange accent-[#b18262] dark:accent-bg_hover checked:appearance-auto cursor-pointer";

export const radioStyle =
  "w-6 h-6 peer appearance-none rounded-full border border-accent-orange accent-pink-500 dark:accent-bg_hover checked:appearance-auto cursor-pointer";

export enum CheckboxAtomEnum {
  CHECKBOX = "checkbox",
  RADIO = "radio",
}

export interface CheckBoxProps {
  checked?: boolean;
  onChange?: () => void;
  className?: string;
  type: CheckboxAtomEnum;
}

const CheckBox: React.FC<CheckBoxProps> = (props) => {
  const { checked, onChange, className, type } = props;
  useMemo(() => onChange, [onChange]);

  switch (type) {
    case CheckboxAtomEnum.CHECKBOX: {
      return (
        <input
          type={CheckboxAtomEnum.CHECKBOX}
          className={`${className ? className : ""}  ${checkboxStyle}`}
          checked={checked}
          onChange={onChange}
        />
      );
    }
    case CheckboxAtomEnum.RADIO: {
      return (
        <input
          type={CheckboxAtomEnum.RADIO}
          className={`${className ? className : ""}  ${radioStyle}`}
          checked={checked}
          onChange={onChange}
        />
      );
    }
    default: {
      return <h5 className="text-h5 text-red">Ошибка</h5>;
    }
  }
};

export default React.memo(CheckBox);

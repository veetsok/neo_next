import React, { MouseEvent, useCallback } from "react";
import ButtonAtomEnum from "./enum";
import { buttonStyles } from "./style";
import { ButtonAtomProps } from "./type";

const ButtonAtom: React.FC<ButtonAtomProps> = (props) => {
  const { children, className, onClick, type } = props;

  // if (isLoading) {
  //   return <SkeletonAtom />;
  // }
  const handleClick = useCallback(
    (
      e: MouseEvent<HTMLButtonElement>,
      onClick?: (event: MouseEvent<HTMLButtonElement>) => void
    ) => {
      e.stopPropagation();
      e.preventDefault();
      onClick?.(e);
    },
    []
  );

  switch (type) {
    case ButtonAtomEnum.enum_defaultButton: {
      return (
        <button
          onClick={(e) => handleClick(e, onClick)}
          className={`${className} ${buttonStyles}`}
        >
          {children}
        </button>
      );
    }

    default: {
      return (
        <button className="bg-red-700 rounded-md w-full py-3">Ошибка</button>
      );
    }
  }
};

export default React.memo(ButtonAtom);

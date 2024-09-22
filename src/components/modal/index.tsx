import { ICommonComponentProps } from "@/lib/common/ComponentProps";
import React from "react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import CloseIcon from "@/assets/icons/close.svg?react";

interface ModalBlockProps extends Partial<ICommonComponentProps> {}

const ModalBlock: React.FC<ModalBlockProps> = (props) => {
  const { onClose, children } = props;

  return (
    <div className="fixed inset-[0] z-[999] flex justify-center items-center">
      <div
        className="absolute inset-[0] z-[-1] bg-dark-background/60"
        onClick={onClose}
      ></div>
      <div
        className="mx-5 max-h-[calc(100vh-48px)] relative w-[40%] mx-5 p-6 rounded-[15px]
      bg-white-background"
      >
        <div className="flex justify-between items-center">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<CloseIcon />}
            onClick={onClose}
            className="fill-accent-gray w-5 h-5 cursor-pointer 
            absolute top-3 right-3 hover:fill-light-orange transition-all duration-500"
          />

          {children}
        </div>
      </div>
    </div>
  );
};

export default React.memo(ModalBlock);

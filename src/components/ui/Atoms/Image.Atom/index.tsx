import React from "react";
import ImageAtomEnum from "./enum";
import { ICommonComponentProps } from "@/lib/common/ComponentProps";

interface ImageAtomType extends Partial<ICommonComponentProps> {
  type: ImageAtomEnum;
}

const ImageAtom: React.FC<ImageAtomType> = (props) => {
  const { icon, type, isLoading, onClick, className } = props;

  // if (isLoading) return <SkeletonAtom />;

  switch (type) {
    case ImageAtomEnum.enum_defaultSvg: {
      return (
        <div
          className={`${className} flex justify-center align-center`}
          onClick={(e) => {
            e.stopPropagation();
            onClick?.(e);
          }}
        >
          {icon}
        </div>
      );
    }

    default: {
      return <div className="text-red">Ошибка</div>;
    }
  }
};

export default React.memo(ImageAtom);

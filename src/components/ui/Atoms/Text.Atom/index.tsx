import React from "react";
import TextAtomEnum from "./enum";
import { textStyles } from "./styled/styled";
import { ICommonComponentProps } from "@/lib/common/ComponentProps";

interface TextAtomProps extends Partial<ICommonComponentProps> {
  type: TextAtomEnum;
}

const TextAtom: React.FC<TextAtomProps> = (props) => {
  const { children, type, className, isLoading } = props;

  if (isLoading) return <>Loading...</>;

  switch (type) {
    case TextAtomEnum.enum_h1:
      return (
        <h1 className={`${className} ${textStyles} text-h1`}>{children}</h1>
      );
    case TextAtomEnum.enum_h2:
      return (
        <h2 className={`${className} ${textStyles} text-h2`}>{children}</h2>
      );
    case TextAtomEnum.enum_h3:
      return (
        <h3 className={`${className} ${textStyles} text-h3`}>{children}</h3>
      );
    case TextAtomEnum.enum_h4:
      return (
        <h4 className={`${className} ${textStyles} text-h4`}>{children}</h4>
      );
    case TextAtomEnum.enum_h5:
      return (
        <h5 className={`${className} ${textStyles} text-h5`}>{children}</h5>
      );
    case TextAtomEnum.enum_h6:
      return (
        <h6 className={`${className} ${textStyles} text-h6`}>{children}</h6>
      );
    default:
      return <h5 className="text-h5 text-red">Error</h5>;
  }
};

export default React.memo(TextAtom);

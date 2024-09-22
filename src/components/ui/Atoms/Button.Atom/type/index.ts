import { ICommonComponentProps } from "@/lib/common/ComponentProps";
import ButtonAtomEnum from "../enum";
import { MouseEventHandler } from "react";

export interface ButtonAtomProps
  extends Partial<ICommonComponentProps<HTMLButtonElement>> {
  type: ButtonAtomEnum;
  onMouseOver?: MouseEventHandler;
  onMouseLeave?: MouseEventHandler;
  disabled?: boolean;
}

import { ReactNode, MouseEvent, CSSProperties } from "react";
import { UrlObject } from "url";

export interface ICommonComponentProps<T = HTMLDivElement> {
  onClick: (event: MouseEvent<T>) => void;
  children: JSX.Element | ReactNode;
  checked: boolean;
  isLoading: boolean;
  icon: JSX.Element | ReactNode;
  className: string;
  onClose: (event: MouseEvent<T>) => void;
  placeholder: string;
  errorMessage: ReactNode;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  action: () => void;
  href: string | UrlObject;
  width: number;
  height: number;
  style: CSSProperties;
}

import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import WorldIcon from "@/assets/icons/world.svg?react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="p-4 rounded-[30px_30px_0_0] bg-white-background flex">
      <Logo />
      <div className="">
        <Link href="#">
          <TextAtom type={TextAtomEnum.enum_h3}>Избранное</TextAtom>
        </Link>
        <Link href="#">
          <TextAtom type={TextAtomEnum.enum_h3}>Корзина</TextAtom>
        </Link>
        <Link href="#">
          <TextAtom type={TextAtomEnum.enum_h3}>Контакты</TextAtom>
        </Link>
      </div>
      <div className="">
        <Link href="#">
          <TextAtom type={TextAtomEnum.enum_h3}>Условия сервиса</TextAtom>
        </Link>

        <div className="flex">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<WorldIcon />}
            className="w-[16.67px] h-[16.67px] "
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

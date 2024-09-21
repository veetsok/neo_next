import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";
import WorldIcon from "@/assets/icons/world.svg?react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import VkIcon from "@/assets/icons/social/VK.svg?react";
import TelegramIcon from "@/assets/icons/social/Telegram.svg?react";
import WhatsappIcon from "@/assets/icons/social/Whatsapp.svg?react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="mt-5 p-4 rounded-[30px_30px_0_0] bg-white-background flex">
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
            className="w-[16.67px] h-[16.67px]"
          />
        </div>
        <div className="flex items-center gap-[17.9px]">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<VkIcon />}
            className="w-[30.1px] h-[30.1px] fill-accent-black hover:fill-vk-icon cursor-pointer"
          />
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<TelegramIcon />}
            className="w-[30.1px] h-[30.1px] fill-accent-black hover:fill-telegram-icon cursor-pointer"
          />
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<WhatsappIcon />}
            className="w-[30.1px] h-[30.1px] fill-accent-black hover:fill-whatsapp-icon cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Footer);

import React, { useState } from "react";
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
import ButtonAtom from "../ui/Atoms/Button.Atom";
import ButtonAtomEnum from "../ui/Atoms/Button.Atom/enum";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  const [activeLanguage, setActiveLanguage] = useState<"Rus" | "Eng">("Rus");
  const handleLanguageChange = (language: "Rus" | "Eng") => {
    setActiveLanguage(language);
  };
  return (
    <div
      className="mt-5 p-[29px] flex flex-col items-center justify-between rounded-[30px_30px_0_0] bg-white-background
      md:flex-col md:items-center
      lg:flex-row lg:items-baseline
      xl:flex-row xl:items-baseline"
    >
      <Logo />
      <div className="flex flex-col gap-[10px]">
        <Link href="#" className="hover:text-accent-orange">
          <TextAtom type={TextAtomEnum.enum_h3}>Избранное</TextAtom>
        </Link>
        <Link href="/cart" className="hover:text-accent-orange">
          <TextAtom type={TextAtomEnum.enum_h3}>Корзина</TextAtom>
        </Link>
        <Link href="#" className="hover:text-accent-orange">
          <TextAtom type={TextAtomEnum.enum_h3}>Контакты</TextAtom>
        </Link>
      </div>

      <div className="flex flex-col gap-[30px]">
        <Link href="#">
          <TextAtom type={TextAtomEnum.enum_h3}>Условия сервиса</TextAtom>
        </Link>

        <div className="flex items-center gap-[15px]">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<WorldIcon />}
            className="w-5 h-5"
          />
          <ButtonAtom
            type={ButtonAtomEnum.enum_defaultButton}
            onClick={() => handleLanguageChange("Rus")}
          >
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className={
                activeLanguage === "Rus" ? "text-accent-orange font-bold" : ""
              }
            >
              Рус
            </TextAtom>
          </ButtonAtom>
          <ButtonAtom
            type={ButtonAtomEnum.enum_defaultButton}
            onClick={() => handleLanguageChange("Eng")}
          >
            <TextAtom
              type={TextAtomEnum.enum_h3}
              className={
                activeLanguage === "Eng" ? "text-accent-orange font-bold" : ""
              }
            >
              Eng
            </TextAtom>
          </ButtonAtom>
        </div>
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
  );
};

export default React.memo(Footer);

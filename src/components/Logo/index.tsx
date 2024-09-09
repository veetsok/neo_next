import React from "react";
import Link from "next/link";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <TextAtom type={TextAtomEnum.enum_h1} className="font-bold">
        QPICK
      </TextAtom>
    </Link>
  );
};

export default React.memo(Logo);

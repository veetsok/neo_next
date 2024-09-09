import Link from "next/link";
import React from "react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import WishlistIcon from "@/assets/icons/wishlist.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import Logo from "../Logo";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="flex justify-between items-center">
      <Logo />
      <div className="flex items-center gap-3">
        <Link href="#">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<WishlistIcon />}
            className="w-[22px] h-5 fill-accent-gray"
          />
        </Link>
        <Link href="/cart">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<CartIcon />}
            className="w-[22px] h-5 fill-accent-gray"
          />
        </Link>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

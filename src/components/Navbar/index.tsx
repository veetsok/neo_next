import Link from "next/link";
import React from "react";
import ImageAtom from "../ui/Atoms/Image.Atom";
import WishlistIcon from "@/assets/icons/wishlist.svg?react";
import CartIcon from "@/assets/icons/cart.svg?react";
import ImageAtomEnum from "../ui/Atoms/Image.Atom/enum";
import Logo from "../Logo";
import useCartStore from "@/lib/store/localstorage/useCartStore";
import TextAtom from "../ui/Atoms/Text.Atom";
import TextAtomEnum from "../ui/Atoms/Text.Atom/enum";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { items } = useCartStore();
  const itemsTotal = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="flex justify-between items-center py-[15px]">
      <Logo />
      <div className="flex items-center gap-9">
        <Link href="#">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<WishlistIcon />}
            className="w-[22px] h-5 fill-accent-gray"
          />
        </Link>
        <Link href="/cart" className="relative">
          <ImageAtom
            type={ImageAtomEnum.enum_defaultSvg}
            icon={<CartIcon />}
            className="w-[22px] h-5 fill-accent-gray"
          />
          {itemsTotal > 0 && (
            <TextAtom
              className="absolute top-[-4px] right-[-4px] px-1 rounded-full bg-accent-orange text-white max-w-6"
              type={TextAtomEnum.enum_h6}
            >
              {itemsTotal}
            </TextAtom>
          )}
        </Link>
      </div>
    </header>
  );
};

export default React.memo(Navbar);

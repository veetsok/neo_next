import React from "react";
import { ICommonComponentProps } from "@/lib/common/ComponentProps";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface LayoutProps extends Partial<ICommonComponentProps> {}

export const MainLayout: React.FC<LayoutProps> = React.memo(({ children }) => {
  return (
    <div className="px-3 pt-2 container">
      <Navbar />
      <main className="grid min-h-screen grid-rows-[1fr,auto]">{children}</main>
      <Footer />
    </div>
  );
});

// Добавляем свойство displayName
MainLayout.displayName = "MainLayout";

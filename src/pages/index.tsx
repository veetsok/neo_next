import Navbar from "@/components/Navbar";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="px-3 pt-2 container">
      <Navbar />
      <main className="grid min-h-screen grid-rows-[1fr,auto]">
        <ProductList />
      </main>
    </div>
  );
}

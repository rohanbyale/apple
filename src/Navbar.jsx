import { Apple, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-14 fixed top-0 left-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10 flex items-center justify-center">
      <div className="max-w-[1200px] w-full flex items-center justify-between px-6 text-white text-sm font-helvatica_now">

        {/* Logo */}
        <Apple size={20} className="cursor-pointer" />

        {/* Menu */}
        <ul className="hidden md:flex gap-8">
          <li className="hover:opacity-70 cursor-pointer">Store</li>
          <li className="hover:opacity-70 cursor-pointer">Mac</li>
          <li className="hover:opacity-70 cursor-pointer">iPad</li>
          <li className="hover:opacity-70 cursor-pointer">iPhone</li>
          <li className="hover:opacity-70 cursor-pointer">Accessories</li>
          <li className="hover:opacity-70 cursor-pointer">Support</li>
        </ul>

        {/* Bag */}
        <ShoppingBag size={18} className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;

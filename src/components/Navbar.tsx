import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-3">
          <div className="flex items-center">
            <Hamburger
              isOpen={isMenuOpen}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            />
            <Logo className="hidden md:flex" />
          </div>

          <div className="flex items-center justify-center">
            <Logo className="md:hidden" />
            <NavLinks />
          </div>

          <div className="flex items-center justify-end gap-2 sm:gap-4">
            <a
              href="#signin"
              className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
            >
              Sign In
            </a>
            <a
              href="#signup"
              className="bg-brand-gradient rounded-full px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:px-5"
            >
              Sign Up
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <NavLinks variant="mobile" onLinkClick={() => setIsMenuOpen(false)} />
        )}
      </div>
    </header>
  );
};

export default Navbar;

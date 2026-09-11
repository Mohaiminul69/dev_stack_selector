const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

type NavLinksProps = {
  variant?: "desktop" | "mobile";
  onLinkClick?: () => void;
};

const NavLinks = ({ variant = "desktop", onLinkClick }: NavLinksProps) => {
  const wrapperClassName =
    variant === "mobile"
      ? "flex flex-col gap-1 border-t border-slate-100 py-3 md:hidden"
      : "hidden items-center gap-8 md:flex";

  return (
    <nav className={wrapperClassName}>
      {NAV_LINKS.map((link) => {
        const isActive = link === "Home";
        const base =
          variant === "mobile"
            ? "rounded-md px-3 py-2 text-sm font-medium"
            : "text-sm font-medium";
        const colors = isActive
          ? "text-pink-600"
          : variant === "mobile"
            ? "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            : "text-slate-600 transition-colors hover:text-slate-900";

        return (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={onLinkClick}
            className={`${base} ${colors}`}
          >
            {link}
          </a>
        );
      })}
    </nav>
  );
};

export default NavLinks;

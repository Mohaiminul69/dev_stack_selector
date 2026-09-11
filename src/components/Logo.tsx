const Logo = ({ className }: { className?: string }) => (
  <a href="#home" className={`flex items-center gap-2 ${className || ""}`}>
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-[245deg] from-[#7C3AED] to-[#EC4899] text-sm font-bold text-white">
      DS
    </span>
    <span className="text-lg font-bold text-slate-900">
      Dev<span className="text-[#DB2777]">Stack</span>
    </span>
  </a>
);

export default Logo;

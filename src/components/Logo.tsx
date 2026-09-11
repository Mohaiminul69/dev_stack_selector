import logoText from "../assets/logo-text.png";

const Logo = ({ className }: { className?: string }) => (
  <a href="#home" className={`flex items-center ${className || ""}`}>
    <img src={logoText} alt="Dev Stack" className="h-8 w-auto" />
  </a>
);

export default Logo;

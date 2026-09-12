import Logo from "./Logo";

const SOCIAL_LINKS = ["GitHub", "Twitter", "LinkedIn"];

const FOOTER_LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#projects" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
    ],
  },
];

const Footer = () => (
  <footer className="border-t border-slate-100">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate-500">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-4 flex gap-4 text-sm font-medium text-slate-600">
            {SOCIAL_LINKS.map((social) => (
              <a key={social} href="#" className="transition-colors hover:text-slate-900">
                {social}
              </a>
            ))}
          </div>
        </div>

        {FOOTER_LINK_GROUPS.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-semibold tracking-wide text-slate-900 uppercase">{group.title}</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-slate-500 transition-colors hover:text-slate-900">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 flex flex-col gap-4 border-t border-slate-100 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#privacy" className="transition-colors hover:text-slate-600">
            Privacy
          </a>
          <a href="#terms" className="transition-colors hover:text-slate-600">
            Terms
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;

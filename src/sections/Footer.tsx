import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "LinkedIn",
    href: "#",
    icon: "",
  },
  {
    title: "Twitter",
    href: "#",
    icon: "",
  },
  {
    title: "Github",
    href: "#",
    icon: "",
  },
  {
    title: "Stack Overflow",
    href: "#",
    icon: "",
  },
];

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[1000px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 -z-10 bg-orange-600/80 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row items-center md:justify-between gap-8">
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          {/* <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                className="inline-flex items-center gap-1.5"
              >
                <span>{link.title}</span>
                <ArrowUpRightIcon className="size-4" />
              </a>
            ))}
          </nav> */}
        </div>
      </div>
    </footer>
  );
};

const servicesLinks = [
  "AI Strategy Consulting",
  "AI Development",
  "Data Engineering",
  "Software Development",
  "ML Model Development",
  "AI Agents Development",
];

const industriesLinks = [
  "Banking & Finance",
  "Manufacturing",
  "Retail & E-commerce",
  "Logistics",
  "Healthcare",
  "Technology",
];

const companyLinks = ["About", "Work", "Insights", "Contact Us"];

export default function Footer() {
  return (
    <footer className="w-full bg-[#051C2C] px-[40px] py-[60px] text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company */}
          <div>
            <div className="text-[20px] font-bold text-white">LeewayHertz</div>
            <div className="text-[12px] text-[#8C8C8C]">
              A Hackett Group Company
            </div>
            <p className="mt-[16px] max-w-[250px] text-[14px] text-white/70">
              AI development company enabling innovation and rapid development
            </p>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="mb-[16px] text-[16px] font-semibold text-white">
              Services
            </h4>
            <ul>
              {servicesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] leading-[2.2] text-white/70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="mb-[16px] text-[16px] font-semibold text-white">
              Industries
            </h4>
            <ul>
              {industriesLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] leading-[2.2] text-white/70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="mb-[16px] text-[16px] font-semibold text-white">
              Company
            </h4>
            <ul>
              {companyLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[14px] leading-[2.2] text-white/70"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[40px] border-t border-white/10 pt-[24px] text-center">
          <p className="text-[14px] text-white/50">
            &copy; 2024 LeewayHertz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

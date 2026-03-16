import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: [
    "Personal Loans",
    "Business Loans",
    "Home & Mortgage",
    "Auto Loans",
    "Education Loans",
    "Debt Consolidation",
  ],
  Company: ["About Us", "How It Works", "Testimonials", "FAQ", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Loan<span className="text-primary-400">Connect</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6">
              Connecting people with the right lenders since 2018. Your trusted
              bridge to better financing.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary-400" />
                hello@loanconnect.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary-400" />
                (555) 123-4567
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary-400" />
                New York, NY
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2 text-sm">
                {links.map((link) => (
                  <li key={link}>
                    <span className="hover:text-primary-400 transition-colors cursor-pointer">
                      {link}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-primary-800 text-center text-sm">
          &copy; {new Date().getFullYear()} LoanConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

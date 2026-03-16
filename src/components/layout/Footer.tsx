import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  Services: ["Personal Loans", "Business Loans", "Home & Mortgage", "Auto Loans", "Education Loans", "Debt Consolidation"],
  Company: ["About Us", "How It Works", "Testimonials", "FAQ", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-base font-bold text-white mb-3">
              Loan<span className="text-primary-400">Connect</span>
            </h3>
            <p className="text-xs leading-relaxed mb-4">
              Connecting people with the right lenders since 2018.
            </p>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-primary-400" />hello@loanconnect.com</div>
              <div className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-primary-400" />(555) 123-4567</div>
              <div className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-primary-400" />New York, NY</div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">{heading}</h4>
              <ul className="space-y-1.5 text-xs">
                {links.map((link) => (
                  <li key={link}>
                    <span className="hover:text-primary-400 transition-colors cursor-pointer">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} LoanConnect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

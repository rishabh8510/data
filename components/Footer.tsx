import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">MyWebsite</h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Build modern, fast and beautiful web experiences with Next.js.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold">Company</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/about"
                className="text-sm text-gray-400 hover:text-white"
              >
                About
              </Link>

              <Link
                href="/services"
                className="text-sm text-gray-400 hover:text-white"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-sm text-gray-400 hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold">Resources</h3>

            <div className="mt-4 flex flex-col gap-3">
              <Link
                href="/blog"
                className="text-sm text-gray-400 hover:text-white"
              >
                Blog
              </Link>

              <Link
                href="/faq"
                className="text-sm text-gray-400 hover:text-white"
              >
                FAQ
              </Link>

              <Link
                href="/privacy"
                className="text-sm text-gray-400 hover:text-white"
              >
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold">Contact</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>hello@example.com</p>
              <p>+91 98765 43210</p>
              <p>Indore, Madhya Pradesh</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MyWebsite. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
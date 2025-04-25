const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 mt-68">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">ABOUT</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Company</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/blog">Our Blog</a>
            </li>
            <li>
              <a href="/news">Press & News</a>
            </li>
            <li>
              <a href="/info">Company Info</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">OUR SERVICES</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/services/web-design">Web Design</a>
            </li>
            <li>
              <a href="/services/development">Development</a>
            </li>
            <li>
              <a href="/services/marketing">Marketing</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">SUPPORT</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/support/payments">Payments</a>
            </li>
            <li>
              <a href="/support/shipping">Shipping Info</a>
            </li>
            <li>
              <a href="/support/returns">Returns</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">POLICIES</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>
              <a href="/terms">Terms of Use</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/returns-policy">Return Policy</a>
            </li>
            <li>
              <a href="/security">Security</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
            <li>
              <a href="/grievance">Grievance Policy</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Mail Us:</h4>
          <p className="text-sm text-gray-300">
            Example Corp Pvt Ltd,
            <br />
            123 Demo Street,
            <br />
            Downtown, Tech City,
            <br />
            Metroville, 123456,
            <br />
            India
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Office Address:</h4>
          <p className="text-sm text-gray-300">
            Example Corp Pvt Ltd,
            <br />
            456 Innovation Road,
            <br />
            Startup Park, Metroville,
            <br />
            India, 123456
            <br />
            CIN: ABCD123456789
            <br />
            Telephone:{" "}
            <a href="tel:1234567890" className="underline">
              1234 567 890
            </a>
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between mt-10 border-t pt-4 text-xs">
        <div className="flex flex-wrap gap-4">
          <a
            href="https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect"
            className="flex items-center gap-1"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/sell-image-9de8ef.svg"
              alt="Become a Seller"
              className="w-4 h-4"
            />
            Become a Seller
          </a>
          <a
            href="https://brands.flipkart.com"
            className="flex items-center gap-1"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/advertise-image-866c0b.svg"
              alt="Advertise"
              className="w-4 h-4"
            />
            Advertise
          </a>
          <a
            href="/the-gift-card-store?otracker=footer_navlinks"
            className="flex items-center gap-1"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/gift-cards-image-d7ff24.svg"
              alt="Gift Cards"
              className="w-4 h-4"
            />
            Gift Cards
          </a>
          <a
            href="/helpcentre?otracker=footer_navlinks"
            className="flex items-center gap-1"
          >
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/help-centre-image-c4ace8.svg"
              alt="Help Center"
              className="w-4 h-4"
            />
            Help Center
          </a>
        </div>
        <div className="text-gray-500 mt-4 md:mt-0">
          &copy; 2025 ExampleCorp.com
        </div>
        <img
          src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/payment-method-c454fb.svg"
          alt="Payment Methods"
          className="mt-4 md:mt-0"
        />
      </div>
    </footer>
  );
};

export default Footer;

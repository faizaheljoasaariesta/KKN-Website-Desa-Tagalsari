import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
        <li className="menu-item has-children">
          <a href="#" className="active">
            Home
          </a>
          <ul className="sub-menu" style={activeLi("home")}>
            <li>
              <Link legacyBehavior href="/">
                Home Agriculture
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/index-2">
                Home Organic Food
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/index-3">
                Home Farming
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/index-4">
                Home Dairy Farm
              </Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("home")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li>
          <Link legacyBehavior href="/about">
            About
          </Link>
        </li>
        <li className="menu-item has-children">
          <a href="#">Services</a>
          <ul className="sub-menu" style={activeLi("Services")}>
            <li>
              <Link legacyBehavior href="/services">
                Our Services
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/service-details">
                Service Details
              </Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Services")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="#">Portfolio</a>
          <ul className="sub-menu" style={activeLi("Portfolio")}>
            <li>
              <Link legacyBehavior href="portfolio-grid">
                Portfolio Grid
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-full-width">
                Portfolio Full Width
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="portfolio-details">
                Portfolio Details
              </Link>
            </li>
          </ul>
          <span
            className="dd-trigger"
            onClick={() => activeMenuSet("Portfolio")}
          >
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="#">Shop</a>
          <ul className="sub-menu" style={activeLi("Shop")}>
            <li>
              <Link legacyBehavior href="products">
                Our Products
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="products-left-sidebar">
                Product Left Sidebar
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="products-right-sidebar">
                Product Right Sidebar
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="product-details">
                Product Details
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="cart">
                Cart
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="checkout">
                Checkout
              </Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Shop")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="#">Blog</a>
          <ul className="sub-menu" style={activeLi("Blog")}>
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog Standard
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="blog-details">
                Blog Details
              </Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Blog")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
        <li className="menu-item has-children">
          <a href="#">Pages</a>
          <ul className="sub-menu" style={activeLi("Pages")}>
            <li>
              <Link legacyBehavior href="farmers">
                Our Farmers
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="faqs">
                Faq
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li>
          </ul>
          <span className="dd-trigger" onClick={() => activeMenuSet("Pages")}>
            <i className="far fa-angle-down" />
          </span>
        </li>
      </ul>
    </nav>
  );
};
export default MobileHeader;

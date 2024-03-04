import Image from "next/image";
import React from "react";
import { footerLinks } from "./constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col jus items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </div>
        <p className="text-base text-gray-700">
          Carhub 2023 <br /> All rights reserved &copy;
        </p>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          </div>
          </div>
          <div className="flex w-full justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
            <p className="mt-4">@2023 carhub. All rights reserved.</p>
            <div className="footer__copyrights-link">
                <Link href="/" className="text-gray-500">Privacy policy</Link>
                <Link href="/" className="text-gray-500">Terms of use</Link>
            </div>
        </div>
    </footer>
  );
};

export default Footer;

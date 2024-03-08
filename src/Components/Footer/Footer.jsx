import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="p-3 md:p-10 bg-[#071118] text-white border-t border-white">
            <footer className=" footer justify-around md:py-20">
    <nav>
      <img className=" w-16 md:w-40" src="https://i.ibb.co/CP666Mh/edu-Events-Logo-modified.png" alt="" />
    </nav>
  <nav>
    <header className="footer-title text-white">Services</header> 
    <a className="link link-hover" href="/services">Workshops and Webinars</a> 
    <a className="link link-hover" href="/services">Career Fairs</a> 
    <a className="link link-hover" href="/services">Educational Conferences</a> 
    <a className="link link-hover" href="/services">Training Programs</a>
  </nav> 
  <nav>
    <header className="footer-title text-white">Company</header> 
    <a className="link link-hover" href="/about">About us</a> 
    <a className="link link-hover" href="/">Contact</a> 
    <a className="link link-hover" href="/">Blog</a> 
    <a className="link link-hover" href="/">Jobs</a> 
    <a className="link link-hover" href="/">Press</a> 
    <a className="link link-hover" href="/">Partners</a> 
  </nav> 
  <nav>
    <header className="footer-title text-white">Supports</header> 
    <a className="link link-hover" href="/services">Pricing</a> 
    <a className="link link-hover" href="/">Documentation</a> 
    <a className="link link-hover" href="/">Guides</a> 
    <a className="link link-hover" href="/">API Status</a> 
  </nav> 
  <nav>
    <header className="footer-title text-white">Legal</header> 
    <a className="link link-hover" href="/">Claim</a> 
    <a className="link link-hover" href="/">Privacy</a> 
    <a className="link link-hover" href="/">Terms</a> 
   
  </nav>
</footer>
<hr />
      <div className=" md:flex md:justify-between my-4 md:my-10">
        <div>
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p>The latest news, articles and resources send to your inbox weekly</p>
        </div>
        <div>
          <input className="px-3 py-2 rounded-lg mr-5 bg-[#11222e] border border-white mt-3" type="email" name="" id="" placeholder="Enter your email"/>
          <button className="bg-[#075E54] text-sm md:text-base text-white px-2 py-1 md:px-4 md:py-2 rounded font-semibold my-2 md:my-4">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className=" flex flex-col md:flex-row justify-between my-4 md:my-10">
        <p className="text-sm text-slate-400 mb-3">Copyright © 2024 - All right reserved by eduEvents</p>
        <div className="flex gap-8 text-2xl">
        <FaFacebook />
        <FaInstagram />
        <FaXTwitter />
        <FaGithub />
        <FaYoutube />
        </div>
      </div>
        </div>
    );
};

export default Footer;
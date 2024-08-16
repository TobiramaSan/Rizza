import React from "react";
import { payment } from "../assets";
import Container from "./Container";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <div className="mt-10">
      <FooterTop />
      <Container className="flex flex-col md:flex-row items-center gap-4 justify-between">
        <p>@2024 Rizza solutions. All rights reserved.</p>
        <img src={payment} alt="payment-img" />
      </Container>
    </div>
  );
};

export default Footer;

import { Header, Services, Products, About, Contact } from "@/components";

import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <Products />
      <Services />
      <About />
      <Contact />
    </React.Fragment>
  );
}

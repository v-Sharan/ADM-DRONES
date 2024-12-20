import {
  Navbar,
  Header,
  Services,
  Products,
  About,
  Contact,
} from "@/components";

import "./page.scss";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Products />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

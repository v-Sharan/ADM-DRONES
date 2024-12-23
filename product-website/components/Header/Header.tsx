import { AppWrap } from "@/Wrapper";
import "./Header.scss";
// import { client } from "@/client";
// import { HeaderQuery } from "@/actions/query";
// import { Home } from "@/types/SanityResults";
// import Carousel from "../Carousel/Carousel";

const Header = async () => {
  // const imgs = await client.fetch<Home[]>(HeaderQuery);
  // return <Carousel imgs={imgs} />;
  return <div />;
};

export default AppWrap(Header, "home", "");
// export default Header;

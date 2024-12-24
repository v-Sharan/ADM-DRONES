import { AppWrap } from "@/Wrapper";
import { client } from "@/client";
import { HeaderQuery } from "@/actions/query";
import { Home } from "@/types/SanityResults";
import Carousel from "../Carousel/Carousel";
import "./Header.scss";

const Header = async () => {
  const imgs = await client.fetch<Home[]>(HeaderQuery);
  return <Carousel imgs={imgs} />;
};

export default AppWrap(Header, "home", "");

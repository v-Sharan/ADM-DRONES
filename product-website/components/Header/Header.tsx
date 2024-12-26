import { AppWrap } from "@/Wrapper";
import { client } from "@/client";
import { HeaderQuery } from "@/actions/query";
import { Home } from "@/types/SanityResults";
import Carousel from "../Carousel/Carousel";
import "./Header.scss";

type HomeBg = {
  _id: Home["_id"];
  imgUrl: Home["imgUrl"];
  alt: Home["alt"];
};

const Header = async () => {
  const imgs = await client.fetch<HomeBg[]>(HeaderQuery);
  return <Carousel imgs={imgs} />;
};

export default AppWrap(Header, "home", "");

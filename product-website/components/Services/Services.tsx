import { AppWrap, MotionWrap } from "@/Wrapper";
import { client } from "@/client";
import { ServicesQuery } from "@/actions/query";
import { Services as ServicesType } from "@/types/SanityResults";
import { Motion } from "@/components";
import "./Services.scss";

const Services = async () => {
  const Services = await client.fetch<ServicesType[]>(ServicesQuery);
  return (
    <>
      <h2 className="head-text">
        Our Services At<span> ADM Drones</span> on Action
      </h2>

      <Motion
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {Services.map((service, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={service.imgUrl} alt={service._id} />
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{service.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </Motion>
    </>
  );
};

export default AppWrap(
  MotionWrap(Services, "app__works"),
  "sales",
  "app__primarybg"
);

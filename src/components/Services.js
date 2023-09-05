import { services } from "../data"
import Service from "./Service"
import Title from "./Title"

const Services = () => {
  return (
    <>
      <section className="section services" id="services">

        <Title titleOne="our" titleTwo="services" />

        <div className="section-center services-center">

          {services.map((service) => {
            return <>
              <Service name={service.title} description={service.description} icon={service.icon} />
            </>
          })}

        </div>
      </section>
    </>
  )
}

export default Services
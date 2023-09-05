import { tours } from '../data';
import Title from './Title';
import Tour from './Tour';

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        <div className="section-title">
          <Title titleOne="featured" titleTwo="tours" />
        </div>

        <div className="section-center featured-center">
          {tours.map((tour) => {

            return <>
              <Tour image={tour.image} date={tour.date} title={tour.title} description={tour.description} name={tour.name} duration={tour.duration} cost={tour.cost} />
            </>
          })}
        </div>
      </section>
    </>
  )
}

export default Tours
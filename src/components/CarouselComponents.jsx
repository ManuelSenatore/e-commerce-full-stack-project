import Carousel from 'react-bootstrap/Carousel';

function CarouselComponents() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/HfHX36x.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>Tutto quello che cerchi</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-80"
          src="https://iili.io/Hf2hIZ7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Per rendere il tuo ufficio ancora più confortevole</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/Hf2GDOP.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>La scuola con noi è ancora più bella</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponents;
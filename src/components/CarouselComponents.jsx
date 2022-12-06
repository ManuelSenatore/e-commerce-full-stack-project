import { Button } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComponents() {
  return (
    <Carousel fade >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/HfHX36x.jpg"
          alt="First slide"
        />
        <Carousel.Caption className='caroselloText'>
          <h2 className='titleCarousel'>Tutto quello che cerchi</h2>
          <Button>Vai</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/Hf2hIZ7.jpg"
          alt="Second slide"
        />

        <Carousel.Caption className='caroselloText'>
          <h2 className='titleCarousel'>Per rendere il tuo ufficio ancora più confortevole</h2>
          <Button>Vai</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://iili.io/Hf2GDOP.jpg"
          alt="Third slide"
        />

        <Carousel.Caption className='caroselloText'>
          <h2 className='titleCarousel'>La scuola con noi è ancora più bella</h2>
          <Button>Vai</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponents;
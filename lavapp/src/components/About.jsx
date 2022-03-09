import Carousel from 'react-bootstrap/Carousel'


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="barman.jpg/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="mrblack.jpg/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

render(<ControlledCarousel />);

/* function About() {
        return (<><Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="barman.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Homemade cocktails </h3>
                <p>Made with passion by our experienced cocktail experts</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="mrblack.jpg"
                alt="Second slide"
              />
          
              <Carousel.Caption>
                <h3>Premium liqueurs</h3>
                <p>We use only the best for our customers with award winning liqueurs and spirits</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </>);
    }
 
export default About; */
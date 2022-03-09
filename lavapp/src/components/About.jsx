import Carousel from 'react-bootstrap/Carousel'

 function About() {
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
                src="Liqueur.webp"
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
 
export default About; 
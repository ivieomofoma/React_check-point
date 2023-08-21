import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Body.css'
import wed5 from './images/wed5.webp';
import wed4 from './images/wed4.webp';
import wed3 from './images/wed3.jpg';

const body = () => {
  return (
    <div className="cards">
      <Card className="card" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={wed5} style={{  height: '300px'}}/>
        <Card.Body>
          <Card.Title>Wedding dress</Card.Title>
          <Card.Text>
          A wedding gown is the epitome of bridal fashion, a garment that embodies dreams, traditions, and individuality.predominantly white or ivory, symbolizing purity and new beginnings. However, modern brides are increasingly embracing a spectrum of colors, from pastels to bold shades, to express their unique personalities.
          </Card.Text>
          <Button variant="primary" style={{ backgroundColor: '#000' }}>Buy Now</Button>
        </Card.Body>
      </Card>

      <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={wed4} style={{  height: '300px'}} />
      <Card.Body>
        <Card.Title>Wedding dress</Card.Title>
        <Card.Text> A wedding gown is the epitome of bridal fashion, a garment that embodies dreams, traditions, and individuality.predominantly white or ivory, symbolizing purity and new beginnings. However, modern brides are increasingly embracing a spectrum of colors, from pastels to bold shades, to express their unique personalities.
        </Card.Text>
        <Button variant="primary" style={{ backgroundColor: '#000' }}>Buy Now</Button>
      </Card.Body>
    </Card>

    <Card className="card" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={wed3} style={{  height: '300px'}}/>
      <Card.Body>
        <Card.Title>Wedding dress</Card.Title>
        <Card.Text>
        A wedding gown is the epitome of bridal fashion, a garment that embodies dreams, traditions, and individuality.predominantly white or ivory, symbolizing purity and new beginnings. However, modern brides are increasingly embracing a spectrum of colors, from pastels to bold shades, to express their unique personalities.
        </Card.Text>
        <Button variant="primary" style={{ backgroundColor: '#000' }}>Buy Now</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
};

export default body;

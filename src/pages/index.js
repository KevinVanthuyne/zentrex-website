import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Image, Carousel, Card } from "react-bootstrap"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <Row id="home">
      <Image
        src="https://via.placeholder.com/1920x1080&text=Landing+screen+photo"
        fluid
      />
    </Row>
    <Row id="over">
      <Col md={6}>
        <h2>Over Mij</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          feugiat cursus nibh, in malesuada nisl cursus ut. Curabitur ac lacus
          eget neque aliquet cursus vitae vel tortor. Sed semper, sapien quis
          condimentum tempor, nisl nulla porttitor neque, vitae pellentesque
          risus mi ut arcu.
        </p>
        <p>
          Sed vel purus a orci sodales porta ut ac neque. Aliquam ut tincidunt
          ligula. Pellentesque scelerisque blandit lectus id euismod. Fusce nec
          leo non nunc euismod congue et id enim. Sed purus velit, ultricies vel
          nisl vitae, volutpat vulputate libero.
        </p>
      </Col>
      <Col md={6}>
        <Image src="https://via.placeholder.com/500x400" fluid />
      </Col>
    </Row>
    <Row>
      <Carousel indicators="false">
        <Carousel.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Row>
    <Row id="diensten">
      <Col md={6}>
        <Image src="https://via.placeholder.com/500x400" fluid />
      </Col>
      <Col md={6}>
        <h2>Diensten</h2>
        <h3>Herstellingen</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          feugiat cursus nibh, in malesuada nisl cursus ut. Curabitur ac lacus
          eget neque aliquet cursus vitae vel tortor. Sed semper, sapien quis
          condimentum tempor, nisl nulla porttitor neque, vitae pellentesque
          risus mi ut arcu.
        </p>
        <h3>Computers op maat</h3>
        <p>
          Sed vel purus a orci sodales porta ut ac neque. Aliquam ut tincidunt
          ligula. Pellentesque scelerisque blandit lectus id euismod. Fusce nec
          leo non nunc euismod congue et id enim. Sed purus velit, ultricies vel
          nisl vitae, volutpat vulputate libero.
        </p>
      </Col>
    </Row>
    <Row id="contact">
      <h2>Contact</h2>
      <ul>
        <li>Sint-Huybrechtstraat 131</li>
        <li>1785 Merchtem</li>
        <li>België</li>
        <li>BE 0724 618 308</li>
      </ul>
    </Row>
  </Layout>
)

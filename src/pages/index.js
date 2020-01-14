import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Image } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

import styles from "./index.module.css"

import Layout from "../components/layout"
import BannerImg from "../components/banner-img"
import ReviewCard from "../components/review-card"

import computerInsides from "../assets/img/computer-insides.jpg"
import circuitBoard from "../assets/img/circuit-board.jpg"
import zentrexLogoWhite from "../assets/img/zentrex-logo-white.png"
import zentrexLogoBlack from "../assets/img/zentrex-logo-black.png"

export default () => (
  <Layout>
    <Row id="home">
      <BannerImg
        img={computerInsides}
        parallax="0.2"
        overlayColor="white"
        overlayOpacity="0.15"
        style={{ height: "100vh" }}
      >
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 3 }}
          xl={{ span: 4, offset: 4 }}
        >
          <Image src={zentrexLogoWhite} fluid />
        </Col>
      </BannerImg>
    </Row>
    <Row id="over" className="mt-5 mb-5">
      <Col md={{ span: 5, offset: 1 }} xl={{ span: 4, offset: 2 }}>
        <h2 class="display-2">Over mij</h2>
      </Col>
      <Col md={5} xl={4}>
        <p>
          Hallo, ik ben Dennis Vanthuyne, een gemotiveerde student-ondernemer
          aan de HoGent die graag een verschil wil maken. Danzij mijn ervaring
          van al meer dan 5 jaar is dit ook zeker mogelijk! Computers, laptops,
          smartphones en tablets hebben weinig geheimen voor mij.
        </p>
        <p>
          Ik heb een passie voor ondernemen en IT. Dit heb ik kunnen combineren
          en daar is Zentrex het resultaat van!
        </p>
      </Col>
    </Row>
    <Row>
      <BannerImg
        img={circuitBoard}
        parallax="0.1"
        overlayColor="white"
        overlayOpacity="0.15"
        style={{ height: "auto" }}
      >
        {/* Workaround <div> for Carousel not showing inside Bootstrap Row  */}
        <div style={{ width: "100%" }}>
          <Carousel
            responsive={{
              all: { breakpoint: { max: 4000, min: 0 }, items: 1 },
            }}
            className={styles.carousel}
            showDots
            infinite
            autoPlay
            autoPlaySpeed={5000}
            renderDotsOutside
          >
            <Row>
              <Col
                xs={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
              >
                <ReviewCard reviewer="Kato Duwee">
                  Mijn pc was toe aan een factory recovery en aan een vervanging
                  van mijn HDD schijf naar een SSD schijf. Mijn pc draait nu
                  terug zoals het hoort en ik heb terug voldoende ruimte en een
                  betere schijf. De kostprijs was goed in vergelijking met
                  anderen. Vriendelijke service
                </ReviewCard>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
              >
                <ReviewCard reviewer="Owen Van Damme">
                  service was tijdig en correct geleverd, professioneel en
                  vriendelijke service. Een echte aanrader!
                </ReviewCard>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
              >
                <ReviewCard reviewer="Kevin Vanthuyne">
                  Super snelle service, vriendelijk en een eerlijke/lage prijs!
                </ReviewCard>
              </Col>
            </Row>
            <Row>
              <Col
                xs={{ span: 8, offset: 2 }}
                md={{ span: 6, offset: 3 }}
                xl={{ span: 4, offset: 4 }}
              >
                <ReviewCard reviewer="Jan-Karel">
                  Uitstekende service voor een zeer schappelijke prijs, komt
                  zijn beloftes na. Aanrader!
                </ReviewCard>
              </Col>
            </Row>
          </Carousel>
        </div>
      </BannerImg>
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

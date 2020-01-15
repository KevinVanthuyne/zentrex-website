import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Row, Col, Image } from "react-bootstrap"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {
  FaArrowDown,
  FaHome,
  FaCoins,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa"
import styled, { keyframes } from "styled-components"
import { fadeInDown, fadeIn } from "react-animations"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import styles from "./index.module.css"

import Layout from "../components/layout"
import BannerImg from "../components/banner-img"
import ReviewCard from "../components/review-card"

import computerInsides from "../assets/img/computer-insides.jpg"
import zentrexLogoWhite from "../assets/img/zentrex-logo-white.png"
import zentrexLogoBlack from "../assets/img/zentrex-logo-black.png"
import circuitBoard from "../assets/img/circuit-board.jpg"
import phoneRepair from "../assets/img/broken-phone.jpg"

const fadeInDownAnimation = keyframes`${fadeInDown}`
const fadeInAnimation = keyframes`${fadeIn}`

const FadeInDownDiv = styled.div`
  animation: 4s ${fadeInDownAnimation} infinite;
`
const FadeInDiv = styled.div`
  animation: 6s ${fadeInAnimation} 1;
`
export default () => (
  <Layout>
    <Row id="home">
      <BannerImg
        img={computerInsides}
        parallax={0.2}
        overlayColor="white"
        overlayOpacity={0.15}
        className={styles.landingScreenBanner}
      >
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 6, offset: 3 }}
          xl={{ span: 4, offset: 4 }}
          className={styles.landingScreenColumn}
        >
          <Image src={zentrexLogoWhite} fluid />
          <div className={styles.scrollDown}>
            <ScrollAnimation
              animateIn="fadeOut"
              initiallyVisible
              offset={Math.floor(window.innerHeight * 0.1)}
              animateOnce
            >
              <FadeInDownDiv>
                <FaArrowDown />
              </FadeInDownDiv>
              <FadeInDiv>
                <p>scroll</p>
              </FadeInDiv>
            </ScrollAnimation>
          </div>
        </Col>
      </BannerImg>
    </Row>

    <Row id="diensten" className="mt-5">
      <Col md={{ span: 5, offset: 1 }}>
        <Image src={phoneRepair} fluid />
      </Col>
      <Col md={5}>
        <h2 className="big-title">Diensten</h2>
        <p className="big-text">
          Voor bijna alle IT-gerelateerde zaken kan u bij Zentrex terecht.
          Klanttevredenheid en kwaliteit staan centraal.
        </p>
        <Row className="mt-5 mb-5">
          <Col>
            <h3 className="big-subtitle">Herstellingen</h3>
            <ul className="nice-list">
              <li>Smartphones, tablets, laptops, computers, ...</li>
              <li>Hardware &amp; software problemen</li>
              <li>In perfecte staat afgeleverd</li>
              <li>Tot binnen 1 uur hersteld</li>
              <li>Tot 24 maand garantie</li>
            </ul>
          </Col>
          <Col>
            <h3 className="big-subtitle">Computers op maat</h3>
            <ul className="nice-list">
              <li>Specifieke eisen voor computer</li>
              <li>Niet zeker wat te kopen</li>
              <li>Fanatieke gamer tot kantoorgebruik</li>
              <li>Op maat samengesteld</li>
            </ul>
          </Col>
        </Row>
      </Col>
    </Row>

    <Row id="reviews">
      <BannerImg
        img={circuitBoard}
        parallax={0.1}
        overlayColor="white"
        overlayOpacity={0.15}
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

    <Row id="over" className="mt-5 mb-5">
      <Col md={{ span: 3, offset: 1 }}>
        <h2 className="big-title">Over mij</h2>
      </Col>
      <Col md={4}>
        <h3 className="big-subtitle">Persoon</h3>
        <p className="big-text">
          Ik ben Dennis Vanthuyne, een gemotiveerde student-ondernemer aan de
          HoGent met meer dan 5 jaar ervaring in herstellingen en IT. <br />
          Computers, laptops, smartphones en tablets hebben weinig geheimen meer
          voor mij.
        </p>
      </Col>
      <Col md={3}>
        <h3 className="big-subtitle">Visie</h3>
        <p className="big-text">
          Het verschil maken in IT diensten. Ik heb een passie voor ondernemen
          en IT en daar is Zentrex het resultaat van!
        </p>
      </Col>
    </Row>

    <Row id="contact" className={styles.contactSection}>
      <div className={styles.contactSectionBg}></div>
      <Col md={{ span: 5, offset: 1 }}>
        <h2 className="big-title mb-5">Contact</h2>
        <ul className="nice-list big-text">
          <li>
            <span className={styles.icon}>
              <FaHome />
            </span>
            Sint-Huybrechtstraat 131 1785 Merchtem
          </li>
          <li>
            <span className={styles.icon}>
              <FaCoins />
            </span>
            BE 0724 618 308
          </li>
          <li>
            <span className={styles.icon}>
              <FaPhone />
            </span>
            +32 496 83 30 67
          </li>
          <li>
            <span className={styles.icon}>
              <FaEnvelope />
            </span>
            info@zentrex.be
          </li>
        </ul>
      </Col>
      <Col md={5}>
        <iframe
          width="100%"
          height="100%"
          frameborder="0"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAQuv8z-ppn6XQvUK8IcUe4mVJgkUpxTzc&q=Zentrex+Merchtem"
          allowfullscreen
        ></iframe>
      </Col>
    </Row>
  </Layout>
)

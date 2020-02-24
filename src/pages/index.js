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
import { fadeInDown, fadeIn, fadeInUp } from "react-animations"
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"

import styles from "./index.module.scss"

import Layout from "../components/layout"
import BannerImg from "../components/banner-img"
import ReviewCard from "../components/review-card"
import Footer from "../components/footer"
import Link from "../components/link"

import computerInsides from "../assets/img/computer-insides.jpg"
import zentrexLogoWhite from "../assets/img/zentrex-logo-white.png"
import zentrexLogoBlack from "../assets/img/zentrex-logo-black.png"
import circuitBoard from "../assets/img/circuit-board.jpg"
import phoneRepair from "../assets/img/broken-phone.jpg"
import repairing from "../assets/img/repairing.jpg"
import quotemark from "../assets/img/quotemark.svg"

const fadeInDownAnimation = keyframes`${fadeInDown}`
const fadeInAnimation = keyframes`${fadeIn}`
const fadeInUpAnimation = keyframes`${fadeInUp}`

const FadeInDownDiv = styled.div`
  animation: 4s ${fadeInDownAnimation} infinite;
`
const FadeInDiv = styled.div`
  animation: 6s ${fadeInAnimation} 1;
`
const FadeInUpDiv = styled.div`
  animation: 2s ${fadeInUpAnimation} 1;
`

const windowHeight = typeof window !== `undefined` ? window.innerHeight : 0

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
          <FadeInUpDiv>
            <Image src={zentrexLogoWhite} fluid />
          </FadeInUpDiv>
          <div className={styles.scrollDown}>
            <ScrollAnimation
              animateIn="fadeOut"
              initiallyVisible
              offset={Math.floor(windowHeight * 0.1)}
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

    <div id="diensten" className="pt-10 pb-7">
      <Row>
        <Col md={{ span: 5, offset: 1 }}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            offset={Math.floor(windowHeight * 0.1)}
          >
            <Image src={phoneRepair} fluid />
          </ScrollAnimation>
        </Col>
        <Col md={5}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            offset={Math.floor(windowHeight * 0.1)}
          >
            <h2 className="big-title">Diensten</h2>
            <p className="big-text">
              Voor bijna alle IT-gerelateerde zaken kan u bij Zentrex terecht.
              Klanttevredenheid en kwaliteit staan centraal.
            </p>
          </ScrollAnimation>
        </Col>
      </Row>
      <Row className="mt-4rem mb-5">
        <Col md={{ span: 3, offset: 2 }}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            offset={Math.floor(windowHeight * 0.1)}
          >
            <h3 className="big-subtitle">Herstellingen</h3>
            <ul className="nice-list">
              <li>Smartphones, tablets, laptops, computers, ...</li>
              <li>Hardware &amp; software problemen</li>
              <li>Trage computer oplossen</li>
              <li>In perfecte staat afgeleverd</li>
              <li>Tot binnen 1 uur hersteld</li>
              <li>Tot 24 maand garantie</li>
            </ul>
          </ScrollAnimation>
        </Col>
        <Col md={{ span: 3 }}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            offset={Math.floor(windowHeight * 0.1)}
          >
            <h3 className="big-subtitle">Computers op maat</h3>
            <ul className="nice-list">
              <li>Betrouwbaar &amp; performant</li>
              <li>Specifieke eisen voor computer</li>
              <li>Niet zeker wat te kopen</li>
              <li>Fanatieke gamer tot kantoorgebruik</li>
              <li>Op maat samengesteld</li>
            </ul>
          </ScrollAnimation>
        </Col>
        <Col md={{ span: 3 }}>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce
            offset={Math.floor(windowHeight * 0.1)}
          >
            <h3 className="big-subtitle">Netwerken</h3>
            <ul className="nice-list">
              <li>Op maat ontwerpen &amp; aanleggen</li>
              <li>Bedraad &amp; draadloos</li>
              <li>Slecht WiFi bereik oplossen</li>
              <li>Sterk beveiligd</li>
            </ul>
          </ScrollAnimation>
        </Col>
      </Row>
    </div>

    <Row id="reviews">
      <BannerImg
        img={circuitBoard}
        parallax={0.2}
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

    <ScrollAnimation
      animateIn="fadeInUp"
      animateOnce
      offset={Math.floor(windowHeight * 0.1)}
    >
      <Row id="over" className="pt-10 pb-7">
        <Col lg={{ span: 6, offset: 1 }}>
          <h2 className="big-title">Over mij</h2>
          <p className="big-text">
            Ik ben Dennis Vanthuyne, een gemotiveerde student-ondernemer aan de
            HoGent met meer dan 5 jaar ervaring in herstellingen en IT.
          </p>
          <p className="big-text">
            Computers, laptops, smartphones en tablets hebben weinig geheimen
            meer voor mij.
          </p>
          <p className="big-text">
            Meer weten over mij? Bekijk{" "}
            <Link href="#">mijn LinkedIn profiel</Link>.
          </p>
        </Col>
        <Col lg={{ span: 3, offset: 1 }}>
          {/* <Image src={repairing} fluid className={styles.aboutImg} />
          <h3 className="big-subtitle">Visie</h3> */}
          <div className="quote">
            <img src={quotemark} className="open-mark" />
            <p>Ik wil het verschil maken in IT diensten.</p>
            <p>
              Ik heb een passie voor ondernemen en IT en daar is Zentrex het
              resultaat van!
            </p>
            <img src={quotemark} className="close-mark" />
          </div>
        </Col>
      </Row>
    </ScrollAnimation>

    <Row id="contact" className={`${styles.contactSection} pt-15 pb-8`}>
      <Col md={{ span: 5, offset: 1 }}>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce
          offset={Math.floor(windowHeight * 0.1)}
        >
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
        </ScrollAnimation>
      </Col>
      <Col md={5}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.005375163039!2d4.209476816304175!3d50.979091257012435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c395f76824e52b%3A0x211c7f71410dce6c!2sZentrex!5e0!3m2!1snl!2sbe!4v1579169861160!5m2!1snl!2sbe"
          width="100%"
          height="100%"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </Col>
    </Row>

    <Footer />
  </Layout>
)

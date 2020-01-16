import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import {
  FaInstagram,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

import Link from "../components/link"
import zentrexLogoBlack from "../assets/img/zentrex-logo-black.png"
import styles from "./footer.module.scss"

export default () => (
  <footer className={styles.footer}>
    <Row className={styles.footerRow}>
      <Col lg={{ span: 4, offset: 1 }} className={styles.footerIcons}>
        <Link href="#">
          <FaGithub />
        </Link>
        <Link href="#">
          <FaLinkedinIn />
        </Link>
        <Link href="#">
          <FaFacebookF />
        </Link>
        <Link href="#">
          <FaInstagram />
        </Link>
      </Col>
      <Col lg={2}>
        <Image src={zentrexLogoBlack} fluid />
      </Col>
      <Col lg={4} className="text-lg-right">
        <p>Copyright &copy; {new Date().getFullYear()} Zentrex</p>
        <p>All rights reserved</p>
      </Col>
    </Row>
    <Row className={styles.footerRow}>
      <Col md={{ span: 10, offset: 1 }}>
        <ul>
          <li>info@zentrex.be</li>
          <li>Sint-Huybrechtstraat 131 1785 Merchtem</li>
          <li>+32 496 83 30 67</li>
          <li>BE 0724 618 308</li>
        </ul>
      </Col>
    </Row>
  </footer>
)

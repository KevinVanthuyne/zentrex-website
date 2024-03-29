import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import Link from "../components/link";
import zentrexLogoRed from "../assets/img/zentrex-logo-white.png";
import styles from "./footer.module.scss";

export default () => (
  <footer className={styles.footer}>
    <Row className={styles.footerRow}>
      <Col md={{ span: 4, offset: 1 }} className={`${styles.footerIcons} mb-4`}>
        <Link href="https://www.linkedin.com/in/dennisvanthuyne/">
          <FaLinkedinIn />
          <p className="d-none">Dennis Vanthuyne's LinkedIn profiel</p>
        </Link>
        <Link href="https://www.facebook.com/ZentrexIT">
          <FaFacebookF />
          <p className="d-none">Zentrex Facebook pagina</p>
        </Link>
      </Col>
      <Col md={2} className="mb-4">
        <Image
          src={zentrexLogoRed}
          className={styles.footerLogo}
          fluid
          alt="Zentrex logo"
        />
      </Col>
      <Col md={4} className="text-lg-right">
        <p>Copyright &copy; {new Date().getFullYear()} Zentrex</p>
        <p>All rights reserved</p>
        <p>BE 0790 246 033</p>
      </Col>
    </Row>
  </footer>
);

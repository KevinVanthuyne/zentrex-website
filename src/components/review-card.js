import React from "react"
import { IconContext } from "react-icons"
import { FaStar, FaAngleRight } from "react-icons/fa"
import { Row, Col, Image } from "react-bootstrap"

import styles from "./review-card.module.scss"

import userIcon from "../assets/img/user.svg"

export default props => (
  <div className={styles.card}>
    <a
      href="https://search.google.com/local/reviews?placeid=ChIJK-UkaPeVw0cRbM4NQXF_HCE"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Row>
        <Col md={3} lg={2} className={styles.cardImgContainer}>
          <Image src={userIcon} fluid className={styles.cardImg} />
        </Col>
        <Col md={9} lg={10} className={styles.cardBody}>
          <div className={styles.cardTitle}>{props.reviewer}</div>
          <div className={styles.cardText}>
            <IconContext.Provider value={{ color: "orange" }}>
              <ul>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
            </IconContext.Provider>

            {props.children}

            <div className={styles.cardLink}>
              <FaAngleRight />
              Klik om de Google Maps reviews te zien
            </div>
          </div>
        </Col>
      </Row>
    </a>
  </div>
)

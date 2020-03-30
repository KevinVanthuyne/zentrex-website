import React from "react";

import styles from "./link.module.scss";

export default props => (
  <a
    href={props.href}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.a}
  >
    {props.children}
  </a>
);

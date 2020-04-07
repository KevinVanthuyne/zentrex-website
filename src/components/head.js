import React from "react";
import { Helmet } from "react-helmet";

import metaImg from "../assets/img/meta-img.jpg";

const meta = {
  title: "Zentrex",
  description:
    "Voor bijna alle IT-gerelateerde zaken kan u bij Zentrex terecht. Klanttevredenheid en kwaliteit staan centraal.",
  url: "https://zentrex.be/",
};

export default () => (
  <Helmet>
    <html lang="nl" />
    <meta charSet="utf-8" />
    <meta name="description" content={meta.description} />
    <meta name="image" content={metaImg} />

    <meta property="og:url" content={meta.url} />
    <meta property="og:title" content={meta.title} />
    <meta property="og:description" content={meta.description} />
    <meta property="og:image" content={metaImg} />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={meta.title} />
    <meta name="twitter:description" content={meta.description} />
    <meta name="twitter:image" content={metaImg} />

    <title>Zentrex</title>
  </Helmet>
);

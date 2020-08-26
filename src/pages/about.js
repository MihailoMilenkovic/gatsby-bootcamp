import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About</h1>
      <p>
        This website was made by Mihailo Milenkovic, following the great gatsby
        bootcamp made by Andrew Mead.
      </p>
      <p>
        <Link to="/contact">Want to work with me? Reach out</Link>
      </p>
    </Layout>
  );
};

export default AboutPage;

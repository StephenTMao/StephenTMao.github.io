import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage  } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm foo bar foo bar woo woo woo.</p>
      <p> testing updates </p>
      <StaticImage 
        alt="me lol" src="../images/stmaoJN-S23.jpg"
      />    
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage

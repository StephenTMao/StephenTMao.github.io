import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import { StaticImage  } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <TopLevelLayout pageTitle="Home Page">
      <p>I'm foo bar foo bar woo woo woo.</p>
      <p> testing updates </p>
      <StaticImage 
        alt="me lol" src="../images/stmaoJN-S23.jpg"
      />    
    </TopLevelLayout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage

import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import { StaticImage  } from 'gatsby-plugin-image';

const IndexPage = () => {
  return (
    <TopLevelLayout pageTitle="Stephen Mao">
      <StaticImage 
        alt="me lol" src="../images/stmaoJN-S23.jpg"
      />    
      <p>Hi! I'm Stephen Mao, a computer science and mathematics undergraduate at Carnegie Mellon University. </p>
      <p>I'm glad you're here, and I hope you enjoy your stay! </p>
      <div/>
      <div/>
      <div/>
      <p>Graphic design is not my passion :(</p>
    </TopLevelLayout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage

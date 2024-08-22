import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import { StaticImage  } from 'gatsby-plugin-image';
import {
  foreground_img,
  bluetext,
  footnote_definition,
  footnote_body,
} from '../components/layout.module.css';


const IndexPage = () => {
  return (
    <TopLevelLayout pageTitle="Stephen Mao">
      <StaticImage 
        alt="me lol" src="../images/stmaoJN-S23-cropped.jpg" class={foreground_img}
      />    
      <p>Hi! I'm Stephen Mao, a computer science and mathematics undergraduate at Carnegie Mellon University. </p>
      <p>I'm glad you're here, and I hope you enjoy your stay! </p>
      <p>Contact me at 
          <span class={bluetext}>
             <i> stephen</i>[dot]<i>t</i>[dot]<i>mao@gmail.com</i>
          </span> 
      </p>
    </TopLevelLayout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;

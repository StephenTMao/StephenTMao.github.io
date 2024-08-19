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
            <i> &lt;firstname&gt;</i>.
            <i>&lt;ascii84&gt;</i>.
            <i>&lt;lastname&gt;</i>
            @gmail.com
          </span> 
      </p>
      <p>Substitute the appropriate values (in between the ".")!

        <sup><a href={"#1"}>1</a></sup>
      </p>
      <p id={"1"} class={footnote_definition}>
        <sup>1</sup>
        <span class={footnote_body}>
          I hope, pray, and fight for a future without spam 
        </span>
      </p>
    </TopLevelLayout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage

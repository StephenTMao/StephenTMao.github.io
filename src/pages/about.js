import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import {
    footnote_definition,
    footnote_body,
  } from '../components/layout.module.css';

const AboutPage = () => {
    return (
        <TopLevelLayout pageTitle="About">
            <p>Welcome again, dear reader! I'm Stephen Mao, and here are some less apparent thing about me. </p>
            <h3>Academic Interests</h3>
                <p>
                    Within the conglomeration of computer science and mathematics I partake of, 
                    I particularly enjoy functional programming, programming languages, 
                    compilers, graph theory, and pedagogy!
                </p>
                <p>
                    I think FP, PL, and compilers come together really nicely to do 'metaprogramming'; 
                    I'm a big fan of eliminating the possibility of small bugs, 
                    with the definition of small always growing less small. 
                    As for graph theory, I think it's really quaint just how much it shows up everywhere in daily life.
                </p>
                <p>
                    On pedagogy, I think there's a lot of potential for large numbers of people who don't consider 
                    themselves STEM or math people to attain much more fluency and comfortability in the field than they think possible,
                    largely through good pedagogy (blog posts incoming about that). 
                </p>
            <h3>Christian Faith</h3>
                <p>
                    My faith in Christ is the most important aspect of my life, and I think I'm in a good position
                    to be open about it, dialogue, and clear up misconceptions between people 
                    (especially STEM people, who I am, who tend to consider Christianity and science antithetical)
                </p>
                <p>
                    If you have questions/comments/concerns, I encourage you to reach out to me!
                </p>
            <h3>Music</h3>
                <p>
                    Music making has been a big part of my life ever since my youth; first with classical music through clarinet 
                    and now with a cappella (Joyful Noise) in university. It's been extremely rewarding from the beginning,
                    and similar to above, I am also a big fan of music pedagogy.
                </p>
            <h3>Various Et Cetera
                <sup><a href={"#1"}>1</a></sup> </h3>
                <p>
                    Hobbies and activities that I have spent a nontrivial<sup><a href={"#2"}>2</a></sup>
                    amount of time on include:
                    weightlifting, tennis, improv comedy, chess, and volleyball, 
                    the last of which is currently <i>primus inter pares</i>.
                </p>
                <p>
                    I used to be fluent in Spanish, credit to a stellar Spanish education in high school, which I subsequently lost during COVID. 
                    I intend to change that fact (and also attain true fluency in Mandarin), and hopefully this blurb will be updated in the future!
                </p>
                <p id={"2"} class={footnote_definition}>
                    <sup>1</sup>
                    <span class={footnote_body}>
                        Credit to <a href={"https://www.niklasfasching.de/"}>Niklas Fasching</a> for the CSS you see here; 
                        "graphic design is my passion" type stuff.
                    </span>
                </p>
                <p id={"2"} class={footnote_definition}>
                    <sup>2</sup>
                    <span class={footnote_body}>
                        A linguistic glitch that is, as far I can tell, exclusive to CMU (for better or for worse)
                    </span>
                </p>
        </TopLevelLayout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>About Me</title>;

export default AboutPage;
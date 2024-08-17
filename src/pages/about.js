import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';

const AboutPage = () => {
    return (
        <TopLevelLayout pageTitle="About">
            <p>Welcome again, dear reader! I'm Stephen Mao, and here are some less apparent thing about me. </p>
            <h3>Academic Interests</h3>
            <p>Within mathematics and computer science, </p>
            <h3>Christian Faith</h3>
            <h3>Various Hobbies</h3>
        </TopLevelLayout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>About Me</title>;

export default AboutPage;
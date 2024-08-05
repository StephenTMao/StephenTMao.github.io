import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';

const AboutPage = () => {
    return (
        <TopLevelLayout pageTitle="About">
            <p>I'm making this about page.</p>
        </TopLevelLayout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>About Me</title>;

export default AboutPage;
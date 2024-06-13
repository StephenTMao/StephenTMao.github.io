import * as React from 'react';
import Layout from '../components/layout';

const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>I'm making this about page.</p>
        </Layout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>About Me</title>;

export default AboutPage;
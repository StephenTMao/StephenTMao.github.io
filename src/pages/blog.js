import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import BlogLink from '../components/components';

const BlogPage = () => {
    return (
        <TopLevelLayout pageTitle="Mind Dump">
            <p>Some musings!</p>
        </TopLevelLayout>
        
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>Some Musings</title>;
// At the moment, I'm not sure what this does tbh

export default BlogPage;
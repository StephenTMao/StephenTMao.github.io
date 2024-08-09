import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';

const BlogPage = () => {
    return (
        <TopLevelLayout pageTitle="Blog">
            <p>Some musings!</p>
        </TopLevelLayout>
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>Some Musings</title>;
// At the moment, I'm not sure what this does tbh

export default BlogPage;
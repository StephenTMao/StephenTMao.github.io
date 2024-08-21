import * as React from 'react';
import TopLevelLayout from '../components/TopLevelLayout';
import { Link } from 'gatsby';
import { posts, post, date } from '../components/layout.module.css';

const BlogPage = () => {
    return (
        <TopLevelLayout pageTitle="Mind Dump">
            <ol class={posts}>
                <li class={post}>
                    <date>08.17.2024</date>
                    <Link to="/blogs/exponential-derivative">
                        an unexpected and accessible derivation of the exponential derivative
                    </Link>
                </li>
            </ol>
        </TopLevelLayout>
        
    );
};


// This is the title, a feature only in Gatsby
export const Head = () => <title>Some Musings</title>;
// At the moment, I'm not sure what this does tbh

export default BlogPage;
import * as React from 'react';
import { Link } from 'gatsby';

const BlogLayout = ({ children }) => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                {children}
            </main>
        </div>
    );
};

export default BlogLayout;
import * as React from 'react';
import { Link } from 'gatsby';
// import { 
//     container,
//     heading,
//     navLinks,
//     navLinkItem,
//     navLinkText,
//  } from './layout.module.css';

const TopLevelLayout = ({ pageTitle, children }) => {
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
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <a href="https://github.com/StephenTMao">
                            Github
                        </a>
                    </li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default TopLevelLayout;
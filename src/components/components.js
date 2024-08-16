import * as React from 'react';
import { Link } from 'gatsby';
import { 
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
 } from './layout.module.css';

const BlogLink = ({path, pageTitle}) => {
    <div>
        <li>
        <Link to={path} className={navLinkText}>
            {pageTitle}
        </Link>
        </li>
    </div>
};

export default BlogLink;
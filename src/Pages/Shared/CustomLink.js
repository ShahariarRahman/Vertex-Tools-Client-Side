import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className={match ? 'bg-base-200 text-black' : ''}>
            <Link style={{ color: match ? "black" : "black" }} to={to} {...props} >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;
import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const BlogPost = styled.div`
    border: 2px solid gray;
    margin-bottom: 5px;
    padding-left: 5px;
    padding-top: 5px;
    padding-bottom: 5px;
    span {
        margin-bottom: 10px;
    }
    h3 {
        width: 100%;
        margin-bottom: 10px;
    }
    a {
        color: black;
        text-decoration: none;
        &:hover {
            border-bottom: 3px solid #4286f4;
          }
    }
    button {
        text-decoration: none;
        background-color: white;
        border: 2px solid gray;
        font-size: 13px;
        &:hover {
            border: 2px solid #4286f4;
        }
        a {
            &:hover {
                border: none;
            }
        }
    }
    
`;

const PostListing = ({post}) => <BlogPost >
    <h3>
        <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
    </h3>
    <span>{post.frontmatter.date}</span>
    <p>
        {post.excerpt}
    </p>
    <button><Link to={post.fields.slug}>Continue Reading >> </Link></button>
</BlogPost>

export default PostListing;
import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';

const IndexPage = ({data}) => (
  <div>
    <h1
    style={{textAlign: 'center', color: 'black'}}>Blog Posts</h1>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date], order: DESC }) {
  	edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM YYYY")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 280)
        html
      }
    }
	}
}
`
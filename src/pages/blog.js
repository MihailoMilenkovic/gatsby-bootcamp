import React from "react";

import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          const front = edge.node.frontmatter;
          return (
            <li>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{front.title}</h2>
              </Link>
              <p>{front.date}</p>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;

import React from "react";

import Layout from "../components/layout";
import { graphql, useStaticQuery, Link } from "gatsby";
import blogStyles from "./blog.module.scss";

const BlogPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // return (
  //   <Layout>
  //     <h1>Blog</h1>
  //     <ol className={blogStyles.posts}>
  //       {data.allMarkdownRemark.edges.map(edge => {
  //         const front = edge.node.frontmatter;
  //         return (
  //           <li className={blogStyles.post}>
  //             <Link to={`/blog/${edge.node.fields.slug}`}>
  //               <h2>{front.title}</h2>
  //               <p>{front.date}</p>
  //             </Link>
  //           </li>
  //         );
  //       })}
  //     </ol>
  //   </Layout>
  // );
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "D.M.YYYY")
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          );
        })}
      </ol>
    </Layout>
  );
};

export default BlogPage;

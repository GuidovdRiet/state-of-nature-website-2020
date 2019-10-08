import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        {posts &&
          posts.map(({ node: post }) => (
            <Post key={post.id}>
              <article className="article">
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="photo">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`
                        }}
                      />
                    </div>
                  ) : null}
                  <p>
                    <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                    <span> &bull; </span>
                    <span>{post.frontmatter.date}</span>
                  </p>
                </header>
                <p className="text">
                  <h1>{post.frontmatter.title}</h1>
                  {post.excerpt}
                  {/* <br />
                  <br />
                  <Link className="button" to={post.fields.slug}>
                    Keep Reading →
                  </Link> */}
                </p>
              </article>
            </Post>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);

const Post = styled.div`
  margin-bottom: 20px;
  .article {
    display: flex;
    background-color: ${({ theme }) => theme.white};
  }
  .photo {
    flex: 1;
  }
  .text {
    flex: 1;
    padding: 0 0 0 40px;
    h1 {
      margin-bottom: 10px;
    }
  }
`;

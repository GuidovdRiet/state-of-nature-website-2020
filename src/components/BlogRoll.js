import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Wrapper>
        {posts &&
          posts.map(({ node: post }, i) => (
            <Post key={post.id} index={i}>
              {post.frontmatter.featuredimage && (
                <BackgroundImage
                  fluid={post.frontmatter.featuredimage.childImageSharp.fluid}
                  className="post-image"
                />
              )}
              <div className="text">
                <h1>{post.frontmatter.title}</h1>
                <p>{post.excerpt}</p>
              </div>
            </Post>
          ))}
      </Wrapper>
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
                    fluid(maxWidth: 400, quality: 100) {
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Post = styled.div`
  margin: 0 0 65px 0;
  flex-direction: ${({ index }) => index % 2 && "row-reverse"};
  display: flex;
  min-height: 350px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);

  @media (max-width: 1150px) {
    margin: 0 16px 65px 16px;
    flex-direction: column;
    .post-image {
      width: 100%;
    }
  }

  .post-image {
    width: 350px;
    height: 350px;
    margin: ${({ index }) => (index % 2 ? "0 0 0 11px" : "0 11px 0 0")};
    @media (max-width: 1150px) {
      width: 100%;
    }
  }

  .text {
    display: flex;
    padding: 10px 160px 10px 40px;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    background-color: ${({ theme }) => theme.white};
    border: 4px solid ${({ theme }) => theme.purple};
    h1 {
      margin-bottom: 10px;
    }
    p {
      margin: 0;
    }
    @media (max-width: 1150px) {
      padding: 32px 40px 32px 40px;
    }
  }
`;

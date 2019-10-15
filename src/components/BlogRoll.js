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
  margin-bottom: 20px;
  background-color: ${({ theme }) => theme.white};
  flex-direction: ${({ index }) => index % 2 && "row-reverse"};
  display: flex;
  min-height: 350px;

  .post-image {
    width: 350px;
    height: 350px;
  }

  .text {
    display: flex;
    padding: 10px 160px 10px 40px;
    justify-content: center;
    flex-direction: column;
    flex: 1;
    h1 {
      margin-bottom: 10px;
    }
  }
`;

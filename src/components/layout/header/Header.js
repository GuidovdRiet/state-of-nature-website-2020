import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

// Component
import SVG from "../../media/svg/SVG";

const Header = () => {
  return (
    <Wrapper>
      <Link to="/" className="logo">
        <SVG type="logo" />
      </Link>
      <div className="nav">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/contact" className="nav-item">
          Contact
        </Link>
        <div className="social-wrapper">
          <a
            href="https://www.instagram.com/ourstateofnature/"
            target="_blank"
            className="social-link"
          >
            <SVG type="instagram" className="instagram" />
          </a>
          <a
            href="https://www.facebook.com/ourstateofnature"
            target="_blank"
            className="social-link"
          >
            <SVG type="facebook" className="facebook" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  margin: 40px 0 90px 0;
  display: flex;
  @media (max-width: 1150px) {
    margin: 40px 16px 55px 16px;
  }
  .logo {
    max-width: 134px;
    flex: 1;
    transform: translate(0, 8px);
  }
  .nav {
    display: flex;
    flex: 4;
    justify-content: flex-end;
    align-items: center;
  }
  .nav-item {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.purple};
    margin-right: 16px;
    text-decoration: none;
    max-height: 21px;
  }
  .social-wrapper {
    display: flex;
    margin-top: 2px;
    .social-link {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .facebook,
    .instagram {
      margin: 8px;
      fill: ${({ theme }) => theme.purple};
    }
    .facebook {
      width: 12px;
      fill: ${({ theme }) => theme.purple};
    }
    .instagram {
      width: 22px;
    }
  }
`;

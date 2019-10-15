import React from "react";
import styled from "styled-components";

// Component
import SVG from "../../media/svg/SVG";

const Header = () => {
  return (
    <Wrapper>
      <SVG type="logo" className="logo" />
      <div className="nav">
        <p className="nav-item">contact</p>
        <div className="social-wrapper">
          <a href="https://www.instagram.com/ourstateofnature/" target="_blank">
            <SVG type="instagram" className="instagram" />
          </a>
          <a href="https://www.facebook.com/ourstateofnature" target="_blank">
            <SVG type="facebook" className="facebook" />
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  margin: 40px 0 55px 0;
  display: flex;
  .logo {
    max-width: 144px;
    flex: 1;
  }
  .nav {
    display: flex;
    flex: 4;
    justify-content: flex-end;
  }
  .nav-item {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.purple};
    margin: 5px 7px 0 0;
  }
  .social-wrapper {
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

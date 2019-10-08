import React from "react";
import styled, { keyframes } from "styled-components";

// Components
import SVG from "../media/svg/SVG";

const CardLogo = ({ className }) => {
  return (
    <Card className={className}>
      <SVG type="logo" className="logo" />
      <SVG type="star" className="star star-first" />
      <SVG type="star" className="star star-second" />
      <SVG type="star" className="star star-third" />

      {/* <div className="social-wrapper">
        <a href="https://www.instagram.com/ourstateofnature/" target="_blank">
          <SVG type="instagram" className="instagram" />
        </a>
        <a href="https://www.facebook.com/ourstateofnature" target="_blank">
          <SVG type="facebook" className="facebook" />
        </a>
      </div> */}
    </Card>
  );
};

export default CardLogo;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .logo {
    width: 160px;
  }
  .star {
    fill: ${({ theme }) => theme.beige};
    position: absolute;
    animation: 0.8s ${fadeIn} ease-in;
  }
  .star-first {
    left: 164px;
    bottom: 75px;
    width: 15px;
    transform: rotate(45deg);
  }
  .star-second {
    left: 149px;
    top: 70px;
    width: 20px;
    transform: rotate(70deg);
  }
  .star-third {
    top: 98px;
    right: 167px;
    width: 17px;
    transform: rotate(73deg);
  }

  @media (max-width: 499px) {
    .star-first {
      left: 102px;
      bottom: 77px;
      transform: rotate(45deg);
    }
    .star-second {
      left: 85px;
      top: 60px;
      transform: rotate(13deg);
    }
    .star-third {
      top: 83px;
      right: 120px;
      transform: rotate(73deg);
    }
  }

  .social-wrapper {
    position: absolute;
    right: 10px;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      text-decoration: none;
    }
    .facebook,
    .instagram {
      margin: 8px;
    }
    .facebook {
      width: 12px;
    }
    .instagram {
      width: 21px;
      fill: ${({ theme }) => theme.beige};
    }
  }
`;

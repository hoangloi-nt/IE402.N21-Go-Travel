import React from "react";
import styled from "styled-components";

const BounceLoadingStyles = styled.div`
  @keyframes bounce-loader {
    to {
      opacity: 0.1;
      transform: translateY(-1rem);
    }
  }

  .bounce-loading {
    display: flex;
    justify-content: center;
  }

  .bounce-loading > div {
    width: 1rem;
    height: 1rem;
    margin: 0 0.5rem;
    background: #8385aa;
    border-radius: 50%;
    animation: bounce-loader 0.6s infinite alternate;
  }

  .bounce-loading > div:nth-child(2) {
    animation-delay: 0.15s;
  }

  .bounce-loading > div:nth-child(3) {
    animation-delay: 0.3s;
  }

  .bounce-loading > div:last-child {
    animation-delay: 0.45s;
  }
`;

const BounceLoading = () => {
  return (
    <BounceLoadingStyles>
      <div className="bounce-loading">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </BounceLoadingStyles>
  );
};

export default BounceLoading;

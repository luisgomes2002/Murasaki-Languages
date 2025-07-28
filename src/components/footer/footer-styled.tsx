import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2% 4%;
  background-color: #0a0520;

  a {
    color: white;
    text-decoration: none;
    font-size: 20px;
    margin: 0 5px;
  }

  p {
    color: white;
    margin: 5px 0;
  }

  i {
    color: white;
    margin: 0 3px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }

  i:hover {
    color: #6f00ff;
  }

  /* 375x667 - iPhone SE/8 */
  @media (max-width: 375px) and (max-height: 667px) {
    flex-direction: column;

    a,
    p,
    i {
      font-size: 16px;
    }
  }

  /* 414x896 - iPhone XR/11 */
  @media (max-width: 414px) and (max-height: 896px) {
    flex-direction: column;

    a,
    p,
    i {
      font-size: 17px;
    }
  }

  /* 768x1024 - iPad Portrait */
  @media (max-width: 768px) and (max-height: 1024px) {
    a,
    p,
    i {
      font-size: 18px;
    }
  }

  /* 1024x768 - iPad Landscape */
  @media (max-width: 1024px) and (max-height: 768px) {
    a,
    p,
    i {
      font-size: 18px;
    }
  }

  /* 1280x800 - Small laptop */
  @media (max-width: 1280px) and (max-height: 800px) {
    a,
    p,
    i {
      font-size: 19px;
    }
  }

  /* 1440x900 - Medium laptop */
  @media (max-width: 1440px) and (max-height: 900px) {
    a,
    p,
    i {
      font-size: 20px;
    }
  }
`;

export const IconsDiv = styled.div`
  margin: 0 5px;

  a {
    margin: 0;
  }
`;

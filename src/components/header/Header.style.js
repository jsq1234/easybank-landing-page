import styled from "styled-components";

export const Navigation = styled.header`
  width: 100%;
  overflow: hidden;
  z-index: 999;
  padding: 0rem 6rem;
  position: relative;
  @media (max-width: 600px) {
    overflow: visible;
  }
`;
export const Nav = styled.nav`
  padding: 3rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .hamburger {
    max-width: 3rem;
    display: none;
  }

  @media (max-width: 600px) {
    button {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }

  ul.active {
    display: block;
  }
`;
export const Ul = styled.ul`
  display: flex;
  width: 25%;
  justify-content: space-between;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: absolute;
    top: 100px;
    background-color: #fff;
    display: none;
    padding: 4rem 0;
    text-align: center;
  }
`;
export const Li = styled.li`
  padding: 1rem 0;
  font-size: 2rem;
`;
export const Logo = styled.div``;

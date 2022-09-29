import React from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";

const Modal = ({ children, onClose}) => {
  
  return (
    <Background theaterModal>
      <Layout>
        <Content>
          {children}
        </Content>
      </Layout>
    </Background>
  );
};

export default Modal;

const Background = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  backdrop-filter: blur(5px);
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${props => props.theaterModal === true ? 'fadeIn' : 'fadeOut'};
  animation-fill-mode: forwards;
`;

const Content = styled.div`
  position: relative;
  border-radius: 15px;
  background-color: var(--white);
  box-sizing: border-box;
  z-index: 1001;
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: slideUp;
  animation-fill-mode: forwards;
  @media all and (max-width: 768px) {
        width: 100%;
        height: 100vh;
        overflow-y: scroll;
        overflow-x: scroll;
  }
`;

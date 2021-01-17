import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  height: 100px;
  display: flex;
  align-items: center;
  background: #fff;
  max-width: 50rem;
  width: 100%;
  font-weight: 500;
  flex-direction: column;
  border-top: 4px solid #fb1;
  justify-content: center;
`;

const FooterText = styled.p`
  color: #333;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Desenvolvido por Matheus Felizardo.</FooterText>
      <FooterText>Direitos reservados à Origamid.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;

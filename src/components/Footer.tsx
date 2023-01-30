import styled from "styled-components"

const FooterContainer = styled.footer`
  background-color: rgb(238,238,238);
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 34px;
  bottom: 0;

  p {
    font-size: 12px;
    line-height: 15px;
    font-weight: 400;
  }
`;


export default function Footer() {
  return (
    <FooterContainer>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </FooterContainer>  

  )
}
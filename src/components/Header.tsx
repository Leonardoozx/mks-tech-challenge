import styled from "styled-components";
import CartButton from "./CartButton";

const HeaderContainer = styled.header`
  display: flex;
  color: white;
  width: screen;
  height: 55px;
  align-items: center;
  justify-content: center;
`;

const Article = styled.article`
  display: flex;
  width: 90%;
  height: 75%;
  align-items: center;
  justify-content: space-between;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  height: fit-content;
`;

const P = styled.p`
  margin-left: 5px;
  font-weight: 300;
  font-size: 16;
  align-self: end;
  margin-bottom: 6px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

export default function Header() {
  return (
    <HeaderContainer className="bg-primary-color">

      <Article>
        <Div>
          <Title>MKS</Title>
          <P>Sistemas</P>
        </Div>

        <CartButton />

      </Article>
    </HeaderContainer>
  )
}
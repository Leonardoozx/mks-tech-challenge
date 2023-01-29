import Image from "next/image";
import styled from "styled-components";

import cartIcon from '../images/cartIcon.svg';

const CartIconSection = styled.button`
  display: flex;
  width: 52px;
  height: 26px;
  align-items: center;
  padding: 5px;
  gap: 8px;
  border-radius: 8px;
`;

export default function CartButton() {
  return (
    <CartIconSection>
      <Image src={cartIcon} alt="cart icon" width={15}></Image>
      <span style={{ color: 'black' }}>0</span>
    </CartIconSection>
  )
}
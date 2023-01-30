import { useAppDispatch } from "@/store/hooks";
import { openCart, selectCartItems } from "@/store/reducers/cartItemsReducer";
import Image from "next/image";
import { useSelector } from "react-redux";
import styled from "styled-components";

import cartIcon from '../images/cartIcon.svg';

const CartIconButtonContainer = styled.button`
  display: flex;
  width: 52px;
  height: 26px;
  align-items: center;
  padding: 5px;
  gap: 8px;
  border: none;
  border-radius: 8px;
`;

export default function CartButton() {
  const dispatch = useAppDispatch();

  const { itemsInTheCart } = useSelector(selectCartItems);

  return (
    <CartIconButtonContainer onClick={() => dispatch(openCart())}>
      <Image src={cartIcon} alt="cart icon" width={15}></Image>
      <span style={{ color: 'black' }}>{itemsInTheCart.length}</span>
    </CartIconButtonContainer>
  )
}
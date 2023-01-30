import { useAppDispatch } from "@/store/hooks";
import { removeItemsFromCart } from "@/store/reducers/cartItemsReducer";
import Image from "next/image";
import styled from "styled-components";
import { ItemPrice, ItemsCardInterface } from "./ItemsCard";
import CartQuantity from "./CartQuantity";

const ItemsCardContainer = styled.div`
  border-radius: 8px;
  display: flex;
  background-color: white;
  margin: 10px 0 25px 0;
  position: relative;
  flex-direction: column;
  height: 220px;
  align-items: center;

  @media screen and (min-width: 920px) {
    height: 95px;
    flex-direction: row;
  }

  img {
    width: 50%;
    height: 50%;
    
    @media screen and (min-width: 920px) {
      width: 25%;
      margin: 0 15px ;
    }
  }

  .title {
    margin: 13px 0;
    
    @media screen and (min-width: 920px) {
      margin-right: 0px;
      width: 120px;
      text-align: center;
    }
  }

  .button {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background-color: black;
    color: white;
    border-radius: 0px 4.5px 0px 8px;
    width: 25px;
    height: 25px;
  }
`;

const QuantityAndItemTotalPrice = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: 920px) {
    justify-content: space-around;
    width: 70%;
  }
`;

export default function ItemsInTheCartCard({ item }: ItemsCardInterface) {
  const dispatch = useAppDispatch();
  return (
    <ItemsCardContainer>
      <Image width={1000} height={1000} src={item.photo} alt="item pic" />

      <p className="title">{item.name}</p>

      <QuantityAndItemTotalPrice>
        <CartQuantity quantity={item.quantity!} id={item.id} />
        <ItemPrice>R${(Number(item.price) * item.quantity!).toFixed(0)}</ItemPrice>
      </QuantityAndItemTotalPrice>

      <button className="button" type="button" onClick={() => dispatch(removeItemsFromCart(item.id))}>X</button>
    </ItemsCardContainer>
  )
}
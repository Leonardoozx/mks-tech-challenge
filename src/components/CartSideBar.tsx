import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { closeCart, removeItemsFromCart, selectCartItems } from "@/store/reducers/cartItemsReducer";
import styled from "styled-components";
import ItemsInTheCartCard from "./ItemsInTheCartCard";

const CartSideBarForm = styled.form`
  position: absolute;
  width: 280px;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 10;

  @media screen and (min-width: 600px) {
    width: 320px;
  }

  @media screen and (min-width: 920px) {
    width: 500px;
  }
`;

const BuyButton = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 66px;
  background-color: black;
  color: white;
  border: none;
  font-size: 20px;
  line-height: 15px;
  font-weight: 700;
  font-family: sans-serif;
`;

const TitleContainer = styled.div`
  display: flex;
  margin: 20px;
  justify-content: space-between;
  align-items: center;

  p {
    font-size: 27px;
    line-height: 33px;
    font-weight: 700;
    width: 160px;
    color: white;
  }

  button {
    border-radius: 100%;
    border: none;
    color: rgb(15,82,186);
    text-align: center;
    width: 40px;
    height: 40px;
    font-size: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
  }
`;

const TotalPrice = styled.div`
  margin-left: 5%;
  color: white;
  display: flex;
  justify-content: space-around;
  width: 90%;
  position: absolute;
  bottom: 90px;

  p {
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
  }
`;

const ItemsContainer = styled.div`
  overflow-y: auto;
  height: 65vh;
  margin: 0 auto;
  width: 90%;

  ::-webkit-scrollbar {
    width: 0px;
  }
`;

export default function CartSideBar() {
  const { itemsInTheCart, totalPrice } = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();

  const onFormSubmit = () => {
    itemsInTheCart.forEach(({ id }) => dispatch(removeItemsFromCart(id)));
    window.alert('COMPRA CONCLUÍDA COM SUCESSO!')
  }
  return (
    <CartSideBarForm className="bg-primary-color">
      <TitleContainer>
        <p>Carrinho de compras</p>
        <button type="button" onClick={() => dispatch(closeCart())}>x</button>
      </TitleContainer>

      {/* for no adding more lines to the ItemsCard component, I decided to create a new component */}
      <ItemsContainer>
        {itemsInTheCart?.map((item) => (
          <ItemsInTheCartCard key={item.id} item={item} />
        ))}
      </ItemsContainer>

      <TotalPrice>
        <p>Total: </p>
        <p>R${itemsInTheCart.length ? totalPrice : 0}</p>
      </TotalPrice>

      <BuyButton onClick={onFormSubmit} type="button">FINALIZAR COMPRA</BuyButton>
    </CartSideBarForm>
  )
}
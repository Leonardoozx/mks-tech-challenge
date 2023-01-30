import { useAppDispatch } from "@/store/hooks";
import { minusItemQuantity, plusItemQuantity } from "@/store/reducers/cartItemsReducer";
import styled from "styled-components"

const QuantityContainer = styled.div`
  display: flex;
  color: black;
  flex-direction: column;
  width: 50px;
  height: fit-content;
  width: 100px;
  
  p {
    display: none;

    @media screen and (min-width: 920px){
      display: block;
    }
  }
`;

const PlusAndMinusContainer = styled.div`
  display: flex;
  border: 0.5px solid grey;
  border-radius: 8px;

  span {
    width: 40px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    border-left: 1px solid lightgrey;
    border-right: 1px solid lightgrey;
  }

  button {
    color: black;
    font-size: 26px;
    width: 100%;
    border: none;
    background-color: white;
  }

  .minus-button {
    border-radius: 8px 0 0 8px;
  }
  
  .plus-button {
    border-radius: 0 8px 8px 0;
  }
`;

export default function CartQuantity({ id, quantity }: { id: number, quantity: number }) {
  const dispatch = useAppDispatch();
  return (
    <QuantityContainer>
      <p>Qtd.</p>
      <PlusAndMinusContainer>
        <button
          className="minus-button"
          type="button"
          onClick={() => dispatch(minusItemQuantity(id))}
        >
          -
        </button>
        <span>{quantity}</span>
        <button
          className="plus-button"
          type="button"
          onClick={() => dispatch(plusItemQuantity(id))}
        >
          +
        </button>
      </PlusAndMinusContainer>
    </QuantityContainer>
  )
}
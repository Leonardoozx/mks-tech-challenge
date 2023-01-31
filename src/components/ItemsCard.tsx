import { Items } from "@/interfaces/itemsInterfaces";
import Image from "next/image";
import styled from "styled-components";
import { useAppDispatch } from "@/store/hooks";
import { putItemsInTheCart } from "@/store/reducers/cartItemsReducer";
import { useEffect, useState } from "react";

const StockItemsContainer = styled.div`
  width: 251px;
  height: 360px;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216); 
  position: relative;
  overflow: hidden;
  margin: 40px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const ItemNameAndPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
  margin: 8px 0;
  align-items: center;
`;

const ItemName = styled.p`
  width: 50%;
  text-align: center;
  line-height: 19px;
  font-size: 16px;
  font-weight: 400;
`;

export const ItemPrice = styled.p`
  align-self: center;
  border-radius: 5px;
  background-color: #373737;
  color: white;
  font-weight: 700;
  font-size: 15px;
  width: 84px;
  height: 35px;
  display: flex;
  align-items: center;
  line-height: 16px;
  justify-content: center;
`;

const ItemDescription = styled.p`
  width: 85%;
  font-size: 12px;
  line-height: 12px;
  color: rgba(44, 44, 44, 1);
  font-weight: 100;
  margin-top: 5px;
`;

const BuyButton = styled.button`
  transition: 1s;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 36px;
  color: white;
  border: none;
  border-radius: 0px 0px 8px 8px;

  .added-to-cart {
    transition: 1s;
    background-color: #0d3e86;
    width: 100%;
    height: 100%;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 45%;
  text-align: center;

  img {
    width: 75%;
    height: 100%;
  }
`;

const BuyIconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  gap: 10px;

  img {
    width: 18px;
    height: 19px;
    left: 25%;
  }

  p {
    font-weight: 600;
  }
`;

export interface ItemsCardInterface {
  item: Items;
}

export default function ItemsCard({ item }: ItemsCardInterface) {
  const dispatch = useAppDispatch();

  const [ isInTheCart, setIsInTheCart ] = useState(false);

  useEffect(() => {
    if (isInTheCart === true) {
      // setTimeout(() => setIsInTheCart(false), 2500);
      setTimeout(() => {
        setIsInTheCart(false)
      }, 2500);
    }
  }, [ isInTheCart ])

  const onBuyButtonClick = () => {
    dispatch(putItemsInTheCart(item))
    setIsInTheCart(true)
    console.log(isInTheCart)
  }

  return (
    <>

      <StockItemsContainer>
        <ImageContainer>
          <Image width={1000} height={1000} src={item.photo} alt="item pic" />
        </ImageContainer>

        <ItemNameAndPriceContainer>
          <ItemName>{item.name}</ItemName>
          <ItemPrice>R${Number(item.price).toFixed(0)}</ItemPrice>
        </ItemNameAndPriceContainer>

        <ItemDescription>{item.description}</ItemDescription>

        <BuyButton
          onClick={onBuyButtonClick}
          className={isInTheCart ? "added-to-cart" : "bg-primary-color"}
          type="button"
        >
          {/* buyIcon = https://imgur.com/Rgq69UF.png */}
          <BuyIconContainer>
            {isInTheCart ?
              <p className="added-to-cart">Item adicionado ao carrinho!</p>
              : (
                <>
                  <Image width={50} height={50} src="https://imgur.com/Rgq69UF.png" alt="buy icon" />
                  <p>COMPRAR</p>
                </>
              )
            }
          </BuyIconContainer>
        </BuyButton>
      </StockItemsContainer>
    </>
  )
}
import SkeletonLoading from "@/components/Skeleton"
import { ItemsPayload } from "@/interfaces/itemsInterfaces"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchItems } from "@/store/reducers/stockItemsReducer"
import { useEffect, useState } from "react"
import { selectItems } from "@/store/reducers/stockItemsReducer"
import ItemsCard from "@/components/ItemsCard"
import styled from "styled-components"
import { selectCartItems } from "@/store/reducers/cartItemsReducer"
import CartSideBar from "@/components/CartSideBar"

const ItemsContainer = styled.div`
  width: 90%;
  margin: 100px auto;
  border-radius: 8px;
  margin: 40px auto 0 auto;
  max-width: 1200px;
  margin-bottom: 80px;

  @media screen and (min-width: 920px) {
      display: flex;
      flex-wrap: wrap;
  }
`;

export default function Home() {
  const dispatch = useAppDispatch();
  const [ isLoading, setIsLoading ] = useState(true);
  
  // stockItemsReducer
  const { items } = useAppSelector(selectItems);

  // cartItemsReducer
  const { isOpen } = useAppSelector(selectCartItems)

  useEffect(() => {
    const payload: ItemsPayload = {
      page: 1,
      rows: 8,
      sortBy: 'id',
      orderBy: 'DESC'
    };
    dispatch(fetchItems({ ...payload }))
    if (items) return setIsLoading(false)
  }, [])

  return (
    <div>
      {
        isLoading ? (
          <SkeletonLoading />
        ) :
          (
            <ItemsContainer>
              {items?.map((item) => (
                <ItemsCard key={item.id} item={item} />
              ))}
            </ItemsContainer>
          )
      }
      {
        isOpen && <CartSideBar />
      }
    </div>
  )
}

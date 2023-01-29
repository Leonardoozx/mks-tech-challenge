import Header from "@/components/Header"
import HeadPageInfo from "@/components/HeadPageInfo"
import SkeletonLoading from "@/components/Skeleton"
import { ItemsPayload } from "@/interfaces/items"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchItems } from "@/store/reducers/stockItemsReducer"
import { useEffect, useState } from "react"
import { selectItems } from "@/store/reducers/stockItemsReducer"
import ItemsCard from "@/components/ItemsCard"
import styled from "styled-components"

const ItemsContainer = styled.div`
  width: 90%;
  margin: 100px auto;
  border-radius: 8px;
  margin: 40px auto 0 auto;
`;

export default function Home() {
  const dispatch = useAppDispatch();
  const [ isLoading, setIsLoading ] = useState(true);
  const items = useAppSelector(selectItems);

  useEffect(() => {
    const payload: ItemsPayload = {
      page: 1,
      rows: 8,
      sortBy: 'id',
      orderBy: 'DESC'
    };
    dispatch(fetchItems({ ...payload }))
    if (items.stockItems) return setIsLoading(false)
  }, [ dispatch, items ])

  return (
    <div>
      {
        isLoading ? (
          <SkeletonLoading />
        ) :
          (
            <ItemsContainer>
              {items?.stockItems.map((item) => (
                <ItemsCard key={item.id} item={item} />
              ))}
            </ItemsContainer>
          )
      }
    </div>
  )
}

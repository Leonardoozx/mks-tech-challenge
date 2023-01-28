import Header from "@/components/Header"
import HeadPageInfo from "@/components/HeadPageInfo"
import SkeletonLoading from "@/components/Skeleton"
import { ItemsPayload } from "@/interfaces/items"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import { fetchItems } from "@/store/reducers/stockItemsReducer"
import { useEffect, useState } from "react"
import { selectItems } from "@/store/reducers/stockItemsReducer"

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
      <HeadPageInfo />
      <Header />
      {
        isLoading ? (
          <SkeletonLoading />
        ) :
          (
            <>
              {items?.stockItems.map((item, index) => (
                <div key={index}>
                  <p>{item.id}</p>
                  <p>{item.brand}</p>
                  <p>{item.createdAt}</p>
                  <p>{item.description}</p>
                  <p>{item.name}</p>
                  <p>{item.photo}</p>
                  <p>{item.price}</p>
                  <p>{item.updatedAt}</p>
                </div>
              ))}
            </>
          )
      }

      
    </div>
  )
}

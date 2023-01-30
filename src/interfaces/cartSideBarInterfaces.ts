import { Items } from "./itemsInterfaces";

export interface CartSideBar {
  isOpen: Boolean;
  itemsInTheCart: Items[];
  totalPrice: number;
}

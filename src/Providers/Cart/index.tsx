import { createContext, useContext, useState, ReactNode } from "react";

interface CartProviderProps {
  children: ReactNode;
}
interface ProductI {
  title: string;
  description: string;
  price: number;
  image: string;
  id: number;
}

interface CartProviderData {
    cartList: ProductI[];

    addProduct: (product: ProductI) => void;

    deleteProduct: (id: number) => void;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};


const CartProvider = ({ children }: CartProviderProps) => {
  const [cartList, setCartList] = useState<ProductI[]>([]);

  const addProduct = (newProduct: ProductI) => {
    setCartList([...cartList, newProduct]);
  };

  const deleteProduct = (id: number) => {
    const newCart = cartList.filter((item) => item.id !== id);
    setCartList(newCart);
  };

  return(
      <CartContext.Provider value={{cartList, addProduct, deleteProduct}}>
          {children}
      </CartContext.Provider>
  )
};

export {useCart, CartProvider};

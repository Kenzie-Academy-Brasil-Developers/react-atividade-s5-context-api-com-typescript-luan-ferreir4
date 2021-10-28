import { useCart } from "../../Providers/Cart";
import { Card } from "../../styles/PtdCardStyles";

interface ProductI {
  product: {
    title: string;
    description: string;
    price: number;
    image: string;
    id: number;
  };
}

export const CartCard = ({ product }: ProductI) => {
  const { image, title, price, id } = product;
  const { deleteProduct } = useCart();

  const handleDeletePdt = (pdtId: number) => {
    deleteProduct(pdtId);
  };

  return (
    <Card onCart={true}>
      <div className="content">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>R$ {price}</p>
        <button onClick={() => handleDeletePdt(id)}>Remover</button>
      </div>
    </Card>
  );
};

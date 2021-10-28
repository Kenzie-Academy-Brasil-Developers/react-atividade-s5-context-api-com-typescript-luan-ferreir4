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

export const ProductCard = ({ product }: ProductI) => {
  const { image, title, price, description } = product;
  const { addProduct } = useCart();

  const handleAddPdt = () => {
    addProduct(product);
  };

  return (
    <Card onCart={false}>
      <div className="content">
        <img src={image} alt={title} />
        <h4>{title}</h4>
        <span>R$ {price}</span>
        <p>{description}</p>
        <button onClick={handleAddPdt}>Adicionar ao carrinho</button>
      </div>
    </Card>
  );
};

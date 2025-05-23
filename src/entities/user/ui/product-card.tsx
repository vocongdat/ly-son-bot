export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
};

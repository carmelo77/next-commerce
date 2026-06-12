import { ProductGrid, Title } from "@/components";
import { initialData } from "@/seed/seed";

const products = initialData.products;

export default function Home() {
  return (
    <div>
      <main>
        <Title
          title="Tienda"
          subtitle="Todo lo que buscas en un solo lugar"
          className="mb-2"
        />
        <ProductGrid
          products={products}
        />
      </main>
    </div>
  );
}

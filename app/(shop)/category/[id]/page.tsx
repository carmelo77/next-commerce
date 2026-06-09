import Image from "next/image";

import { initialData } from "@/app/seed";
import { notFound } from "next/navigation";
import { Title } from "@/components";
import CategoryGrid from "@/components/category/category-grid/category-grid";

const seedProducts = initialData.products;

interface Props {
    params: Promise<{
        id: string;
    }>
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params;

    const products = seedProducts.filter(product => product.gender === id);

    // if (id === 'kids') {
    //     notFound();
    // }

    return (
        <div className="px-5 sm:px-10">
            <Title
                title={`Artículos de ${id}`}
                subtitle="Todo lo que buscas en un solo lugar"
                className="mb-2"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-7">
                {products.map((product, _) => (
                    <CategoryGrid 
                        key={product.slug} 
                        product={product} 
                    />
                ))}
            </div>

        </div>
    );
}
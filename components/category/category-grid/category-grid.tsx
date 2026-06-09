import { Product } from "@/interfaces"
import Image from "next/image"

interface Props {
    product: Product
}

const CategoryGrid = ({ product }: Props) => {
    return (
        <>
            <div
                className="w-full h-[480px] bg-gray-50 rounded-2xl relative overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer hover:-translate-y-1 transition-all duration-300 group"
            >
                <Image
                    src={`/products/${product.images[0]}`}
                    alt={product.title}
                    width={600}
                    height={800}
                    quality={90}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 pt-16">
                    <h3 className="text-base font-bold text-white leading-tight">{product.title}</h3>
                    <p className="text-white/80 font-medium mt-1">${product.price}</p>
                </div>
            </div>
        </>
    )
}

export default CategoryGrid
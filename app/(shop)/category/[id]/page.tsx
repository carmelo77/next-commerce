import { notFound } from "next/navigation";

interface Props {
    params: Promise<{
        id: string;
    }>
}

export default async function CategoryPage({ params }: Props) {
    const { id } = await params;

    if (id === 'kids') {
        notFound();
    }

    return (
        <div className="px-5 sm:px-10">
            <h1>Category page {id}</h1>
        </div>
    );
}
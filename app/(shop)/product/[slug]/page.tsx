interface Props {
    params: Promise<{
        slug: string;
    }>
}

export default async function ProductPage({ params }: Props) {
    const { slug } = await params;
    return (
        <div className="px-5 sm:px-10">
            <h1>Product page {slug}</h1>
        </div>
    );
}
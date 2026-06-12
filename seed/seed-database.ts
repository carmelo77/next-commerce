import prisma from '../prisma/client';
import { initialData } from './seed';

async function main() {
  // 1. Borrar registros previos
  // await Promise.all([
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  // ]);

  const { categories, products } = initialData;

  // Categorías
  const categoriesData = categories.map(name => ({ name }));
  await prisma.category.createMany({ data: categoriesData });

  const categoriesDB = await prisma.category.findMany();

  const categoryMap = categoriesDB.reduce((map, category) => {
    map[category.name.toLowerCase()] = category.id;
    return map;
  }, {} as Record<string, string>);

  // Productos
  const productsData = products.map(product => {
    const { images, type, ...rest } = product;

    return {
      ...rest,
      categoryId: categoryMap[type],
    };
  });

  await prisma.product.createMany({ data: productsData });

  // Crear imágenes
  await Promise.all(productsData.map(async (product) => {
    const { images } = initialData.products.find(p => p.slug === product.slug)!;
    const productDB = await prisma.product.findUnique({ where: { slug: product.slug } });

    if (productDB) {
      const imagesData = images.map(image => ({
        url: image,
        productId: productDB.id
      }));
      await prisma.productImage.createMany({ data: imagesData });
    }
  }));

  console.log('Seeder ejecutado correctamente!');
}

(async () => {
  if (process.env.NODE_ENV === 'production') return;

  await main();
})();

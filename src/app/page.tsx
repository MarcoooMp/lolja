import Stripe from 'stripe';
import Product from './components/product';
import { ProductType } from '@/types/productType';

async function getProducts(): Promise<ProductType[]> {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-04-10',
    });

    const products = await stripe.products.list();
    const formattedProducts = await Promise.all(
      products.data.map(async (product) => {
        const price = await stripe.prices.list({
          product: product.id,
        });

        const firstPrice = price.data[0] || {}; // Tratamento para valores indefinidos
        const firstImage = product.images[0] || ''; // Tratamento para imagens indefinidas

        return {
          id: product.id,
          price: firstPrice.unit_amount || 0,
          name: product.name,
          image: firstImage,
          currency: firstPrice.currency || 'usd', // Definir valor padrão
        };
      })
    );

    return formattedProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; // Retorna uma lista vazia em caso de erro
  }
}

export default async function Home() {
  const products = await getProducts();

  if (products.length === 0) { // Verifica se a lista de produtos está vazia
    return <div>Erro ao carregar produtos ou nenhum produto disponível.</div>;
  }

  return (
    <div className='max-w-7xl mx-auto pt-8 px-8 xl:px-0'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-10 xl:gap-6'>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

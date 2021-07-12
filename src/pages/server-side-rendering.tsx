import { GetServerSideProps } from 'next';
import { Title, MessageAPI, Message, DivPage, DivProducts } from '@/styles/pages/server-side-rendering';

import SEO from '@/components/SEO';

interface IProduct {
  id: string;
  title: string;
}

interface IPageProps {
  products: IProduct[];
}

export default function Home({ products }: IPageProps) {
  return (
    <DivPage>
      <SEO 
        title="Server Side Rendering" 
        image="image.png"
        shouldExcludeTitleSuffix={false}
      />

      <section>
        <Title>Server Side Rendering with Next.js</Title>
        <MessageAPI>Considering our fake api with a 2 seconds delay:</MessageAPI>
        <Message>- The page and products are loaded on the server side.</Message>
        <Message>- Page and products are load together after 2 seconds.</Message>
        <Message>- If JavaScript is disabled, everything keeps working.</Message>
        <Message>- Page with SEO component. (Search Engine Optimization)</Message>
        
        <DivProducts>
          <h1>Products List</h1>
          <ul>
            {products.map(product => {
              return (
                <li key={product.id}>
                  {product.title}
                </li>
              );
            })}
          </ul>  
        </DivProducts>
      </section>
    </DivPage>
  )
}

export const getServerSideProps: GetServerSideProps<IPageProps> = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  const products = await response.json();

  return {
    props: {
      products: products
    }
  }
}
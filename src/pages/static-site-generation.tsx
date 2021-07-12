import { GetStaticProps } from "next";
import { Title, MessageAPI, Message, DivPage, DivProducts } from '@/styles/pages/static-site-generation';

import SEO from '@/components/SEO';

interface IProduct {
   id: string;
   title: string;
}

interface IPageProps {
   products: IProduct[];
}

export default function StaticSiteGeneration({ products }: IPageProps) {
   return (
      <DivPage>
         <SEO 
            title="Static Site Generation" 
            image="image.png"
            shouldExcludeTitleSuffix={false}
         />

         <section>
            <Title>Static Site Generation with Next.js</Title>
            <MessageAPI>Considering our fake api with a 2 seconds delay:</MessageAPI>
            <Message>- Page with static content.</Message>
            <Message>- New request is made to the server, only after 30 seconds.</Message>
            <Message>- During 30 seconds, the same content is returned.</Message>
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

export const getStaticProps: GetStaticProps<IPageProps> = async (context) => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
   const products = await response.json();

   return {
      props: {
         products,
      },
      revalidate: 30,
   }
}
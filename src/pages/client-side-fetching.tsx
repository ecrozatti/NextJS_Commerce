import { useEffect, useState } from 'react';
import { Title, MessageAPI, Message, DivPage, DivProducts } from '@/styles/pages/client-side-fetching';

import SEO from '@/components/SEO';

interface IProduct {
   id: string;
   title: string;
}

export default function ClientSideFetching() {
   const [products, setProducts] = useState<IProduct[]>([]);

   useEffect(() => {
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`).then(response => {
         response.json().then(data => {
            setProducts(data);
         })
      })
   }, []);

   return(
      <DivPage>
         <SEO 
            title="Client Side Fetching" 
            image="image.png"
            shouldExcludeTitleSuffix={false}
         />

         <section>
            <Title>Client Side Fetching with Next.js</Title>
            <MessageAPI>Considering our fake api with a 2 seconds delay:</MessageAPI>
            <Message>- The products are loaded on the client side.</Message>
            <Message>- The page loads instantly and the products after 2 seconds.</Message>
            <Message>- If JavaScript is disabled, the products are not loaded.</Message>
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
   );
}
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { client } from '@/lib/prismic';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';

import { Title, DivPage, Button } from '@/styles/pages/Home';
import SEO from '@/components/SEO';


interface IHomeProps {
  search: Document[];
}

export default function Search({ search }: IHomeProps) {
  return (
    <DivPage>
      <SEO 
        title="NestJS-Commerce, your best e-commerce" 
        image="image.png"
        shouldExcludeTitleSuffix={false}
      />

      <section>
          <h1>Products List</h1>
          <ul>
            {search.map(recommendedProduct => {
              return (
                <li key={recommendedProduct.id}>
                  <Link href={`/catalog/products/${recommendedProduct.uid}`}>
                     <a>
                        {PrismicDOM.RichText.asText(recommendedProduct.data.title)}
                     </a>
                  </Link>
                </li>
              );
            })}
          </ul>  
      </section>
    </DivPage>
  )
}

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const recommendedProducts = await client().query([
    Prismic.Predicates.at('document.type', 'product')
  ]);

   return {
      props: {
         search: recommendedProducts.results
      }
   }
} 
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { client } from '@/lib/prismic';
import Prismic from 'prismic-javascript';
import { Document } from 'prismic-javascript/types/documents';
import PrismicDOM from 'prismic-dom';

import { Title, DivPage, Button } from '@/styles/pages/Home';
import SEO from '@/components/SEO';


interface IHomeProps {
  recommendedProducts: Document[];
  categories: Document[];
}

export default function Home({ recommendedProducts, categories }: IHomeProps) {
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
            {recommendedProducts.map(recommendedProduct => {
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

      <section>
          <h1>Categories List</h1>
          <ul>
            {categories.map(category => {
              return (
                <li key={category.id}>
                  <Link href={`/catalog/categories/${category.uid}`}>
                     <a>
                        {PrismicDOM.RichText.asText(category.data.title)}
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

  	const categories = await client().query([
      Prismic.Predicates.at('document.type', 'category')
	]);

   return {
      props: {
         recommendedProducts: recommendedProducts.results,
			categories: categories.results
      }
   }
} 
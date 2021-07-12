import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
import { Title } from '@/styles/pages/Home';

interface IProduct {
   id: string;
   title: string;
   slug: string;
}

interface IProductProps {
   products: IProduct[];
}

export default function LazyLoad({ products }: IProductProps) {
   const router = useRouter();

   return (
      <div>
         <Title>Static Site Generation with Next.js - getStaticPaths and Fallback: false</Title>

         <h1>{router.query.slug}</h1>

         <ul>
            {products.map(product => {
               return (
               <li key={product.id}>
                  {product.title}
               </li>
               );
            })}
         </ul>
      </div>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
   const products = await response.json();

   const paths = products.map(product => {
      return {
         params: { slug: product.slug }
      }
   })

   return {
      paths,
      fallback: false,
   }
}

export const getStaticProps: GetStaticProps<IProductProps> = async (context) => {
   const { slug } = context.params;

   const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products?slug=${slug}`);
   const products = await response.json();

   return {
      props: {
         products,
      },
      revalidate: 60,
   }
}
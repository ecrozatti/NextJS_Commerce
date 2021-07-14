import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router';
import Image from 'next/image';

import { client } from "@/lib/prismic";
import { Document } from  'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom';

interface IProductProps {
   product: Document;
}

export default function Product({ product }: IProductProps ) {
   const router = useRouter();

   if (router.isFallback) {
      return <p>Loading...</p>
   }

   return (
      <div>
         <h1>
            {PrismicDOM.RichText.asText(product.data.title)}
         </h1>

         <Image src={product.data.thumbnail.url} width={400} height={400} alt={product.data.title} />

         {/* transforma texto em HTML */}
         <div dangerouslySetInnerHTML={{ __html: PrismicDOM.RichText.asText(product.data.description) }}></div>

         <p>Price: ${product.data.price}</p>
      </div>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   return {
      paths: [],
      fallback: true,
   }
}

export const getStaticProps: GetStaticProps<IProductProps> = async (context) => {
   const { slug } = context.params;

   const product = await client().getByUID('product', String(slug), {});

   return {
      props: {
         product,
      },
      revalidate: 5,
   }
}
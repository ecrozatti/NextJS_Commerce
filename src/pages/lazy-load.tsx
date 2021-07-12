import dynamic from 'next/dynamic';
import { useState } from "react";
import { Title, Message, DivPage, Button } from '@/styles/pages/lazy-load';

import SEO from '@/components/SEO';

const DynamicComponent = dynamic(
   () => import('@/components/DynamicComponent'),
   // { loading: () => <p>Loading...</p>, ssr: false }
);  

export default function LazyLoad() {
   const [isAddComponent, setIsAddComponent] = useState(false);

   function handleShowComponent() {
      setIsAddComponent(!isAddComponent);
   }

   return (
      <DivPage>
         <SEO 
            title="Lazy Load" 
            shouldExcludeTitleSuffix={false}
         />

         <section>
            <Title>Lazy Load with Next.js</Title>
            <Message>- The component is dynamically loaded</Message>
            <Button onClick={handleShowComponent}>Show Component</Button>
            { isAddComponent && <DynamicComponent /> }
         </section>
      </DivPage>
   );
}
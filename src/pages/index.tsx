import Link from 'next/link';
import { Title, DivPage, Button } from '@/styles/pages/Home';

import SEO from '@/components/SEO';

export default function Home() {
  return (
    <DivPage>
        <SEO 
          title="Home" 
          shouldExcludeTitleSuffix={false}
        />

        <Title>Next.js Data Fetching</Title>
        
        <Link href="/client-side-fetching">
          <Button>Client Side Fetching</Button>
        </Link>

        <Link href="/server-side-rendering">
          <Button>Server Side Rendering</Button>
        </Link>

        <Link href="/static-site-generation">
          <Button>Static Site Generation</Button>
        </Link>

        <Title>Extras</Title>

        <Link href="/dynamic-import-lib">
          <Button>Dynamic Import Lib</Button>
        </Link>

        <Link href="/lazy-load">
          <Button>Lazy Load</Button>
        </Link>

        <Link href="/invalid-url">
          <Button>Custom 404 Error</Button>
        </Link>

    </DivPage>
  )
}
import { Title, DivPage, Button } from '@/styles/pages/dynamic-import-lib';
// import math from '../lib/math'

import SEO from '@/components/SEO';

export default function DynamicImportLib() {
  async function handleSum() {
    const math = (await import('../lib/math')).default;   // --> // The lib uses "export default"

    alert("SUM ----> 3 + 7 = " + math.sum(3, 7));
  }

  return (
    <DivPage>
      <SEO 
        title="Dynamic Import" 
        shouldExcludeTitleSuffix={false}
      />
      <Title>Dynamic Import Lib</Title>
      <Button onClick={handleSum}>Click here to import</Button>
    </DivPage>
  )
}
import { Title, Message, DivPage } from '@/styles/pages/404';

export default function NotFound() {
   return (
      <DivPage>
         <Title>404 - Page not found</Title>
         <Message>This page could not be found.</Message>
      </DivPage>
   )
}
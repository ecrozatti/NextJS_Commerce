import styled from 'styled-components';

export const DivPage = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 16px;

   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
   color: #8257e5;
   padding: 32px 0 0 0;
`;

export const Button = styled.button`
   padding: 0.5rem;
   margin-top: 0.4rem;
   font-size: 1.2rem;
   background-color: #74a342;
   border-radius: 1.5rem;
   width: 100%;
   font-weight: 500;
   color: white;
   text-decoration: none;
   cursor: pointer;
   
   :hover {
      background-color: #1f03;
   }
`;

// export const Message = styled.h3`
//    color: #74a352;
// `;
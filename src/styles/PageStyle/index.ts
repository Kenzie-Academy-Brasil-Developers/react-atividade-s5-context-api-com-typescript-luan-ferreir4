import styled from "styled-components";

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: wheat;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  .pdts,
  .cart {
    width: 88vw;
    padding: 0 15px;
    margin: 10px 0;
    background-color: white;
    border-radius: 20px;
    h2{
        font-size: 1.8rem;
        color: #565656;
    }
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;

    .pdts {
      width: 55vw;
      background-color: white;
      margin: 10px 0 20px;
    }
    .cart {
      width: 32vw;
      background-color: white;
      margin: 10px 0 20px;
    }
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 750px) {
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: center;
      background-color: white;
  }
`;
export const CartListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 750px) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      background-color: white;
  }
`;

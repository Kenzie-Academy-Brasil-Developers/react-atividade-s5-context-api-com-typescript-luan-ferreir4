import styled, {css} from "styled-components";
interface CardProps{
  onCart: boolean;
}
export const Card = styled.section<CardProps>`
  position: relative;
  height: 445px;
  width: 80vw;
  max-width: 310px;
  padding: 8px 10px;
  margin: 24px 18px;
  background-color: #f5f5f5;
  color: #565656;
  border: 3px solid orange;
  border-radius: 5px;

  .content {
    position: absolute;
    width: 90%;
    bottom: 7%;
    left: 50%;
    transform: translate(-50%);
    img {
      width: 100px;
    }
    h4 {
      margin-bottom: 0;
      font-size: 1.2rem;
    }
    span {
      color: #e47813;
      font-size: 1.2rem;
    }
    p {
      font-size: 1rem;
    }

    button {
      padding: 12px 18px;
      background-image: linear-gradient(to right, #fc4a1a, #f4a400);
      color: #fff;
      border: none;
      border-radius: 10px;
      cursor: pointer;
    }
  }


  ${(props)=> props.onCart &&
    css`
      height: 362px;
      .content{
        bottom: 2%;
        button{
          transition: 0.3s;
          &:hover{
            background-image: linear-gradient(#f65916, #ff2209);
            transition: 0.3s;
          }
        }
      }
    `
  }
`;
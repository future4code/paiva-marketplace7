import styled from 'styled-components';



export const theme = extendTheme({
  colors: {
    brand: {
      100: "#fe9600",
    },
  },
});

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Categories = styled.nav`
  width: 80vw;
  height: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 1rem;
`;
export const Category = styled.p`
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 5px;
  &:hover {
    background: rgb(203, 213, 223, 0.7);
  }
`;
export const Banner = styled.div`
  background-image: url(${imageBanner});
  background-size: 100% 100%;
  width: 100%;
  height: 60vh;
  padding: 2rem;
  font-weight: 800;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const ContainerText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 45%;
`;
export const Discount = styled.span`
  color: white;
  margin-top: -2rem;
  font-size: 5rem;
  text-shadow: 2px 2px 5px #333;
`;

export const Texts = styled.span`
  font-size: 4rem;
  text-shadow: 2px 2px 5px #333;
  margin-top: -2.2rem;
  color: #cbd5e0;
`;
export const Text1 = styled(Texts)``;
export const Text2 = styled(Texts)``;

export const ContainerButton = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerFilters = styled.div`
  padding: 4rem 0 1rem 0;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 500;
  margin: 2rem 0;
`;
export const Filter = styled.div`
  margin: 0 0.5rem;
`;

export const Inputs = styled.input`
  border-bottom: 2px solid black;
  margin-left: 1rem;
  width: 8rem;
  &:focus {
    border-bottom: 2px solid black;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`;
export const InputMax = styled(Inputs)``;
export const InputMin = styled(Inputs)``;

export const OrderSelect = styled.select`
  background: #40a59b;
  color: white;
  font-weight: 400;
  padding: 0.2rem 1rem;
  text-align: left;
  &:focus {
    border: 1px solid #4d4d59;
    outline: none;
    box-shadow: 0 0 0 0;
  }
`;

export const ContainerProducts = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 80vw;
`;
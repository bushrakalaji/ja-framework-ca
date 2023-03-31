import styled from "styled-components";

export const PriceComponent = styled.div``;

export const Price = styled.div`
  color: ${(props) => (props.isValid ? "initial" : "red")};
  text-decoration: ${(props) => (props.isValid ? "none" : "line-through")};
`;

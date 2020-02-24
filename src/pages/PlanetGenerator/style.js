import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  flex: 1;
  margin-bottom: 20px;
  max-height: 300px;
  max-width: 300px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #000;
`;

export const Planet = styled.span`
  font-size: 22px;
  padding-bottom: 10px;
  margin-bottom: 10px;
  text-align: center;
  flex: 1;
  width: 100%;
  color: #000;
  border-bottom: solid 1px #000;
`;

export const Info = styled.span`
  color: #000;
  margin: 0 20px;
  align-self: flex-start;
`;

export const Next = styled.button`
  color: #000;
  padding: 5px;
  font-size: 14px;
  border-width: 1px;
  border-color: #000;
  border-radius: 3px;
  outline: none;
  box-shadow: none;
  background-color: #fff;
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`;

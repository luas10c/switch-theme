import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 120px;
  right: -70px;
  transition: right 0.3s ease-in-out;

  &:hover {
    right: 0;
  }
`;

export const Wrapper = styled.div`
  background-color: #171717;

  width: 140px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button<any>`
  width: 50%;
  padding: 8px 0;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;

  ${({ isActive }) =>
    isActive &&
    `
    background-color: #3fc780;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  `}
`;

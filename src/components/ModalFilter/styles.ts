import styled, { keyframes, css } from 'styled-components';

interface ModalProps {
  isOpenProp: boolean;
  isOpenState?: boolean;
}

const transictionModalBody = keyframes`
  
  from {
    opacity: 0;
    transform: translateX(550px) 
  }
  
  to {
    opacity: 1;
    transform: translateX(0px)
  }
  
  `;

export const Container = styled.div<ModalProps>`
  display: flex;
  position: fixed;
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  -webkit-transition: all 0.5s 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;

  ${props => {
    if (
      (props.isOpenProp && props.isOpenState) ||
      (!props.isOpenProp && !props.isOpenState)
    ) {
      return css`
        opacity: 1;
        visibility: visible;
      `;
    }
    return css`
      opacity: 0;
      visibility: hidden;
    `;
  }};
`;

export const ModalBody = styled.div`
  animation: ${transictionModalBody} 1s;
  margin: 0 100px;
  max-width: 700px;
  min-width: 500px;

  background: #a3d3bf;
  border-radius: 10px;
  padding-bottom: 40px;
  border: 0;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);

  border-radius: 15px;
  border-left-color: #288c68;
  border-left-style: solid;
  border-left-width: 8px;

  section {
    margin-right: 30px;
    margin-bottom: 10px;

    strong {
      color: #222;
      margin-right: 12px;
    }

    span {
      color: #444;
    }
  }

  footer {
    display: flex;
    margin-top: 30px;
    justify-content: center;

    button {
      flex: 1;
      background: #288c68;
      border: 0;
      color: #eee;
      font-weight: 700;
      padding: 8px;
      border-radius: 6px;
      cursor: pointer;
      transition: all 0.2s 0.2s ease-in-out;

      &:hover {
        background: #257a5a;
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

export const BodyContent = styled.div`
  padding-left: 25px;
  padding-right: 25px;
  background: transparent;
`;

export const ModalHeader = styled.div`
  margin-top: 5px;
  margin-right: 5px;
  margin-bottom: 5px;
  display: flex;
  justify-content: flex-end;
  svg {
    cursor: pointer;
    transition: background-color 0.2s;
    border-radius: 50%;

    &:hover {
      background-color: #d8ffef;
    }
  }
`;

export const Label = styled.label`
  display: flex;
  margin-top: 20px;

  flex-direction: column;
  color: #444;
  font-weight: 700;
  border-bottom: 5px;
  background: #a3d3bf;
  flex-direction: row;
  font-size: 22px;
  align-items: center;

  input {
    min-width: 336px;
    border: 0;
    background: #77ba9e;
    margin-left: 15px;
    padding: 5px 10px;
    border-radius: 7px;
    border-bottom-color: #288c68;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }
`;

export const LabelSelect = styled.label`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  color: #444;
  font-weight: 700;
  border-bottom: 5px;
  background: #a3d3bf;
  flex-direction: row;
  font-size: 22px;
  align-items: center;

  select {
    font-size: 17px;
    border: 0;
    background: #77ba9e;
    margin-left: 15px;
    padding: 5px;
    border-radius: 7px;
    border-bottom-color: #288c68;
    border-bottom-style: solid;
    border-bottom-width: 3px;
  }
`;

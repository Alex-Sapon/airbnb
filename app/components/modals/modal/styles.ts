import { IoMdClose } from 'react-icons/io';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${(props) => props.theme.color.modalBG};

  &.modal-enter {
    opacity: 0;

    & > div {
      transform: translateY(50%);
      opacity: 0.5;
    }
  }

  &.modal-enter-active {
    opacity: 1;
    transition: all 400ms;

    & > div {
      transform: translateY(0);
      opacity: 1;
      transition: all 400ms;
    }
  }

  &.modal-exit {
    opacity: 1;

    & > div {
      transform: translateY(0);
      opacity: 1;
    }
  }

  &.modal-exit-active {
    opacity: 0;
    transition: all 500ms;

    & > div {
      opacity: 0.7;
      transform: translateY(50%);
      transition: all 500ms;
    }
  }
`;

export const ModalWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (${(props) => props.theme.device.tablet}) {
    width: 66%;
    height: auto;
  }

  @media (${(props) => props.theme.device.laptop}) {
    width: 50%;
  }

  @media (${(props) => props.theme.device.laptopL}) {
    width: 40%;
  }
`;

export const Content = styled.div`
  height: 100%;
  border-radius: 0;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) => props.theme.color.modalContent};
  background-color: ${(props) => props.theme.color.contentBG};

  @media (${(props) => props.theme.device.tablet}) {
    border-radius: 6px;
    height: auto;
  }
`;

export const Header = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  border-bottom: 1px solid ${(props) => props.theme.color.modalHeaderBorder};
`;

export const Close = styled(IoMdClose).attrs({
  size: 18,
})`
  position: absolute;
  top: 50%;
  left: 20px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h2`
  font-size: ${(props) => props.theme.fontSize.text_lg};
  font-weight: ${(props) => props.theme.fontWeight.semiBold};
`;

export const Body = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 15px;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  gap: 15px;
`;

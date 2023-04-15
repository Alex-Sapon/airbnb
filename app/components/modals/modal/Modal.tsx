'use client';

import React, { useEffect, useState } from 'react';

import { Button } from '@/app/components/button/Button';
import {
  Body,
  Buttons,
  Close,
  Content,
  Footer,
  Header,
  ModalContainer,
  ModalWrapper,
  Title,
} from '@/app/components/modals/modal/styles';

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
};

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionLabel,
}: ModalProps) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = () => {
    if (disabled) return;
    onClose();
  };

  const handleSubmit = () => {
    if (disabled) return;
    onSubmit();
  };

  const handleSecondaryAction = () => {
    if (disabled || !secondaryAction) return;
    secondaryAction();
  };

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <ModalContainer>
      <ModalWrapper>
        <Content>
          <Header>
            <Close onClick={handleClose} />
            <Title>{title}</Title>
          </Header>
          <Body>{body}</Body>
          <Footer>
            <Buttons>
              {secondaryAction && secondaryActionLabel && (
                <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                  onClick={handleSecondaryAction}
                  outline
                />
              )}
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
              />
              <Button
                disabled={disabled}
                label={actionLabel}
                onClick={handleSubmit}
                outline
              />
            </Buttons>
            {footer}
          </Footer>
        </Content>
      </ModalWrapper>
    </ModalContainer>
  );
};

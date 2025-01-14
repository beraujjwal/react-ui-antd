import styled, { css } from 'styled-components';
import { AppButton } from '../../../common/buttons/AppButton';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
`;

export const Btn = styled(AppButton)`
  display: flex;
  align-items: center;
  justify-content: unset !important;
  width: 100%;

  &:hover {
    background-color: rgba(var(--primary-rgb-color), 0.05);
  }

  ${(props) =>
    props.$isActive &&
    css`
      background-color: rgba(var(--primary-rgb-color), 0.05);
    `};

  & > span:first-of-type {
    padding: 0.625rem;
    border-radius: 10px;
    margin-right: 0.5rem;

    color: ${(props) => `var(--${props.color}-color)`};

    background-color: rgba(var(--primary-rgb-color), 0.05);
  }
`;

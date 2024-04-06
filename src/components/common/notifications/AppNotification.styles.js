import styled, { css } from 'styled-components';
import { AppAvatar } from '../avatars/AppAvatar';
import { AppSpace } from '../spaces/AppSpace';
import { AppTypography } from '../typographies/AppTypography';

export const NotificationIcon = styled(AppAvatar)``;

export const Title = styled(AppTypography.Text)`
  font-size: 0.875rem;
  font-weight: 600;
`;

export const Description = styled(AppTypography.Text)`
  font-size: 0.875rem;
`;

export const SpaceWrapper = styled(AppSpace)`
  background-color: var(--background-color);

  & ${Title}, span[role='img'] {
    ${(props) => {
      switch (props.type) {
        case 'error':
        case 'warning':
        case 'success':
          return css`
            color: var(--${props.type}-color);
          `;
        case 'info':
        case 'mention':
          return css`
            color: var(--primary-color);
          `;
        default:
          return '';
      }
    }}
  }

  & span[role='img'] {
    font-size: 2rem;
  }
`;

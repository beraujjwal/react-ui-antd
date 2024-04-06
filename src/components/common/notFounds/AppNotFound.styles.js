import styled from 'styled-components';
import { AppTypography } from '../typographies/AppTypography';

export const NotFoundWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  max-width: 7.5rem;
`;

export const Text = styled(AppTypography.Text)`
  font-weight: 700;
  font-size: 1.125rem;
`;

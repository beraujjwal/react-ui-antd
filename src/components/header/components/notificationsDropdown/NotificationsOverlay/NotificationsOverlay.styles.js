import styled from 'styled-components';
import { AppButton } from '../../../../common/buttons/AppButton';
import { media } from '../../../../../styles/themes/constants';
import { AppDivider } from '../../../../common/dividers/AppDivider';
import { AppTypography } from '../../../../common/typographies/AppTypography';

export const NoticesOverlayMenu = styled.div`
  max-width: 15rem;

  @media only screen and ${media.md} {
    max-width: 25rem;
  }
`;

export const SplitDivider = styled(AppDivider)`
  margin: 0 0.5rem;
`;

export const LinkBtn = styled(AppButton)`
  &.ant-btn {
    padding: 0;
    font-size: 0.875rem;
    height: unset;
    line-height: unset;
  }
`;

export const Btn = styled(AppButton)`
  width: 100%;
`;

export const Text = styled(AppTypography.Text)`
  display: block;
  text-align: center;
`;

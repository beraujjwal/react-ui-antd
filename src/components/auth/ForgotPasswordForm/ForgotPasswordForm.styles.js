import styled from 'styled-components';
import { FONT_SIZE, FONT_WEIGHT, media } from '../../../stylesthemes/constants';
import { AppButton } from '../../common/buttons/AppButton';

export const Description = styled.div`
  margin-bottom: 1.875rem;
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.regular};

  @media only screen and ${media.xs} {
    font-size: ${FONT_SIZE.xxs};
  }

  @media only screen and ${media.md} {
    font-size: ${FONT_SIZE.xs};
  }
`;

export const SubmitButton = styled(AppButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  width: 100%;
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;

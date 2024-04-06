import { AppButton } from "../../../../../../../common/buttons/AppButton";
import { media } from "../../../../../../../../styles/themes/constants";
import styled from "styled-components";

export const Btn = styled(AppButton)`
  margin: 0.5rem 0 1.5rem 0;
  width: 100%;

  @media only screen and ${media.md} {
    max-width: 10rem;
  }

  @media only screen and ${media.xl} {
    max-width: unset;
  }
`;

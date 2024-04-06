import { media } from "../../../../../../../styles/themes/constants";
import { Typography } from "antd";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 1.5rem;
`;

export const PickerLabel = styled(Typography.Text)`
  font-size: 0.875rem;

  @media only screen and ${media.md} {
    font-size: 1rem;
  }
`;

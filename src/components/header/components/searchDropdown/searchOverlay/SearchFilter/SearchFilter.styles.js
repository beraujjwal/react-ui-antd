import { Checkbox } from "antd";
import { media } from "../../../../../../styles/themes/constants";
import styled, { css } from "styled-components";

export const FilterWrapper = styled.div`
  ${(props) =>
    !props.isOpen &&
    css`
      position: absolute;
      top: 0;
      opacity: 0;
    `}

  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

export const SearchFilterCheckBox = styled(Checkbox)`
  font-size: 0.75rem;

  @media only screen and ${media.md} {
    font-size: 0.875rem;
  }
`;

import styled from "styled-components";
import {
  FONT_SIZE,
  FONT_WEIGHT,
  media,
} from "../../../../styles/themes/constants";
import { Input } from "antd";
import { AppInput } from "../inputs/AppInput";
import { AppSpace } from "../../spaces/AppSpace";

const { Search } = Input;

export const CommonSearchInput = styled(Search)`
  & .ant-input-prefix {
    margin: 0.5rem;
  }

  & .ant-input-search-button {
    height: 3.54875rem;
    box-shadow: none;
  }

  &.ant-input-search-large .ant-input-search-button {
    height: 4.36125rem;
  }

  & input {
    font-weight: 600;
    background-color: var(--background-color);

    @media only screen and ${media.md} {
      font-size: 1rem;
    }

    &::placeholder {
      font-weight: 500;
    }
  }

  .ant-input-group-addon {
    min-width: 5.5rem;
    color: var(--primary-color);
    font-weight: ${FONT_WEIGHT.semibold};
    font-size: ${FONT_SIZE.lg};
  }

  .ant-input-search-button {
    &.ant-btn .anticon {
      color: var(--primary-color);
    }
    width: 100%;
    background-color: rgba(1, 80, 154, 0.05);
    border: 1px solid var(--border-color);
    color: var(--primary-color);
  }
`;

export const Space = styled(AppSpace)`
  & > .ant-space-item:last-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

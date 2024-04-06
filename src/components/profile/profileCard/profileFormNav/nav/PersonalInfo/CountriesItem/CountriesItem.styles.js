import { AppSpace } from "../../../../../../common/spaces/AppSpace";
import styled from "styled-components";

export const CountriesSpace = styled(AppSpace)`
  width: 100%;

  & > .ant-space-item:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import { AppModal } from '../../../common/modals/AppModal'; //
import { AppButton } from '../../../common/buttons/AppButton';
import { AppSearchInput } from '../../../common/inputs/searches/AppSearchInput';
import { BORDER_RADIUS, media } from '../../../../styles/themes/constants';

export const SearchIcon = styled(SearchOutlined)`
  &.anticon.anticon-search {
    display: block;
    font-size: 1.25rem;

    @media only screen and ${media.md} {
      font-size: 1.625rem;
    }
  }
`;

export const InputSearch = styled(AppSearchInput)`
  .ant-input-group-addon {
    display: none;
  }

  @media only screen and ${media.md} {
    .ant-input-group .ant-input-affix-wrapper:not(:last-child) {
      border-radius: 3.125rem;
      border: 0;
      padding: 0.5625rem 1.25rem;
    }
  }
`;

export const SearchModal = styled(AppModal)`
  border-radius: ${BORDER_RADIUS};

  & .ant-modal-body {
    padding: 0;
  }
`;

export const Btn = styled(AppButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

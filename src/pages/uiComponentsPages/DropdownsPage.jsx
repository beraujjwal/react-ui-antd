import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { AppDropdown } from '../../components/common/dropdowns/AppDropdown';
import { AppButton } from '../../components/common/buttons/AppButton';
import { PageTitle } from '../../components/common/pageTitles/PageTitle';
import * as S from './UIComponentsPage.styles';
import { AppColumn } from '../../components/common/columns/AppColumn';
import { AppSpace } from '../../components/common/spaces/AppSpace';

const ContextMenuWrapper = styled.div`
  height: 12.5rem;
  width: 18.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: lightgrey;
`;

const DropdownsPage = () => {
  const { t } = useTranslation();

  const basicItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: `${t('dropdowns.secondItem')} ${t('dropdowns.disabled')}`,
      icon: <DownOutlined />,
      disabled: true,
    },
    {
      key: '3',
      label: `${t('dropdowns.thirdItem')} ${t('dropdowns.disabled')}`,
      disabled: true,
    },
    {
      key: '4',
      label: t('dropdowns.dangerItem'),
      danger: true,
    },
  ];

  const positionItems = [
    {
      key: '1',
      label: t('dropdowns.firstItem'),
    },
    {
      key: '2',
      label: t('dropdowns.secondItem'),
    },
    {
      key: '3',
      label: t('dropdowns.thirdItem'),
    },
  ];

  return (
    <>
      <PageTitle>{t('common.dropdown')}</PageTitle>
      <AppColumn>
        <S.Card title={t('dropdowns.basic')}>
          <AppDropdown menu={{ items: basicItems }}>
            <AppButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.hoverMe')} <DownOutlined />
            </AppButton>
          </AppDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.positions')}>
          <AppSpace size={16} wrap>
            <AppDropdown menu={{ items: basicItems }} placement="bottomLeft" arrow>
              <AppButton>{t('dropdowns.bl')}</AppButton>
            </AppDropdown>
            <AppDropdown menu={{ items: basicItems }} placement="bottom" arrow>
              <AppButton>{t('dropdowns.b')}</AppButton>
            </AppDropdown>
            <AppDropdown menu={{ items: basicItems }} placement="bottomRight" arrow>
              <AppButton>{t('dropdowns.br')}</AppButton>
            </AppDropdown>
            <AppDropdown menu={{ items: basicItems }} placement="topLeft" arrow>
              <AppButton>{t('dropdowns.tl')}</AppButton>
            </AppDropdown>
            <AppDropdown menu={{ items: basicItems }} placement="top" arrow>
              <AppButton>{t('dropdowns.t')}</AppButton>
            </AppDropdown>
            <AppDropdown menu={{ items: basicItems }} placement="topRight" arrow>
              <AppButton>{t('dropdowns.tr')}</AppButton>
            </AppDropdown>
          </AppSpace>
        </S.Card>
        <S.Card title={t('dropdowns.clickable')}>
          <AppDropdown menu={{ items: positionItems }} trigger={['click']}>
            <AppButton onClick={(e) => e.preventDefault()}>
              {t('dropdowns.clickMe')} <DownOutlined />
            </AppButton>
          </AppDropdown>
        </S.Card>
        <S.Card title={t('dropdowns.context')}>
          <AppDropdown menu={{ items: positionItems }} trigger={['contextMenu']}>
            <ContextMenuWrapper>{t('dropdowns.rightClick')}</ContextMenuWrapper>
          </AppDropdown>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default DropdownsPage;

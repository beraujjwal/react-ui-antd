import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import { AppSwitch } from '../../../components/common/switches/AppSwitch';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const SwitchesPage = () => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  return (
    <>
      <PageTitle>{t('common.switch')}</PageTitle>
      <AppColumn>
        <S.Card title={t('switches.basic')}>
          <AppSwitch defaultChecked />
        </S.Card>
        <S.Card title={t('switches.disabled')}>
          <AppSpace direction="vertical" size={10}>
            <AppSwitch disabled={disabled} defaultChecked />
            <AppButton type="primary" onClick={() => setDisabled(!disabled)}>
              {t('switches.toggleDisabled')}
            </AppButton>
          </AppSpace>
        </S.Card>
        <S.Card title={t('switches.sizes')}>
          <AppSpace direction="vertical" size={10}>
            <AppSwitch defaultChecked />
            <AppSwitch size="small" defaultChecked />
          </AppSpace>
        </S.Card>
        <S.Card title={t('switches.loading')}>
          <AppSpace direction="vertical" size={10}>
            <AppSwitch loading defaultChecked />
            <AppSwitch size="small" loading />
          </AppSpace>
        </S.Card>
        <S.Card title={t('switches.icons')}>
          <AppSpace direction="vertical" size={10}>
            <AppSwitch checkedChildren={t('switches.yes')} unCheckedChildren={t('switches.no')} defaultChecked />
            <AppSwitch checkedChildren="1" unCheckedChildren="0" />
            <AppSwitch checkedChildren={<CheckOutlined />} unCheckedChildren={<CloseOutlined />} defaultChecked />
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default SwitchesPage;

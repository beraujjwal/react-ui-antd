import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppCheckbox } from '../../../components/common/checkboxes/AppCheckbox';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const CheckboxesPage = () => {
  const { t } = useTranslation();
  const [checked, setChecked] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const label = `${checked ? t('checkboxes.checked') : t('checkboxes.unchecked')}-${
    disabled ? t('checkboxes.disabled') : t('checkboxes.enabled')
  }`;
  const groupOptions = [t('checkboxes.apple'), t('checkboxes.pear'), t('checkboxes.orange')];

  return (
    <>
      <PageTitle>{t('common.checkbox')}</PageTitle>
      <AppColumn>
        <S.Card title={t('checkboxes.basic')}>
          <AppCheckbox>{t('checkboxes.checkbox')}</AppCheckbox>
        </S.Card>
        <S.Card title={t('checkboxes.disabledCheckbox')}>
          <AppCheckbox defaultChecked={false} disabled />
          <AppCheckbox defaultChecked disabled />
        </S.Card>
        <S.Card title={t('checkboxes.controlled')}>
          <AppSpace direction="vertical" size={20}>
            <AppCheckbox checked={checked} disabled={disabled} onChange={(event) => setChecked(event.target.checked)}>
              {label}
            </AppCheckbox>
            <AppSpace>
              <AppButton type="primary" size="small" onClick={() => setChecked(!checked)}>
                {!checked ? t('checkboxes.check') : t('checkboxes.uncheck')}
              </AppButton>
              <AppButton type="primary" size="small" onClick={() => setDisabled(!disabled)}>
                {!disabled ? t('checkboxes.disable') : t('checkboxes.enable')}
              </AppButton>
            </AppSpace>
          </AppSpace>
        </S.Card>
        <S.Card title={t('checkboxes.group')}>
          <AppCheckbox.Group options={groupOptions} defaultValue={[`${t('checkboxes.apple')}`]} />
        </S.Card>
      </AppColumn>
    </>
  );
};

export default CheckboxesPage;

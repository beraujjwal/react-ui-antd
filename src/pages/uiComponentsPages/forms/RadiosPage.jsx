import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppRadio } from '../../../components/common/radios/AppRadio';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const RadiosPage = () => {
  const { t } = useTranslation();
  const [value, setValue] = useState(1);
  const [disabled, setDisabled] = useState(false);

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <>
      <PageTitle>{t('common.radio')}</PageTitle>
      <AppColumn>
        <S.Card title={t('radios.basic')}>
          <AppRadio>{t('radios.radio')}</AppRadio>
        </S.Card>
        <S.Card title={t('radios.disabledRadio')}>
          <AppSpace direction="vertical" size={20}>
            <div>
              <AppRadio defaultChecked={false} disabled={disabled}>
                {t('radios.disabled')}
              </AppRadio>
              <AppRadio defaultChecked disabled={disabled}>
                {t('radios.disabled')}
              </AppRadio>
            </div>
            <AppButton type="primary" onClick={() => toggleDisabled()}>
              {t('radios.toggleDisabled')}
            </AppButton>
          </AppSpace>
        </S.Card>
        <S.Card title={t('radios.radioGroup')}>
          <AppRadio.Group onChange={(event) => setValue(event.target.value)} value={value}>
            <AppRadio value={1}>{t('radios.a')}</AppRadio>
            <AppRadio value={2}>{t('radios.b')}</AppRadio>
            <AppRadio value={3}>{t('radios.c')}</AppRadio>
            <AppRadio value={4}>{t('radios.d')}</AppRadio>
          </AppRadio.Group>
        </S.Card>
        <S.Card title={t('radios.radioButton')}>
          <AppSpace direction="vertical" size={20}>
            <AppRadio.Group defaultValue="a">
              <AppRadio.Button value="a">Hangzhou</AppRadio.Button>
              <AppRadio.Button value="b">Shanghai</AppRadio.Button>
              <AppRadio.Button value="c">Beijing</AppRadio.Button>
              <AppRadio.Button value="d">Chengdu</AppRadio.Button>
            </AppRadio.Group>
            <AppRadio.Group disabled onChange={(event) => setValue(event.target.value)} defaultValue="a">
              <AppRadio.Button value="a">Hangzhou</AppRadio.Button>
              <AppRadio.Button value="b">Shanghai</AppRadio.Button>
              <AppRadio.Button value="c">Beijing</AppRadio.Button>
              <AppRadio.Button value="d">Chengdu</AppRadio.Button>
            </AppRadio.Group>
          </AppSpace>
        </S.Card>
        <S.Card title={t('radios.radioButtonSizes')}>
          <AppSpace direction="vertical" size={10}>
            <AppRadio.Group size="small" defaultValue="a">
              <AppRadio.Button value="a">Hangzhou</AppRadio.Button>
              <AppRadio.Button value="b">Shanghai</AppRadio.Button>
              <AppRadio.Button value="c">Beijing</AppRadio.Button>
              <AppRadio.Button value="d">Chengdu</AppRadio.Button>
            </AppRadio.Group>
            <AppRadio.Group defaultValue="a">
              <AppRadio.Button value="a">Hangzhou</AppRadio.Button>
              <AppRadio.Button value="b">Shanghai</AppRadio.Button>
              <AppRadio.Button value="c">Beijing</AppRadio.Button>
              <AppRadio.Button value="d">Chengdu</AppRadio.Button>
            </AppRadio.Group>
            <AppRadio.Group size="large" defaultValue="a">
              <AppRadio.Button value="a">Hangzhou</AppRadio.Button>
              <AppRadio.Button value="b">Shanghai</AppRadio.Button>
              <AppRadio.Button value="c">Beijing</AppRadio.Button>
              <AppRadio.Button value="d">Chengdu</AppRadio.Button>
            </AppRadio.Group>
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default RadiosPage;

import { useTranslation } from 'react-i18next';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';
import { AppRate } from '../../../components/common/rates/AppRate';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';

const RatesPage = () => {
  const { t } = useTranslation();
  const customIcons = [
    <FrownOutlined key={1} />,
    <FrownOutlined key={2} />,
    <MehOutlined key={3} />,
    <SmileOutlined key={4} />,
    <SmileOutlined key={5} />,
  ];

  return (
    <>
      <PageTitle>{t('common.rate')}</PageTitle>
      <AppColumn>
        <S.Card title={t('rates.basic')}>
          <AppRate />
        </S.Card>
        <S.Card title={t('rates.halfStar')}>
          <AppRate allowHalf defaultValue={2.5} />
        </S.Card>
        <S.Card title={t('rates.readOnly')}>
          <AppRate disabled defaultValue={2} />
        </S.Card>
        <S.Card title={t('rates.customIcons')}>
          <AppSpace direction="vertical" size={10}>
            <AppRate defaultValue={2} character={({ index }) => index + 1} />
            <AppRate defaultValue={3} character={({ index }) => customIcons[index + 1]} />
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default RatesPage;

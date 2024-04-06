import { useTranslation } from 'react-i18next';
import { AppAvatar } from '../../../components/common/avatars/AppAvatar';
import { AppBadge } from '../../../components/common/badges/AppBadge';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppCard } from '../../../components/common/cards/AppCard';

const BadgesPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.badge')}</PageTitle>
      <AppColumn>
        <S.Card title={t('dataDisplay.badges.sizes')}>
          <AppBadge size="default" count={5}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
          <AppBadge size="small" count={5}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.overflow')}>
          <AppBadge count={99}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
          <AppBadge count={100}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
          <AppBadge count={99} overflowCount={10}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
          <AppBadge count={1000} overflowCount={999}>
            <AppAvatar shape="square" size="large" />
          </AppBadge>
        </S.Card>
        <S.Card title={t('dataDisplay.badges.status')}>
          <AppBadge status="success" />
          <AppBadge status="error" />
          <AppBadge status="default" />
          <AppBadge status="processing" />
          <AppBadge status="warning" />
          <br />
          <AppBadge status="success" text={t('dataDisplay.badges.success')} />
          <br />
          <AppBadge status="error" text={t('dataDisplay.badges.error')} />
          <br />
          <AppBadge status="default" text={t('dataDisplay.badges.default')} />
          <br />
          <AppBadge status="processing" text={t('dataDisplay.badges.processing')} />
          <br />
          <AppBadge status="warning" text={t('dataDisplay.badges.warning')} />
        </S.Card>
        <S.Card title={t('dataDisplay.badges.ribbon')}>
          <AppColumn span={24}>
            <AppBadge.Ribbon text={t('dataDisplay.badges.hippies')}>
              <AppCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </AppCard>
            </AppBadge.Ribbon>
          </AppColumn>
          <AppColumn span={24}>
            <AppBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="pink">
              <AppCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </AppCard>
            </AppBadge.Ribbon>
          </AppColumn>
          <AppColumn span={24}>
            <AppBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="red">
              <AppCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </AppCard>
            </AppBadge.Ribbon>
          </AppColumn>
          <AppColumn span={24}>
            <AppBadge.Ribbon text={t('dataDisplay.badges.hippies')} color="cyan">
              <AppCard title={t('dataDisplay.badges.cardTitle')} size="small">
                {t('dataDisplay.badges.cardDescription')}
              </AppCard>
            </AppBadge.Ribbon>
          </AppColumn>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default BadgesPage;

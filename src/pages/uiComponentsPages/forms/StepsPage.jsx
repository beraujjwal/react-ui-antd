import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import { AppSteps } from '../../../components/common/steps/AppSteps';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const StepsPage = () => {
  const { t } = useTranslation();
  const [current, setCurrent] = useState(0);

  const onChange = (current) => {
    setCurrent(current);
  };

  return (
    <>
      <PageTitle>{t('common.steps')}</PageTitle>
      <AppColumn>
        <S.Card title={t('steps.basic')}>
          <AppSteps
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                subTitle: 'Left 00:00:08',
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.small')}>
          <AppSteps
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
              },
              {
                title: t('steps.inProgress'),
              },
              {
                title: t('steps.waiting'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.icons')}>
          <AppSteps
            items={[
              {
                title: t('steps.login'),
                icon: <UserOutlined />,
              },
              {
                title: t('steps.verification'),
                icon: <SolutionOutlined />,
              },
              {
                title: t('steps.pay'),
                icon: <LoadingOutlined />,
              },
              {
                title: t('steps.done'),
                icon: <SmileOutlined />,
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.vertical')}>
          <AppSteps
            direction="vertical"
            size="small"
            current={1}
            items={[
              {
                title: t('steps.finished'),
                description: t('steps.description'),
              },
              {
                title: t('steps.inProgress'),
                description: t('steps.description'),
              },
              {
                title: t('steps.waiting'),
                description: t('steps.description'),
              },
            ]}
          />
        </S.Card>
        <S.Card title={t('steps.clickable')}>
          <AppSpace direction="vertical" size={20}>
            <AppSteps
              current={current}
              onChange={onChange}
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
            <AppSteps
              current={current}
              onChange={onChange}
              direction="vertical"
              items={[
                {
                  title: t('steps.step', { number: 1 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 2 }),
                  description: t('steps.description'),
                },
                {
                  title: t('steps.step', { number: 3 }),
                  description: t('steps.description'),
                },
              ]}
            />
          </AppSpace>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default StepsPage;

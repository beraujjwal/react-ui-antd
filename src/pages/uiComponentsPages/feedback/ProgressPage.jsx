import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { AppProgress } from '../../../components/common/progresses/AppProgress';
import { AppButton, ButtonGroup } from '../../../components/common/buttons/AppButton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const ProgressPage = () => {
  const [percent, setPercent] = useState(0);
  const { t } = useTranslation();

  const primaryColor = 'var(--primary-color)';
  const secondaryColor = 'var(--secondary-color)';
  const successColor = 'var(--success-color)';
  const errorColor = 'var(--error-color)';

  const dynamicSuccessColor = useMemo(() => (percent === 100 ? successColor : primaryColor), [percent]);

  const increase = () => {
    let newPercent = percent + 10;
    if (newPercent > 100) {
      newPercent = 100;
    }
    setPercent(newPercent);
  };

  const decrease = () => {
    let newPercent = percent - 10;
    if (newPercent < 0) {
      newPercent = 0;
    }
    setPercent(newPercent);
  };

  return (
    <>
      <PageTitle>{t('common.progress')}</PageTitle>
      <AppColumn>
        <S.Card title={t('progress.basic')}>
          <AppProgress percent={30} strokeColor={primaryColor} />
          <AppProgress percent={50} status="active" strokeColor={primaryColor} />
          <AppProgress percent={70} status="exception" strokeColor={errorColor} />
          <AppProgress percent={100} strokeColor={successColor} />
          <AppProgress percent={50} showInfo={false} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.circle')}>
          <AppProgress type="circle" percent={75} strokeColor={primaryColor} />
          <AppProgress type="circle" percent={70} status="exception" strokeColor={errorColor} />
          <AppProgress type="circle" percent={100} strokeColor={successColor} />
        </S.Card>
        <S.Card title={t('progress.dynamic')}>
          <div>
            <AppProgress percent={percent} type="circle" strokeColor={dynamicSuccessColor} />
            <AppProgress percent={percent} strokeColor={dynamicSuccessColor} />
            <ButtonGroup>
              <AppButton onClick={decrease} icon={<MinusOutlined />} />
              <AppButton onClick={increase} icon={<PlusOutlined />} />
            </ButtonGroup>
          </div>
        </S.Card>
        <S.Card title={t('progress.medical-dashboard')}>
          <AppProgress type="dashboard" percent={75} strokeColor={primaryColor} />
          <AppProgress type="dashboard" percent={75} gapDegree={30} strokeColor={primaryColor} />
        </S.Card>
        <S.Card title={t('progress.gradient')}>
          <div>
            <AppProgress
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={99.9}
            />
            <AppProgress
              strokeColor={{
                from: primaryColor,
                to: secondaryColor,
              }}
              percent={99.9}
              status="active"
            />
            <AppProgress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={90}
            />
            <AppProgress
              type="circle"
              strokeColor={{
                '0%': primaryColor,
                '100%': secondaryColor,
              }}
              percent={100}
            />
          </div>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default ProgressPage;

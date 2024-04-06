import { useTranslation } from 'react-i18next';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import { AppAvatar } from '../../../components/common/avatars/AppAvatar';
import { AppBadge } from '../../../components/common/badges/AppBadge';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { BASE_COLORS } from '../../../styles/themes/constants';
import { AppTooltip } from '../../../components/common/tooltipes/AppTooltip';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const AvatarsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t('common.avatar')}</PageTitle>
      <AppColumn>
        <S.Card title={t('dataDisplay.avatars.sizes')}>
          <AppAvatar size="small" icon={<UserOutlined />} />
          <AppAvatar icon={<UserOutlined />} />
          <AppAvatar size="large" icon={<UserOutlined />} />
          <AppAvatar size={64} icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.shapes')}>
          <AppAvatar size={45} icon={<UserOutlined />} />
          <AppAvatar size={45} shape="square" icon={<UserOutlined />} />
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.groups')}>
          <AppAvatar.Group
            maxCount={2}
            size={45}
            maxStyle={{ color: BASE_COLORS.red, backgroundColor: BASE_COLORS.orange }}
          >
            <AppAvatar size={45} src="https://joeschmoe.io/api/v1/random" />
            <AppAvatar size={45} style={{ backgroundColor: BASE_COLORS.red }}>
              K
            </AppAvatar>
            <AppTooltip title={t('dataDisplay.avatars.user')} placement="top">
              <AppAvatar size={45} style={{ backgroundColor: BASE_COLORS.green }} icon={<UserOutlined />} />
            </AppTooltip>
            <AppAvatar size={45} style={{ backgroundColor: BASE_COLORS.blue }} icon={<AntDesignOutlined />} />
          </AppAvatar.Group>
        </S.Card>
        <S.Card title={t('dataDisplay.avatars.badge')}>
          <AppBadge count={1}>
            <AppAvatar size={45} shape="square" icon={<UserOutlined />} />
          </AppBadge>
          <AppBadge dot>
            <AppAvatar size={45} shape="square" icon={<UserOutlined />} />
          </AppBadge>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default AvatarsPage;

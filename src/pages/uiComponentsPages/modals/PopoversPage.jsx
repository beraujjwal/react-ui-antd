import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { AppButton } from '../../../components/common/buttons/AppButton';
import { AppPopover } from '../../../components/common/popovers/AppPopover';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { media } from '../../../styles/themes/constants';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const buttonWidth = 70;

export const PopoverButton = styled.div`
  display: flex;
  gap: 5px;
`;

export const TopButtons = styled(PopoverButton)`
  white-space: nowrap;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth - 24}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth + 18}px;
  }
`;
export const LeftButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;
  float: left;
`;

export const RightButtons = styled(PopoverButton)`
  flex-direction: column;
  width: ${buttonWidth}px;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth * 3 - 14}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth * 4}px;
  }
`;

export const BottomButtons = styled(PopoverButton)`
  margin-left: ${buttonWidth}px;
  clear: both;
  white-space: nowrap;

  @media only screen and ${media.xs} {
    margin-left: ${buttonWidth - 44}px;
  }

  @media only screen and ${media.md} {
    margin-left: ${buttonWidth}px;
  }
`;

const PopoversPage = () => {
  const { t } = useTranslation();

  const title = <span>{t('popovers.title')}</span>;
  const content = (
    <div>
      <p>{t('popovers.content')}</p>
      <p>{t('popovers.content')}</p>
    </div>
  );

  return (
    <>
      <PageTitle>{t('common.popover')}</PageTitle>
      <AppColumn>
        <S.Card title={t('popovers.basic')}>
          <AppPopover content={content} title={title}>
            <AppButton type="primary">{t('popovers.hover')}</AppButton>
          </AppPopover>
        </S.Card>
        <S.Card title={t('popovers.positions')}>
          <div>
            <TopButtons>
              <AppPopover placement="topLeft" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.tl')}</AppButton>
              </AppPopover>
              <AppPopover placement="top" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.top')}</AppButton>
              </AppPopover>
              <AppPopover placement="topRight" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.tr')}</AppButton>
              </AppPopover>
            </TopButtons>
            <LeftButtons>
              <AppPopover placement="leftTop" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.lt')}</AppButton>
              </AppPopover>
              <AppPopover placement="left" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.left')}</AppButton>
              </AppPopover>
              <AppPopover placement="leftBottom" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.lb')}</AppButton>
              </AppPopover>
            </LeftButtons>
            <RightButtons>
              <AppPopover placement="rightTop" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.rt')}</AppButton>
              </AppPopover>
              <AppPopover placement="right" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.right')}</AppButton>
              </AppPopover>
              <AppPopover placement="rightBottom" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.rb')}</AppButton>
              </AppPopover>
            </RightButtons>
            <BottomButtons>
              <AppPopover placement="bottomLeft" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.bl')}</AppButton>
              </AppPopover>
              <AppPopover placement="bottom" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.bottom')}</AppButton>
              </AppPopover>
              <AppPopover placement="bottomRight" title={title} content={content} trigger="click">
                <AppButton>{t('popovers.br')}</AppButton>
              </AppPopover>
            </BottomButtons>
          </div>
        </S.Card>
        <S.Card title={t('popovers.triggers')}>
          <AppPopover content={content} title={title} trigger="hover">
            <AppButton>{t('popovers.hover')}</AppButton>
          </AppPopover>
          <AppPopover content={content} title={title} trigger="focus">
            <AppButton>{t('popovers.focus')}</AppButton>
          </AppPopover>
          <AppPopover content={content} title={title} trigger="click">
            <AppButton>{t('popovers.click')}</AppButton>
          </AppPopover>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default PopoversPage;

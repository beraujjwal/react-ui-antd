/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { AppSkeleton } from '../../../components/common/skeletons/AppSkeleton';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { media } from '../../../styles/themes/constants';
import { AppSwitch } from '../../../components/common/switches/AppSwitch';
import { AppForm } from '../../../components/common/forms/AppForm';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';
import { AppDivider } from '../../../components/common/dividers/AppDivider';
import { AppRadio } from '../../../components/common/radios/AppRadio';

const FormItem = styled(AppForm.Item)`
  @media only screen and ${media.xs} {
    max-width: fit-content;
  }

  @media only screen and ${media.md} {
    max-width: 100%;
  }
`;

const SkeletonsPage = () => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    active: false,
    block: false,
    size: 'default',
  });

  const handleActiveChange = (checked) => {
    setState({ ...state, active: checked });
  };

  const handleBlockChange = (checked) => {
    setState({ ...state, block: checked });
  };

  const handleSizeChange = (e) => {
    setState({ ...state, size: e.target.value });
  };

  const handleShapeChange = (prop) => (e) => {
    setState({ ...state, [prop]: e.target.value });
  };

  return (
    <>
      <PageTitle>{t('common.skeleton')}</PageTitle>
      <AppColumn>
        <S.Card title={t('skeletons.basic')}>
          <AppSkeleton />
        </S.Card>
        <S.Card title={t('skeletons.complex')}>
          <AppSkeleton avatar paragraph={{ rows: 4 }} />
        </S.Card>
        <S.Card title={t('skeletons.active')}>
          <AppSkeleton active />
        </S.Card>
        <S.Card title={t('skeletons.customization')}>
          <div>
            <AppSpace wrap>
              <AppSkeleton.Button
                active={state.active}
                size={state.size}
                shape={state.buttonShape}
                block={state.block}
              />
              <AppSkeleton.Avatar active={state.active} size={state.size} shape={state.avatarShape} />
              <AppSkeleton.Input style={{ width: 200 }} active={state.active} size={state.size} />
            </AppSpace>
            <br />
            <br />
            <AppSkeleton.Button
              active={state.active}
              size={state.size}
              shape={state.buttonShape}
              block={state.block}
            />
            <br />
            <br />
            <AppSkeleton.Image />
            <AppDivider />
            <AppForm layout="inline">
              <FormItem label={t('skeletons.activeLabel')}>
                <AppSwitch checked={state.active} onChange={handleActiveChange} />
              </FormItem>
              <FormItem label={t('skeletons.buttonBlock')}>
                <AppSwitch checked={state.block} onChange={handleBlockChange} />
              </FormItem>
              <FormItem label={t('skeletons.size')}>
                <AppRadio.Group value={state.size} onChange={handleSizeChange}>
                  <AppRadio.Button value="default">{t('skeletons.default')}</AppRadio.Button>
                  <AppRadio.Button value="large">{t('skeletons.large')}</AppRadio.Button>
                  <AppRadio.Button value="small">{t('skeletons.small')}</AppRadio.Button>
                </AppRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.buttonShape')}>
                <AppRadio.Group value={state.buttonShape} onChange={handleShapeChange('buttonShape')}>
                  <AppRadio.Button value="default">{t('skeletons.default')}</AppRadio.Button>
                  <AppRadio.Button value="round">{t('skeletons.round')}</AppRadio.Button>
                  <AppRadio.Button value="circle">{t('skeletons.circle')}</AppRadio.Button>
                </AppRadio.Group>
              </FormItem>
              <FormItem label={t('skeletons.avatarShape')}>
                <AppRadio.Group value={state.avatarShape} onChange={handleShapeChange('avatarShape')}>
                  <AppRadio.Button value="square">{t('skeletons.square')}</AppRadio.Button>
                  <AppRadio.Button value="circle">{t('skeletons.circle')}</AppRadio.Button>
                </AppRadio.Group>
              </FormItem>
            </AppForm>
          </div>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default SkeletonsPage;

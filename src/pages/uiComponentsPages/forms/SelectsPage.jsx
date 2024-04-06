/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { AppSelect, Option } from '../../../components/common/selects/AppSelect/AppSelect';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppRadio } from '../../../components/common/radios/AppRadio';
import { AppTag } from '../../../components/common/tages/AppTag';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppSpace } from '../../../components/common/spaces/AppSpace';

const SelectsPage = () => {
  const { t } = useTranslation();
  const [size, setSize] = useState('middle');
  const options = [
    { value: t('selects.gold') },
    { value: t('selects.lime') },
    { value: t('selects.green') },
    { value: t('selects.cyan') },
  ];
  const children = [];

  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i} value={i.toString(36) + i}>
        {i.toString(36) + i}
      </Option>,
    );
  }

  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <AppTag
        color={value}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </AppTag>
    );
  };

  return (
    <>
      <PageTitle>{t('common.select')}</PageTitle>
      <AppColumn>
        <S.Card title={t('selects.basic')}>
          <AppSelect defaultValue="lucy" width={120}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="disabled" disabled>
              {t('selects.disabled')}
            </Option>
            <Option value="Yiminghe">Yiminghe</Option>
          </AppSelect>
          <AppSelect defaultValue="lucy" width={120} disabled>
            <Option value="lucy">Lucy</Option>
          </AppSelect>
          <AppSelect defaultValue="lucy" width={120} loading>
            <Option value="lucy">Lucy</Option>
          </AppSelect>
          <AppSelect defaultValue="lucy" width={120} allowClear>
            <Option value="lucy">Lucy</Option>
          </AppSelect>
        </S.Card>
        <S.Card title={t('selects.multipleSelect')}>
          <AppSpace direction="vertical" size={10}>
            <AppSelect
              mode="multiple"
              allowClear
              width={'100%'}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
            >
              {children}
            </AppSelect>
            <AppSelect mode="multiple" disabled placeholder={t('selects.pleaseSelect')} defaultValue={['a10', 'c12']}>
              {children}
            </AppSelect>
          </AppSpace>
        </S.Card>
        <S.Card title={t('selects.selectSizes')}>
          <AppSpace direction="vertical" size={10}>
            <AppRadio.Group value={size} onChange={(event) => setSize(event.target.value)}>
              <AppRadio.Button value="small">{t('selects.small')}</AppRadio.Button>
              <AppRadio.Button value="middle">{t('selects.middle')}</AppRadio.Button>
              <AppRadio.Button value="large">{t('selects.large')}</AppRadio.Button>
            </AppRadio.Group>
            <AppSelect size={size} defaultValue="a1" width={200}>
              {children}
            </AppSelect>
            <AppSelect
              mode="multiple"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width={'100%'}
            >
              {children}
            </AppSelect>
            <AppSelect
              mode="tags"
              size={size}
              placeholder={t('selects.pleaseSelect')}
              defaultValue={['a10', 'c12']}
              width={'100%'}
            >
              {children}
            </AppSelect>
          </AppSpace>
        </S.Card>
        <S.Card title={t('selects.customTags')}>
          <AppSelect
            mode="multiple"
            showArrow
            tagRender={tagRender}
            defaultValue={['gold', 'cyan']}
            width={'100%'}
            options={options}
          />
        </S.Card>
      </AppColumn>
    </>
  );
};

export default SelectsPage;

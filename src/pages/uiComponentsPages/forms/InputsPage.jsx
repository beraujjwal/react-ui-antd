import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  UserOutlined,
  AudioOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
  SettingOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons';
import { AppInput } from '../../../components/common/inputs/inputs/AppInput';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import { AppSelect, Option } from '../../../components/common/selects/AppSelect/AppSelect';
import { AppSearchInput } from '../../../components/common/inputs/searches/AppSearchInput';
import { AppPasswordInput } from '../../../components/common/inputs/passwords/AppPasswordInput';
import { AppClipboardInput } from '../../../components/common/inputs/clipboards/AppClipboardInput';
import { AppURLInput } from '../../../components/common/inputs/urls/AppURLInput';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';
import { AppTooltip } from '../../../components/common/tooltipes/AppTooltip';
import { AppCascader } from '../../../components/common/cascaders/AppCascader';

const InputsPage = () => {
  const { t } = useTranslation();
  const [clipboardValue, setClipboardValue] = useState('@altence_team');
  const [newTabValue, setNewTabValue] = useState('https://altence.com');

  const selectBefore = (
    <AppSelect defaultValue="http://">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </AppSelect>
  );

  const selectAfter = (
    <AppSelect defaultValue=".com">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </AppSelect>
  );

  return (
    <>
      <PageTitle>{t('common.input')}</PageTitle>
      <AppColumn>
        <S.Card title={t('inputs.basic')}>
          <S.InputsWrapper>
            <AppInput placeholder={t('inputs.basic')} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.sizes')}>
          <S.InputsWrapper>
            <AppInput size="small" placeholder={t('inputs.small')} prefix={<UserOutlined />} />
            <AppInput placeholder={t('inputs.default')} prefix={<UserOutlined />} />
            <AppInput size="large" placeholder={t('inputs.large')} prefix={<UserOutlined />} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prePost')}>
          <S.InputsWrapper>
            <AppInput addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
            <AppInput addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
            <AppInput addonAfter={<SettingOutlined />} defaultValue="mysite" />
            <AppInput addonBefore="http://" suffix=".com" defaultValue="mysite" />
            <AppInput addonBefore={<AppCascader placeholder="cascader" />} defaultValue="mysite" />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.prefixSuffix')}>
          <S.InputsWrapper>
            <AppInput
              placeholder={t('inputs.enterName')}
              prefix={<UserOutlined />}
              suffix={
                <AppTooltip title={t('inputs.extra')}>
                  <InfoCircleOutlined />
                </AppTooltip>
              }
            />
            <AppInput prefix="￥" suffix="RMB" />
            <AppInput prefix="￥" suffix="RMB" disabled />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.search')}>
          <S.InputsWrapper>
            <AppSearchInput placeholder={t('inputs.searchText')} allowClear />
            <AppSearchInput addonBefore="https://" placeholder={t('inputs.searchText')} allowClear />
            <AppSearchInput
              placeholder={t('inputs.searchText')}
              enterButton="Search"
              size="large"
              suffix={<AudioOutlined />}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.password')}>
          <S.InputsWrapper>
            <AppPasswordInput
              placeholder={t('inputs.passwordText')}
              iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.textarea')}>
          <S.InputsWrapper>
            <AppInput.TextArea rows={4} />
          </S.InputsWrapper>
        </S.Card>
        <S.Card title={t('inputs.func')}>
          <S.InputsWrapper>
            <AppClipboardInput
              value={clipboardValue}
              placeholder={t('inputs.clipboard')}
              valueToCopy={clipboardValue}
              onChange={(e) => setClipboardValue(e.target.value)}
            />
            <AppURLInput
              value={newTabValue}
              placeholder={t('inputs.openURL')}
              href={newTabValue}
              onChange={(e) => setNewTabValue(e.target.value)}
            />
          </S.InputsWrapper>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default InputsPage;

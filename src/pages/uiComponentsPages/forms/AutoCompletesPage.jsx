import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import { AppAutoComplete } from '../../../components/common/autoCompletes/AppAutoComplete';
import { AppSearchInput as CommonSearchInput } from '../../../components/common/inputs/searches/AppSearchInput';
import { Option } from '../../../components/common/selects/AppSelect/AppSelect';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const Link = styled.a`
  float: right;
`;

const CategoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AppSearchInput = styled(CommonSearchInput)`
  .ant-input-search-button {
    height: 3.1rem;
  }
`;

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
  label: str.repeat(repeat),
});

const AutoCompletesPage = () => {
  const { t } = useTranslation();
  const [options, setOptions] = useState([]);
  const [result, setResult] = useState([]);

  const handleCustomSearch = (value) => {
    let res = [];
    if (!value || value.indexOf('@') >= 0) {
      res = [];
    } else {
      res = ['gmail.com', '163.com', 'qq.com'].map((domain) => `${value}@${domain}`);
    }
    setResult(res);
  };

  const handleSearch = (searchText) => {
    setOptions(!searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]);
  };

  const renderTitle = (title) => (
    <span>
      {title}
      <Link href="https://www.google.com/search?q=antd" target="_blank" rel="noopener noreferrer">
        more
      </Link>
    </span>
  );

  const renderItem = (title, count) => ({
    value: title,
    label: (
      <CategoryWrapper>
        {title}
        <span>
          <UserOutlined /> {count}
        </span>
      </CategoryWrapper>
    ),
  });

  const categories = [
    {
      label: renderTitle(t('autoCompletes.libraries')),
      options: [renderItem(t('autoCompletes.antDesign'), 10000), renderItem(t('autoCompletes.antDesignUI'), 10600)],
    },
    {
      label: renderTitle(t('autoCompletes.solutions')),
      options: [
        renderItem(t('autoCompletes.antDesignUIFaq'), 60100),
        renderItem(t('autoCompletes.antDesignFaq'), 30010),
      ],
    },
    {
      label: renderTitle(t('autoCompletes.articles')),
      options: [renderItem(t('autoCompletes.antDesignLanguage'), 100000)],
    },
  ];

  return (
    <>
      <PageTitle>{t('common.autocomplete')}</PageTitle>
      <AppColumn>
        <S.Card title={t('autoCompletes.basic')}>
          <label>
            <AppAutoComplete
              options={options}
              style={{ width: 200 }}
              onSearch={handleSearch}
              placeholder={t('autoCompletes.inputHere')}
            />
          </label>
        </S.Card>
        <S.Card title={t('autoCompletes.customOptions')}>
          <label>
            <AppAutoComplete
              style={{ width: 200 }}
              onSearch={handleCustomSearch}
              placeholder={t('autoCompletes.inputHere')}
            >
              {result.map((email) => (
                <Option key={email} value={email}>
                  {email}
                </Option>
              ))}
            </AppAutoComplete>
          </label>
        </S.Card>
        <S.Card title={t('autoCompletes.categories')}>
          <label>
            <AppAutoComplete popupClassName="certain-category-search-dropdown" options={categories}>
              <AppSearchInput placeholder={t('autoCompletes.inputHere')} prefix={null} />
            </AppAutoComplete>
          </label>
        </S.Card>
      </AppColumn>
    </>
  );
};

export default AutoCompletesPage;

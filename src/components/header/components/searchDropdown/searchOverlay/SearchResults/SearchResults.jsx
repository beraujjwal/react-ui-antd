import React, { useMemo } from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { camelize } from '../../../../../../utils/utils';
import * as S from './SearchResults.styles';
import { AppList } from '../../../../../common/lists/AppList';


export const SearchResults = ({ results }) => {
  const { t } = useTranslation();

  const resultsList = useMemo(
    () =>
      results.map((result) => (
        <AppList
          key={result.category}
          split={false}
          header={t(`common.${camelize(result.category)}`)}
          dataSource={result.components}
          renderItem={(item) => (
            <HashLink to={item.url}>
              <AppList.Item>
                <S.Text>{item.name}</S.Text>
              </AppList.Item>
            </HashLink>
          )}
        />
      )),
    [results, t],
  );

  return <S.SearchResultsWrapper>{resultsList}</S.SearchResultsWrapper>;
};

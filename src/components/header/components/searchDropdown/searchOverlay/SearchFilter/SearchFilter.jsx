import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { categoriesList } from "../../../../../../constants/categoriesList";
import * as S from "./SearchFilter.styles";
import { AppColumn } from "../../../../../common/columns/AppColumn";
import { AppRow } from "../../../../../common/rows/AppRow";

export const SearchFilter = ({ data, isOpen, children }) => {
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [filteredResults, setFilteredResults] = useState(data);

  const { t } = useTranslation();

  const filterElements = useMemo(
    () =>
      categoriesList.map((filter, index) => (
        <AppColumn key={index} xs={12} sm={8} md={12} xl={8}>
          <S.SearchFilterCheckBox key={index} value={filter.name}>
            {t(filter.title)}
          </S.SearchFilterCheckBox>
        </AppColumn>
      )),
    [t]
  );

  useEffect(() => {
    if (data) {
      if (selectedFilter.length > 0) {
        setFilteredResults(
          data.filter((component) =>
            selectedFilter.some((filter) => filter === component.category)
          )
        );
      } else {
        setFilteredResults(data);
      }
    } else {
      setFilteredResults(null);
    }
  }, [data, selectedFilter]);

  return (
    <>
      <S.FilterWrapper isOpen={isOpen}>
        <S.SearchFilterCheckBox
          onChange={(checkedValues) => setSelectedFilter(checkedValues)}
        >
          <AppRow>{filterElements}</AppRow>
        </S.SearchFilterCheckBox>
      </S.FilterWrapper>

      {filteredResults && children(filteredResults)}
    </>
  );
};

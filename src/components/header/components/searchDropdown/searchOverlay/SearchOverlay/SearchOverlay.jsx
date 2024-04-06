import React from "react";
import { SearchFilter } from "../SearchFilter/SearchFilter";
import { SearchResults } from "../SearchResults/SearchResults";
import { AppNotFound } from "../../../../../common/notFounds/AppNotFound";
import * as S from "./SearchOverlay.styles";

export const SearchOverlay = ({ data, isFilterOpen }) => {
  return (
    <S.SearchOverlayMenu>
      <SearchFilter data={data} isOpen={isFilterOpen}>
        {(filteredResults) =>
          filteredResults.length > 0 ? (
            <SearchResults results={filteredResults} />
          ) : (
            <AppNotFound />
          )
        }
      </SearchFilter>
    </S.SearchOverlayMenu>
  );
};

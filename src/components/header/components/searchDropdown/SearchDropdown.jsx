import React, { useEffect, useRef, useState } from 'react';
import { FilterIcon } from '../../../common/icons/FilterIcon';
import { SearchOverlay } from './searchOverlay/SearchOverlay/SearchOverlay';
import { HeaderActionWrapper } from '../../../header/Header.styles';
import { Btn, InputSearch } from '../HeaderSearch/HeaderSearch.styles';
import { useTranslation } from 'react-i18next';
import { AppPopover } from '../../../common/popovers/AppPopover';


export const SearchDropdown = ({
  query,
  setQuery,
  data,
  isOverlayOpen,
  setOverlayOpen,
}) => {
  const [isFilterOpen, setFilterOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    setOverlayOpen(!!query || isFilterOpen);
  }, [query, isFilterOpen, setOverlayOpen]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef(null);

  return (
    <>
      <AppPopover
        {...((!!data || isFilterOpen) && { trigger: 'click', onOpenChange: setOverlayOpen })}
        overlayClassName="search-overlay"
        content={<SearchOverlay data={data} isFilterOpen={isFilterOpen} />}
        open={isOverlayOpen}
        getPopupContainer={() => ref.current}
      >
        <HeaderActionWrapper>
          <InputSearch
            width="100%"
            value={query}
            placeholder={t('header.search')}
            filter={
              <Btn
                size="small"
                type={isFilterOpen ? 'ghost' : 'text'}
                aria-label="Filter"
                icon={<FilterIcon />}
                onClick={() => setFilterOpen(!isFilterOpen)}
              />
            }
            onChange={(event) => setQuery(event.target.value)}
            enterButton={null}
            addonAfter={null}
          />
          <div ref={ref} />
        </HeaderActionWrapper>
      </AppPopover>
    </>
  );
};

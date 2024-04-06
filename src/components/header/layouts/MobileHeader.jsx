import React from 'react';
import { NotificationsDropdown } from '../components/notificationsDropdown/NotificationsDropdown';
import { ProfileDropdown } from '../components/profileDropdown/ProfileDropdown/ProfileDropdown';
import { HeaderSearch } from '../components/HeaderSearch/HeaderSearch';
import { SettingsDropdown } from '../components/settingsDropdown/SettingsDropdown';
import * as S from '../Header.styles';
import { AppRow } from '../../common/rows/AppRow';
import { AppColumn } from '../../common/columns/AppColumn';


export const MobileHeader = ({ toggleSider, isSiderOpened }) => {
  return (
    <AppRow justify="space-between" align="middle">
      <AppColumn>
        <ProfileDropdown />
      </AppColumn>

      <AppColumn>
        <AppRow align="middle">
          <AppColumn>
            <NotificationsDropdown />
          </AppColumn>

          <AppColumn>
            <HeaderSearch />
          </AppColumn>

          <AppColumn>
            <SettingsDropdown />
          </AppColumn>
        </AppRow>
      </AppColumn>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} isCross={isSiderOpened} />
      </S.BurgerCol>
    </AppRow>
  );
};

import React from "react";
import { NotificationsDropdown } from "../components/notificationsDropdown/NotificationsDropdown";
import { ProfileDropdown } from "../components/profileDropdown/ProfileDropdown/ProfileDropdown";
import { HeaderSearch } from "../components/HeaderSearch/HeaderSearch";
import { SettingsDropdown } from "../components/settingsDropdown/SettingsDropdown";
import { HeaderFullscreen } from "../components/HeaderFullscreen/HeaderFullscreen";
import * as S from "../Header.styles";
import { AppRow } from "../../common/rows/AppRow";
import { AppColumn } from "../../common/columns/AppColumn";

export const DesktopHeader = ({ isTwoColumnsLayout }) => {
  const leftSide = isTwoColumnsLayout ? (
    <S.SearchColumn xl={16} xxl={17}>
      <AppRow justify="space-between">
        <AppColumn xl={15} xxl={12}>
          <HeaderSearch />
        </AppColumn>
        {/* <AppColumn>
          <S.GHButton />
        </AppColumn> */}
      </AppRow>
    </S.SearchColumn>
  ) : (
    <>
      <AppColumn lg={10} xxl={8}>
        <HeaderSearch />
      </AppColumn>
      {/* <AppColumn>
        <S.GHButton />
      </AppColumn> */}
    </>
  );

  return (
    <AppRow justify="space-between" align="middle">
      {leftSide}

      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <AppRow align="middle" justify="end" gutter={[5, 5]}>
          <AppColumn>
            <AppRow gutter={[{ xxl: 5 }, { xxl: 5 }]}>
              <AppColumn>
                <HeaderFullscreen />
              </AppColumn>

              <AppColumn>
                <NotificationsDropdown />
              </AppColumn>

              <AppColumn>
                <SettingsDropdown />
              </AppColumn>
            </AppRow>
          </AppColumn>

          <AppColumn>
            <ProfileDropdown />
          </AppColumn>
        </AppRow>
      </S.ProfileColumn>
    </AppRow>
  );
};

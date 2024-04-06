import React from "react";
import { ProfileOverlay } from "../ProfileOverlay/ProfileOverlay";
import { useAppSelector } from "../../../../../hooks/reduxHooks";
import { useResponsive } from "../../../../../hooks/useResponsive";
import * as S from "./ProfileDropdown.styles";
import { AppPopover } from "../../../../common/popovers/AppPopover";
import { AppColumn } from "../../../../common/columns/AppColumn";
import { AppRow } from "../../../../common/rows/AppRow";
import { AppAvatar } from "../../../../common/avatars/AppAvatar";

export const ProfileDropdown = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  return user ? (
    <AppPopover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={AppRow} gutter={[10, 10]} align="middle">
        <AppColumn>
          <AppAvatar src={user.imgUrl} alt="User" shape="circle" size={40} />
        </AppColumn>
        {isTablet && (
          <AppColumn>
            <span>{`${user.name}`}</span>
          </AppColumn>
        )}
      </S.ProfileDropdownHeader>
    </AppPopover>
  ) : null;
};

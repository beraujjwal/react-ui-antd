import React, { useEffect } from "react";
import { LeftOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import { AppCard } from "../common/cards/AppCard";
import { AppButton } from "../common/buttons/AppButton";
import { ProfileInfo } from "../profile/profileCard/ProfileInfo/ProfileInfo";
import { PageTitle } from "../common/pageTitles/PageTitle";
import { ProfileNav } from "../profile/profileCard/ProfileNav/ProfileNav";
import { useResponsive } from "../../hooks/useResponsive";
import { useAppSelector } from "../../hooks/reduxHooks";
import { AppRow } from "../common/rows/AppRow";
import { AppColumn } from "../common/columns/AppColumn";

const ProfileLayout = () => {
  const user = useAppSelector((state) => state.user.user);

  const { t } = useTranslation();
  const { isTablet: isTabletOrHigher, mobileOnly } = useResponsive();
  const location = useLocation();
  const navigate = useNavigate();

  const { isTablet } = useResponsive();

  const isTitleShown =
    isTabletOrHigher || (mobileOnly && location.pathname === "/profile");
  const isMenuShown =
    isTabletOrHigher || (mobileOnly && location.pathname !== "/profile");

  useEffect(() => {
    isTablet && location.pathname === "/profile" && navigate("personal-info");
  }, [isTablet, location.pathname, navigate]);

  return (
    <>
      <PageTitle>{t("profile.title")}</PageTitle>
      {!isTitleShown && (
        <Btn
          icon={<LeftOutlined />}
          type="text"
          onClick={() => navigate("/profile")}
        >
          {t("common.back")}
        </Btn>
      )}

      <AppRow gutter={[30, 30]}>
        {isTitleShown && (
          <AppColumn xs={24} md={24} xl={8}>
            <ProfileCard>
              <AppRow gutter={[30, 30]}>
                <AppColumn xs={24} md={12} xl={24}>
                  <ProfileInfo profileData={user} />
                </AppColumn>

                <AppColumn xs={24} md={12} xl={24}>
                  <ProfileNav />
                </AppColumn>
              </AppRow>
            </ProfileCard>
          </AppColumn>
        )}

        {isMenuShown && (
          <AppColumn xs={24} md={24} xl={16}>
            <Outlet />
          </AppColumn>
        )}
      </AppRow>
    </>
  );
};

const ProfileCard = styled(AppCard)`
  height: unset;
`;

const Btn = styled(AppButton)`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
  padding: 0;
  height: unset;
  color: var(--secondary-color);
`;

export default ProfileLayout;

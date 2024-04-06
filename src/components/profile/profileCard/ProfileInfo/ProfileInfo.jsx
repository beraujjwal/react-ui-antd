import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as S from "./ProfileInfo.styles";
import { AppAvatar } from "../../../common/avatars/AppAvatar";

export const ProfileInfo = ({ profileData }) => {
  const [fullness] = useState(90);

  const { t } = useTranslation();

  return profileData ? (
    <S.Wrapper>
      <S.ImgWrapper>
        <AppAvatar shape="circle" src={profileData?.imgUrl} alt="Profile" />
      </S.ImgWrapper>
      <S.Title>{`${profileData?.name}`}</S.Title>
      <S.Subtitle>{profileData?.userName}</S.Subtitle>
      <S.FullnessWrapper>
        <S.FullnessLine width={fullness}>{fullness}%</S.FullnessLine>
      </S.FullnessWrapper>
      <S.Text>{t("profile.fullness")}</S.Text>
    </S.Wrapper>
  ) : null;
};

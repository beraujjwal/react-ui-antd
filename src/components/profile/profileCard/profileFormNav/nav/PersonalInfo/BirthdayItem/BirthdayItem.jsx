import React from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import * as S from "./BirthdayItem.styles";

export const BirthdayItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="birthday"
      label={t("profile.nav.personalInfo.birthday")}
    >
      <S.BirthdayPicker format="L" />
    </AppFormButtons.Item>
  );
};

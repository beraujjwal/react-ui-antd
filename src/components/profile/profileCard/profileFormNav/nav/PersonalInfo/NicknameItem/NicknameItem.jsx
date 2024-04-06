import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const NicknameItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="nickname"
      label={t("profile.nav.personalInfo.nickname")}
    >
      <AppInput />
    </AppFormButtons.Item>
  );
};

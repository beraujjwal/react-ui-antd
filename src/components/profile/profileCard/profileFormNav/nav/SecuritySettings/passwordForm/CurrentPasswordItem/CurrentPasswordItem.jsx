import React from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppPasswordInput } from "../../../../../../../common/inputs/passwords/AppPasswordInput";

export const CurrentPasswordItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="password"
      label={t("profile.nav.securitySettings.currentPassword")}
      rules={[
        {
          required: true,
          message: t("profile.nav.securitySettings.requiredPassword"),
        },
      ]}
    >
      <AppPasswordInput />
    </AppFormButtons.Item>
  );
};

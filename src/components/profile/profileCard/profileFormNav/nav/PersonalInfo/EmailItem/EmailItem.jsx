import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const EmailItem = ({ required, onClick, verified, ...props }) => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="email"
      $isSuccess={verified}
      $successText={t("profile.nav.personalInfo.verified")}
      label={t("common.email")}
      rules={[
        { required, message: t("common.requiredField") },
        {
          type: "email",
          message: t("common.notValidEmail"),
        },
      ]}
      {...props}
    >
      <AppInput disabled={verified} onClick={onClick} />
    </AppFormButtons.Item>
  );
};

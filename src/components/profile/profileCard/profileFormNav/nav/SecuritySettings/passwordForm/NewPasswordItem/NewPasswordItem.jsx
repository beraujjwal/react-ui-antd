import React from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppPasswordInput } from "../../../../../../../common/inputs/passwords/AppPasswordInput";
import { passwordPattern } from "../../../../../../../../constants/patterns";

export const NewPasswordItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="newPassword"
      label={t("profile.nav.securitySettings.newPassword")}
      dependencies={["password"]}
      rules={[
        {
          required: true,
          message: t("profile.nav.securitySettings.requiredPassword"),
        },
        {
          pattern: passwordPattern,
          message: t("profile.nav.securitySettings.notValidPassword"),
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") !== value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error(t("profile.nav.securitySettings.samePassword"))
            );
          },
        }),
      ]}
    >
      <AppPasswordInput />
    </AppFormButtons.Item>
  );
};

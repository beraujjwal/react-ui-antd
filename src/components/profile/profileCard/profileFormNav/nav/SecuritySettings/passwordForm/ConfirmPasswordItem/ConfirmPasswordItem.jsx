import React from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppPasswordInput } from "../../../../../../../common/inputs/passwords/AppPasswordInput";

export const ConfirmItemPassword = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="confirmPassword"
      label={t("profile.nav.securitySettings.confirmPassword")}
      dependencies={["newPassword"]}
      rules={[
        {
          required: true,
          message: t("profile.nav.securitySettings.requiredPassword"),
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("newPassword") === value) {
              return Promise.resolve();
            }
            return Promise.reject(
              new Error(t("profile.nav.securitySettings.dontMatchPassword"))
            );
          },
        }),
      ]}
    >
      <AppPasswordInput />
    </AppFormButtons.Item>
  );
};

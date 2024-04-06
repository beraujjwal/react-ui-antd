import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const FirstNameItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item name="firstName" label={t("common.firstName")}>
      <AppInput />
    </AppFormButtons.Item>
  );
};

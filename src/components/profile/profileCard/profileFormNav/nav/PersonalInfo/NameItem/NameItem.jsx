import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const NameItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item name="name" label={t("common.name")}>
      <AppInput />
    </AppFormButtons.Item>
  );
};

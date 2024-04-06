import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const CitiesItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item name="city" label={t("common.city")}>
      <AppInput />
    </AppFormButtons.Item>
  );
};

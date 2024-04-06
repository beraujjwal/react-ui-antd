import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const ZipcodeItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item name="zipcode" label={t("common.zipcode")}>
      <AppInput />
    </AppFormButtons.Item>
  );
};

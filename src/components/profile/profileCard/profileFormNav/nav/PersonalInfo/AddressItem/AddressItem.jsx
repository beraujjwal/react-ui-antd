import React from "react";
import { useTranslation } from "react-i18next";
import { AppInput } from "../../../../../../common/inputs/inputs/AppInput";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";

export const AddressItem = ({ number }) => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name={`address${number}`}
      label={`${t("common.address")} ${number}`}
    >
      <AppInput />
    </AppFormButtons.Item>
  );
};

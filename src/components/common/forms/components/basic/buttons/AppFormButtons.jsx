import React from "react";
import { AppButton } from "../../../../buttons/AppButton";
import { useTranslation } from "react-i18next";
import { AppRow } from "../../../../rows/AppRow";
import { AppColumn } from "../../../../columns/AppColumn";

import { AppForm } from "../../../AppForm";

import { AppFormTitle } from "../titles/AppFormTitle";
import { AppFormItem } from "../items/AppFormItem";
import { AppFormList } from "../lists/AppFormList";

export const AppFormButtons = ({ className, onCancel, loading, ...props }) => {
  const { t } = useTranslation();

  return (
    <AppRow className={className} gutter={[10, 10]} wrap={false}>
      <AppColumn span={12}>
        <AppButton block type="ghost" onClick={onCancel} {...props}>
          {t("common.cancel")}
        </AppButton>
      </AppColumn>
      <AppColumn span={12}>
        <AppButton
          block
          type="primary"
          loading={loading}
          htmlType="submit"
          {...props}
        >
          {t("common.save")}
        </AppButton>
      </AppColumn>
    </AppRow>
  );
};

AppFormButtons.Title = AppFormTitle;
AppFormButtons.Item = AppFormItem;
AppFormButtons.List = AppFormList;
AppFormButtons.useForm = AppForm.useForm;
AppFormButtons.Provider = AppForm.Provider;

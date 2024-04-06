import React from "react";
import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { AppFormTitle } from "./components/basic/titles/AppFormTitle";
import { AppFormItem } from "./components/basic/items/AppFormItem";
import { AppFormList } from "./components/basic/lists/AppFormList";
import { Notification } from "../../../services/notification.service";

export const AppForm = ({ onFinishFailed, layout = "vertical", ...props }) => {
  const { t } = useTranslation();

  const onFinishFailedDefault = (error) => {
    Notification.error({
      message: t("common.error"),
      description: error.errorFields[0].errors,
    });
  };

  return (
    <Form
      onFinishFailed={onFinishFailed || onFinishFailedDefault}
      layout={layout}
      {...props}
    />
  );
};

AppForm.Title = AppFormTitle;
AppForm.Item = AppFormItem;
AppForm.List = AppFormList;
AppForm.useForm = Form.useForm;
AppForm.Provider = Form.Provider;

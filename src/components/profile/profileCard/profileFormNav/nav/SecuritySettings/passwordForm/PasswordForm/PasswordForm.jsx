import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { ConfirmItemPassword } from "../ConfirmPasswordItem/ConfirmPasswordItem";
import { CurrentPasswordItem } from "../CurrentPasswordItem/CurrentPasswordItem";
import { NewPasswordItem } from "../NewPasswordItem/NewPasswordItem";
import { Notification } from "../../../../../../../../services/notification.service";
import * as S from "./PasswordForm.styles";
import { AppRow } from "../../../../../../../common/rows/AppRow";
import { AppColumn } from "../../../../../../../common/columns/AppColumn";

export const PasswordForm = () => {
  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const { t } = useTranslation();

  const onFinish = (values) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFieldsChanged(false);
      Notification.success({ message: t("common.success") });
      console.log(values);
    }, 1000);
  };

  return (
    <AppFormButtons
      name="newPassword"
      requiredMark="optional"
      isFieldsChanged={isFieldsChanged}
      onFieldsChange={() => setFieldsChanged(true)}
      footer={
        <S.Btn loading={isLoading} type="primary" htmlType="submit">
          {t("common.confirm")}
        </S.Btn>
      }
      onFinish={onFinish}
    >
      <AppRow gutter={{ md: 15, xl: 30 }}>
        <AppColumn span={24}>
          <AppFormButtons.Item>
            <AppFormButtons.Title>
              {t("profile.nav.securitySettings.changePassword")}
            </AppFormButtons.Title>
          </AppFormButtons.Item>
        </AppColumn>

        <AppColumn xs={24} md={12} xl={24}>
          <CurrentPasswordItem />
        </AppColumn>

        <AppColumn xs={24} md={12} xl={24}>
          <NewPasswordItem />
        </AppColumn>

        <AppColumn xs={24} md={12} xl={24}>
          <ConfirmItemPassword />
        </AppColumn>
      </AppRow>
    </AppFormButtons>
  );
};

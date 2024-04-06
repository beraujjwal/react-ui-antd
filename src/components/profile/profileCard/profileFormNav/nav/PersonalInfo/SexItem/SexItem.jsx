import React from "react";
import { useTranslation } from "react-i18next";
import { ManOutlined, WomanOutlined } from "@ant-design/icons";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import {
  AppSelect,
  Option,
} from "../../../../../../common/selects/AppSelect/AppSelect";
import { AppSpace } from "../../../../../../common/spaces/AppSpace";

export const SexItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item name="sex" label={t("profile.nav.personalInfo.sex")}>
      <AppSelect>
        <Option value="male">
          <AppSpace align="center">
            <ManOutlined />
            {t("profile.nav.personalInfo.male")}
          </AppSpace>
        </Option>
        <Option value="female">
          <AppSpace align="center">
            <WomanOutlined />
            {t("profile.nav.personalInfo.female")}
          </AppSpace>
        </Option>
      </AppSelect>
    </AppFormButtons.Item>
  );
};

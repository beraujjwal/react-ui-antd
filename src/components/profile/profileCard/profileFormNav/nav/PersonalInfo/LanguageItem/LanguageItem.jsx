import React from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import {
  AppSelect,
  Option,
} from "../../../../../../common/selects/AppSelect/AppSelect";
import { languages } from "../../../../../../../constants/languages";
import { AppSpace } from "../../../../../../common/spaces/AppSpace";

console.log("languages", languages);

const languageOptions = languages.map((lang) => (
  <Option key={lang.id} value={lang.name}>
    <AppSpace align="center">
      <ReactCountryFlag svg countryCode={lang.countryCode} alt="country flag" />
      {lang.title}
    </AppSpace>
  </Option>
));

export const LanguageItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item
      name="language"
      label={t("profile.nav.personalInfo.language")}
    >
      <AppSelect>{languageOptions}</AppSelect>
    </AppFormButtons.Item>
  );
};

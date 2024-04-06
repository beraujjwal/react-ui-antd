import React from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppURLInput } from "../../../../../../common/inputs/urls/AppURLInput";
import { websitePattern } from "../../../../../../../constants/patterns";

const scheme = "https://";

export const WebsiteItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item shouldUpdate>
      {({ getFieldValue }) => {
        const website = getFieldValue("website");

        return (
          <AppFormButtons.Item
            name="website"
            label={t("profile.nav.personalInfo.website")}
            rules={[
              {
                pattern: websitePattern,
                message: t("profile.nav.personalInfo.notValidWebsite"),
              },
            ]}
          >
            <AppURLInput
              href={`${scheme}${website}`}
              target="_blank"
              addonBefore={scheme}
            />
          </AppFormButtons.Item>
        );
      }}
    </AppFormButtons.Item>
  );
};

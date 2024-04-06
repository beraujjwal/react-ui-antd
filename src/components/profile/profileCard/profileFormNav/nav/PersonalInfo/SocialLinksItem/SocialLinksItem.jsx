import React from "react";
import { useTranslation } from "react-i18next";
import { TwitterOutlined } from "@ant-design/icons";
import { AppFormButtons } from "../../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppClipboardInput } from "../../../../../../common/inputs/clipboards/AppClipboardInput";
import { AppURLInput } from "../../../../../../common/inputs/urls/AppURLInput";
import { LinkedinIcon } from "../../../../../../common/icons/LinkedinIcon";
import { FacebookIcon } from "../../../../../../common/icons/FacebookIcon";
import { websitePattern } from "../../../../../../../constants/patterns";
import { AppRow } from "../../../../../../common/rows/AppRow";
import { AppColumn } from "../../../../../../common/columns/AppColumn";

export const SocialLinksItem = () => {
  const { t } = useTranslation();

  return (
    <AppFormButtons.Item label={t("profile.nav.personalInfo.socialLinks")}>
      <AppRow gutter={[20, 0]}>
        <AppColumn xs={24} md={12}>
          <AppFormButtons.Item shouldUpdate>
            {({ getFieldValue }) => {
              const twitter = getFieldValue("twitter");

              return (
                <label>
                  <AppFormButtons.Item name="twitter">
                    <AppClipboardInput
                      valueToCopy={twitter}
                      addonBefore={<TwitterOutlined />}
                    />
                  </AppFormButtons.Item>
                </label>
              );
            }}
          </AppFormButtons.Item>
        </AppColumn>
        <AppColumn xs={24} md={12}>
          <AppFormButtons.Item shouldUpdate>
            {({ getFieldValue }) => {
              const linkedin = getFieldValue("linkedin");

              return (
                <label>
                  <AppFormButtons.Item
                    name="linkedin"
                    rules={[
                      {
                        pattern: new RegExp(websitePattern),
                        message: t("profile.nav.personalInfo.notValidWebsite"),
                      },
                    ]}
                  >
                    <AppURLInput
                      href={linkedin}
                      target="_blank"
                      addonBefore={<LinkedinIcon />}
                    />
                  </AppFormButtons.Item>
                </label>
              );
            }}
          </AppFormButtons.Item>
        </AppColumn>
        <AppColumn xs={24} md={12}>
          <AppFormButtons.Item shouldUpdate>
            {({ getFieldValue }) => {
              const facebook = getFieldValue("facebook");

              return (
                <label>
                  {" "}
                  <AppFormButtons.Item
                    name="facebook"
                    rules={[
                      {
                        pattern: new RegExp(websitePattern),
                        message: t("profile.nav.personalInfo.notValidWebsite"),
                      },
                    ]}
                  >
                    <AppURLInput
                      href={facebook}
                      target="_blank"
                      addonBefore={<FacebookIcon />}
                    />
                  </AppFormButtons.Item>
                </label>
              );
            }}
          </AppFormButtons.Item>
        </AppColumn>
      </AppRow>
    </AppFormButtons.Item>
  );
};

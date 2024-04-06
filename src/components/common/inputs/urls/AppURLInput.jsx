import React, { useMemo } from "react";
import { AppSuffixInput } from "../suffixs/AppSuffixInput";
import { useTranslation } from "react-i18next";
import { FileTextOutlined } from "@ant-design/icons";
import { websitePattern } from "../../../../constants/patterns";
import { AppButton } from "../../buttons/AppButton";
import { AppTooltip } from "../../tooltipes/AppTooltip";

export const AppURLInput = ({ href, target = "_blank", ...props }) => {
  const { t } = useTranslation();

  const isMatch = useMemo(
    () => new RegExp(websitePattern).test(href || " "),
    [href]
  );

  return (
    <AppSuffixInput
      suffix={
        <AppTooltip title={t("common.openInNewTab")}>
          <AppButton
            size="small"
            href={href}
            target={target}
            disabled={!isMatch}
            type="text"
            icon={<FileTextOutlined />}
          />
        </AppTooltip>
      }
      {...props}
    />
  );
};

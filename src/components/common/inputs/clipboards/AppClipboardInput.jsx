import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CopyOutlined } from "@ant-design/icons";
import { AppSuffixInput } from "../suffixs/AppSuffixInput";
import { Notification } from "../../../../services/notification.service";
import { AppTooltip } from "../../tooltipes/AppTooltip";
import { AppButton } from "../../buttons/AppButton";

export const AppClipboardInput = ({ valueToCopy, ...props }) => {
  const { t } = useTranslation();

  const handleCopy = useCallback(
    () =>
      valueToCopy &&
      navigator.clipboard.writeText(valueToCopy).then(() => {
        Notification.info({ message: t("common.copied") });
      }),
    [valueToCopy, t]
  );

  return (
    <AppSuffixInput
      suffix={
        <AppTooltip title={t("common.copy")}>
          <AppButton
            size="small"
            disabled={!valueToCopy}
            type="text"
            icon={<CopyOutlined />}
            onClick={handleCopy}
          />
        </AppTooltip>
      }
      {...props}
    />
  );
};

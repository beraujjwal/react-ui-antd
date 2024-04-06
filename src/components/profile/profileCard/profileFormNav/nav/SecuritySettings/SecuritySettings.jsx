import React from "react";
import { AppCard } from "../../../../../common/cards/AppCard";
import { PasswordForm } from "./passwordForm/PasswordForm/PasswordForm";
//import { TwoFactorAuth } from "./twoFactorAuth/TwoFactorAuth";
import { AppRow } from "../../../../../common/rows/AppRow";
import { AppColumn } from "../../../../../common/columns/AppColumn";

export const SecuritySettings = () => (
  <AppCard>
    <AppRow gutter={[30, 0]}>
      <AppColumn xs={24} xl={10}>
        <PasswordForm />
      </AppColumn>

      {/* <AppColumn xs={24} xl={14}>
        <TwoFactorAuth />
      </AppColumn> */}
    </AppRow>
  </AppCard>
);

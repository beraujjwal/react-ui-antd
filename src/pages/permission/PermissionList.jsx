import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../../components/common/pageTitles/PageTitle";
import { PermissionList as Permissions } from "../../components/acl/permission/PermissionList";

const PermissionList = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t("acl.nav.permission.title")}</PageTitle>
      <Permissions />
    </>
  );
};

export default PermissionList;

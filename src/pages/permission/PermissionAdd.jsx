import React from "react";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../../components/common/pageTitles/PageTitle";
import { PermissionAdd } from "../../components/acl/permission/PermissionAdd";

const PermissionAdd = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t("acl.nav.permission.title")}</PageTitle>
      <PermissionAdd />
    </>
  );
};

export default PermissionAdd;

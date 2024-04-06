import React from "react";
import { useTranslation } from "react-i18next";
import { PageTitle } from "../../components/common/pageTitles/PageTitle";
import { PermissionEdit } from "../../components/acl/permission/PermissionEdit";

const PermissionEdit = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle>{t("acl.nav.permission.title")}</PageTitle>
      <PermissionEdit />
    </>
  );
};

export default PermissionEdit;

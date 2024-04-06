import React from "react";
import { useTranslation } from "react-i18next";

//import { BasicTable } from "../../tables/BasicTable/BasicTable";

import * as S from "./PermissionList.styles";

export const PermissionList = () => {
  const { t } = useTranslation();
  return (
    <>
      <S.TablesWrapper>
        <S.Card
          id="basic-table"
          title={t("tables.basicTable")}
          padding="1.25rem 1.25rem 0"
        >
          {/* <BasicTable /> */}
        </S.Card>
      </S.TablesWrapper>
    </>
  );
};

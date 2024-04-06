import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useAppDispatch } from "../../../hooks/reduxHooks";
import { getAllPermissions } from "../../../app/actions/permissionAction";

//import { BasicTable } from "../../tables/BasicTable/BasicTable";

import * as S from "./PermissionList.styles";

export const PermissionList = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);

  useEffect(() => {
    dispatch(getAllPermissions(params)).unwrap();
  }, []);

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

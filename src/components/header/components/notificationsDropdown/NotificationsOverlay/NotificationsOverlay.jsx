import React, { useMemo } from "react";
import { Trans } from "react-i18next";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AppNotification } from "../../../../common/notifications/AppNotification";
import { capitalize } from "../../../../../utils/utils";
import { notificationsSeverities } from "../../../../../constants/notificationsSeverities";
import * as S from "./NotificationsOverlay.styles";
import { AppRow } from "../../../../common/rows/AppRow";
import { AppColumn } from "../../../../common/columns/AppColumn";
import { AppSpace } from "../../../../common/spaces/AppSpace";

export const NotificationsOverlay = ({
  notifications,
  setNotifications,
  ...props
}) => {
  const { t } = useTranslation();

  const noticesList = useMemo(
    () =>
      notifications.map((notification, index) => {
        const type = notificationsSeverities.find(
          (dbSeverity) => dbSeverity.id === notification.id
        )?.name;

        return (
          <AppNotification
            key={index}
            type={type || "warning"}
            title={capitalize(type || "warning")}
            description={t(notification.description)}
            {...(type === "mention" && {
              mentionIconSrc: notification.userIcon,
              title: notification.userName,
              description: (
                <Trans i18nKey={notification.description}>
                  <S.LinkBtn type="link" href={notification.href}>
                    {
                      { place: t(notification.place) } // todo: remove casting
                    }
                  </S.LinkBtn>
                </Trans>
              ),
            })}
          />
        );
      }),
    [notifications, t]
  );

  return (
    <S.NoticesOverlayMenu {...props}>
      <AppRow gutter={[20, 20]}>
        <AppColumn span={24}>
          {notifications.length > 0 ? (
            <AppSpace direction="vertical" size={10} split={<S.SplitDivider />}>
              {noticesList}
            </AppSpace>
          ) : (
            <S.Text>{t("header.notifications.noNotifications")}</S.Text>
          )}
        </AppColumn>
        <AppColumn span={24}>
          <AppRow gutter={[10, 10]}>
            {notifications.length > 0 && (
              <AppColumn span={24}>
                <S.Btn type="ghost" onClick={() => setNotifications([])}>
                  {t("header.notifications.readAll")}
                </S.Btn>
              </AppColumn>
            )}
            <AppColumn span={24}>
              <S.Btn type="link">
                <Link to="/">{t("header.notifications.viewAll")}</Link>
              </S.Btn>
            </AppColumn>
          </AppRow>
        </AppColumn>
      </AppRow>
    </S.NoticesOverlayMenu>
  );
};

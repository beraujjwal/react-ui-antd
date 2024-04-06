import React, { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppFormButtons } from "../../../../../common/forms/components/basic/buttons/AppFormButtons";
import { AppCard } from "../../../../../common/cards/AppCard";
import { NameItem } from "./NameItem/NameItem";
//import { FirstNameItem } from "./FirstNameItem/FirstNameItem";
//import { LastNameItem } from "./LastNameItem/LastNameItem";
//import { NicknameItem } from "./NicknameItem/NicknameItem";
//import { SexItem } from "./SexItem/SexItem";
//import { BirthdayItem } from "./BirthdayItem/BirthdayItem";
//import { LanguageItem } from "./LanguageItem/LanguageItem";
//import { PhoneItem } from "./PhoneItem/PhoneItem";
//import { EmailItem } from "./EmailItem/EmailItem";
//import { CountriesItem } from "./CountriesItem/CountriesItem";
//import { CitiesItem } from "./CitiesItem/CitiesItem";
//import { ZipcodeItem } from "./ZipcodeItem/ZipcodeItem";
//import { AddressItem } from "./AddressItem/AddressItem";
//import { WebsiteItem } from "./WebsiteItem/WebsiteItem";
//import { SocialLinksItem } from "./SocialLinksItem/SocialLinksItem";
import { useAppSelector } from "../../../../../../hooks/reduxHooks";
//import { Dates } from "../../../../../../constants/Dates";
import { Notification } from "../../../../../../services/notification.service";
import { AppRow } from "../../../../../common/rows/AppRow";
import { AppColumn } from "../../../../../common/columns/AppColumn";

const initialPersonalInfoValues = {
  // firstName: "Ujjwal",
  // lastName: "Bera",
  name: "Ujjwal Bera",
  // nickName: "Bhalu",
  // sex: "Male",
  // birthday: undefined,
  // language: "en",
  phone: "9883266203",
  email: "ujjwalbera.dev@gmail.com",
  // country: "IN",
  // city: "Kolkata",
  // address1: "Kolkata",
  // address2: "",
  // zipcode: "712417",
  // website: "https://www.ujjwalbera.work",
  // twitter: "",
  // linkedin: "",
  // facebook: "",
};

export const PersonalInfo = () => {
  const user = useAppSelector((state) => state.user.user);

  const [isFieldsChanged, setFieldsChanged] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const userFormValues = useMemo(
    () =>
      user
        ? {
            // firstName: user.name.split(" ")[0],
            // lastName: user.name.split(" ")[1],
            name: user.name,
            email: user.email,
            phone: user.phone,
            // nickname: user.name,
            // sex: user.sex,
            // birthday: Dates.getDate(user.birthday),
            // language: user.lang,
            // country: user.country,
            // city: user.city,
            // address1: user.address1,
            // address2: user?.address2,
            // zipcode: user.zipcode,
            // website: user?.website,
            // twitter: user?.socials?.twitter,
            // linkedin: user?.socials?.linkedin,
            // facebook: user?.socials?.facebook,
          }
        : initialPersonalInfoValues,
    [user]
  );

  const [form] = AppFormButtons.useForm();

  const { t } = useTranslation();

  const onFinish = useCallback(
    (values) => {
      // todo dispatch an action here
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFieldsChanged(false);
        Notification.success({ message: t("common.success") });
      }, 1000);
    },
    [t]
  );

  return (
    <AppCard>
      <AppFormButtons
        form={form}
        name="info"
        loading={isLoading}
        //initialValues={userFormValues}
        //isFieldsChanged={isFieldsChanged}
        //setFieldsChanged={setFieldsChanged}
        //onFieldsChange={() => setFieldsChanged(true)}
        //onFinish={onFinish}
      >
        <AppRow gutter={{ xs: 10, md: 15, xl: 30 }}>
          <AppColumn span={24}>
            <AppFormButtons.Item>
              <AppFormButtons.Title>
                {t("profile.nav.personalInfo.title")}
              </AppFormButtons.Title>
            </AppFormButtons.Item>
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <NameItem />
          </AppColumn>

          {/* <AppColumn xs={24} md={12}>
            <FirstNameItem />
          </AppColumn> */}

          {/* <AppColumn xs={24} md={12}>
            <LastNameItem />
          </AppColumn> */}

          {/* <AppColumn xs={24} md={12}>
            <NicknameItem />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <SexItem />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <BirthdayItem />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <LanguageItem />
          </AppColumn> */}

          <AppColumn span={24}>
            <AppFormButtons.Item>
              <AppFormButtons.Title>
                {t("profile.nav.personalInfo.contactInfo")}
              </AppFormButtons.Title>
            </AppFormButtons.Item>
          </AppColumn>

          {/* <AppColumn xs={24} md={12}>
            <PhoneItem verified={user?.phone.verified} />
          </AppColumn> */}

          {/* <AppColumn xs={24} md={12}>
            <EmailItem verified={user?.email.verified} />
          </AppColumn> */}

          <AppColumn span={24}>
            <AppFormButtons.Item>
              <AppFormButtons.Title>{t("common.address")}</AppFormButtons.Title>
            </AppFormButtons.Item>
          </AppColumn>

          {/* <AppColumn xs={24} md={12}>
            <CountriesItem />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <CitiesItem />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <AddressItem number={1} />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <AddressItem number={2} />
          </AppColumn>

          <AppColumn xs={24} md={12}>
            <ZipcodeItem />
          </AppColumn> */}

          <AppColumn span={24}>
            <AppFormButtons.Item>
              <AppFormButtons.Title>
                {t("profile.nav.personalInfo.otherInfo")}
              </AppFormButtons.Title>
            </AppFormButtons.Item>
          </AppColumn>

          {/* <AppColumn xs={24} md={12}>
            <WebsiteItem />
          </AppColumn>

          <AppColumn span={24}>
            <SocialLinksItem />
          </AppColumn> */}
        </AppRow>
      </AppFormButtons>
    </AppCard>
  );
};

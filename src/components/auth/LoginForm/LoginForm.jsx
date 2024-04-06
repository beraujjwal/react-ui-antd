import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AppForm } from "../../common/forms/AppForm";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { loginUser } from "../../../app/actions/userAction";
import { Notification } from "../../../services/notification.service";
import { ReactComponent as FacebookIcon } from "../../../assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "../../../assets/icons/google.svg";
import * as S from "./LoginForm.styles";
import * as Auth from "../../layouts/auth/AuthLayout.styles";

export const initValues = {
  username: "administrator@mail.com",
  password: "9876543210",
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values) => {
    setLoading(true);
    dispatch(loginUser(values))
      .unwrap()
      .then(() => navigate("/"))
      .catch((err) => {
        //Notification.error(err);
        setLoading(false);
      });
  };

  return (
    <Auth.FormWrapper>
      <AppForm
        layout="vertical"
        onFinish={handleSubmit}
        requiredMark="optional"
        initialValues={initValues}
      >
        <Auth.FormTitle>{t("common.login")}</Auth.FormTitle>
        <S.LoginDescription>{t("login.loginInfo")}</S.LoginDescription>
        <Auth.FormItem
          name="username"
          label={t("common.username")}
          rules={[
            { required: true, message: t("common.requiredField") },
            {
              type: "text",
              message: t("common.notValidEmail"),
            },
          ]}
        >
          <Auth.FormInput placeholder={t("common.username")} />
        </Auth.FormItem>
        <Auth.FormItem
          label={t("common.password")}
          name="password"
          rules={[{ required: true, message: t("common.requiredField") }]}
        >
          <Auth.FormInputPassword placeholder={t("common.password")} />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <AppForm.Item name="rememberMe" valuePropName="checked" noStyle>
            <Auth.FormCheckbox>
              <S.RememberMeText>{t("login.rememberMe")}</S.RememberMeText>
            </Auth.FormCheckbox>
          </AppForm.Item>
          <Link to="/auth/forgot-password">
            <S.ForgotPasswordText>
              {t("common.forgotPass")}
            </S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <AppForm.Item noStyle>
          <Auth.SubmitButton
            type="primary"
            htmlType="submit"
            loading={isLoading}
          >
            {t("common.login")}
          </Auth.SubmitButton>
        </AppForm.Item>
        <AppForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <GoogleIcon />
            </Auth.SocialIconWrapper>
            {t("login.googleLink")}
          </Auth.SocialButton>
        </AppForm.Item>
        <AppForm.Item noStyle>
          <Auth.SocialButton type="default" htmlType="submit">
            <Auth.SocialIconWrapper>
              <FacebookIcon />
            </Auth.SocialIconWrapper>
            {t("login.facebookLink")}
          </Auth.SocialButton>
        </AppForm.Item>
        <Auth.FooterWrapper>
          <Auth.Text>
            {t("login.noAccount")}{" "}
            <Link to="/auth/sign-up">
              <Auth.LinkText>{t("common.here")}</Auth.LinkText>
            </Link>
          </Auth.Text>
        </Auth.FooterWrapper>
      </AppForm>
    </Auth.FormWrapper>
  );
};

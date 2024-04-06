import React from 'react';
import { useTranslation } from 'react-i18next';
import { PageTitle } from '../components/common/pageTitles/PageTitle';
import { AppCard } from '../components/common/cards/AppCard';
import { DynamicForm } from '../components/forms/DynamicForm/DynamicForm';
import { ControlForm } from '../components/forms/ControlForm/ControlForm';
import { ValidationForm } from '../components/forms/ValidationForm/ValidationForm';
import { StepForm } from '../components/forms/StepForm/StepForm';
import { AppRow } from '../components/common/rows/AppRow';
import { AppColumn } from '../components/common/columns/AppColumn';

const AdvancedFormsPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.advancedForms')}</PageTitle>
      <AppRow gutter={[30, 30]}>
        <AppColumn xs={24} sm={24} xl={10}>
          <AppCard id="validation form" title={t('forms.validationForm')} padding="1.25rem">
            <ValidationForm />
          </AppCard>
        </AppColumn>

        <AppColumn xs={24} sm={24} xl={14}>
          <AppRow gutter={[30, 30]}>
            <AppColumn span={24}>
              <AppCard id="control-form" title={t('forms.controlForm')} padding="1.25rem">
                <ControlForm />
              </AppCard>
            </AppColumn>
            <AppColumn span={24}>
              <AppCard id="dynamic-form" title={t('forms.dynamicForm')} padding="1.25rem">
                <DynamicForm />
              </AppCard>
            </AppColumn>
            <AppColumn span={24}>
              <AppCard id="step-form" title={t('forms.stepForm')} padding="1.25rem">
                <StepForm />
              </AppCard>
            </AppColumn>
          </AppRow>
        </AppColumn>
      </AppRow>
    </>
  );
};

export default AdvancedFormsPage;

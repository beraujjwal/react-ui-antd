import React from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/AppForm';
import { BaseInput } from '@app/components/common/inputs/BaseInput/AppInput';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { useResetFormOnCloseModal } from './useResetFormOnCloseModal';
import { BaseModal } from '@app/components/common/BaseModal/AppModal';


export const AddUserFormModal = ({ open, onCancel }) => {
  const [form] = BaseForm.useForm();
  const { t } = useTranslation();

  useResetFormOnCloseModal({
    form,
    open,
  });

  const onOk = () => {
    form.submit();
  };

  return (
    <BaseModal title={t('forms.controlFormLabels.newUser')} open={open} onOk={onOk} onCancel={onCancel}>
      <BaseForm form={form} layout="vertical" name="userForm">
        <BaseForm.Item
          name="name"
          label={t('common.name')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <BaseInput />
        </BaseForm.Item>
        <BaseForm.Item
          name="age"
          label={t('common.age')}
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <InputNumber block />
        </BaseForm.Item>
      </BaseForm>
    </BaseModal>
  );
};

import React from 'react';
import { InputNumber } from '@app/components/common/inputs/InputNumber/InputNumber';
import { BaseInput } from '@app/components/common/inputs/BaseInput/BaseInput';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';


export const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <BaseInput />;

  return (
    <td {...restProps}>
      {editing ? (
        <BaseForm.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </BaseForm.Item>
      ) : (
        children
      )}
    </td>
  );
};

import React, { useMemo } from 'react';
import { PaymentHistory } from './paymentHistory/PaymentHistory/PaymentHistory';
import { PaymentMethod } from './paymentMethod/PaymentMethod';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { useResponsive } from 'hooks/useResponsive';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { AppColumn } from '@app/components/common/BaseCol/BaseCol';

export const Payments = () => {
  const { isTablet } = useResponsive();

  const content = useMemo(
    () => (
      <BaseRow gutter={[0, 30]}>
        <AppColumn span={24}>
          <PaymentMethod />
        </AppColumn>
        <AppColumn span={24}>
          <PaymentHistory />
        </AppColumn>
      </BaseRow>
    ),
    [],
  );

  return isTablet ? <BaseCard>{content}</BaseCard> : content;
};

import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { BaseCard } from '@app/components/common/BaseCard/BaseCard';
import { PaymentCardsWidget } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentMethod/PaymentCardsWidget';
import { useResponsive } from '@app/hooks/useResponsive';
import { BaseSpin } from '@app/components/common/BaseSpin/BaseSpin';
import { PaymentCard } from '@app/interfaces/interfaces';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { getPaymentCards } from '@app/api/paymentCards.api';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { AppColumn } from '@app/components/common/BaseCol/BaseCol';

export const PaymentMethod = () => {
  const { t } = useTranslation();

  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = useAppSelector((state) => state.user?.user?.id);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getPaymentCards(id)
        .then((res) => setCards(res))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const { isTablet } = useResponsive();

  const handleCardRemove = (cardNumber) => setCards(cards.filter((card) => card.number !== cardNumber));

  const handleCardAdd = (card) => {
    setCards([...cards, card]);
  };

  const content = (
    <BaseRow gutter={[32, 32]}>
      <AppColumn span={24}>
        <BaseForm.Title>{t('profile.nav.payments.paymentMethod')}</BaseForm.Title>
      </AppColumn>
      <AppColumn span={24}>
        <BaseSpin spinning={loading}>
          <PaymentCardsWidget cards={cards} onCardRemove={handleCardRemove} onCardAdd={handleCardAdd} />
        </BaseSpin>
      </AppColumn>
    </BaseRow>
  );

  return isTablet ? content : <BaseCard>{content}</BaseCard>;
};

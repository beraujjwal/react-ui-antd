import { useTranslation } from 'react-i18next';
import { AppPagination } from '../../../components/common/paginations/AppPagination';
import { PageTitle } from '../../../components/common/pageTitles/PageTitle';
import * as S from '../UIComponentsPage.styles';
import { AppColumn } from '../../../components/common/columns/AppColumn';

const PaginationPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageTitle>{t('common.pagination')}</PageTitle>
      <AppColumn>
        <S.Card title={t('dataDisplay.pagination.basic')}>
          <AppPagination defaultCurrent={1} total={50} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.manyPages')}>
          <AppPagination defaultCurrent={6} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.pageSize')}>
          <AppPagination showSizeChanger defaultCurrent={3} total={500} />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.disabled')}>
          <AppPagination showSizeChanger defaultCurrent={3} total={500} disabled />
        </S.Card>
        <S.Card title={t('dataDisplay.pagination.quickJump')}>
          <AppPagination size="small" total={50} showSizeChanger showQuickJumper />
        </S.Card>
      </AppColumn>
    </>
  );
};

export default PaginationPage;

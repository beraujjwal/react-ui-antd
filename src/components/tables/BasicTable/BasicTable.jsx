import React, { useEffect, useState, useCallback } from 'react';
import { BaseTable } from '@app/components/common/BaseTable/BaseTable';
import { BaseButton } from '@app/components/common/BaseButton/BaseButton';
import { useTranslation } from 'react-i18next';
import { defineColorByPriority } from '@app/utils/utils';
import { notificationController } from 'controllers/notificationController';
import { Status } from '@app/components/profile/profileCard/profileFormNav/nav/payments/paymentHistory/Status/Status';
import { useMounted } from '@app/hooks/useMounted';
import { BaseRow } from '@app/components/common/BaseRow/BaseRow';
import { AppColumn } from '@app/components/common/BaseCol/BaseCol';
import { BaseSpace } from '@app/components/common/spaces/BaseSpace';

const initialData = [];
const initialPagination = {
  current: 1,
  pageSize: 5,
};

export const BasicTable = () => {
  const [tableData, setTableData] = useState({
    data: initialData,
    pagination: initialPagination,
    loading: false,
  });
  const { t } = useTranslation();
  const { isMounted } = useMounted();

  const fetch = useCallback(
    (pagination) => {
      setTableData((tableData) => ({ ...tableData, loading: true }));
      initialData(pagination).then((res) => {
        if (isMounted.current) {
          setTableData({ data: res.data, pagination: res.pagination, loading: false });
        }
      });
    },
    [isMounted],
  );

  useEffect(() => {
    fetch(initialPagination);
  }, [fetch]);

  const handleTableChange = (pagination) => {
    fetch(pagination);
  };

  const handleDeleteRow = (rowId) => {
    setTableData({
      ...tableData,
      data: tableData.data.filter((item) => item.key !== rowId),
      pagination: {
        ...tableData.pagination,
        total: tableData.pagination.total ? tableData.pagination.total - 1 : tableData.pagination.total,
      },
    });
  };

  const columns = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      render: (text) => <span>{text}</span>,
      filterMode: 'tree',
      filterSearch: true,
      filters: [
        {
          text: t('common.firstName'),
          value: 'firstName',
          children: [
            {
              text: 'Joe',
              value: 'Joe',
            },
            {
              text: 'Pavel',
              value: 'Pavel',
            },
            {
              text: 'Jim',
              value: 'Jim',
            },
            {
              text: 'Josh',
              value: 'Josh',
            },
          ],
        },
        {
          text: t('common.lastName'),
          value: 'lastName',
          children: [
            {
              text: 'Green',
              value: 'Green',
            },
            {
              text: 'Black',
              value: 'Black',
            },
            {
              text: 'Brown',
              value: 'Brown',
            },
          ],
        },
      ],
      onFilter: (value, record) => record.name.includes(value.toString()),
    },
    {
      title: t('common.age'),
      dataIndex: 'age',
      sorter: (a, b) => a.age - b.age,
      showSorterTooltip: false,
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
    },
    {
      title: t('common.tags'),
      key: 'tags',
      dataIndex: 'tags',
      render: (tags) => (
        <BaseRow gutter={[10, 10]}>
          {tags.map((tag) => {
            return (
              <AppColumn key={tag.value}>
                <Status color={defineColorByPriority(tag.priority)} text={tag.value.toUpperCase()} />
              </AppColumn>
            );
          })}
        </BaseRow>
      ),
    },
    {
      title: t('tables.actions'),
      dataIndex: 'actions',
      width: '15%',
      render: (text, record) => {
        return (
          <BaseSpace>
            <BaseButton
              type="ghost"
              onClick={() => {
                notificationController.info({ message: t('tables.inviteMessage', { name: record.name }) });
              }}
            >
              {t('tables.invite')}
            </BaseButton>
            <BaseButton type="default" danger onClick={() => handleDeleteRow(record.key)}>
              {t('tables.delete')}
            </BaseButton>
          </BaseSpace>
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      dataSource={tableData.data}
      pagination={tableData.pagination}
      loading={tableData.loading}
      onChange={handleTableChange}
      scroll={{ x: 800 }}
      bordered
    />
  );
};

import React, { useState, useEffect, useCallback } from 'react';
import { BaseTable } from '../../tables/BasicTable/BasicTable';
import { useTranslation } from 'react-i18next';
import { useMounted } from '../../../hooks/useMounted';

const initialPagination = {
  current: 1,
  pageSize: 4,
};

const initialData = [];

export const TreeTable = () => {
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows) => {
      console.log(selected, selectedRows);
    },
  };

  const columns = [
    {
      title: t('common.name'),
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: t('common.age'),
      dataIndex: 'age',
      key: 'age',
      width: '12%',
    },
    {
      title: t('common.address'),
      dataIndex: 'address',
      width: '30%',
      key: 'address',
    },
  ];

  return (
    <>
      <BaseTable
        columns={columns}
        dataSource={tableData.data}
        rowSelection={{ ...rowSelection }}
        pagination={tableData.pagination}
        loading={tableData.loading}
        onChange={handleTableChange}
        scroll={{ x: 800 }}
      />
    </>
  );
};

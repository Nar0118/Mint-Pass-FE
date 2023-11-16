export interface ColumnType {
  title: string;
  dataIndex: string;
  key: string;
}

export const billingHistory: Array<ColumnType> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Details',
    dataIndex: 'creditTime',
    key: 'creditTime',
  },
  {
    title: 'Amount',
    dataIndex: 'price',
    key: 'price',
  },
];

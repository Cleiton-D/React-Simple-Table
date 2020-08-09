import React from 'react';
import TableComponent from '..';

export default {
  title: 'Table',
  component: TableComponent,
};

type DataProps = {
  key: string;
  description: string;
};

const data: DataProps[] = [
  { key: 'item1', description: 'Description for the item one' },
  { key: 'item2', description: 'Description for the item two' },
];

export const Table = (): React.ReactElement => (
  <TableComponent<DataProps> data={data} keyExtractor={item => item.key}>
    <th>#</th>
    <th>Description</th>
  </TableComponent>
);

import { memo } from 'react';
import { Select } from '../../common';

export const SelectList = memo(
  ({
    onSelect,
    id = '',
    data,
  }: {
    onSelect: (value: string) => void;
    id: string;
    data: { value: string; label: string }[];
  }) => {
    return <Select id={id} onChange={(value) => onSelect(value)} options={data} />;
  },
);

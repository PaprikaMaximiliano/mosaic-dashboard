import { Select, type ItemRenderer } from '@blueprintjs/select';
import { Button, MenuItem } from '@blueprintjs/core';
import type { CompanyOption } from '../../types';
import type { Dispatch, SetStateAction } from 'react';

interface Props {
  selectedCompany: CompanyOption | undefined;
  setSelectedCompany: Dispatch<SetStateAction<CompanyOption | undefined>>;
  companyOptions: CompanyOption[];
}

export const CompanySelect = ({
  selectedCompany,
  setSelectedCompany,
  companyOptions
}: Props) => {
  const renderCompanyOption: ItemRenderer<CompanyOption> = (
    company,
    { handleClick, handleFocus, modifiers }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    return (
      <MenuItem
        active={modifiers.active}
        disabled={modifiers.disabled}
        key={company?.id}
        label={company?.name}
        onClick={handleClick}
        onFocus={handleFocus}
        roleStructure="listoption"
        text={company?.name}
      />
    );
  };

  return (
    <Select<CompanyOption>
      items={companyOptions}
      itemRenderer={renderCompanyOption}
      onItemSelect={setSelectedCompany}>
      <Button
        text={selectedCompany?.name ?? 'Select a company'}
        endIcon="double-caret-vertical"
      />
    </Select>
  );
};

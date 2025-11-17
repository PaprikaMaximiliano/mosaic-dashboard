import { useEffect, useState } from 'react';
import type { CompanyData } from '../interfaces';

export const useCompaniesOptions = () => {
  const [companies, setCompanies] = useState<CompanyData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3000/companies')
      .then((res) => res.json())
      .then((data) => setCompanies(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const companyOptions = companies.map((company) => ({
    id: company.id,
    name: company.name
  }));

  return { companyOptions, loading, error };
};

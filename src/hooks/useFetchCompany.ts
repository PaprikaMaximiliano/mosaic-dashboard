import { useEffect, useState } from 'react';
import type { CompanyData } from '../interfaces';

export const useFetchCompany = (id: string | undefined) => {
  const [company, setCompany] = useState<CompanyData>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!id) {
      setCompany(undefined);
      setLoading(false);
      setError(false);
      return;
    }

    setLoading(true);
    setError(false);

    fetch(`http://localhost:3000/companies/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setCompany(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  return { company, loading, error };
};

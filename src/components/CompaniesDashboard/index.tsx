import { Mosaic, MosaicWindow, type MosaicNode } from 'react-mosaic-component';
import { useCompaniesOptions } from '../../hooks/useCompaniesOptions';
import { CompanyProfile } from '../CompanyProfile';
import type { ReactNode } from 'react';
import '../../common.css';

export type ViewId = 'a' | 'b' | 'c' | 'new';

import 'react-mosaic-component/react-mosaic-component.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

export const CompaniesDashboard = () => {
  const { companyOptions, loading, error } = useCompaniesOptions();

  const components: Record<number, ReactNode> = {
    1: <CompanyProfile companyOptions={companyOptions} />,
    2: <CompanyProfile companyOptions={companyOptions} />,
    3: <CompanyProfile companyOptions={companyOptions} />
  };

  const mosaicTree: MosaicNode<number> = {
    direction: 'row',
    first: 1,
    second: {
      direction: 'column',
      first: 2,
      second: 3
    }
  };

  if (loading) return <div className="info loading">Loading...</div>;
  if (error) return <div className="info error">Error</div>;

  return (
    <Mosaic<number>
      renderTile={(id, path) => (
        <MosaicWindow<number> path={path} title="Company Info">
          {components[id]}
        </MosaicWindow>
      )}
      initialValue={mosaicTree}
      blueprintNamespace="bp6"
    />
  );
};

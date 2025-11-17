import './styles.css';
import { useState } from 'react';
import { useFetchCompany } from '../../hooks/useFetchCompany';
import type { CompanyOption } from '../../types';
import { CompanySelect } from '../CompanySelect';

interface Props {
  companyOptions: CompanyOption[];
}

export function CompanyProfile({ companyOptions }: Props) {
  const [selectedCompany, setSelectedCompany] = useState<
    CompanyOption | undefined
  >();

  const { company, loading, error } = useFetchCompany(selectedCompany?.id);

  if (loading) return <div className="info loading">Loading...</div>;
  if (error) return <div className="info error">Error</div>;

  return (
    <>
      <CompanySelect
        companyOptions={companyOptions}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
      />
      {selectedCompany && (
        <div className="profile-container">
          <h2 className="profile-title">{company?.name}</h2>
          <p className="profile-subtitle">Ticker: {company?.ticker}</p>

          <div className="profile-section">
            <h3 className="section-title">General Information</h3>

            <div className="row">
              <span className="label">Legal Name:</span>
              {company?.legal_name}
            </div>
            <div className="row">
              <span className="label">LEI:</span>
              {company?.lei}
            </div>
            <div className="row">
              <span className="label">Stock Exchange:</span>
              {company?.stock_exchange}
            </div>
            <div className="row">
              <span className="label">CEO:</span>
              {company?.ceo}
            </div>
            <div className="row">
              <span className="label">Website:</span>
              <a
                href={`https://${company?.company_url}`}
                target="_blank"
                rel="noreferrer">
                {company?.company_url}
              </a>
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Descriptions</h3>
            <p className="desc-text">{company?.short_description}</p>
            <p className="desc-text">{company?.long_description}</p>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Headquarters</h3>

            <div className="row">
              <span className="label">Business Address:</span>
              {company?.business_address}
            </div>
            <div className="row">
              <span className="label">Phone:</span>
              {company?.business_phone_no}
            </div>
            <div className="row">
              <span className="label">City:</span>
              {company?.hq_address_city}
            </div>
            <div className="row">
              <span className="label">Postal Code:</span>
              {company?.hq_address_postal_code}
            </div>
            <div className="row">
              <span className="label">State:</span>
              {company?.hq_state}
            </div>
            <div className="row">
              <span className="label">Country:</span>
              {company?.hq_country}
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Industry & Status</h3>

            <div className="row">
              <span className="label">Sector:</span>
              {company?.sector}
            </div>
            <div className="row">
              <span className="label">Industry Category:</span>
              {company?.industry_category}
            </div>
            <div className="row">
              <span className="label">Industry Group:</span>
              {company?.industry_group}
            </div>
            <div className="row">
              <span className="label">Employees:</span>
              {company?.employees.toLocaleString()}
            </div>
            <div className="row">
              <span className="label">Entity Status:</span>
              {company?.entity_status}
            </div>
          </div>

          <div className="profile-section">
            <h3 className="section-title">Dates</h3>

            <div className="row">
              <span className="label">Latest Filing Date:</span>
              {company?.latest_filing_date}
            </div>
            <div className="row">
              <span className="label">First Stock Price Date:</span>
              {company?.first_stock_price_date}
            </div>
            <div className="row">
              <span className="label">Last Stock Price Date:</span>
              {company?.last_stock_price_date}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

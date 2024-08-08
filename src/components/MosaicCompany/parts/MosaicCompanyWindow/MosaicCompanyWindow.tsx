import { FC } from "react";
import { MosaicBranch, MosaicWindow } from "react-mosaic-component";
import { SelectCompanyId } from "../../../../interfaces";
import { CompaniesDropdown } from "../../../CompaniesDropdown";
import { useReduxStore } from "../../../../hooks";
import { NoData } from "../../../NoData";

const textBold = "font-bold mr-1";

type MosaicCompanyWindowProps = {
  path: MosaicBranch[];
  id: SelectCompanyId;
};

export const MosaicCompanyWindow: FC<MosaicCompanyWindowProps> = ({
  path,
  id,
}) => {
  const { companies } = useReduxStore();

  const company = companies.selectCompany[id];

  if (!company) return <NoData centered />;

  return (
    <MosaicWindow
      renderToolbar={(props) => (
        <div className="w-full flex gap-5 items-center h-full">
          <p>{props.title}</p>
          <CompaniesDropdown id={id} />
        </div>
      )}
      path={path}
      title={"Company info"}
    >
      <div className="p-5 overflow-y-auto h-full flex flex-col gap-3">
        <div>
          <p>
            <span className={textBold}>ticker:</span>
            {company.ticker}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Name:</span>
            {company.name}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Legal Name:</span>
            {company.legal_name}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Short Description:</span>
            {company.short_description}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Long Description:</span>
            {company.long_description}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Web:</span>
            {company.company_url}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Business address:</span>
            {company.business_address}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Business address:</span>
            {company.business_address}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Business phone:</span>
            {company.business_phone_no}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Entity legal form:</span>
            {company.entity_legal_form}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Latest filling date:</span>
            {company.latest_filing_date}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Inc country:</span>
            {company.inc_country}
          </p>
        </div>
        <div>
          <p>
            <span className={textBold}>Employees:</span>
            {company.employees}
          </p>
        </div>
      </div>
    </MosaicWindow>
  );
};

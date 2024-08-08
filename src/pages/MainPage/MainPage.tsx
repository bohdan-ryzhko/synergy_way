import { FC, useEffect } from "react";
import { useAppDispatch, useReduxStore } from "../../hooks";

import { Loader, MosaicCompany, NoData } from "../../components";
import { fetchCompanies, setCompany } from "../../redux";
import { SelectCompanyId } from "../../interfaces";

const companiesIds: SelectCompanyId[] = ["a", "b", "c"];

export const MainPage: FC = () => {
  const { companies } = useReduxStore();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCompanies());
  }, [dispatch]);

  useEffect(() => {
    if (companies.data.length === 0) return;

    companiesIds.forEach((id, index) =>
      dispatch(setCompany({ id, company: companies.data[index] }))
    );
  }, [companies.data, dispatch]);

  return (
    <div className="w-full h-full p-2">
      {companies.loading && <Loader centered />}

      {companies.data.length === 0 && !companies.loading && <NoData centered />}

      {companies.data.length !== 0 && !companies.loading && <MosaicCompany />}
    </div>
  );
};

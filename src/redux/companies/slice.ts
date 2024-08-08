import { PayloadAction } from "./../../../node_modules/@reduxjs/toolkit/src/createAction";
import { createSlice, isAllOf } from "@reduxjs/toolkit";
import { BaseReduxSlice, Company, SelectCompanyId } from "../../interfaces";
import { fetchCompanies } from "./thunks";

interface CompaniesState extends BaseReduxSlice<Company[]> {
  selectCompany: {
    a: Company | null;
    b: Company | null;
    c: Company | null;
  };
}

type SetCompanyAction = {
  id: SelectCompanyId;
  company: Company;
};

const initialState: CompaniesState = {
  loading: false,
  error: null,
  data: [],
  selectCompany: {
    a: null,
    b: null,
    c: null,
  },
};

const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setCompany(state, { payload }: PayloadAction<SetCompanyAction>) {
      state.selectCompany[payload.id] = payload.company;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, { payload }) => {
        state.data = payload;
      })
      .addMatcher(isAllOf(fetchCompanies.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAllOf(fetchCompanies.pending), (state) => {
        state.loading = false;
        state.error = null;
      })
      .addMatcher(isAllOf(fetchCompanies.rejected), (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export const { setCompany } = companiesSlice.actions;
export const companiesReducer = companiesSlice.reducer;

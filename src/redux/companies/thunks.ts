import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { Company } from "../../interfaces";

export const fetchCompanies = createAsyncThunk<Company[]>(
  "companies/fetchCompanies",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse<Company[]> = await axios.get(
        "/companies-lookup.json"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

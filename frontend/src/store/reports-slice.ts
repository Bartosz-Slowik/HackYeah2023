import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IReport } from "types/IReport";

interface ReportsSlice {
  reports: IReport[];
  selected: IReport | undefined;
  loading: boolean;
}

const initialState: ReportsSlice = {
  reports: [],
  selected: undefined,
  loading: false,
};

const reportsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setReports(state, action: PayloadAction<IReport[]>) {
      state.reports = action.payload;
    },
    addReport(state, action: PayloadAction<IReport>) {
      state.reports.push(action.payload);
    },
    setSelected(state, action: PayloadAction<IReport | undefined>) {
      if (action.payload === undefined) {
        state.selected = undefined;
        return;
      }
      if (!state.reports.find((report) => report.id === action.payload?.id)) {
        state.reports.push(action.payload!);
      }
      state.selected = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const reportsActions = reportsSlice.actions;
export default reportsSlice.reducer;

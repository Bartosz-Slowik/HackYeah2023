import { AppThunk } from ".";
import { temp } from "types/IReport";
import { reportsActions } from "./reports-slice";

export const fetchReports = (): AppThunk => {
  return async (dispatch) => {
    dispatch(reportsActions.setLoading(true));
    dispatch(reportsActions.setReports(temp));
    dispatch(reportsActions.setLoading(false));
  };
};

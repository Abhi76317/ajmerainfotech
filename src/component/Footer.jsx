import React, { useEffect } from "react";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";

export default function Footer() {
  const { enqueueSnackbar } = useSnackbar();
  const alertsState = useSelector((state) => state.alertsState);
  useEffect(() => {
    if (alertsState?.variant) {
      enqueueSnackbar(alertsState.message, alertsState)
    }
  }, [alertsState])

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}

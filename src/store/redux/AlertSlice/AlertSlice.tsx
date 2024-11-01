import { createAppSlice } from "../../createAppSlice"

import { AlertSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const alertInitialState: AlertSliceState = {
  isOpen: false,
  children: undefined,
  severity: undefined,
}

export const alertSlice = createAppSlice({
  name: "ALERT",
  initialState: alertInitialState,
  reducers: create => ({
    setAlertStateOpen: create.reducer(
      (state: AlertSliceState, action: PayloadAction<AlertSliceState>) => {
        state.isOpen = action.payload.isOpen
        state.children = action.payload.children
        state.severity = action.payload.severity
      },
    ),

    closeAlert: create.reducer((state: AlertSliceState) => {
      state.isOpen = alertInitialState.isOpen
      state.children = alertInitialState.children
      state.severity = alertInitialState.severity
    }),
  }),

  selectors: {
    isOpen: (state: AlertSliceState) => {
      return state.isOpen
    },

    severity: (state: AlertSliceState) => {
      return state.severity
    },

    cildren: (state: AlertSliceState) => {
      return state.children
    },
  },
})
export const alertActions = alertSlice.actions

export const alertSelectors = alertSlice.selectors

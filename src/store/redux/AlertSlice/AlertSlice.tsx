import { createAppSlice } from "../../createAppSlice"

import { alertSliceState } from "./types"
import { PayloadAction } from "@reduxjs/toolkit"

const alertInitialState: alertSliceState = {
  isOpen: false,
  children: undefined,
  severity: undefined,
}

export const alertSlice = createAppSlice({
  name: "ALERT",
  initialState: alertInitialState,
  reducers: create => ({
    setAlertStateOpen: create.reducer(
      (state: alertSliceState, action: PayloadAction<alertSliceState>) => {
        state.isOpen = action.payload.isOpen
        state.children = action.payload.children
        state.severity = action.payload.severity
      },
    ),

    closeAlert: create.reducer((state: alertSliceState) => {
      state.isOpen = alertInitialState.isOpen
      state.children = alertInitialState.children
      state.severity = alertInitialState.severity
    }),
  }),

  selectors: {
    isOpen: (state: alertSliceState) => {
      return state.isOpen
    },

    severity: (state: alertSliceState) => {
      return state.severity
    },

    cildren: (state: alertSliceState) => {
      return state.children
    },
  },
})
export const alertActions = alertSlice.actions

export const alertSelectors = alertSlice.selectors

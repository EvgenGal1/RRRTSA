// хук на основе useSelector(получ.дан. из сост.) для раб с типами
import React from "react";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

// свой useSelector с типами из общ. reducer
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

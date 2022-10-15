// 0.40. Кастом хук для забора данн. из stora
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store";

// спец.тип с новым типом из 0.39. со знач. useSelector (переопред. с созд.типами)
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

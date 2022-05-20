import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { AppState } from "../store/index";

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;

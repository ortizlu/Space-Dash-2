import { REMOVE_SHIP } from "../constants/action-types";

export const removeShip = ships => ({ type: "REMOVE_SHIP", payload: ships });
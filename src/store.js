import { useState } from "react";
import { createContainer } from "react-tracked";
import { clients } from "./data";

const useMyState = () => useState(clients);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);

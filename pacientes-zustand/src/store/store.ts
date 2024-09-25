import { create } from "zustand";
import { Paciente } from "../types";

type PacientesState = {
  pacientes: Paciente[];
};

export const usePacientesStore = create<PacientesState>(() => ({
  //codigo
  pacientes: [],
}));

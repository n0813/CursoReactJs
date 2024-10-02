import { create } from "zustand";
import { DraftPaciente, Paciente } from "../types";
import { v4 as uuidv4 } from "uuid";
import { devtools, persist } from "zustand/middleware";

type PacientesState = {
  pacientes: Paciente[];
  activeID: Paciente["id"];
  addPaciente: (data: DraftPaciente) => void;
  deletePaciente: (id: Paciente["id"]) => void;
  getPacienteById: (id: Paciente["id"]) => void;
  updatePaciente: (data: DraftPaciente) => void;
};

const createPaciente = (paciente: DraftPaciente): Paciente => {
  return { ...paciente, id: uuidv4() };
};

export const usePacientesStore = create<PacientesState>()(
  devtools(
    persist(
      (set) => ({
        //codigo
        pacientes: [],
        activeID: "",
        addPaciente: (data) => {
          const newPaciente = createPaciente(data);
          set((state) => ({
            pacientes: [...state.pacientes, newPaciente],
          }));
        },
        deletePaciente: (id) => {
          set((state) => ({
            pacientes: state.pacientes.filter((x) => x.id !== id),
          }));
        },
        getPacienteById: (id) => {
          set(() => ({
            activeID: id,
          }));
        },
        updatePaciente: (data) => {
          set((state) => ({
            pacientes: state.pacientes.map((x) =>
              x.id === state.activeID ? { id: state.activeID, ...data } : x
            ),
            activeID: "",
          }));
        },
      }),
      //local storage con zustand usando  persist
      {
        name: "pacientes-storage",
      }
    )
  )
);

import { toast } from "react-toastify";
import { usePacientesStore } from "../store/store";
import { Paciente } from "../types";
import PacienteDetalleItem from "./PacienteDetalleItem";

type PacienteDetalleProps = {
  paciente: Paciente;
};

export default function PacientesDetalle({ paciente }: PacienteDetalleProps) {
  const { deletePaciente } = usePacientesStore();

  const editar = usePacientesStore((state) => state.getPacienteById);

  const handleClick = () => {
    deletePaciente(paciente.id);
    toast.error("Paciente eliminado");
  };

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PacienteDetalleItem label="ID" data={paciente.id} />
      <PacienteDetalleItem label="Nombre" data={paciente.name} />
      <PacienteDetalleItem label="Propietario" data={paciente.caretaker} />
      <PacienteDetalleItem label="Email" data={paciente.email} />
      <PacienteDetalleItem label="Fecha Alta" data={paciente.date.toString()} />
      <PacienteDetalleItem label="Fecha Síntomas" data={paciente.symptoms} />

      <div className="flex justify-between  mt-10">
        <button
          type="button"
          onClick={() => editar(paciente.id)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          onClick={handleClick}
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

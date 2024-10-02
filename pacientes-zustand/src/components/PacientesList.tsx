import { usePacientesStore } from "../store/store";
import PacientesDetalle from "./PacientesDetalle";

export default function PacientesList() {
  const { pacientes } = usePacientesStore();

  console.log(pacientes);
  return (
    <div className="md:w-1/2 lg:h-3/5 md:h-screen overflow-y-scroll">
      {pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Lista de Pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>

          {pacientes.map((x) => (
            <PacientesDetalle key={x.id} paciente={x} />
          ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold">
              y aparecerán en este grupo
            </span>
          </p>
        </>
      )}
    </div>
  );
}

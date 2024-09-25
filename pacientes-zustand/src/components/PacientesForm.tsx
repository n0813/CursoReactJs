import { useForm } from "react-hook-form";
import Errors from "./Errors";
import { DraftPaciente } from "../types";

export default function PacientesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPaciente>();

  const registerPacientes = (data: DraftPaciente) => {
    console.log(data);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPacientes)}
      >
        {/* Input de Nombre del Paciente */}
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Paciente
          </label>
          <input
            id="name"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del Paciente"
            {...register("name", {
              required: "El nombre del paciente es obligatorio",
              maxLength: {
                value: 10,
                message: "Máximo de 10 caracteres",
              },
            })}
          />
          {errors.name && <Errors>{errors.name.message}</Errors>}
        </div>

        {/* Input de Nombre del Propietario */}
        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            Propietario
          </label>
          <input
            id="caretaker"
            className="w-full p-3 border border-gray-100"
            type="text"
            placeholder="Nombre del Propietario"
            {...register("caretaker", {
              required: "El nombre del propietario es obligatorio",
              maxLength: {
                value: 10,
                message: "Máximo de 8 caracteres",
              },
            })}
          />
          {errors.caretaker && <Errors>{errors.caretaker.message}</Errors>}
        </div>

        {/* Input de Email */}
        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3 border border-gray-100"
            type="email"
            placeholder="Email de Registro"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "El formato del email es incorrecto",
              },
            })}
          />
          {errors.email && <Errors>{errors.email.message}</Errors>}
        </div>

        {/* Input de Fecha Alta */}
        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Fecha Alta
          </label>
          <input
            id="date"
            className="w-full p-3 border border-gray-100"
            type="date"
            {...register("date", {
              required: "La fecha es obligatoria",
            })}
          />
          {errors.date && <Errors>{errors.date.message}</Errors>}
        </div>

        {/* Input de Síntomas */}
        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Síntomas
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3 border border-gray-100"
            placeholder="Síntomas del paciente"
            {...register("symptoms", {
              required: "Los síntomas son obligatorios",
            })}
          ></textarea>
          {errors.symptoms && <Errors>{errors.symptoms.message}</Errors>}
        </div>

        {/* Botón de envío */}
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Guardar Paciente"
        />
      </form>
    </div>
  );
}

type PacienteDetalleItemProps = {
  label: string;
  data: string;
};

export default function PacienteDetalleItem({
  label,
  data,
}: PacienteDetalleItemProps) {
  return (
    <p className="font-bold mb-3 text-gray-700 uppercase">
      {label}: {""}
      <span className="font-normal normal-case">{data}</span>
    </p>
  );
}

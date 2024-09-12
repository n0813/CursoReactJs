const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

export default function TipPercentageForm() {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina: </h3>

      <form action="">
        {tipOptions.map((x) => (
          <div className="flex gap-2" key={x.id}>
            <label htmlFor={x.id}>{x.label}</label>
            <input type="radio" id={x.id} name="tip" value={x.value} />
          </div>
        ))}
      </form>
    </div>
  );
}

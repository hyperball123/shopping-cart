function FormRow({ label, error, children }) {
  return (
    <div className="grid md:grid-cols-[10rem,1fr,0.8fr] gap-4 md:gap-9 items-center py-2 md:py-6 first:pt-0 last:pb-0 border-b border-gray-100">
      {label && (
        <label className="font-semibold" htmlFor={children.props.id}>
          {label}
        </label>
      )}
      {children}
      {error && <span className="text-red-700 text-lg">{error}</span>}
    </div>
  );
}

export default FormRow;

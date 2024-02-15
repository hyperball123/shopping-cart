function Form({ children, onSubmit }) {
  let className = "p-6 bg-gray-100 border border-gray-200 rounded-md ";

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  );
}

export default Form;

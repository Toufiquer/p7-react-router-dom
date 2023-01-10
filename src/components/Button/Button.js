const buttonStyle = "px-4 py-2 cursor-pointer text-semibold w-full";
export const AddButton = ({ id, children, handler }) => {
  return (
    <button className={`${buttonStyle} " bg-green-400 hover:bg-green-500 "`} onClick={(e) => handler(e, id)}>
      {children}
    </button>
  );
};
export const DeleteButton = ({ id, children, handler }) => {
  return (
    <button className={`${buttonStyle} " bg-red-400 hover:bg-red-500 "`} onClick={(e) => handler(e, id)}>
      {children}
    </button>
  );
};
export const RemoveButton = ({ id, children, handler }) => {
  return (
    <button className={`${buttonStyle} " bg-red-400 hover:bg-red-500 "`} onClick={(e) => handler(e, id)}>
      {children}
    </button>
  );
};
export const DetailsButton = ({ id, children, handler }) => {
  return (
    <button className={`${buttonStyle} " bg-teal-500 hover:bg-teal-600 "`} onClick={(e) => handler(e, id)}>
      {children}
    </button>
  );
};

import { useContext } from "react";
import { ThemeMode2 } from "../../App";
import { FolderIcon, ShoppingCartIcon, TrashIcon } from "@heroicons/react/24/solid";
const buttonStyle = "px-4 py-2 cursor-pointer text-semibold w-full rounded max-w-[400px]";
export const AddButton = ({ id, children, handler }) => {
  const [theme2] = useContext(ThemeMode2);
  const { add, hoverAdd } = theme2;
  return (
    <button className={`${buttonStyle}  ${add} ${hoverAdd} `} onClick={(e) => handler(e, id)}>
      <div className="flex items-center justify-center">
        {children} <ShoppingCartIcon className="h-6 w-6 ml-2"></ShoppingCartIcon>
      </div>
    </button>
  );
};
export const DeleteButton = ({ id, children, handler }) => {
  const [theme2] = useContext(ThemeMode2);
  const { delete0, hoverDelete } = theme2;
  return (
    <button className={`${buttonStyle}  ${delete0} ${hoverDelete}  `} onClick={(e) => handler(e, id)}>
      <div className="flex items-center justify-center">
        {children} <TrashIcon className="h-6 w-6 ml-2"></TrashIcon>
      </div>
    </button>
  );
};
export const RemoveButton = ({ id, children, handler }) => {
  const [theme2] = useContext(ThemeMode2);
  const { delete0, hoverDelete } = theme2;
  return (
    <button className={`${buttonStyle} ${delete0} ${hoverDelete} `} onClick={(e) => handler(e, id)}>
      <div className="flex items-center justify-center">
        {children} <TrashIcon className="h-6 w-6 ml-2"></TrashIcon>
      </div>
    </button>
  );
};
export const DetailsButton = ({ id, children, handler }) => {
  const [theme2] = useContext(ThemeMode2);
  const { details, hoverDetails } = theme2;
  return (
    <button className={`${buttonStyle}  ${details} ${hoverDetails} `} onClick={(e) => handler(e, id)}>
      <div className="flex items-center justify-center">
        {children} <FolderIcon className="h-6 w-6 ml-2"></FolderIcon>
      </div>
    </button>
  );
};
export const DetailsPage = ({ navigate, children, path }) => {
  const [theme2] = useContext(ThemeMode2);
  const { view, hoverView } = theme2;
  return (
    <button className={`${buttonStyle} ${view} ${hoverView}  mx-auto `} onClick={() => navigate(path)}>
      <div className="flex items-center justify-center">{children}</div>
    </button>
  );
};

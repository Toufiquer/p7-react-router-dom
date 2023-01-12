const getVariables = (theme = "dark") => {
  let card, hoverCard, background, hoverBackground, text, hoverText, border, hoverBorder, add, hoverAdd, hoverDelete, delete0, details, hoverDetails, view, hoverView;
  if (theme === "dark") {
    card = "bg-purple-600";
    hoverCard = "hover:bg-purple-700";
    background = "bg-slate-600";
    hoverBackground = "hover:bg-slate-700";
    text = "text-teal-600";
    hoverText = "hover:text-teal-700";
    border = "border-2 border-solid border-stone-600";
    hoverBorder = "hover:border-stone-700";
    add = "bg-green-600";
    hoverAdd = "hover:bg-green-700";
    delete0 = "bg-red-600";
    hoverDelete = "hover:bg-red-700";
    details = "bg-emerald-600";
    hoverDetails = "hover:bg-emerald-700";
    view = "bg-cyan-600";
    hoverView = "hover:bg-cyan-700";
  } else if (theme === "light") {
    card = "bg-purple-700";
    hoverCard = "hover:bg-purple-800";
    background = "bg-slate-700";
    hoverBackground = "hover:bg-slate-800";
    text = "text-teal-700";
    hoverText = "hover:text-teal-800";
    hoverDelete = "hover:bg-red-800";
    border = "border-2 border-solid border-stone-700";
    hoverBorder = "hover:border-stone-800";
    add = "bg-green-700";
    hoverAdd = "hover:bg-green-800";
    delete0 = "bg-red-700";
    details = "bg-emerald-700";
    hoverDetails = "hover:bg-emerald-800";
    view = "bg-cyan-700";
    hoverView = "hover:bg-cyan-800";
  } else if (theme === "sky") {
    card = "bg-purple-800";
    hoverCard = "hover:bg-purple-900";
    background = "bg-slate-800";
    text = "text-teal-800";
    hoverText = "hover:text-teal-900";
    hoverBackground = "hover:bg-slate-900";
    border = "border-2 border-solid border-stone-800";
    hoverBorder = "hover:border-stone-900";
    add = "bg-green-800";
    hoverAdd = "hover:bg-green-900";
    delete0 = "bg-red-800";
    hoverDelete = "hover:bg-red-900";
    details = "bg-emerald-800";
    view = "bg-cyan-800";
    hoverDetails = "hover:bg-emerald-900";
    hoverView = "hover:bg-cyan-900";
  }
  return {
    card,
    hoverCard,
    background,
    hoverBackground,
    text,
    hoverText,
    border,
    hoverBorder,
    add,
    hoverAdd,
    hoverDelete,
    delete0,
    details,
    hoverDetails,
    view,
    hoverView,
  };
};

export default getVariables;

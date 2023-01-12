const getVariables = (theme = "dark") => {
  let card,
    cardI,
    cardII,
    hoverCard,
    hoverCardI,
    hoverCardII,
    background,
    backgroundI,
    backgroundII,
    hoverBackground,
    hoverBackgroundI,
    hoverBackgroundII,
    text,
    textI,
    textII,
    hoverText,
    hoverTextI,
    hoverTextII,
    border,
    borderI,
    borderII,
    hoverBorder,
    hoverBorderI,
    hoverBorderII,
    add,
    addI,
    addII,
    hoverAdd,
    hoverAddI,
    hoverAddII,
    delete0,
    deleteI,
    deleteII,
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    details,
    detailsI,
    detailsII,
    hoverDetails,
    hoverDetailsI,
    hoverDetailsII,
    view,
    viewI,
    viewII,
    hoverView,
    hoverViewI,
    hoverViewII;
  if (theme === "dark") {
    card = "bg-purple-600";
    cardI = "bg-purple-700";
    cardII = "bg-purple-800";
    hoverCard = "hover:bg-purple-700";
    hoverCardI = "hover:bg-purple-800";
    hoverCardII = "hover:bg-purple-900";
    background = "bg-slate-600";
    backgroundI = "bg-slate-700";
    backgroundII = "bg-slate-800";
    hoverBackground = "hover:bg-slate-700";
    hoverBackgroundI = "hover:bg-slate-800";
    hoverBackgroundII = "hover:bg-slate-900";
    text = "text-teal-600";
    textI = "text-teal-700";
    textII = "text-teal-800";
    hoverText = "hover:text-teal-700";
    hoverTextI = "hover:text-teal-800";
    hoverTextII = "hover:text-teal-900";
    border = "border-2 border-solid border-stone-600";
    borderI = "border-2 border-solid border-stone-700";
    borderII = "border-2 border-solid border-stone-800";
    hoverBorder = "hover:border-stone-700";
    hoverBorderI = "hover:border-stone-800";
    hoverBorderII = "hover:border-stone-900";
    add = "bg-green-600";
    addI = "bg-green-700";
    addII = "bg-green-800";
    hoverAdd = "hover:bg-green-700";
    hoverAddI = "hover:bg-green-800";
    hoverAddII = "hover:bg-green-900";
    delete0 = "bg-red-600";
    deleteI = "bg-red-700";
    deleteII = "bg-red-800";
    hoverDelete = "hover:bg-red-700";
    hoverDeleteI = "hover:bg-red-800";
    hoverDeleteII = "hover:bg-red-900";
    details = "bg-emerald-600";
    detailsI = "bg-emerald-700";
    detailsII = "bg-emerald-800";
    hoverDetails = "hover:bg-emerald-700";
    hoverDetailsI = "hover:bg-emerald-800";
    hoverDetailsII = "hover:bg-emerald-900";
    view = "bg-cyan-600";
    viewI = "bg-cyan-700";
    viewII = "bg-cyan-800";
    hoverView = "hover:bg-cyan-700";
    hoverViewI = "hover:bg-cyan-800";
    hoverViewII = "hover:bg-cyan-900";
  } else if (theme === "light") {
  } else if (theme === "sky") {
  }
  return {
    card,
    cardI,
    cardII,
    hoverCard,
    hoverCardI,
    hoverCardII,
    background,
    backgroundI,
    backgroundII,
    hoverBackground,
    hoverBackgroundI,
    hoverBackgroundII,
    text,
    textI,
    textII,
    hoverText,
    hoverTextI,
    hoverTextII,
    border,
    borderI,
    borderII,
    hoverBorder,
    hoverBorderI,
    hoverBorderII,
    add,
    addI,
    addII,
    hoverAdd,
    hoverAddI,
    hoverAddII,
    delete0,
    deleteI,
    deleteII,
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    details,
    detailsI,
    detailsII,
    hoverDetails,
    hoverDetailsI,
    hoverDetailsII,
    view,
    viewI,
    viewII,
    hoverView,
    hoverViewI,
    hoverViewII,
  };
};

export default getVariables;

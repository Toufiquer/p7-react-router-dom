const getVariables = (theme) => {
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
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    delete0,
    deleteI,
    deleteII,
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
    hoverCard = "bg-purple-700";
    hoverCardI = "bg-purple-800";
    hoverCardII = "bg-purple-900";
    background = "bg-slate-600";
    backgroundI = "bg-slate-700";
    backgroundII = "bg-slate-800";
    hoverBackground = "bg-slate-700";
    hoverBackgroundI = "bg-slate-800";
    hoverBackgroundII = "bg-slate-900";
    text = "text-teal-600";
    textI = "text-teal-700";
    textII = "text-teal-800";
    hoverText = "text-teal-700";
    hoverTextI = "text-teal-800";
    hoverTextII = "text-teal-900";
    border = "border-2 border-solid border-stone-600";
    borderI = "border-2 border-solid border-stone-700";
    borderII = "border-2 border-solid border-stone-800";
    hoverBorder = "border-2 border-solid border-stone-700";
    hoverBorderI = "border-2 border-solid border-stone-800";
    hoverBorderII = "border-2 border-solid border-stone-900";
    add = "bg-green-600";
    addI = "bg-green-700";
    addII = "bg-green-800";
    hoverAdd = "bg-green-700";
    hoverAddI = "bg-green-800";
    hoverAddII = "bg-green-900";
    delete0 = "bg-red-600";
    deleteI = "bg-red-700";
    deleteII = "bg-red-800";
    hoverDelete = "bg-red-700";
    hoverDeleteI = "bg-red-800";
    hoverDeleteII = "bg-red-900";
    details = "bg-emerald-600";
    detailsI = "bg-emerald-700";
    detailsII = "bg-emerald-800";
    hoverDetails = "bg-emerald-700";
    hoverDetailsI = "bg-emerald-800";
    hoverDetailsII = "bg-emerald-900";
    view = "bg-cyan-600";
    viewI = "bg-cyan-700";
    viewII = "bg-cyan-800";
    hoverView = "bg-cyan-700";
    hoverViewI = "bg-cyan-800";
    hoverViewII = "bg-cyan-900";
  } else if (theme === "light") {
    // color1 = "light";
    // color2 = "light";
    // color3 = "light";
  } else if (theme === "sky") {
    // color1 = "sky";
    // color2 = "sky";
    // color3 = "sky";
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
    hoverDelete,
    hoverDeleteI,
    hoverDeleteII,
    delete0,
    deleteI,
    deleteII,
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

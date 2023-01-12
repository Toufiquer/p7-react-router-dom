const getThemeVariants = (theme = "dark") => {
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
    card = "bg-emerald-600";
    cardI = "bg-emerald-700";
    cardII = "bg-emerald-800";
    hoverCard = "hover:bg-emerald-700";
    hoverCardI = "hover:bg-emerald-800";
    hoverCardII = "hover:bg-emerald-900";
    background = "bg-green-100";
    backgroundI = "bg-green-200";
    backgroundII = "bg-green-300";
    hoverBackground = "hover:bg-green-200";
    hoverBackgroundI = "hover:bg-green-300";
    hoverBackgroundII = "hover:bg-green-400";
    text = "text-zinc-600";
    textI = "text-zinc-700";
    textII = "text-zinc-800";
    hoverText = "hover:text-zinc-700";
    hoverTextI = "hover:text-zinc-800";
    hoverTextII = "hover:text-zinc-900";
    border = "border-2 border-solid border-gray-600";
    borderI = "border-2 border-solid border-gray-700";
    borderII = "border-2 border-solid border-gray-800";
    hoverBorder = "hover:border-gray-700";
    hoverBorderI = "hover:border-gray-800";
    hoverBorderII = "hover:border-gray-900";
    add = "bg-teal-600";
    addI = "bg-teal-700";
    addII = "bg-teal-800";
    hoverAdd = "hover:bg-teal-700";
    hoverAddI = "hover:bg-teal-800";
    hoverAddII = "hover:bg-teal-900";
    delete0 = "bg-red-600";
    deleteI = "bg-red-700";
    deleteII = "bg-red-800";
    hoverDelete = "hover:bg-red-700";
    hoverDeleteI = "hover:bg-red-800";
    hoverDeleteII = "hover:bg-red-900";
    details = "bg-details-600";
    detailsI = "bg-details-700";
    detailsII = "bg-details-800";
    hoverDetails = "hover:bg-details-700";
    hoverDetailsI = "hover:bg-details-800";
    hoverDetailsII = "hover:bg-details-900";
    view = "bg-cyan-600";
    viewI = "bg-cyan-700";
    viewII = "bg-cyan-800";
    hoverView = "hover:bg-cyan-700";
    hoverViewI = "hover:bg-cyan-800";
    hoverViewII = "hover:bg-cyan-900";
  } else if (theme === "sky") {
    card = "bg-teal-600";
    cardI = "bg-teal-700";
    cardII = "bg-teal-800";
    hoverCard = "hover:bg-teal-700";
    hoverCardI = "hover:bg-teal-800";
    hoverCardII = "hover:bg-teal-900";
    background = "bg-purple-600";
    backgroundI = "bg-purple-700";
    backgroundII = "bg-purple-800";
    hoverBackground = "hover:bg-purple-700";
    hoverBackgroundI = "hover:bg-purple-800";
    hoverBackgroundII = "hover:bg-purple-900";
    text = "text-purple-600";
    textI = "text-purple-700";
    textII = "text-purple-800";
    hoverText = "hover:text-purple-700";
    hoverTextI = "hover:text-purple-800";
    hoverTextII = "hover:text-purple-900";
    border = "border-2 border-solid border-emerald-600";
    borderI = "border-2 border-solid border-emerald-700";
    borderII = "border-2 border-solid border-emerald-800";
    hoverBorder = "hover:border-emerald-700";
    hoverBorderI = "hover:border-emerald-800";
    hoverBorderII = "hover:border-emerald-900";
    add = "bg-emerald-600";
    addI = "bg-emerald-700";
    addII = "bg-emerald-800";
    hoverAdd = "hover:bg-emerald-700";
    hoverAddI = "hover:bg-emerald-800";
    hoverAddII = "hover:bg-emerald-900";
    delete0 = "bg-red-600";
    deleteI = "bg-red-700";
    deleteII = "bg-red-800";
    hoverDelete = "hover:bg-red-700";
    hoverDeleteI = "hover:bg-red-800";
    hoverDeleteII = "hover:bg-red-900";
    details = "bg-green-600";
    detailsI = "bg-green-700";
    detailsII = "bg-green-800";
    hoverDetails = "hover:bg-green-700";
    hoverDetailsI = "hover:bg-green-800";
    hoverDetailsII = "hover:bg-green-900";
    view = "bg-teal-600";
    viewI = "bg-teal-700";
    viewII = "bg-teal-800";
    hoverView = "hover:bg-teal-700";
    hoverViewI = "hover:bg-teal-800";
    hoverViewII = "hover:bg-teal-900";
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

export default getThemeVariants;

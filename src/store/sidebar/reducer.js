const sidebarReducer = (state, payload) => {
  const { target } = payload;

  if (target.classList.contains("sidebar__menu--visible")) {
    target.classList.remove("sidebar__menu--visible");
  } else {
    target.classList.add("sidebar__menu--visible");
  }

  if (document.body.classList.contains("in-background")) {
    document.body.classList.remove("in-background");
  } else {
    document.body.classList.add("in-background");
  }

  return state;
};

export { sidebarReducer };

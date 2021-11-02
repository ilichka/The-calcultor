const renderPageById = (id, child) => {
  document.getElementById(id).appendChild(child);
};

export { renderPageById };

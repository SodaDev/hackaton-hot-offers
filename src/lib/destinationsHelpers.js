export const addToWatchedList = (list, item) => [...list, item];

export const toggleBudget = (budget) => ({...budget, selected: true});

export const removeSelection = (budget) => ({...budget, selected: false});

export const nameComparator = (a, b) => {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if(nameA < nameB) return -1;
  if(nameA > nameB) return 1;
  return 0;
}
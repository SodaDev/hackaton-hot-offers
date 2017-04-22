export const addToWatchedList = (list, item) => [...list, item];

export const toggleBudget = (budget) => ({...budget, selected: !budget.selected});
export const removeSelection = (budget) => ({...budget, selected: false});

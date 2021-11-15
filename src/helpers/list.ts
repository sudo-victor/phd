export const sortByCreatedAt = (a, b) => {
  return a.createdAt > b.createdAt ? -1 : 1;
};

export const sortByCreatedAt = (a, b) => {
  return String(a.createdAt) > String(b.createdAt) ? -1 : 1;
};

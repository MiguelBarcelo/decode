const decode = (string) => {
  const keys = ["first_name", "last_name", "id"];

  if (string.trim().length === 0) return {};

  const keysAndValues = string
    .split(/0+/)
    .map((value, idx) => ([keys[idx], value]));
  
  return Object.fromEntries(keysAndValues);
}

export { decode };
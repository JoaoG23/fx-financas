export const tratarErroSemStatus = (statusCode?: number) => {
  return statusCode || 400;
};

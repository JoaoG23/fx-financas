export const transformarDateTimeInputEmIso = (datetimeInput: string) => {
  return `${datetimeInput}:00.00Z`;
};

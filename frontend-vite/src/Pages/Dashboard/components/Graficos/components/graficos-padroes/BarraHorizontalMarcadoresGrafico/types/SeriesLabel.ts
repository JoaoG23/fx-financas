export type SeriesLabel =  {
  x: string, // Label
  y: number, // valor
  goals: [
    {
      name: string,
      value: number,
      strokeWidth: number,
      strokeHeight: number,
      strokeColor: string,
    },
  ],
}
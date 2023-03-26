export const buscaDadosInputChange = (e: any) => {
  const { target } = e;
  const { name, value } = target;
  console.info("**** changeInput", name, value);
};

export const buscarDadosSubmit = (e: any) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData); // Transforma em objeto os elementos
  console.info("**** buscarDadosSubmit" + data);
};

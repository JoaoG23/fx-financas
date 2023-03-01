export const inserirDadosUsuarioNaSessao = (id:number,nome:string, token:string) => {
    localStorage.setItem("id", JSON.stringify(id) );
    localStorage.setItem("nome", nome );
    localStorage.setItem("token", token );
    
  };
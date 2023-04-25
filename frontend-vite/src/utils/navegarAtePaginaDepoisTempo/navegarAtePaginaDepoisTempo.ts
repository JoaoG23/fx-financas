export function navegarAtePaginaDepoisTempo(navigate: any, caminho:string | number, tempo:number = 2000) {
  setTimeout(() => {
    
    navigate(caminho);
  }, tempo);
}

export function navegarAtePaginaDepoisTempo(navigate: any, caminho:string | number, tempo:number = 3000) {
  setTimeout(() => {
    
    navigate(caminho);
  }, tempo);
}

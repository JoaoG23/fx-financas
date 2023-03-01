interface IHandleValueElementHTML {
    target: HTMLInputElement;
  }

const buscaDadosOnChange = (event:IHandleValueElementHTML, fun:any) => {
    let text = event.target.value;
    // console.info(text);
    fun(text);
  };

export default buscaDadosOnChange;
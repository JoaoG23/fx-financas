export class TratadorErros {
   tratarErroSemStatus(statusCode?: number) {
    return statusCode || 400;
  }
}

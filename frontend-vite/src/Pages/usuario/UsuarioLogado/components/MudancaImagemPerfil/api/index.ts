import { endpoint } from "../../../../../../services/endpoint";

export async function mudarImagemPerfilPorUsuariosId(
  usuariosId: string,
  usuario_image: any
) {
  const image = usuario_image;
  const formData = new FormData();
  formData.append("usuario_image", image[0]);

  const resposta = await endpoint.patch(
    `/usuarios/upload_image/${usuariosId}`,
    formData,
    {
      onUploadProgress(progressEvent) {
        console.log(progressEvent.progress * 100);
      },
      headers: {
        "Custom-Header": "value",
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return resposta;
}

import { api } from "./api";

enum HttpFailure {
  badeResponse
}



export interface HttpResponse<T> {
  response: T | HttpFailure

}


class ControlHouseService {

  async toggle(status: number, completion: (response: HttpResponse<boolean>) => void) {
    try {

      let responseApi = await api.post("/toggle", {
        status
      })
      if (responseApi.data.status === "Success") {
        let status: HttpResponse<boolean> = {
          response: true
        }
        return completion(status)
      }
    } catch (error) {
      console.log(error)
      let status: HttpResponse<boolean> = {
        response: HttpFailure.badeResponse
      }
      completion(status)
    }
  }


}

export default new ControlHouseService();

import { api } from "./api";




export interface HttpResponse<T> {
  response: T
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
      console.log(JSON.stringify(error))
      let status: HttpResponse<boolean> = {
        response: false
      }
      completion(status)
    }
  }

  async delayUp(time: number, completion: (response: HttpResponse<boolean>) => void) {
    try {
      let responseApi = await api.post("/timer_on_off", {
        status: 0,
        time,
      })

      if (responseApi.data.status === "Success") {
        let status: HttpResponse<boolean> = {
          response: true
        }
        return completion(status)
      }

    } catch (error) {
      let status: HttpResponse<boolean> = {
        response: false
      }
      completion(status)
    }
  }


  async delayDown(time: number, completion: (response: HttpResponse<boolean>) => void) {
    try {
      let responseApi = await api.post("/timer_on_off", {
        status: 1,
        time,
      })

      if (responseApi.data.status === "Success") {
        let status: HttpResponse<boolean> = {
          response: true
        }
        return completion(status)
      }

    } catch (error) {
      let status: HttpResponse<boolean> = {
        response: false
      }
      completion(status)
    }
  }

}

export default new ControlHouseService();

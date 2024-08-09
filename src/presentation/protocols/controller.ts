export interface Controllers {
  handle(request: Controllers.HttpRequest): Promise<Controllers.HttpResponse>
}

export namespace Controllers {
  export type HttpRequest = {
    body?: any
  }
  export type HttpResponse = {
    statusCode: number
    body: any
  }
}

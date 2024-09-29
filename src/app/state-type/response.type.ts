export interface ResponseType<T> {
    "status": string,
    "copyright": string,
    "response": {
        docs : Array<T>,
        meta :  {
            "hits": number,
            "offset": number,
            "time": number
        }
    }
}
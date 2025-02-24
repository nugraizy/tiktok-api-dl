import { MusicalDown } from "./musicaldown"
import { SSSTik } from "./ssstik"
import { TiktokAPI } from "./tiktokapi"

export const TiktokDL = (url: string, options: { version: "v1" | "v2" | "v3" }) =>
  new Promise(async (resolve, reject) => {
    switch (options.version) {
      case "v1": {
        await TiktokAPI(url).then(resolve).catch(reject)
      }
      case "v2": {
        await SSSTik(url).then(resolve).catch(reject)
      }
      case "v3": {
        await MusicalDown(url).then(resolve).catch(reject)
      }
      default: {
        await TiktokAPI(url).then(resolve).catch(reject)
      }
    }
  })

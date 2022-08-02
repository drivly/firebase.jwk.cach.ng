const interactionCounter = {}

export default {
  fetch: async (req) => {
    const res = await fetch('https://www.googleapis.com/robot/v1/metadata/jwk/securetoken@system.gserviceaccount.com', { cf: { cacheTtl: 20445,  cacheEverything: true }})
    const response = new Response(res.body, res)
    response.headers.set("Cache-Control", `max-age=20445, public`)
    return response
  }
}

export const userDataApi = async (url) => {
    try {
        const response = await fetch(url)
        const responseJson = await response.json()
        return responseJson
    }
    catch (e) {
        console.log(`fetchResponseJson failed:`, e)
    }
}
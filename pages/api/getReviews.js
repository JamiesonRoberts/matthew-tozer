export const config = {
    runtime: 'edge',
}

export default async function handler() {
    const controller = new AbortController()
    const id = setTimeout(() => controller.abort(), 1000)

    const response = await fetch(
        `${process.env.GOOGLE_API_URL}&key=${process.env.SERVER_API_KEY}&reviews_sort=newest`,
        { signal: controller.signal }
    )
    clearTimeout(id)

    const { result } = await response.json()

    if (!result) return new Response(null)

    return new Response(JSON.stringify(result.reviews))
}

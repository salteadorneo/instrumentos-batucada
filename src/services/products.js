const TAG_AFFILIATE = 'neo09ce-21'

export async function searchProducts (query) {
  const response = await fetch(`https://c26e-82-213-252-183.ngrok-free.app/?q=${encodeURIComponent(query)}`).then(res => res.json())
  return response?.map(result => {
    const url = new URL(`https://www.amazon.es${result.url}`)
    url.searchParams.set('tag', TAG_AFFILIATE)

    return {
      ...result,
      productUrl: url
    }
  })
};

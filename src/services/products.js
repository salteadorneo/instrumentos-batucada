import pkg from 'unofficial-amazon-search'

const TAG_AFFILIATE = 'neo0ba-21'
const { searchAmazon } = pkg

export async function searchProducts (query) {
  const response = await searchAmazon(query)
  return response?.searchResults?.map(result => {
    const url = new URL(`https://www.amazon.es${result.productUrl}`)
    url.searchParams.set('tag', TAG_AFFILIATE)

    return {
      ...result,
      productUrl: url
    }
  })
};

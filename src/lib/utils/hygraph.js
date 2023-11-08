import { HYGRAPH_KEY, HYGRAPH_URL, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private' 

import { GraphQLClient } from 'graphql-request'

 const headers = {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
}

const headers2 = {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
}


// import { HYGRAPH_URL, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private'
// import { GraphQLClient } from 'graphql-request'

// Read and write
export const hygraph = new GraphQLClient(HYGRAPH_URL, headers)

// Read only - High speed
export const hygraphHP = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE, headers2)
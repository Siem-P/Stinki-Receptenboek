import { HYGRAPH_KEY, HYGRAPH_URL } from '$env/static/private' 

import { GraphQLClient } from 'graphql-request'

export const hygraph = new GraphQLClient(HYGRAPH_URL, {
  headers: {
    Authorization: `Bearer ${HYGRAPH_KEY}`,
  },
})


import { HYGRAPH_URL, HYGRAPH_URL_HIGH_PERFORMANCE } from '$env/static/private'
import { GraphQLClient } from 'graphql-request'

// Read and write
export const hygraph = new GraphQLClient(HYGRAPH_URL)

// Read only - High speed
export const hygraphHP = new GraphQLClient(HYGRAPH_URL_HIGH_PERFORMANCE)
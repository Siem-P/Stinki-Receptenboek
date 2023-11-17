import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/utils/hygraph';

// Slug uit URL halen
// Zelfde request doen als bij /recipe
// Maar dan 'where' slug = /recipe/slug

export async function load({ params }) {
	let query = gql`
		query getRecipe($id: String!) {
			recipes(where: { linkSlug: $id }) {
				linkSlug
				recipeName
				recipeDescription
				preparationTime
				recipeIngredients {
					ingredientName
					amount
					unit
				}
				recipeInstructions {
					id
					recipeInstruction
				}
				recipeDifficulty
				tag
				typeOfKitchen
				author {
					id
					userName
				}
			}
		}
	`;

	const data = await hygraph.request(query, { id: params.id });

	return data;
}

import { gql } from 'graphql-request';
import { hygraph, hygraphHP } from '$lib/utils/hygraph';

export async function load() {
	let query = gql`
		query getRecipe {
			recipes {
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

	const data = await hygraph.request(query);

	return data;
}

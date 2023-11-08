<script>
    export let data

    console.log(data.recipes[0])

</script>

<h1>Recepten</h1>

{#each data.recipes as recipe}
    <article>
        <h2>{recipe.recipeName}</h2>
        <p>{recipe.recipeDescription}</p>
        <ul>
            {#each recipe.recipeIngredients as ingredients}
                <li>{ingredients.ingredientName} - {ingredients.amount} {ingredients.unit}</li>
            {/each}
        </ul>
        <p>{recipe.preparationTime} min</p>
        <p>{recipe.recipeDifficulty} star</p>
        <p>Type keuken</p>
        <ul>
            {#each recipe.tag as tag}
                <li>{tag}</li>
            {/each}
        </ul>
        <p>{recipe.typeOfKitchen}</p>
        {#if recipe.author === null}
            <p>Toegevoegd door Admin</p>
        {:else}
            <p>{recipe.author}</p>
        {/if}
        
    </article>
    
{/each}
    

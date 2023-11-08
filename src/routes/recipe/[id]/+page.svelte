<script>
    // Export new "data" from Slug
    export let data 
    // Set to index 0, because there should only be one entry
    let recipe = data.recipes[0]

    // console.log(recipe)
</script>

<article>
    <h2>{recipe.recipeName}</h2>
    <p>{recipe.recipeDescription}</p>
    
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
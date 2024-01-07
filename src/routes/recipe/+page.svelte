<script>
    export let data

    // console.log(data.recipes[0])

</script>

<h1>Recepten</h1>
<section class="container__recipes">
{#each data.recipes as recipe}
    <article class="recipe">
        <h2 class="recipe__heading">{recipe.recipeName}</h2>
        <p class="recipe__description">{recipe.recipeDescription}</p>
        <!-- <ul>
            {#each recipe.recipeIngredients as ingredients}
                <li>{ingredients.ingredientName} - {ingredients.amount} {ingredients.unit}</li>
            {/each}
        </ul> -->
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
        
        <a href="recipe/{recipe.linkSlug}">Detail Pagina</a>
        
    </article>
    
{/each}

</section>



<style>

.container__recipes {
    display: flex;
    
}

.recipe {
    border: 1px solid black;
    padding: 1rem;
    margin: 1rem;
    width: 30%;   
}

.recipe__heading {
    
}




</style>
    

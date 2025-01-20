export default function RecipeExpanded(props) {
    let recipeName = props.recipeName;
    let ingredients = props.ingredients.map(ingredient => <li>{ingredient}</li>);
    return (
        <div className={"recipe flex flex-column"}>
            <h2 className={"recipe_header"}>
                {recipeName}
            </h2>
            <div className={"recipe_ingredients flex"}>
                {ingredients}
            </div>
        </div>
    );
}

import {useState} from "react";

export default function Recipe(props) {

    const [isHidden, setIsHidden] = useState(true);
    let recipeName = props.recipeName;
    let estCookTime = props.estCookTime;
    let estTotalTime = props.estTotalTime;
    let ingredients = props.ingredients.map(ingredient => <li>{ingredient}</li>);
    let steps = props.steps.map(step => <li>{step}</li>);
    let recipeBodyClassName = 'recipe_body display-none';
    let recipeContainerClass = 'recipe flex flex-column recipe_condensed';

    function handleClick() {
        setIsHidden(!isHidden);
        // if (!isHidden) {
        //     recipeBodyClassName = 'recipe_body';
        //     recipeContainerClass = "recipe flex flex-column recipe_expanded";
        // } else {
        //     recipeBodyClassName = 'recipe_body display-none';
        //     recipeContainerClass = 'recipe flex flex-column recipe_condensed';
        // }
    }

    if (isHidden) {
        return (
            <div className={"recipe flex flex-column recipe_condensed"} onClick={handleClick}>
                <h2 className={"recipe_header"}>{recipeName}</h2>
                {/* main recipe card can have name, cook time, and maybe # ingredients
                then expand to show details */}
                <div className={"recipe_subtitle-container flex flex-column"}>
                    <h3 className={"recipe_subtitle flex"}>est cook time: {estCookTime}</h3>
                    <h3 className={"recipe_subtitle flex"}>est total time: {estTotalTime}</h3>
                </div>
            </div>

        );
    }
    else {
        return (
            <div className={"recipe flex flex-column recipe_expanded"}>
                <div className={"flex flex-between"}>
                    <h2 className={"recipe_header"}>{recipeName}</h2>
                    <button className={"close-btn"} onClick={handleClick}>&#10006;</button>
                </div>
                {/* main recipe card can have name, cook time, and maybe # ingredients
                then expand to show details */}


                <div className={"recipe_body flex flex-column flex-start"}>
                    <div className={"recipe_body_subsection flex flex-column flex-start"}>
                        <h3>Ingredients</h3>
                        <div className={"recipe_ingredients flex flex-start flex-column"}>
                            {ingredients}
                        </div>
                    </div>

                    <div className={"recipe_body_subsection flex flex-column flex-start"}>
                        <h3>Steps</h3>
                        <div className={"recipe_steps flex flex-start flex-column"}>
                            {steps}
                        </div>
                    </div>

                    {/*    have ingredients and instructions here
            on click, change state of the component to show the
            hidden fields, expand the parent container, show the close btn*/}
                </div>
            </div>

        );
    }

}
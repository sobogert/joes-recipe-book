import {useState} from "react";

export default function Recipe(props) {

    const [isHidden, setIsHidden] = useState(true);
    let recipeName = props.recipeName;
    let estCookTime = props.estCookTime;
    let estTotalTime = props.estTotalTime;

    let recipeBodyClassName = 'recipe_body display-none';
    let recipeContainerClass = 'recipe flex flex-column recipe_condensed';
    
    if (!isHidden) {
        recipeBodyClassName = 'recipe_body';
        recipeContainerClass = "recipe flex flex-column recipe_expanded";
    } else {
        recipeBodyClassName = 'recipe_body display-none';
        recipeContainerClass = 'recipe flex flex-column recipe_condensed';
    }

    function handleClick() {
        setIsHidden(!isHidden);
    }

    return (
        <div className={recipeContainerClass} onClick={handleClick}>
            <h2 className={"recipe_header"}>{recipeName}</h2>
            {/* main recipe card can have name, cook time, and maybe # ingredients
                then expand to show details */}
            <div className={"recipe_subtitle-container flex flex-column"}>
                <h3 className={"recipe_subtitle flex"}>est cook time: {estCookTime}</h3>
                <h3 className={"recipe_subtitle flex"}>est total time: {estTotalTime}</h3>
            </div>

            <div className={recipeBodyClassName}>
                this is here now

            {/*    have ingredients and instructions here
            on click, change state of the component to show the
            hidden fields, expand the parent container, show the close btn*/}
            </div>
        </div>

    );
}
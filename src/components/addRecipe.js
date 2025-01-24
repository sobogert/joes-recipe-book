export default function AddRecipe() {

    return (
        <div className={"add-recipe flex flex-column flex-center flex-align-center"}>
            <h2>Add Recipe</h2>
            <div className={"flex flex-column flex-start"}>
                <div className={"form-item flex flex-column"}>
                    <label className={"add-recipe_label flex flex-column"}>
                        Recipe Name
                        <input type={"text"} />
                    </label>
                </div>
            </div>
            <button type={"submit"} className={"btn"}>Add Recipe</button>
        </div>

    );

}
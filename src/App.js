import './App.css';
import Recipe from "./components/recipe";
import boogie from "./assets/images/boogie.svg";
import AddRecipe from "./components/addRecipe";

function App() {

    // look into using states for whether or not the expanded recipe component is visible
    const thaiCurryIngredients = [
        '3-5 chicken thighs',
        '1-2 cans benzos',
        '1 jar curry paste',
        'broccoli, kale',
        'rice/noodles',
        'ginger',
        'lime',
        'garlic',
        'maybe potatos?'
    ];

    const thaiCurrySteps = [
        'cut up your potatos and your kale/broccoli and then cut up your ginger I mean your broccoli I mean your garlic, but keep that separate',
        'alright',
        'and then (hahahah) I forget. do you have a fine grater? cool ok then cut up the ginger and put it in the same pile as the garlic. you want that minced',
        'alright',
        'so then uh uh drain your benzos',
        'alright no we’re ready to start',
        'sear the chicken both sides in butter, good amount of butter',
        'and then put it on a plate',
        'and then dump in broccoli and potatos, stir around',
        'um',
        'then put in the bonzos',
        'stirthemaround',
        'uhhhhhhhhhh',
        'open up teh curry paste',
        'and then you’re putting in the curry paste, teh ginger, adn teh garlic all at the same time',
        'and stiritaround',
        'and then place the chicken on top of your vegetable-bonzo mixture',
        'burp',
        'pour coconut milk ontop',
        'stir around',
        'and then you just like maybe add some depending on how much coverage you have add a little bit of water and bullion',
        'that’s it',
        'and then you let it simmerforanhour',
        'so you wanna put it on your simmering burner instead of your burning burner',
        'youknowwhwatImean',
        'that’s it',
        'I mean that’s not all of it',
        'but I’ll get you like 95% of the way oh and lime goes in at some point, any point',
        '96%',
        'one teaspoon of bullion per cup',
        'or follow instructions'];

  return (
    <div className="flex flex-column flex-center flex-align-center page">
      <h1 className="header">Joe's Recipe Book</h1>
        <div className={"page-body flex flex-column flex-start"}>
            <Recipe
                recipeName={'Thai Curry'}
                estCookTime={'30:00'}
                estTotalTime={'1:30:00'}
                ingredients={thaiCurryIngredients}
                steps={thaiCurrySteps}
            />
        </div>
        <AddRecipe/>
        <div class={"page_footer flex flex-between flex-align-end full-width"}>
            <h4>made with love by <a href={"https://sophiabogert.com"}>Sofi Bogert</a></h4>
            <img src={boogie} alt={"Sofi's logo"}/>
        </div>
    </div>
  );
}

export default App;

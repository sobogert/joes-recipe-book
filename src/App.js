import './App.css';
import Recipe from "./components/recipe";

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

    const thaiCurrySteps = 'cut up your potatos and your kale/broccoli and then cut up your ginger I mean your broccoli I mean your garlic, but keep that separate\n' +
        'alright\n' +
        'and then (hahahah) I forget. do you have a fine grater? cool ok then cut up the ginger and put it in the same pile as the garlic. you want that minced\n' +
        'alright\n' +
        'so then uh uh drain your benzos\n' +
        'alright no we’re ready to start\n' +
        'sear the chicken both sides in butter, good amount of butter\n' +
        'and then put it on a plate\n' +
        'and then dump in broccoli and potatos, stir around\n' +
        'um\n' +
        'then put in the bonzos\n' +
        'stirthemaround\n' +
        'uhhhhhhhhhh\n' +
        'open up teh curry paste\n' +
        'and then you’re putting in the curry paste, teh ginger, adn teh garlic all at the same time\n' +
        'and stiritaround\n' +
        'and then place the chicken on top of your vegetable-bonzo mixture\n' +
        'burp\n' +
        'pour coconut milk ontop\n' +
        'stir around\n' +
        'and then you just like maybe add some depending on how much coverage you have add a little bit of water and bullion\n' +
        'that’s it\n' +
        'and then you let it simmerforanhour\n' +
        'so you wanna put it on your simmering burner instead of your burning burner\n' +
        'youknowwhwatImean\n' +
        'that’s it\n' +
        'I mean that’s not all of it\n' +
        'but I’ll get you like 95% of the way oh and lime goes in at some point, any point\n' +
        '96%\n' +
        'one teaspoon of bullion per cup\n' +
        'or follow instructions';

  return (
    <div className="flex flex-column flex-center flex-align-center page">
      <header className="header">Joe's Recipe Book</header>
        <div className={"page-body flex flex-column flex-start"}>
            <Recipe
                recipeName={'Thai Curry'}
                estCookTime={'30:00'}
                estTotalTime={'1:30:00'}
                ingredients={thaiCurryIngredients}
                steps={thaiCurrySteps}
            />
        </div>
    </div>
  );
}

export default App;

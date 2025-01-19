import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-column flex-center flex-align-center page">
      <header className="header">Joe's Recipe Book</header>
        <div className={"page-body flex flex-column flex-start"}>
            <div className={"recipe flex flex-column"}>
                <h2 className={"recipe_header"}>
                    Thai Curry
                </h2>
                {/* main recipe card can have name, cook time, and maybe # ingredients
                then expand to show details */}
                <div className={"recipe_ingredients flex"}>
                    <div className={"flex flex-column flex-start"}>
                        <p>3-5 chicken thighs</p>
                        <p>1-2 cans benzos</p>
                        <p>1 jar curry paste</p>
                        <p>broccoli, kale</p>
                        <p>rice/noodles</p>
                    </div>
                    <div className={"flex flex-column flex-start"}>
                        <p>ginger</p>
                        <p>lime</p>
                        <p>garlic</p>
                        <p>maybe potatos?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;

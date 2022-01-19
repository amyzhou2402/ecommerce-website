import "./App.css";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import CarouselComponent from "./components/Carousel";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import ProductDetail from "./containers/ProductDetail";
import FooterContainer from "./containers/FooterContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/">
                        {/* <CarouselComponent></CarouselComponent> */}
                        <HeaderContainer></HeaderContainer>
                        <ProductGrid></ProductGrid>
                    </Route>
                    <Route path="/product/:productID">
                        <HeaderContainer></HeaderContainer>
                        <ProductDetail></ProductDetail>
                    </Route>
                </Switch>
            </Router>
            <FooterContainer></FooterContainer>
        </div>
    );
}

export default App;

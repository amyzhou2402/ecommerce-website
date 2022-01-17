import "./App.css";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import CarouselComponent from "./components/Carousel";
import ProductGrid from "./containers/ProductGrid/ProductGrid";
import ProductDetail from "./containers/ProductDetail";
import FooterContainer from "./containers/FooterContainer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <HeaderContainer></HeaderContainer>
            <Router>
                <Switch>
                    <Route exact path="/">
                        {/* <CarouselComponent></CarouselComponent> */}
                        <ProductGrid></ProductGrid>
                    </Route>
                    <Route path="/product/testing">
                        <ProductDetail></ProductDetail>
                    </Route>
                </Switch>
            </Router>
            <FooterContainer></FooterContainer>
        </div>
    );
}

export default App;

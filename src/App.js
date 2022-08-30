import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
const App = () => {
    const siteName = 'ReactStore'
    const products = [
        {id:200, name:"Product One", price:75},
        {id:201, name:"Product Two", price:45},
        {id:202, name:"Product Three", price:60},
        {id:203, name:"Product Four", price:35},
        {id:204, name:"Product Five", price:40},
        {id:208, name:"Product Six", price:55},
    ]
    return (
        <div className="appWrapper">
            <Header siteName = {siteName}/>
            <Main products = {products}></Main>
            <Footer footerName = {siteName  }/>
        </div>

    )
}

export default App;
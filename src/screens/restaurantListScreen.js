import React from 'react' ;
import '../styles/restaurantListScreen.css';
import Header from '../components/Header';
import Footer from "../components/Footer";

class App extends React.Component{

    constructor(){
        super();
        this.state={
            restaurantNum:"211",
            restaurantAddress:'تهران،ظفر،نفت شمالی',
            restaurants:[
                {
                    id:'1',
                    name:'دان تان',
                    logo:'',
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'',
                    categories:[],
                    foods:[],
                    comments:[],
                }
            ],
            closedRestaurants:[
                {
                    id:'1',
                    name:'دان تان',
                    logo:'',
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'',
                    categories:[],
                    foods:[],
                    comments:[],
                }
            ],
            searchRestaurant:'',
            categort:[
                {
                    id:'1',
                    name:'صبحانه',
                },
                {
                    id:'2',
                    name:'غذای ایرانی',
                },
                {
                    id:'3',
                    name:'سالاد',
                },
            ],
            selectedCategories:[
                {
                    id:'4',
                    name:'سالاد',
                },
                {
                    id:'5',
                    name:'سالاد',
                },
            ],
        }
    }
    searachRestaurantHandler=()=>{

    }
    render() {
        return(
            <div className={'main'}>
                <Header/>
                <img id="RLH" src={require("../mocks/RLHeader.PNG")} alt="Smiley face" height="45%" width="100%"/>
                <div id={'resNameNumdiv'}>
                    <h2 id="resNameNum">
                        <span>{this.state.restaurantNum}</span>
                        <span> رستوران امکان سرویس دهی به </span>
                        <span id={"address"}>{this.state.restaurantAddress}</span>
                        <span>را دارند.</span>
                    </h2>
                </div>
                <div id={'restauranrSearch'}>
                    <i id="searchicon" className="fas fa-search"></i>
                    <input id="restauranrSearchinput" type="text" placeholder="جستجوی رستوران در این محدوده" value={this.state.searchRestaurant} onChange={()=>this.searachRestaurantHandler()}/>
                </div>
                <div id={'mainDiv'}>
                    <div id={'filterdiv'}>
                        <div id={'filterdivpdiv'}>
                            <p>فیلتر بر اساس انواع غذا</p>
                        </div>
                        <div id={'searchCategoryDiv'}>
                            <input id="categorySearchinput" type="text" placeholder="جستجوی دسته بندی غذا ها" value={this.state.searchRestaurant} onChange={()=>this.searachRestaurantHandler()}/>
                        </div>

                    </div>
                    <div id={'restaurantdiv'}>
                        <div id={'openRestaurantdiv'}></div>
                        <div id={'closedRestaurantdiv'}></div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
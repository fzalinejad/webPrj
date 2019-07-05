import React from 'react' ;
import '../styles/restaurantListScreen.css';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import styled from 'styled-components'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';


const StyledButton = styled(Button)`
  
`

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
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای آسیایی . غذای دریایی',
                    foods:[],
                    comments:[],
                },
                {
                    id:'2',
                    name:'شیلا',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },{
                    id:'3',
                    name:'فست فود فلفل دلمه',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },{
                    id:'4',
                    name:'طباخی ساعی',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },{
                    id:'5',
                    name:'دی نایت',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
                {
                    id:'6',
                    name:'کافه ماچا',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
                {
                    id:'7',
                    name:'فروشگاه کنکوک',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
            ],
            closedRestaurants:[
                {
                    id:'1',
                    name:'دان تان',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
                {
                    id:'1',
                    name:'دان تان',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
                {
                    id:'1',
                    name:'دان تان',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
                {
                    id:'1',
                    name:'دان تان',
                    logo:require("../mocks/shila.jpg"),
                    openiingTime:12,
                    clisingTime:18,
                    averrageRate:4.5,
                    address:'تهران،خیابان ولیعصر، خیابان رشت',
                    categories:'غذای دریایی  . سوشی . نودل',
                    foods:[],
                    comments:[],
                },
            ],
            searchRestaurant:'',
            categories:[
                {
                    id:'1',
                    name:'صبحانه',
                    num:'21'
                },
                {
                    id:'2',
                    name:'غذای ایرانی',
                    num:'55'
                },
                {
                    id:'3',
                    name:'سالاد',
                    num:'64'
                },
                {
                    id:'4',
                    name:'برگر',
                    num:'71'
                },
                {
                    id:'5',
                    name:'پیتزا',
                    num:'66'
                },
                {
                    id:'6',
                    name:'ساندویچ',
                    num:'41'
                },
                {
                    id:'7',
                    name:'خورشت',
                    num:'66'
                },
                {
                    id:'8',
                    name:'فست فود',
                    num:'65'
                },
                {
                    id:'9',
                    name:'ماهی',
                    num:'32'
                },
                {
                    id:'10',
                    name:'کباب',
                    num:'32'
                },
                {
                    id:'11',
                    name:'دسر',
                    num:'12'
                },{
                    id:'11',
                    name:'کافه',
                    num:'54'
                },

            ],
            selectedCategories:[

            ],
            moreClicked:false,
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
                    <p id="resNameNum">
                        <span>{this.state.restaurantNum}</span>
                        <span> رستوران امکان سرویس دهی به </span>
                        <span id={"address"}>{this.state.restaurantAddress}</span>
                        <span>را دارند.</span>
                    </p>
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
                        {this.state.selectedCategories.map(item=>(
                                <div
                                    key={item.id}
                                    onClick={()=>{
                                        var filteredAry1 = this.state.selectedCategories.filter(function(e) { return e.name !== item.name });
                                        var filteredAry2=this.state.categories;
                                        filteredAry2.push(item);
                                        this.setState({
                                            selectedCategories:filteredAry1,
                                            categories:filteredAry2,
                                        });

                                    }}
                                    className={'selectedCategoryDiv'}>
                                    <Checkbox
                                        checked={true}
                                    />
                                    <p>{item.name}</p>
                                    <p>({item.num})</p>
                                </div>
                        ))}
                        {this.state.selectedCategories.length>0&&<div id={"border"}></div>}
                        {!this.state.moreClicked && this.state.categories.slice(1,9).map(item=>(
                                <div
                                    id={item.id}
                                    onClick={()=>{
                                        var filteredAry1 = this.state.categories.filter(function(e) { return e.name !== item.name });
                                        var filteredAry2=this.state.selectedCategories;
                                        filteredAry2.push(item);
                                        this.setState({
                                            selectedCategories:filteredAry2,
                                            categories:filteredAry1,
                                        });

                                    }}
                                    className={'selectedCategoryDiv'}>
                                    <Checkbox
                                        checked={false}
                                    />
                                    <p>{item.name}</p>
                                    <p>({item.num})</p>
                                </div>
                        ))}
                        {this.state.moreClicked && this.state.categories.map(item=>(
                            <div
                                id={item.id}
                                onClick={()=>{
                                    var filteredAry1 = this.state.categories.filter(function(e) { return e.name !== item.name });
                                    var filteredAry2=this.state.selectedCategories;
                                    filteredAry2.push(item);
                                    this.setState({
                                        selectedCategories:filteredAry2,
                                        categories:filteredAry1,
                                    });

                                }}
                                className={'selectedCategoryDiv'}>
                                <Checkbox
                                    checked={false}
                                />
                                <p>{item.name}</p>
                                <p>({item.num})</p>
                            </div>
                        ))}
                        {!this.state.moreClicked &&
                        <div
                            id={'moreDiv'}
                            onClick={()=>{
                                this.setState({
                                    moreClicked:true,
                                })
                            }}
                        >
                            <p>بیشتر</p>
                        </div>}

                    </div>
                    <div id={'restaurantdiv'}>
                        <GridList cellHeight={300} cols={3} spacing={10} id={'openRestaurantdiv'}>
                            {
                                this.state.restaurants.map((item)=>(
                                    <GridListTile className={'forGriddiv'}>
                                        <div className={'forthdiv'}>
                                            <div className={'forthdiv1'}>
                                                <div className={'forthdivimg'}>
                                                <img src={item.logo} alt="Smiley face" height="50%" width="80%"/>
                                                </div>
                                                <div className={'forthdivrest'}>
                                                    <h2>{item.name}</h2>
                                                    <div className="startsdiv">
                                                        <hr/>
                                                            {/*<span className="likenum"></span>*/}
                                                            <i id="grey" className="fas fa-star"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <span className="rate">{item.averrageRate}</span>
                                                            <hr/>
                                                    </div>
                                                    <p className={'cat'}>{item.categories}</p>
                                                    <p className={'add'}>{item.address}</p>
                                                </div>
                                            </div>
                                            <div className={'forthdiv2'}>
                                                    <div className="forthdivdiv">
                                                        <p>شروع سفارش</p>
                                                    </div>
                                            </div>
                                        </div>
                                    </GridListTile>
                                ))
                            }

                        </GridList>
                        <h2 id={'close'}>رستورن های بسته</h2>
                        <div id={'closedRestaurantdiv'}>
                            <GridList cellHeight={300} cols={3} spacing={10} id={'openRestaurantdiv'}>
                                {
                                    this.state.closedRestaurants.map((item)=>(
                                        <GridListTile className={'forGriddiv'}>
                                            <div className={'forthdiv'}>
                                                <div className={'fifthdiv1'}>
                                                    <div className={'forthdivimg'}>
                                                        <img src={item.logo} alt="Smiley face" height="50%" width="80%"/>
                                                    </div>
                                                    <div className={'forthdivrest'}>
                                                        <h2>{item.name}</h2>
                                                        <div className="startsdiv">
                                                            <hr/>
                                                            {/*<span className="likenum"></span>*/}
                                                            <i id="grey" className="fas fa-star"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <i className="fas fa-star yellow"></i>
                                                            <span className="rate">{item.averrageRate}</span>
                                                            <hr/>
                                                        </div>
                                                        <p className={'cat'}>{item.categories}</p>
                                                        <p className={'add'}>{item.address}</p>
                                                    </div>
                                                </div>
                                                <div className={'forthdiv2'}>

                                                </div>
                                            </div>
                                        </GridListTile>
                                    ))
                                }

                            </GridList>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default App;
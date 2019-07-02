import React from 'react' ;
import './styles/App.css';
import Header from './components/Header';
import Footer from "./components/Footer";

class App extends React.Component{

  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return(
        <div>
          <Header/>
            <div className="location">
                <img id="reyhoonIMG" src={require("./mocks/reyhoonlogo.jpeg")} alt="Smiley face" height="45%" width="12%"/>
                    <h2 id="order">سفارش آنلاین غذا از بهترین رستوران ها و فست فود ها</h2>
                    <p id="region">.برای دیدن لیست رستوران ها و فست فود هایی که به شما سرویس می دهند، منطقه خود را وارد
                        کنید</p>
                    <div id="searchbox">
                        <div id="city">
                            <i id="dropdownpicker" className="fas fa-chevron-down"></i>
                            <span id="tehran">تهران</span>
                        </div>
                        <div id="neighbourhood">
                            <span>منطقه خود را وارد کنید</span>
                            <i id="locationicon" className="fas fa-map-marker-alt"></i>
                            <input id="locationinput" type="text" name="locationinput" placeholder="مثلا نیاوران"/>
                                <button id="searchbutton" type="button">
                                    <i id="searchicon" className="fas fa-search"></i>
                                </button>
                        </div>
                    </div>
                    <div id="last">
                        <i id="timeicon" className="fas fa-history"></i>
                        <p id="lastsearch"> آخرین جستجو:تهران،شیخ هادی،چهار راه ولیعصر </p>
                    </div>
            </div>
            <div className="third">
                <div className="thirddiv">
                    <p className="thirddivp">شهر و منطقه خود را وارد کنید</p>
                    <div className="thirddivdiv">
                        <div className="div1">
                            <div className="imgdiv">
                                <img id="imgouter" src={require("./mocks/azadi.jpg")} alt="Smiley face" height="100%"
                                     width="100%"/>
                                    <div id="inner">
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="div2">
                            <p>منوی مورد علاقه ی خود را از بین بیش از 3500 رستوران خوب در تهران و شهرستان ها جستجو
                                کنید</p>
                        </div>
                    </div>
                </div>
                <div className="thirddiv">
                    <p className="thirddivp">غذای خود را انتخاب کنید</p>
                    <div className="thirddivdiv">
                        <div className="div1">
                            <div className="imgdiv">
                                <img id="imgouter" src={require("./mocks/kabab.jpg")} alt="Smiley face" height="100%"
                                     width="100%"/>
                                    <div id="inner">
                                        <i className="fas fa-utensils"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="div2">
                            <p>غذایی که می خواهید را انتخاب کنید و بدون هزینه اضافی سفارش خود را ثبت کنید</p>
                        </div>
                    </div>
                </div>
                <div className="thirddiv">
                    <p className="thirddivp">غذایتان را نوش جان کنید</p>
                    <div className="thirddivdiv">
                        <div className="div1">
                            <div className="imgdiv">
                                <img id="imgouter" src={require("./mocks/baste.jpg")} alt="Smiley face" height="100%"
                                     width="100%"/>
                                    <div id="inner">
                                        <i className="fas fa-heart"></i>
                                    </div>
                            </div>
                        </div>
                        <div className="div2">
                            <p>درب منزل یا حضوری از خود رستوران سفارشتان را تحوبل بگیرید</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="besttitle">
                <p>رستوران ها و فست فود های برتر ماه بر اساس امتیاز دهی کاربران</p>
            </div>
          <Footer/>
        </div>
    )
  }
}

export default App;
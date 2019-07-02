import React from 'react' ;
import '../styles/footer.css';

class Footer extends React.Component{

    constructor(){
        super();
        this.state={

        }
    }
    render() {
        return(
            <div>
                <div className="eight">
                    <div className="eightdivfirst">
                        <div className="div811">
                            <p id="div811p1">مراقبت و محافظت از حساب کاربری و رمز عبور هر کابر بر عهده کابر است. ریحون
                                سریعترین راه سفارش آنلاین غذا است. منوی عکس دار رستوران های اطرافتان را بر اساس مکان خود
                                به راحتی مشاهده کنیدو سفارش دهید </p>
                            <p id="div811p2">لیست رستوران ها</p>
                        </div>
                        <div className="div812">
                            <p className="div81p1">تماس با ریحون</p>
                            <p className="div81p2">درباره ریحون</p>
                            <p className="div81p3">تماس با ما</p>
                            <p className="div81p4">وبلاگ ریحون</p>
                        </div>
                        <div className="div813">
                            <p className="div81p1">رستوران ها</p>
                            <p className="div81p2">ثبت رستوران</p>
                        </div>
                        <div className="div814">
                            <p className="div81p1">پشتیبانی ریحون</p>
                            <p className="div81p2">سوالات متداول</p>
                            <p className="div81p3">تماس پشتیبانی</p>
                            <p className="div81p4">قوانین و مقررات</p>
                        </div>
                        <div className="div815">
                            <p className="div81p1">اپلیکیشن های موبایل</p>
                            <img id="darkapp1" className="darkapp"
                                 src={require("../mocks/applicationdownladlink/google-play-dark.png")} alt="Smiley face"
                                 height="13%" width="70%"/>
                                <img className="darkapp" src={require("../mocks/applicationdownladlink/sib-app-dark.png")}
                                     alt="Smiley face" height="13%" width="70%"/>
                                    <img className="darkapp" src={require("../mocks/applicationdownladlink/cafebazaar-dark.png")}
                                         alt="Smiley face" height="13%" width="70%"/>
                        </div>
                    </div>
                    <div className="eightdivsecond">
                        <img id="eightlogo1" src={require("../mocks/logo.png")} alt="Smiley face" height="48%" width="10%"/>
                            <img id="eightlogo2" src={require("../mocks/kasbokar.png")} alt="Smiley face" height="48%" width="10%"/>
                    </div>
                </div>
                <div className="nine">
                    <p>© 2017, Reyhoon, All Rights Reserved.</p>
                    <i id="telegramicon" className="fab fa-telegram-plane"></i>
                    <i id="ficon" className="fab fa-facebook-f"></i>
                    <i id="twittericon" className="fab fa-twitter"></i>
                    <i id="instaicon" className="fab fa-instagram"></i>
                    <i id="gicon" className="fab fa-google-plus-g"></i>
                </div>
            </div>
        )
    }
}

export default Footer;
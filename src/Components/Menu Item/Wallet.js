import {Header_btn_Style} from "../../Style/Stylelibrary";
import {Logo} from "../../Img/Imglibrary";

export default function Wallet(){
    return(<>
        <center>
            <button>Deposit</button>
            <button>Earning</button>
            <button>Withdraw</button>
            <img className={Header_btn_Style.logo_style} src={Logo} alt={""}/>
        </center>
    </>);
}
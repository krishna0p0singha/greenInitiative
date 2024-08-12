import {Header_btn_Style} from "../Style/Stylelibrary";

export default function Login(){
    return (
        <>
            <div>
                <form>
                    <label htmlFor={"#username"}>Username :
                        <input id={"#username"} type={"text"}/>
                    </label>
                    <label htmlFor={"#password"}>Password :
                        <input id={"#password"} type={"text"}/>
                    </label>
                    <center><button className={Header_btn_Style.header_btn_style}>Login Now</button></center>
                </form>
            </div>
        </>
    );
}
import {useEffect, useState} from "react";
import {URL} from "../../GlobalVariables";
import {Header_btn_Style} from "../../Style/Stylelibrary";
import {Logo} from "../../Img/Imglibrary";

export default function FriendList({data}){
    const[friend_list_Info,setFriendlistInfo]=useState({});

    useEffect(() => {
        const Info= async ()=>{
            const url=URL+"/fetch_friend_list";
            let result= await fetch(url,{
                method: "post",
                body: JSON.stringify({ uniqueID: data.id }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result=await result.json();
            if(result){
                console.log(result.user);
                setFriendlistInfo(result.user)
                return result
            }
        }
        setFriendlistInfo(Info());
    }, [data.id]);
    return(<>
        <div>

            {friend_list_Info["userUniqueId"]}
            {friend_list_Info["friendList"]}
            <center>
                <img className={Header_btn_Style.logo_style} src={Logo} alt={""}/>
            </center>
        </div>
    </>);
}
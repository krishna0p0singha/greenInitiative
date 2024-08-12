import {Movielist_Style} from "../Style/Stylelibrary";
import {Angry, Comment, Happy, Info, Love, Menu_img, More_Less, Sad} from "../Img/Imglibrary";
import {useState} from "react";

export default function ImgView(){
    const [comment_info,setCommentInfo]=useState({
       comment_user:"",
        comment_msg:""
    });
    const [reaction_info,setReactionInfo]=useState({
        react_user:"",
        react_emoji:""
    });
    const [toggle_list,setToggleList]=useState({
        reaction_list_toggle:false,
        info_section_toggle:false,
        show_more_toggle:false
    });
    const ReactionSubmit=(e)=>{
        e.preventDefault();
        if(e.currentTarget.id === "#happy"){
            setReactionInfo({
                ...reaction_info,
                react_emoji: "happy"
            });
        }else if(e.currentTarget.id === "#angry"){
            setReactionInfo({
                ...reaction_info,
                react_emoji: "angry"
            });
        }else if(e.currentTarget.id === "#love"){
            setReactionInfo({
                ...reaction_info,
                react_emoji: "love"
            });
        }else {
            setReactionInfo({
                ...reaction_info,
                react_emoji: "sad"
            });
        }
    }
    const CommentSubmit=(e)=>{
        e.preventDefault();
        setCommentInfo({...comment_info,
            comment_msg: ""})
    }
return(
    <>
        <div>

            <img className={Movielist_Style.content_single_item} src={Menu_img} alt={""}/>
            <div className={Movielist_Style.info_icon}>
                <div style={{display:"inline",float:"left"}}>
                    <img  src={Info}
                          onClick={toggle_list.info_section_toggle ?
                              ()=>{setToggleList({...toggle_list,info_section_toggle: false})} :
                              ()=>{setToggleList({...toggle_list,info_section_toggle: true})}}
                          alt={""}/>
                </div>
                <div style={toggle_list.info_section_toggle ? {display:"inline",float:"left"}: {display:"none"}}>
                    <input type={"text"}/>
                </div>
            </div>
        </div>
        <div>
            <div>
                <input value={comment_info.comment_msg}
                       onChange={(e)=>{
                           setCommentInfo({...comment_info,
                               comment_msg: e.target.value })
                       }}
                       id={"#comment"} className={Movielist_Style.comment_input_style}
                       type={"text"}
                       placeholder={"Enter Comments"}
                />
            </div>
            <div style={{float:"left"}}>
                <img src={Comment}
                     onClick={CommentSubmit}
                     alt={""}/>
        </div>
        </div>
        <div>
            <img style={!toggle_list.reaction_list_toggle ? {display: "block",float:"right"} : {display: "none"}}
                 src={More_Less}
                 onClick={() => {
                     setToggleList({...toggle_list, reaction_list_toggle: true})
                 }}
                 alt={""}/>
            <img style={toggle_list.reaction_list_toggle ? {
                display: "block",
                transform: "rotate(180deg",
                float:"right"
            } : {display: "none", transform: "rotate(180deg"}}
                 src={More_Less}
                 onClick={() => {
                     setToggleList({...toggle_list, reaction_list_toggle: false})
                 }}
                 alt={""}/>
            <div style={toggle_list.reaction_list_toggle ? {display: "block"} : {display: "none"}}
                 className={Movielist_Style.reaction_section_style}>
                <div className={Movielist_Style.reaction_item_style}>
                    <img src={Happy}
                         id={"#happy"}
                         onClick={ReactionSubmit}
                         alt={""}/>
                </div>
                <div className={Movielist_Style.reaction_item_style}>
                    <img src={Angry}
                         id={"#angry"}
                         onClick={ReactionSubmit}
                         alt={""}/>
                </div>
                <div className={Movielist_Style.reaction_item_style}>
                    <img src={Love}
                         id={"#love"}
                         onClick={ReactionSubmit}
                         alt={""}/>
                </div>
                <div className={Movielist_Style.reaction_item_style}>
                    <img src={Sad}
                         id={"#sad"}
                         onClick={ReactionSubmit}
                         alt={""}/>
                </div>
            </div>
        </div>
    </>
)
}
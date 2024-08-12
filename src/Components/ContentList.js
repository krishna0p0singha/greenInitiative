import {useState} from "react";
import {Movielist_Style} from '../Style/Stylelibrary';
import {ContentView} from './Componentlibrary';
export default function Contentlist(){
    const [movie_gener_toggle,setMovie_gener_toggle]=useState({
        action_toggle: false,
        adventure_toggle: false,
        biography_toggle: false,
        comedy_toggle: false,
        crime_toggle: false,
        documentary_toggle: false,
        drama_toggle: false,
        fantasy_toggle: false,
        history_toggle: false,
        horror_toggle: false,
        mystery_toggle: false,
        romance_toggle: false,
        sci_fi_toggle: false,
        thriller_toggle: false

    });
    return(<>
        <div className={Movielist_Style.main_style}>
            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.action_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.action_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, action_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, action_toggle: true})
                            }}>Action
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.adventure_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.adventure_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, adventure_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, adventure_toggle: true})
                            }}>Adventure
                </button>

            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.biography_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.biography_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, biography_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, biography_toggle: true})
                            }}>Biography
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.comedy_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.comedy_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, comedy_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, comedy_toggle: true})
                            }}>Comedy
                </button>

            </div>
            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.crime_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.crime_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, crime_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, crime_toggle: true})
                            }}>Crime
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.documentary_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.documentary_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, documentary_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, documentary_toggle: true})
                            }}>Documentary
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.drama_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.drama_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, drama_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, drama_toggle: true})
                            }}>Drama
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.fantasy_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.fantasy_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, fantasy_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, fantasy_toggle: true})
                            }}>Fantasy
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.history_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.history_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, history_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, history_toggle: true})
                            }}>History
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.horror_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.horror_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, horror_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, horror_toggle: true})
                            }}>Horror
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.mystery_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.mystery_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, mystery_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, mystery_toggle: true})
                            }}>Mystery
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.romance_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.romance_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, romance_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, romance_toggle: true})
                            }}>Romance
                </button>
            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.sci_fi_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.sci_fi_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, sci_fi_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, sci_fi_toggle: true})
                            }}>Sci_fi
                </button>

            </div>

            <div className={Movielist_Style.gener_btn_container}>
                <button className={movie_gener_toggle.thriller_toggle
                    ? `${Movielist_Style.gener_btn_item} ${Movielist_Style.freeze_gener_btn}`
                    : `${Movielist_Style.gener_btn_item} ${Movielist_Style.gener_btn_item_none}`}
                        onClick={movie_gener_toggle.thriller_toggle
                            ? () => {
                                setMovie_gener_toggle({...movie_gener_toggle, thriller_toggle: false})
                            }
                            : () => {
                                setMovie_gener_toggle({...movie_gener_toggle, thriller_toggle: true})
                            }}>Thriller
                </button>
            </div>
            <div className={Movielist_Style.main_content_list}>
                <ContentView/>
                <ContentView/>
            </div>
            <div style={{display: "block"}}>
            <div style={movie_gener_toggle.action_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello1
                </div>
                <div style={movie_gener_toggle.adventure_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello2
                </div>
                <div style={movie_gener_toggle.biography_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello3
                </div>
                <div style={movie_gener_toggle.comedy_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello4
                </div>
                <div style={movie_gener_toggle.crime_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello5
                </div>
                <div style={movie_gener_toggle.documentary_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello6
                </div>
                <div style={movie_gener_toggle.drama_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello7
                </div>
                <div style={movie_gener_toggle.fantasy_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello8
                </div>
                <div style={movie_gener_toggle.history_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello9
                </div>
                <div style={movie_gener_toggle.horror_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello10
                </div>
                <div style={movie_gener_toggle.mystery_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello11
                </div>
                <div style={movie_gener_toggle.romance_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello12
                </div>
                <div style={movie_gener_toggle.sci_fi_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello13
                </div>
                <div style={movie_gener_toggle.thriller_toggle ? {
                    display: "inline",
                    padding: "3px"
                } : {display: "none"}}>Hello14
                </div>
            </div>

        </div>

    </>);
}
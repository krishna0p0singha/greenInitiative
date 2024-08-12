import {useState} from "react";
import {URL} from "../../GlobalVariables";

export default function CreateGroup({data}){
    const [group_info,setGroupInfo]=useState({
        group_title:"",
        group_owner_uniqueId: data.id,
        group_description:"",
        group_audience_type:""
    });
    const CreateGroup= async (e)=>{
        e.preventDefault();

        try{
            const url=URL+"/create_group";

            let result= await fetch(url,{
                method: "post",
                body: JSON.stringify({group_info}),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            result=await result.json();
            if(result){
                //console.log(result.user);
                setGroupInfo({
                    ...group_info,
                    group_title:"",
                    group_description:"",
                    group_audience_type:""
                });
            }
        }catch (e) {
        }
    }
    return(<>
    <div>
        <form>
            <div>
                <label htmlFor={"#"}>Group Title :
                <input id={"#"} type={"text"} value={group_info.group_title}
                       onChange={(e)=>{
                    setGroupInfo({...group_info,group_title: e.target.value})
                }}/>
                </label>
            </div>
            <div>
                <label>Description :
                    <br/>
                    <textarea value={group_info.group_description}
                              style={{
                                  width: "98%",
                                  aspectRatio: "2/0.6"
                              }}
                              rows={"10"} cols={"50"}
                              onChange={(e)=>{
                                  setGroupInfo({...group_info,group_description: e.target.value})
                    }}>

                        </textarea>
                </label>
            </div>
            <div>
                <label>Audience Type:
                <select value={group_info.group_audience_type}
                        onChange={(e)=>{
                            setGroupInfo({...group_info,group_audience_type: (e.target.value)})
                }}>
                    <option></option>
                    <option value={"PRIVATE"}>Private</option>
                    <option value={"PUBLIC"}>Public</option>
                </select>
            </label>
            </div>
            <div>
                <label htmlFor={"#"}></label>
            </div>
            <center>
                <button onClick={CreateGroup}>Create Now</button>
            </center>
        </form>
    </div>
    </>);
}
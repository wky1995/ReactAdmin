import React,{useState} from "react";
import  {withRouter} from "react-router-dom"
import {Layout} from "antd";

const  {Content}=Layout
 function UserManage() {
     const[count,setCount]=useState(0)
        return(
            <Content style={{
                background: '#fff',
                padding: 24,
                margin: 0,
               minHeight: 600
            }}>
                <div>
        <p>You clicked {count} </p>
                </div>
            </Content>
        )
    }

export default withRouter(UserManage)

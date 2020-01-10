import React,{Component} from "react";
import   {withRouter}     from "react-router-dom"
import {Layout} from "antd";

const   {Content} =Layout;

 class UserManage1 extends Component{
    render() {
        return(
            <Content style={{
                background: '#fff',
                padding: 24,
                margin: 0,
               minHeight: 600
            }}>
                5
            </Content>
        )
    }

}
export default withRouter(UserManage1)

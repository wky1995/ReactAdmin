import React,{Component} from "react";
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import {BrowserRouter, NavLink, Redirect, Route, Switch, withRouter} from "react-router-dom";
import UserManage from "./setFocusRouter/userManageRouter";
import UserManage1 from "./setFocusRouter/userManageRouter1";
import UserManage2 from "./setFocusRouter/userManageRouter2";

const { Sider} = Layout;
 class Main5 extends Component{
  onClick=()=>{

  };
    render() {
        return(
            <BrowserRouter>
            <Layout >
                <Sider width={200} style={{ background: '#fff' }}>
                    <Menu onClick={this.onClick}
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">
                            <NavLink to="/user">
                            <Icon type="user" />
                            <span>
                                用户管理
                            </span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <NavLink to="/user1">
                            <Icon type="user" />
                            <span>角色管理</span>
                            </NavLink>
                        </Menu.Item>
                        <Menu.Item key="3" >
                            <NavLink to="/user2">
                            <Icon type="user" />
                            <span>权限管理</span>
                            </NavLink>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>设置中心</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                    </Breadcrumb>

                    <Switch>
                    <Route exact path="/user" component={UserManage}/>
                    <Route path="/user1" component={UserManage1}/>
                    <Route path="/user2" component={UserManage2}/>
                    <Redirect path="/*" to="/user"/>
                    </Switch>

                </Layout>
            </Layout>
            </BrowserRouter>
        )
    }

}
export default withRouter(Main5)

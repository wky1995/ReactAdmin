import React, {Component} from "react";
import {Layout,  Menu,  Button, Modal} from 'antd';
import "./admin.css"
import 'antd/dist/antd.css';
import { Switch, NavLink, Route, Redirect,withRouter} from "react-router-dom"
import {formateDate} from "../../utils/dateUtils";
import Main1 from "../../Router/main1";
import Main2 from "../../Router/main2";
import Main3 from "../../Router/main3";
import Main4 from "../../Router/main4";
import Main5 from "../../Router/main5";
const {Header} = Layout;

 class Admin extends Component {
    state = {
        collapsed: false,
        sysTime:formateDate(Date.now())
    };

    onCollapse = (collapsed) => {
        console.log(collapsed);
        console.log("1");
        this.setState({collapsed});
    };

    getSysTime = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                sysTime: formateDate(Date.now())
            })
        }, 1000)
    }
    componentDidMount() {
        this.getSysTime();

    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    onClick = () => {
        Modal.confirm({
            content: "确认退出吗？",
            onOk: () => {
                sessionStorage.removeItem("userName");
                this.props.history.replace("/login")
            },
            onCancel() {
                console.log("cancel")
            }
        })
    };

    render() {
        const {sysTime}=this.state;
        if (!sessionStorage.getItem("userName")){
           return <Redirect to='/login' />
        }
        return (
        <Layout >
            <Header className="header">
                <div className="weather" >
                    <span style={{fontSize:15}}>{sysTime}</span>
                </div>
                <div className="logo">
                    <span >欢迎,{sessionStorage.getItem("userName")}</span>
                    <Button className="button" onClick={this.onClick}>退出</Button>
                </div>
                <Menu

                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{lineHeight: '64px'}
                    }
                >
                    <Menu.Item key="2">
                        <NavLink to="/">nav 1 </NavLink>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <NavLink to="/nav2">nav 2 </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <NavLink to="/nav3">nav 3 </NavLink>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <NavLink to="/nav4">nav 4 </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <NavLink to="/nav5">设置中心 </NavLink>
                    </Menu.Item>
                </Menu>
                <Switch>
                    <Route   path="/" component={Main1} exact/>
                    <Route path="/nav2" component={Main2}/>
                    <Route path="/nav3" component={Main3}/>
                    <Route path="/nav4" component={Main4}/>
                    <Route path="/nav5" component={Main5}/>
                    <Redirect path="/" to="/"/>
                </Switch>
            </Header>
        </Layout>
        )
    }

}
export default withRouter(Admin)

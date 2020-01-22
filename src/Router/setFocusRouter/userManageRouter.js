import React, { useState, useEffect } from "react";
import { withRouter, BrowserRouter, Link, Route } from "react-router-dom";
import { Layout } from "antd";

const { Content } = Layout;
function UserManage() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 600
      }}
    >
      <div>
        <p>You clicked {count} time</p>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          点击
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              alert(count);
            }, 3000);
          }}
        >
          Show alert
        </button>
      </div>
    </Content>
  );
}

export default withRouter(UserManage);

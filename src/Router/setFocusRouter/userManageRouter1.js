import React, { useReducer } from "react";
import { withRouter } from "react-router-dom";

import { Layout } from "antd";

const { Content } = Layout;

function UserManage1() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case "add":
        return state + 1;
      case "sub":
        return state - 1;
      default:
        return state;
    }
  }, 1);
  return (
    <Content
      style={{
        background: "#fff",
        padding: 24,
        margin: 0,
        minHeight: 600
      }}
    >
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch("add");
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          dispatch("sub");
        }}
      >
        2
      </button>
    </Content>
  );
}

export default withRouter(UserManage1);

import React, { Component } from "react";
import { Layout, PageHeader } from "antd";

const { Content, Header } = Layout;

import "./App.css";

import Slides from "./components/Slides";
class App extends Component {
  render() {
    return (
      <Layout className="layout">
        <Header>
          <h1 style={{ color: "white" }}>React Test</h1>
        </Header>
        <Content style={{ padding: "50px" }}>
          <Slides />
        </Content>
      </Layout>
    );
  }
}

export default App;

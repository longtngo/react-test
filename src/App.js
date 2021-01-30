import React, { Component } from "react";
import { Layout } from "antd";
import "./App.css";
import Slides from "./components/Slides";

const { Content, Header } = Layout;

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

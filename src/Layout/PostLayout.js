import React from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";

const { Header, Content, Footer } = Layout;
import "./post.css";

const PostLayout = ({ content }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
        }}
      >
        <div className="demo-logo">
          <img
            className="blog-home-logo"
            src="https://freepngimg.com/thumb/blogging/2-2-blogging-png.png"
          ></img>
        </div>
      </Header>
      <Content className="site-layout" style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{ padding: 24, minHeight: 380, background: colorBgContainer }}
        >
          {content}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>KPR blogs</Footer>
    </Layout>
  );
};

export default PostLayout;

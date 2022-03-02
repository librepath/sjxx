import * as React from "react";
import Layout from "../components/Layout";
import SpeedDial from "../components/SpeedDial";
import Slugs from "../components/Slugs";

const IndexPage = () => {
  return (
    <Layout title="目录">
      <h1>三级修学课程目录</h1>
      <Slugs />
      <SpeedDial
        top
        anchors={[
          "同喜班",
          "同修班一阶段《道次第略论》",
          "同修班二阶段《百法明门论》",
          "同修班三阶段《入菩萨行论》",
        ]}
        noBread
      />
    </Layout>
  );
};
export default IndexPage;

import * as React from "react";
import SpeedDial from "../components/SpeedDial";
import Slugs from "../components/Menu";
import Layout from "../layout";
import { useStore } from "../store";

const IndexPage = () => {
  const [{ dark }, setStore] = useStore()
  return (
    <Layout >
      <button onClick={() => setStore({ dark: !dark })}>change mode</button>
      <title>总目录</title>
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
      />
    </Layout>
  );
};
export default IndexPage;

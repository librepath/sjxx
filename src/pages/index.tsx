import { PageProps } from "gatsby";
import React, { useEffect } from "react";
import Menu from "../components/Menu";
import { useStore } from "../store";

const IndexPage = (props:PageProps) => {

  const [, set] = useStore();
  useEffect(() => {
    set({
      path: '/',
      anchors: [
        "读书会",
        "同喜班",
        "同修班一阶段《道次第略论》",
        "同修班二阶段《百法明门论》",
        "同修班三阶段《入菩萨行论》",
      ]
    })
  }, [])
  return (
    <div >
      <title>非洲静心读书·目录</title>
      <h1>非洲静心读书</h1>
      <Menu />
    </div>
  );
};
export default IndexPage;

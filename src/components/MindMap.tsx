import React, { useEffect } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
const transformer = new Transformer();
const MindMap = ({ children = "" }) => {
  const { root } = transformer.transform(children);
  useEffect(() => {
    Markmap.create("#markmap", null, root);

    return () => {};
  }, [children]);

  return (
    <div id="map-wrap">
      <svg
        id="markmap"
        style={{
          // backgroundColor: "whitesmoke",
          position: "fixed",
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default MindMap;

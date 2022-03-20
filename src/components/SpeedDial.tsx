import React from "react";
import { SpeedDial, SpeedDialIcon, SpeedDialAction, Chip, Box, } from "@mui/material";
import { navigate } from "gatsby";
import { Link, MenuBook, MoreHoriz, MoreVert, Publish } from "@mui/icons-material";

const SpeedDialCom = ({ anchors = [], top = false, index = false, fix = false, children = null as any }) => {
  return (
    <Box sx={fix ? { position: "fixed", bottom: 0, pb: 3.5 } : { py: 3.5 }}>
      {children}
      <SpeedDial
        ariaLabel="root-menu"
        // direction="left"
        sx={{ position: "fixed", right: 16, bottom: 16 }}
        icon={<SpeedDialIcon icon={<MoreHoriz />} openIcon={<MoreVert />} />}
      >
        {index && (
          <SpeedDialAction
            icon={<MenuBook color="action" />}
            tooltipTitle="课程目录"
            // tooltipOpen
            sx={{ bgcolor: "gray" }}
            onClick={() => navigate("/")}
          />
        )}

        {anchors.reverse().map((anchor, id) => (
          <SpeedDialAction
            key={id}
            icon={<Link />}
            // tooltipTitle={anchor}
            tooltipOpen
            // TooltipClasses={{ tooltip: tip }}
            // tooltipPlacement="left-end"
            tooltipTitle={
              <Chip
                sx={{
                  position: "absolute",
                  height: 48,
                  pr: 5,
                  mt: -3,
                  right: -60,

                  borderRadius: 22,
                  bgcolor: "GrayText",
                }}
                label={anchor}
              />
            }
            sx={{ tooltip: { background: "none" } }}
            onClick={() => navigate("#" + anchor, { replace: true })}
          />
        ))}

        {top && (
          <SpeedDialAction
            icon={<Publish color="action" />}
            tooltipTitle="回到顶部"
            // tooltipOpen
            sx={{ bgcolor: "gray" }}
            onClick={() => window["scrollTo"]({ top: 0, behavior: "smooth" })}
          />
        )}
      </SpeedDial>
    </Box>
  );
};

export default SpeedDialCom;

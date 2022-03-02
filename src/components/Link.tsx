import React from "react";
import { Link as LinkGatsby } from "gatsby";
import { Link as LinkMui, LinkProps } from "@mui/material";

export type Props = LinkProps<typeof LinkGatsby>;

const Link = (props: Props) => <LinkMui component={LinkGatsby} {...props} />;
export default Link;


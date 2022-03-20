import { GitHub, MenuBook } from '@mui/icons-material';
import { Breadcrumbs, Button, IconButton } from '@mui/material';
import { navigate } from 'gatsby';
import React from 'react'
import { GITHUB_PERFIX, LEVELS, TYPES } from '../constants/SiteMeta';


const Bread = ({ pathname = "", filePath = '' }) => {
  const btn = (children: any, paths?: string[]) =>
    paths ? (
      <Button
        sx={{ minWidth: 0 }}
        onClick={() => navigate(paths.length ? `/${paths.join("/")}/` : "/")}
      >
        {children}
      </Button>
    ) : (
      <Button disabled sx={{ minWidth: 0 }}>
        {children}
      </Button>
    );

  let arr = pathname.split("/");
  let type = arr.pop();
  let [, lv, un, le] = arr;
  // console.log(lv);

  return (
    <Breadcrumbs>
      {btn(<MenuBook fontSize="small" />, [])}
      {lv && btn(LEVELS[lv], un ? [lv] : undefined)}
      {un && btn(`${+un || un}单元`, le ? [lv, un] : undefined)}
      {le && btn(`${+le || le}课`, type !== "" ? [lv, un, le] : undefined)}
      {btn(TYPES[type] || type)}
      <IconButton component='a' href={`${GITHUB_PERFIX}${filePath}`} target='_blank'>
        <GitHub fontSize="small" color="secondary" />
      </IconButton>
    </Breadcrumbs>
  );
};

export default Bread

function btn(arg0: any): React.ReactNode {
  throw new Error('Function not implemented.');
}

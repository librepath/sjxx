import { MenuBook } from '@mui/icons-material';
import { Breadcrumbs, Button } from '@mui/material';
// import { navigate } from 'gatsby';
import React from 'react'
import { LEVELS, TYPES } from '../constants/SiteMeta';


const Bread = ({ pathname = "", onClick = (pick: string) => { } }) => {
  const btn = (children: any, paths?: string[]) =>
    paths ? (
      <Button
        sx={{ minWidth: 0 }}
        onClick={() => onClick(paths.length ? `/${paths.join("/")}/` : "/")}
      >
        {children}
      </Button>
    ) : (
      <Button disabled sx={{ minWidth: 0 }}>
        {children}
      </Button>
    );

  let arr = pathname.split("/").filter(v => !!v);
  let [lv, un, le, type] = arr;
  // console.log(lv);

  return (
    <Breadcrumbs>
      {btn(<MenuBook fontSize="small" />, [])}
      {lv && btn(LEVELS[lv], un ? [lv] : undefined)}
      {un && btn(`${+un || un}单元`, le ? [lv, un] : undefined)}
      {le && btn(`${+le || le}课`, type !== "" ? [lv, un, le] : undefined)}
      {type && btn(TYPES[type] || type)}
    </Breadcrumbs>
  );
};

export default Bread

function btn(arg0: any): React.ReactNode {
  throw new Error('Function not implemented.');
}

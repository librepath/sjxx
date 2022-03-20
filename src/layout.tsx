import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const path = window.location.pathname;
  const deep = path.split('/').filter(v => v);
  console.log(path, deep);

  return (
    <div>{children}</div>
  )
}

export default Layout
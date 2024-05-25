// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default async function({children}:Readonly<{children: React.ReactNode;}>){

  return (
    <>
   <div> this is (auth) page</div>
    {children}
    </>
  )
}
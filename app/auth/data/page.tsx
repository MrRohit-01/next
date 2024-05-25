
// import/no-anonymous-default-export
// eslint-disable-next-line import/no-anonymous-default-export, react/display-name
export default async function(){
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return (
    <>
    this is (auth) data
    </>
  )
}

export default async function one(){
  await new Promise((resolve) => setTimeout(resolve, 6000));
  return (
 
    <div>this is data one</div>
  )
}
import Card from "../components/card.js";
import {useRouter} from 'next/router';
import Ss from "../components/socialShare"
import InpFrm from "../components/form"

export default function Home() {
  const {query} = useRouter();
  const myurls='./images/christmas/christmas1.webp';

  if(query.length > 0) 
  {

    if(query.greeting)
    {
      return (
        <>
          <Card event={query.event} image={query.bgImg} name={query.name} greeting={query.greeting}  />
        </>
          )
    }
    else
    {
      return (
        <>
          <Card event={query.event} image={query.bgImg} name={query.name}  />
        </>
          )
    }

  }
  else
  {
    return (
        <>
          {/* <InpFrm /> */}
        <Card event='Event' image={myurls} name='Name' color='red'   />

        </>
        )
  }
    // return (
    //   <>
        {/* <Card event='Event' image={myurls} name='Name' color='red' greeting="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thing software like Aldus PageMaker including versions of Lorem Ipsum."  /> */}
        {/* <Ss mylink="localhost:3000/name=haneef&event=christmas" /> */}
    {/*     <Ss mylink="localhost:3000/name=haneef&event=christmasW&sddsajnodsoduaibdadbksa" /> */}
    //   </>
    //     )

}
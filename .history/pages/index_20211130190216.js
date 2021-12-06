import Card from "../components/card.js";
import {useRouter} from 'next/router';
import Ss from "../components/socialShare"
import InpFrm from "../components/Edit"

export default function Home() {
  const {query} = useRouter();
  const myurls='https://gratefulprayerthankfulheart.com/wp-content/uploads/2014/12/aquawhitechristmastreegreeting.jpg';

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
        {/* <Card event='Event' image={myurls} name='Name' color='red' greeting="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been thing software like Aldus PageMaker including versions of Lorem Ipsum."  /> */}
        {/* <Ss mylink="localhost:3000/name=haneef&event=christmas" /> */}
      </>
        )
  }
    // return (
    //   <>
    //     <Ss mylink="localhost:3000/name=haneef&event=christmasW&sddsajnodsoduaibdadbksa" />
    //   </>
    //     )

}
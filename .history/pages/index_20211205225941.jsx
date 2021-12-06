import Card from "../components/card.js";
import {useRouter} from 'next/router';
import InpFrm from "../components/inpForm"

export default function Home() {
  const {query} = useRouter();

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
        <InpFrm/>
        </>
        )
  }

}
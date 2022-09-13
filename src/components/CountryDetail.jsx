
import { useParams } from "react-router-dom"

const CountryDetail = () => {
  const {id} = useParams();

  return <div>{id}</div>;
}

export default CountryDetail


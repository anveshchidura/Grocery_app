
import { StoreCard } from './storeCard';
import { useState, useEffect } from 'react';
import Shimmer from './Shimmer'; /* Shimmer component to display before page load */
import { GET_storeS_LIST } from '../config'; /* url to get store data */
import { Link } from 'react-router-dom';
import { filterData } from '../utils/helper';
import useOnline from "../utils/useOnline";
import useLocalStorage from '../utils/useLocalStorage';
import { storeList3 } from '../config'; /* Mock Data for testing in mobile*/
import { UserAuth } from "../utils/context/AuthContext";
import SignIn from "./SignIn";
import UserProfile from './UserProfile';

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allstores, setAllstores] = useState([]);
  const [filteredstores, setFilteredstores] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const isOnline = useOnline();  /* Custom Hook */
  const [isFavourite, setIsFavourite] = useState(false);
  const [favstores, setFavstores] = useLocalStorage("fav"); /* Custom Hook */
  //const user = useSelector((store) => store.user.item);  
  
  const { user } = UserAuth(); 
  useEffect(()=>{
    getstores();
  },[]);

  const getstores = async () => {
    try {
      /* Live Data */
      //const response = await fetch(GET_storeS_LIST);
     // const res_data = await response.json();
      
  
      /* Mock Data */ 
      const res_data = storeList3;

      setAllstores(res_data?.stores);
      setFilteredstores(res_data?.stores);
    } catch (error) {
      console.log(error);
    }
    
  };

  const searchData = (searchText, stores ) => ()=> {  
    if(searchText !== '') {
      const data = filterData(searchText,stores);
      setFilteredstores(data); 
      setErrorMsg('');
    if (data.length === 0) {
      setErrorMsg('No matches found ');
    }
  } else {
      if(errorMsg) setErrorMsg('');
      setAllstores(allstores);
    }
  }

  if(!isOnline) {
    return (<div className="container">
      <h1 className="font-bold text-red text-3xl text-center">Offline, please check your internet connection </h1>
      </div>)
  } 

  const addFavourite = (props) => { 
     // If store is not marked fav, then add to local storage 
    if (!favstores.find(store => store.data.id === props.data.id)) {
      setFavstores([...favstores, props]); 
  } else { //If store is already in local storage, then remove from it.
      const modifiedFavstores = favstores.filter((store) => store.data.id !== props.data.id);
      setFavstores(modifiedFavstores);
  }
  }

  const showFavouritestores = () => {      
    if(isFavourite) {
      if(errorMsg) setErrorMsg('');
      setFilteredstores(allstores);        
    } else {
      if(favstores.length === 0) { 
        setErrorMsg('No favourites');
        setFilteredstores([]); 
      } else {
        setFilteredstores(favstores); 
      }
    }
    setIsFavourite(!isFavourite); 
  }

// Don't render component (Early return)
if (!allstores) {
  return null;
}
return (
  //user ?
    <div className= "container">
      <div className="flex justify-start mob:flex-col">
        <div className="flex justify-evenly min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto"> 
          <input type="text" placeholder=" Search for store" value={searchText}
            className="outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray" key="input-text" onChange = {(e) => setSearchText(e.target.value)}/>
          <button className="btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs" 
            onClick={searchData(searchText, allstores)}> Search </button>
        </div>
        <div className="flex justify-end h-[100px] items-center m-auto mob:h-[50px]">
            <button className={isFavourite? "btn btn--primary px-[5px] mob:basis-[50px] mob:text-xs": "btn btn--secondary px-[5px] mob:basis-[50px] mob:text-xs" } 
            onClick={()=> {showFavouritestores()}}>Favourites </button>
        </div>
      </div>
    { errorMsg && 
      <div className="h-14 m-auto text-center" id="error">
        <span className="error-text w-14 h-8 " id="error-msg">{errorMsg}</span>
      </div> 
    }
    
    { allstores?.length === 0 ? (<Shimmer />) : 
    <div className="flex flex-wrap gap-5 justify-center">
      {filteredstores.map((store) => {
        return ( 
        <Link
          className="basis-[250px] p-2.5 mb-2.5 mob:basis-[150px]" to={"/store/" + store.info.id} key={store.info.id}>
          <StoreCard props={store.info} key={store.info.id} setstores={addFavourite} />
        </Link>
        )
      })}
    </div>
    }
    
  </div> //: <UserProfile /> 
  );

};

export default Body;
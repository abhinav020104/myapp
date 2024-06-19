// src/Search.js
import React, { useState } from 'react';
import axios from 'axios';
const Search = () => {
    const [SearchData , setSearchData] = useState("");
    const [searchBarValue , setSearchBarValue] = useState("");
    const [searchResponse , setsearchResponse] = useState({});
    const [searchVisible , setSearchVisible] = useState(false);
    const changeHandler = (e)=>{
        setSearchData({
            ...SearchData,
            [e.target.name]:e.target.value
        })
        setSearchBarValue(e.target.value);
    }
    const searcHandler = async()=>{
        try{
            console.log(SearchData);
            const response = await axios({
                method:"post",
                url:"https://myapp-zae8.onrender.com/search",
                data:SearchData,
            })
            console.log(response.data.data);
            if(response.data.data !== null){
                setsearchResponse(response);
                setSearchBarValue("");
                setSearchVisible(true);
            }else{
                setSearchBarValue("");
            }
        }catch(error){
            console.log(error);
            console.log("Search error front end !");
        }
    }
  return (
    <div className='w-screen bg-slate-500 h-screen justify-center flex flex-col'>
        <div className='flex w-full justify-center gap-8'>
        <input type="text" name="MobileNumber" placeholder="Search A Number" onChange={changeHandler}  className="p-2 rounded-xl text-center w-[20%] outline-none select-none justify-center flex" value={searchBarValue}/>
        <button className="font-bold bg-slate-700 rounded-xl text-slate-300 p-2 flex" onClick={searcHandler}> Search </button>
        </div>
        {
                            searchVisible === true &&(
                                <div className="w-full flex  mt-8 h-[50px] border-[1px] border-black items-center justify-around rounded-md">
                                    <div className=" flex gap-3 text-white font-bold font-xl">
                                        <div>Frist Name : </div>
                                        <div>
                                            {
                                                `${searchResponse.data.data.FirstName}`
                                            }
                                        </div>
                                    </div>
                                    <div className=" flex gap-3 text-white font-bold font-xl">
                                        <div>Last Name : </div>
                                        <div>
                                            {
                                                `${searchResponse.data.data.LastName}`
                                            }
                                        </div>
                                    </div>
                                    <div className=" flex gap-3 text-white font-bold font-xl">
                                        <div>Mobile Number : </div>
                                        <div>
                                            {
                                                `${searchResponse.data.data.MobileNumber}`
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        }
    </div>
    
  );
};

export default Search;

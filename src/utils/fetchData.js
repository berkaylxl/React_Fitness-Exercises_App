export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key':'759f27267cmsh3a5bf0e8c3f91d4p1548e3jsn80dd369755cd',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData =async (url ,options) =>{
    const response =await fetch(url,options);
    const data =await response.json();
    return data;
}

//todo
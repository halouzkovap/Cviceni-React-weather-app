export const filterForrecast=(data)=>{
    return data.filter((_, index) => index % 8 === 0);
  }

  export default filterForrecast;


  
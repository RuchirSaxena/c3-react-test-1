

/*
removing dulicate from array of objects ,
it will compare all the properties in object ,
since no spcific propety is mentioned  to check duplicacy 
*/
export default (data)=>{
    return Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);
}
       
    



let defaultCity = '六盘水'
try{
    if(localStorage.city){
        defaultCity = localStorage.city
    }
}catch(e){}

export default{
    city: defaultCity
}
function addDataFromLocalStorage()  {
    console.log(codeList);
    let storedStringProduceList = localStorage.getItem("producecodelist");
    //let codeList = localStorage.getItem("producecodelist");
    let storedParsedProduceList = JSON.parse(storedStringProduceList);
    codeList.push(storedParsedProduceList);
    //let concatenatedArray = [ ...storedParsedProduceList, ...codeList];
    //fullCodeList = codeList.concat(storedParsedProduceList);
    //codeList.push(concatenatedArray);
    console.log(storedParsedProduceList);
    //console.log(concatenatedArray);
    console.log("Data Added from Local Storage");
    
    console.log(codeList);
}

//function concatenateCodeArrays  {

//}
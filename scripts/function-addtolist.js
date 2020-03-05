function addToList()  {
    codeList.push(document.getElementById('result').innerHTML);
    console.log(codeList);

    var codeListStringify = JSON.stringify(codeList);
    localStorage.setItem("producecodelist", codeListStringify);
    console.log('String: ' + codeListStringify);
}
function removePluList()  {
    var listWindow = document.getElementById("plu-list");
    listWindow.parentNode.removeChild(listWindow); 
    codeList = [];
    console.log('PLU Codes have been deleted');
    localStorage.removeItem("producecodelist");
    document.getElementById('button-showlist').addEventListener("click", showPluList);
}
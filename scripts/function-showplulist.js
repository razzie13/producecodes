document.getElementById('button-showlist').addEventListener("click", showPluList);
function showPluList()  {

    // function to concatenate 'codeList' array and localstorage 'producecodelist' (let storedParsedProduceList in addDataFromLocalStorage)

    let mainWindow = document.getElementById('main'); // whole page
    let listWindow = document.createElement('div');  // list window modal
    let listWindowParagraph = document.createElement('p'); // paragraph inside modal
    let listWindowClose = document.createElement('button');
    //let copyTextButton = document.createElement('button');
    let br = document.createElement('br');

    listWindow.id = 'plu-list';  
    listWindowParagraph.id = 'listofcodes';
    listWindowParagraph.innerHTML = codeList.join('<br>');
    
    //copyTextButton.className = 'copy-text-button';
    //copyTextButton.id ='button-copy-text';
    //copyTextButton.textContent = 'copy';
    //copyTextButton.setAttribute('onclick', 'copyListText()');

    listWindowClose.className = 'plu-list-close';
    listWindowClose.id = 'button-window-close';
    listWindowClose.innerText = 'close X';
    listWindowClose.setAttribute('onClick', 'removePluList()');
    
    mainWindow.appendChild(listWindow);
    listWindow.appendChild(listWindowClose);
    //listWindow.appendChild(copyTextButton);
    listWindow.appendChild(br);
    listWindow.appendChild(listWindowParagraph);
    
    document.getElementById('button-showlist').removeEventListener("click", showPluList);
}
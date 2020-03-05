function showListItemsInModal()  {
    const listWindow = document.getElementById('plu-list');
for (var i = 0; i < codeList.length; i++)  {
    const paragraph = document.createElement('p');
    paragraph.id = 'paragraph' + i;
    paragraph.textContent = codeList[i];
    paragraph.className = 'paragraph ' +  'paragraph' + i;
    listWindow.appendChild(paragraph);
        }
    }
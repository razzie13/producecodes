function testName()  {
    var searchInput = document.getElementById('produce-input').value;
    var correctedSearchInput = searchInput.replace(/berry/g, "berries");
    var refinedSearchInput = correctedSearchInput.toLowerCase();
    var codeFound = produce.find(e => e.name == refinedSearchInput);
    document.getElementById('result').innerHTML = codeFound.code;
    document.getElementById('caution').classList.add('hidden');
    showAddToListButton();
} 
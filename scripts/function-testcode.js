function testCode()  {
    var searchInput = document.getElementById('produce-input').value;
    var nameFound = produce.find(e => e.code == searchInput);    
    document.getElementById('result').innerHTML = nameFound.name;
    document.getElementById('caution').classList.add('hidden');
}
const change = document.querySelector('div')

window.addEventListener('keydown',(event)=>{
    change.innerHTML=`
    <table style="width:100%">
        
    <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
    </tr>
    <tr>
    <td>${event.key ===' ' ? 'space' : event.key}</td>
    <td>${event.keyCode}</td>
    <td>${event.code}</td>
    </tr>
    </table>
    `
})
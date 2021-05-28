let inpNewTask = $('#inpNewTask')
let btnAdd = $('#btnAdd')
let btnSort = $('#btnSort')
let btnCleanup = $('#btnCleanup')
let btnReset = $('#btnReset')
let ulTasks = $('#ulTasks')

function addItemToList()
{
    let listItem = $('<li>', 
    {
        'class' : 'list-group-item',
         text : inpNewTask.val()
    }) 
    listItem.click(() => 
    {
        $(listItem).toggleClass('done')
    })
    ulTasks.append(listItem);
    inpNewTask.val('')
    toggleInputBtn()

 
}

inpNewTask.keypress((e) =>{if(e.which == 13 && inpNewTask.val()!='') addItemToList();})

function clearDone()
{
    $('#ulTasks .done').remove()
    toggleInputBtn()

}
function sortTasks()
{
    $('#ulTasks .done').appendTo(ulTasks)
    toggleInputBtn()

}

function toggleInputBtn()
{
        btnReset.prop('disabled',inpNewTask.val()=='')
        btnAdd.prop('disabled',inpNewTask.val()=='')
        btnCleanup.prop('disabled',  $('#ulTasks .done').children().length >0)
        btnSort.prop('disabled', ulTasks.children().length <1)
}

inpNewTask.on('input',toggleInputBtn)

btnAdd.click(addItemToList)

btnReset.click(() => 
{
    inpNewTask.val('')
    toggleInputBtn()
})

btnSort.click(sortTasks)

btnCleanup.click(clearDone)

let selectRow=null;
function onformSubmit(e){
event.preventDefault()
let formdata=readform();
if(selectRow===null){
    insertNewRecord(formdata)

} else{

}
}
//retrieve data
function readform(){
    let formdata={};
    formdata["productcode"] = document.getElementById("productcode").value;
    formdata["product"] = document.getElementById("product").value;
    formdata["qty"] = document.getElementById("qty").value;
    formdata["perprice"] = document.getElementById("perprice").value;
    return formdata;
}
//insert data
function insertNewRecord (data){
let table=document.getElementById("storelist").getElementsByTagName('thead')[0]
let newRow=table.insertRow(table.lenght);
let cell1=newRow.insertCell(0);
 cell1.innerHTML=data.productcode;
 let cell2=newRow.insertCell(1);
 cell2.innerHTML=data.product;
 let cell3=newRow.insertCell(2);
 cell3.innerHTML=data.qty;
 let cell4=newRow.insertCell(3);
 cell4.innerHTML=data.perprice;
 let cell5=newRow.insertCell(4);
 cell5.innerHTML= '<button onclick= 'onEdit(this)'>Edit</button> <button>Delete</button>'
 
}
// edit
function onEdit(td){
selectRow= td.parentgetElement.parentgetElement;
document.getElementById('productcode').value=selectRow.cells[0].innerHTML;
document.getElementById('product').value=selectRow.cells[1].innerHTML;
document.getElementById('qty').value=selectRow.cells[2].innerHTML;
document.getElementById('perprice').value=selectRow.cells[3].innerHTML;
}
 function update(formdata){
selectRow.cells[0].innerHTML=formdata.productcode;
selectRow.cells[1].innerHTML=formdata.product;
selectRow.cells[2].innerHTML=formdata.qty;
selectRow.cells[3].innerHTML=formdata.perprice;
 }
 //delete
 function onDelete(){
    if(confirm('do you want to delete this record')){
        row=td.parentgetElement;
        document.getElementById('productcode').value='';
        document.getElementById('product').value='';
        document.getElementById('qty').value='';
        document.getElementById('perprice').value='';
    }
 }
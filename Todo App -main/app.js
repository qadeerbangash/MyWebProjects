var list =document.getElementById("list")


//create li tag with text node
function addTodo(){
    
 

    
    var todoitem=document.getElementById("todo-item")
    
     

     
  
    var li=document.createElement('li')

    var litext=document.createTextNode(todoitem.value+" ")
    // litext.style.marginLeft="30px"
    li.appendChild(litext)
    li.style.border="1px solid #0000ff"
    // li.firstChild.nodeValue.style.Color="#000000"
    li.style.borderColor=" 10px #f5f5f5"
    // li.style.backgroundColor='#f5f5f5'
    li.style.marginLeft="50px"
    li.style.paddingLeft="20px"
    li.style.marginBottom="20px"

    


    list.appendChild(li)

    //create edit
        
    var editbtn=document.createElement("button")
    var editicon=document.createElement('i')
    editicon.setAttribute("class","fa fa-edit")
editbtn.appendChild(editicon)
    var edittex=document.createTextNode("Edit")
    editbtn.setAttribute("class","text-primary")
    editbtn.style.margin="5px";
    editbtn.style.marginLeft="80px"
   
    editbtn.appendChild(edittex)
    li.appendChild(editbtn)
    editbtn.setAttribute("onclick","editItem(this)")

    //createdelbtn
    var delbtn=document.createElement("button") 
    delbtn.setAttribute("class","text-danger")
    var delticon=document.createElement('i')
    delticon.setAttribute("class","fa fa-trash")
    delbtn.appendChild(delticon)
    //aik sa ziada attribute set krsakta ha
    
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.style.marginLeft="80px"
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga
    //yani yhi wala button pora this ka through get krsakta ha
    var delText=document.createTextNode("Delte")
    delbtn.appendChild(delText)
    li.appendChild(delbtn)



        list.appendChild(li)
    
    
    
    
    todoitem.value=""
     //for making empty input field
    
}
function deleteItem(e){
    //e means pora delte button
    //mna parentNode joka li thi isko get kya 
    //.remove() (del krda ga is li ko)
    e.parentNode.remove()
    //this ka through ma pora button get kroga
    //yani pora uthakr deda ga

    
}
function deleteAll(){
    //list means ul -->humna ul ki value empty krdi
    list.innerHTML=""
}
function editItem(e){
    var editValue=prompt("Enter edit value",e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue=editValue

    }
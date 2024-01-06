let title = document.getElementById("titleEl")
let content = document.getElementById("contentEl")
  let titlecart = []
 let contentcart = []
 let saved = document.getElementById("savednote")
 let sidebar = document.querySelector(".sidebar")
let addbtn = document.getElementById("addbtn")
let closing = document.querySelector(".close")
 
inputslocalstorage = JSON.parse(localStorage.getItem("contentcart"))
if(inputslocalstorage) {
   contentcart = inputslocalstorage
   render()
}
  let titlelocal = JSON.parse(localStorage.getItem("titlecart"))
    if(titlelocal) {
   titlecart = titlelocal
   render()
    }
        closing.addEventListener("click", function(){
         sidebar.style.display = "none"
        })
          function show() {
            sidebar.style.display = "block"
          }

addbtn.addEventListener("click",function(){
    if(content.value == "" && title.value == ""  ) {
        alert("Please fill both boxes.")
        
    }
       else if(content.value == "" || title.value == "") {
         alert("Please fill both boxes.")
       }
         else {
                
             addbtn.innerHTML = "Save Note"
            titlecart.push(title.value)
             contentcart.push(content.value)
            alert("Note Saved.")
             render()
             localStorage.setItem("titlecart", JSON.stringify(titlecart))
             localStorage.setItem("contentcart", JSON.stringify(contentcart))
            title.value = ""
             content.value = ""
             sidebar.style.display = "block"
            

         }
        console.log(titlecart)     
})
  function render() {
 
     let list = ""
     contentcart.forEach((item,key)=> {
        list += `<div class="note" >
        
        <li class="valuetitle" > ${titlecart[key]} </li> 
        <div class="notebtn"> <button onclick="edit(${key})"> Edit Note </button>  <button onclick="cancel(${key})"> Delete Note </button> </div>
        </div>`      
    })
     saved.innerHTML = list
  }

  function cancel(a) {
    titlecart.splice(a,1)
    contentcart.splice(a,1)
    render()
    localStorage.setItem("contentcart", JSON.stringify(contentcart))
    localStorage.setItem("titlecart", JSON.stringify(titlecart))  
}
function edit(key) {
   sidebar.style.display = "none"
    
    addbtn.innerHTML = "Update Note."
    title.value = titlecart[key]
    content.value = contentcart[key]
     contentcart.splice(key,1)
     titlecart.splice(key,1)
    render()
    localStorage.setItem("contentcart", JSON.stringify(contentcart))
    localStorage.setItem("titlecart", JSON.stringify(titlecart))
 }
  
  
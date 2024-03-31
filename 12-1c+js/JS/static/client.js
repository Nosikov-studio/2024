///////////POST//////////////////////////////
let orderButton=document.getElementById("orderButton")
orderButton.onclick=()=>{

    let firstName=document.getElementById("firstName")
    let lastName=document.getElementById("lastName")
    
    user={
        "firstName":firstName.value,
        "lastName":lastName.value
    }
    
    url="http://127.0.0.1:8080/api/postOrder"
    fetch(url, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), 
    })
    .then((resp) => resp.text())
    .then((respText) => console.log(respText));
    
}


////////////////GET////////////////////////////
fetch("http://127.0.0.1:8080/api/getProducts")
.then((resp) => resp.json())
.then((respJSON) => {
    let cart=document.getElementById("cart")
    let htmlString=''
    respJSON.forEach(product => {
        let id = product.id
        let prodName = product.name
        let price = product.price

htmlString += '<li class="list-group-item d-flex justify-content-between lh-sm">'
htmlString += '<div>'
htmlString += '<h6 class="my-0">'+ prodName +'</h6>'
htmlString += '<small class="text-muted">'+id +'</small>'
htmlString += '</div>'
htmlString += '<span class="text-muted">'+ price +' руб. </span>'
htmlString += '</li>'

    });
    cart.innerHTML=htmlString
})
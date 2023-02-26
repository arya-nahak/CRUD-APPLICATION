alert("'Welcome to Crud Application'");

let rerender = 0;

function createprod() {
  let mydata = document.getElementById("data");
  let productlist = document.getElementById("productlist");
  let createinput = mydata.value;
  // console.log(createinput)

  let html =
    ' <div class="row" id="product' +rerender +'">' +
    '<div class="col-md-6 col-sm-12 col-xs-12">' +
    '    <input type="text" class="form-control" value="' +
    createinput +
    '" disabled />' +
    "</div>" +
    '<div class="col-md-2 col-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-primary" id="edit' +
    rerender +
    '" onclick="myedit(this.id)" >EDIT</button>' +
    "</div>" +
    '<div class="col-md-2 col-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-success" id="update' +
    rerender +
    '" onclick="myupdate(this.id)">UPDATE</button>' +
    "</div>" +
    '<div class="col-md-2 col-sm-4 col-xs-4">' +
    '<button type="button" class="btn btn-danger" id="delete' +
    rerender +
    '" onclick="mydelete(this.id)">DELETE</button>' +
    "</div>" +
    "</div>";

  rerender++;
  productlist.insertAdjacentHTML("beforeend", html);
}

function myedit(myeditid) {
  let myeditparent = document.getElementById(myeditid).parentNode.parentNode;
  let myeditchild = myeditparent.firstChild.lastChild;

  myeditchild.removeAttribute("disabled");
  // console.log(myeditchild)
}

function myupdate(myupdateid) {
  let myeditparent = document.getElementById(myupdateid).parentNode.parentNode;
  let myeditchild = myeditparent.firstChild.lastChild;

  myeditchild.setAttribute("disabled", "disabled");
  // console.log(myupdateid);
}

function mydelete(mydeleteid) {
  let myeditparent = document.getElementById(mydeleteid).parentNode.parentNode;

  myeditparent.remove();
  // console.log(mydeleteid);
}


//Listen for form submit
document.getElementById('formsubmit').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    var firstname = getValue("fname");
    var lastname = getValue("lname");
    var address = getValue("address");
    var pincode = getValue("pincode");
    var state = getValue("state");
    var country = getValue("country");
    var gender = document.querySelector('input[name="gender"]:checked').value; 

    var checkb = document.querySelectorAll('.foodchoice');
    var foodchoice = []
    for(let i in checkb){
        if(checkb[i].checked==true){
            foodchoice.push(checkb[i].value);
        }
    }

    if(foodchoice.length < 2){

        var div = document.createElement("div");
        div.setAttribute("class","centeralign");
        var para = document.createElement("p");
        para.innerHTML = "<h4>Food choice must be more than one</h4>";
        div.append(para);
        document.body.append(div);
        setTimeout(()=>{
            para.style="display:none";
        },1000*2)
    }
    else{

        createTable(firstname,lastname,address,pincode,state,country,gender,foodchoice);
        document.getElementById('formsubmit').reset();
    }
}
function getValue(id){
    return document.getElementById(id).value;
}
function createTable(firstname,lastname,address,pincode,state,country,gender,foodchoice){
    var container2 = document.createElement("div");
    container2.setAttribute("class","container tableborder");
    var row1 = document.createElement("div");
    var row2 = document.createElement("div");
    var row3 = document.createElement("div");
    var row4 = document.createElement("div");
    var row5 = document.createElement("div");
    var row6 = document.createElement("div");
    var row7 = document.createElement("div");
    var row8 = document.createElement("div");
    row1.setAttribute("class","row rowborder");
    row2.setAttribute("class","row rowborder");
    row3.setAttribute("class","row rowborder");
    row4.setAttribute("class","row rowborder");
    row5.setAttribute("class","row rowborder");
    row6.setAttribute("class","row rowborder");
    row7.setAttribute("class","row rowborder");
    row8.setAttribute("class","row");
    var col11 = document.createElement("div");
    col11.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col12 = document.createElement("div");
    col12.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col21 = document.createElement("div");
    col21.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col22 = document.createElement("div");
    col22.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col31 = document.createElement("div");
    col31.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col32 = document.createElement("div");
    col32.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col41 = document.createElement("div");
    col41.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col42 = document.createElement("div");
    col42.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col51 = document.createElement("div");
    col51.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col52 = document.createElement("div");
    col52.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col61 = document.createElement("div");
    col61.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col62 = document.createElement("div");
    col62.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col71 = document.createElement("div");
    col71.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col72 = document.createElement("div");
    col72.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    var col81 = document.createElement("div");
    col81.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6")
    var col82 = document.createElement("div");
    col82.setAttribute("class","col-sm-6 col-md-6 col-lg-6 col-xl-6 colborder");
    row1.append(col11,col12);
    row2.append(col21,col22);
    row3.append(col31,col32);
    row4.append(col41,col42);
    row5.append(col51,col52);
    row6.append(col61,col62);
    row7.append(col71,col72);
    row8.append(col81,col82);

    col11.innerHTML = `<h3>First Name</h3>`;
    col12.innerHTML = `<h3>${firstname}</h3>`;
    col21.innerHTML = `<h3>Last Name</h3>`;
    col22.innerHTML = `<h3>${lastname}</h3>`;
    col31.innerHTML = `<h3>Address</h3>`;
    col32.innerHTML = `<h3>${address}</h3>`;
    col41.innerHTML = `<h3>Pincode</h3>`;
    col42.innerHTML =`<h3>${pincode}</h3>`;
    col51.innerHTML = `<h3>Gender</h3>`;
    col52.innerHTML = `<h3>${gender}</h3>`;
    col61.innerHTML = `<h3>Food</h3>`;
    col62.innerHTML = `<h3>${foodchoice.join(" ")}</h3>`;
    col71.innerHTML = `<h3>State</h3>`;
    col72.innerHTML = `<h3>${state}</h3>`;
    col81.innerHTML = `<h3>Country</h3>`;
    col82.innerHTML = `<h3>${country}</h3>`;
    container2.append(row1,row2,row3,row4,row5,row6,row7,row8);
    document.body.append(container2);
}

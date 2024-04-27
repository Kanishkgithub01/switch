let $kanishk;

switch (new Date().getDay()) {
    case 0:
      $kanishk = "image/img1.jpg";
    
        break;
    case 1:
      $kanishk = "image/img2.jpg";
       
  
        break;
    case 2:
      $kanishk = "image/img3.jpg";
        break;
    case 3:
      $kanishk = "image/img4.jpg";
        break;
    case 4:
      $kanishk = "image/img5.jpg";
        break;
    case 5:
      $kanishk = "image/img6.jpg";
        break;
    case 6:
      $kanishk = "image/img7.jpg";
      
        break;
}

document.getElementById("switch").innerHTML = '<img src="' + $kanishk + '">';


document.getElementById("switch").innerHTML = '<img src="' + $kanishk + '">';

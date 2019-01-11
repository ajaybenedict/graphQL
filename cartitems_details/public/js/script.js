
localStorage.setItem('mobmenuClicked', 'FALSE');

var pageNav = document.getElementById('pgnav');

/*  Setting mobile menu display based on window resize  */
document.getElementsByTagName("BODY")[0].onresize = function(){

    var browserSize = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    
    if(browserSize.width >= 1200){
        document.getElementById('pgnav').style.display = 'block';
        localStorage.setItem('mobmenuClicked', 'FALSE');
    }else{
        
        if(localStorage.getItem('mobmenuClicked') == 'FALSE'){
            document.getElementById('pgnav').style.display = 'none';
        }
        else{
            if(pageNav.style.display == 'none' || pageNav.style.display == '')
                pageNav.style.display = 'none';
        }
    }
}

/*  Toggle of mobile menu   */
function toggleMenu(navId){
    var navObj = document.getElementById(navId);

    navObj.style.display = (navObj.style.display == 'none' || navObj.style.display == '') ? 'block' : 'none';
    
    localStorage.setItem('mobmenuClicked', 'TRUE');
}

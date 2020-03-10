function login() {
	var id = document.getElementById("taikhoan").value;
	var pass = document.getElementById("matkhau").value;
	if(id == "admin" && pass == "admin"){
		window.location.href = 'file:///C:/Users/ADMIN/Desktop/TTN/index.html';
	}
	else{
		alert("Sai tên đăng nhập hoặc mật khẩu, mời thử lại!!");
	}
}

function Changecolor(count) {
	for(var x=0; x<=4; x++){
		document.getElementsByClassName("inner-menu")[x].style.backgroundColor = 'white';
	}
	document.getElementsByClassName("inner-menu")[count].style.backgroundColor = '#ffae00';
}


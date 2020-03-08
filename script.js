function login() {
	var id = document.getElementById("taikhoan").value;
	var pass = document.getElementById("matkhau").value;
	if(id == "admin" && pass == "admin"){
		window.location.href = 'file:///C:/Users/ADMIN/Desktop/TTN/index.html';
		document.getElementById("label").innerHTML = 'Hi';
	}
	else{
		alert("Sai tên đăng nhập hoặc mật khẩu, mời thử lại!!")
	}
}
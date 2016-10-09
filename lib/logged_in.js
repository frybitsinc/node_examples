var login = "<div class=\"col-md-4\"><div class=\"form-group\"><label class=\"control-label\" for=\"inputDefault\">ID</label><input type=\"text\" class=\"form-control\" id=\"inputDefault\"></div><div class=\"form-group\"><label class=\"control-label\" for=\"inputDefault\">PW</label><input type=\"text\" class=\"form-control\" id=\"inputDefault\"></div></div><div class=\"col-md-4 text-center\"><a href=\"login\" class=\"btn btn-default\">로그인</a>"
var logout = "<div class = \"col-md-4 text-right\"><h6>nickname</h6></div><div class = \"col-md-4 text-center\"><a href=\"#\" class=\"btn btn-default\">로그아웃</a>"
exports.getLoginInfo = function(logged_in){
	if(logged_in==true){
		return logout;
	}
	else if(logged_in==false){
		return login;
	}
}

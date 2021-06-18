var x = window.matchMedia("(max-width: 1080px)");


if (x.matches) {
	mob2(x);
}
else{
	mob1(x);
}

function mob1(x){
ok=true;

$("#trah").click(f1);

function f1() {
	if(ok==true){
		$("#fix").css("opacity",0.9);

		ok=false;
		$(".side").css("display","none");
	}
	else{
		ok=true;
		$("#fix").css("opacity",1);
				$(".side").css("display","block");

	}
}


$("#rot").click(f2);

function f2(){
	$(".prop1").css("transform","rotateY(180deg)");
	$(".prop1").css("transition","all ease 0.8s ");
	$("#rot").css("display","none");
		$("#rot2").css("display","block");
		$(".titl").css("display","none");
		$(".titl2").css("display","block");
		$(".txt").css("display","none");
		$(".bck").css("display","block");
		$(".prop1").css("border-top-right-radius","5px");
				$(".prop1").css("border-bottom-right-radius","5px");

		$(".prop1").css("border-top-left-radius","0px");

		$(".prop1").css("border-bottom-left-radius","0px");
		



}

$("#rot2").click(f3);

function f3(){
	$(".prop1").css("transform","rotateY(0deg)");
	$(".prop1").css("transition","all ease 0.8s ");
	$("#rot2").css("display","none");
		$("#rot").css("display","block");
		$(".titl2").css("display","none");
		$(".titl").css("display","block");
$(".txt").css("display","block");
		$(".bck").css("display","none");	
			$(".prop1").css("border-top-right-radius","0px");
				$(".prop1").css("border-bottom-right-radius","0px");

		$(".prop1").css("border-top-left-radius","5px");

		$(".prop1").css("border-bottom-left-radius","5px");	


}

}

function mob2(x) {
	ok=true;

$("#trah").click(f11);

function f11() {
	if(ok==true){
		$("#fix").css("opacity",0.9);

		ok=false;
		
	}
	else{
		ok=true;
		$("#fix").css("opacity",1);
			

	}
}


$("#rot").click(f22);

function f22(){
	$(".prop1").css("transform","rotateY(180deg)");
	$(".prop1").css("transition","all ease 0.8s ");
	$("#rot").css("display","none");
		$("#rot2").css("display","block");
		$(".titl").css("display","none");
		$(".titl2").css("display","block");
		$(".txt").css("display","none");
		$(".bck").css("display","block");
		$(".prop1").css("border-top-right-radius","5px");
				$(".prop1").css("border-bottom-right-radius","5px");

		$(".prop1").css("border-top-left-radius","5px");

		$(".prop1").css("border-bottom-left-radius","5px");
		$(".prop1").css("padding-bottom","20px");
		



}

$("#rot2").click(f33);

function f33(){
	$(".prop1").css("transform","rotateY(0deg)");
	$(".prop1").css("transition","all ease 0.8s ");
	$("#rot2").css("display","none");
		$("#rot").css("display","block");
		$(".titl2").css("display","none");
		$(".titl").css("display","block");
$(".txt").css("display","block");
		$(".bck").css("display","none");	
			$(".prop1").css("border-top-right-radius","5px");
				$(".prop1").css("border-bottom-right-radius","5px");

		$(".prop1").css("border-top-left-radius","5px");

		$(".prop1").css("border-bottom-left-radius","5px");	


}
}

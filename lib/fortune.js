
var fortunes = [
	"제육","보쌈","족발", "치킨", "피자","소맥","자몽에이슬","죽","카레","된장찌개",
	"샌드위치", "베이글", "규동", "가츠동","생협","삼김","참이슬후레쉬","김치찌개",
	"면", "밥", "빵","파전", "일식","중식", "금식","학식","물","주스","알밥",
	"분식", "엽떡", "파스타", "타코","브리또","퀘사딜라","스테이크","돌솥밥",
	"국밥",  "고기", "채식", "육식", "한식", "샐러드","돈까스","나시고랭","곰탕",
	"평양냉면", "고쌈", "비냉", "물냉", "초계면","라면","라멘","샤브샤브","설렁탕",
	"짜장","짬뽕", "탕수육", "라조기덮밥","버섯덮밥","초밥","치즈버거","삼계탕",
]; 
exports.getFortune = function(){
	var index = Math.floor(Math.random()*fortunes.length);
	return fortunes[index];
};
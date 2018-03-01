var num1=null;   //數字1
var num2=null;   //數字2

var symble=null;   //符號
var lastClick=null; //判斷最後點擊的按鈕是否為符號
var symbleArr=new Array();  //符號集合

symbleArr[0] = '+'; 
symbleArr[1] = '/'; 
symbleArr[2] = '*'; 
symbleArr[3] = '-'; 
symbleArr[4] = '='; 


function Number(n) {
	var numNow = $('#show');
	var exist=$.inArray(lastClick,symbleArr);  //.inArray在陣列中搜尋   回傳 -1，表示找不到；倘若找到，將會回傳該值的位址

	if(numNow.val() == 0 || exist == -1 )
	{
		numNow.val($(n).val());
	}
	else
	{
		numNow.val(parseInt(Number.val())*10+parseInt($(n).val()));   //parseInt函式能將輸入的字串轉成整數
	}

	lastClick = $(n).val();
}

function symbleEvent(symEvent){
	var numNow = $('#show');
	var exist=$.inArray(lastClick,symbleArr);

	if ( num1 == null && symble == null ) 
	{
		num1 = numNow.val();
		symble = $(symEvent).val();
	} 
	else if( num1 != null && num2 == null && exist !=-1 )
	{
		symble = $(symEvent).val(); 
	}
	else
	{
		num2 = numNow.val(); 
		var result = calculate(symble,num1,num2); 
		symble = $(symEvent).val(); 
		num1 = result; 
		numNow.val(result); 
		num2 = null; 
	}
	lastclick = $(symEvent).val();
}

function calculate(sym,m,n){ //計算
	var res = null; 
	m = parseInt(m); 
	n = parseInt(n); 
	switch(sym)
	{ 
		case '+': 
			res = m+n; 
			break; 
		case '-': 
			res = m-n; 
			break; 
		case '*': 
			res = m*n; 
			break; 
		case '/': 
			if (n == 0)
			{ 
				alert("false"); 
				break; 
			} 
			res = m/n; 
			break; 
		default: 
			break; 
		} 
	return res; 
} 

function clearCal(){ //清空函数 
	$('#show').val('0'); 
	num1 = null; 
	num2 = null; 
	symble = null; 
	lastclick = null; 
} 
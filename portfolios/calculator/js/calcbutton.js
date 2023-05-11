/**
 * 電卓のボタンが押されたことを検知する
 */
 
 

 //ディスプレイを初期化する
function displayInit() {
	const display = document.getElementById('display');
	display.textContent = '0';
}
//ディスプレイに数字を反映させる
function displayShowNum(num) {
	const display = document.getElementById('display');
	if(display.textContent == '0') {
		display.textContent = num;	
	} else {
		const	text		=	display.textContent;
		
		const	nums		=	text.split(' ');
		
		const	lastNum		=	nums[nums.length - 1];
		
		const	firstChar	=	lastNum.charAt(0);
		
		if(firstChar == '0') {
			nums[nums.length - 1] = num;
			display.textContent = nums.join(" ");
		} else {
			display.textContent = display.textContent + num;
		}
	}
}
//ディスプレイの数字の符号を反転させる
function displayPlusMinus() {
	const 	display 	= 	document.getElementById('display');

	if(display.textContent != '0') {
		const 	nums		=	display.textContent.split(' ');
		
		let		num			=	nums[nums.length - 1];
		
		if(!isNaN(num) && num != '') {
			const first = num.charAt(0);
			
			if(first == '-') {
				nums[nums.length - 1] = nums[nums.length - 1].substr(1, nums[nums.length - 1].length);
			} else {
				nums[nums.length - 1] = '-' + nums[nums.length - 1];
			}
			display.textContent = nums.join(' ');
		}		
	}
}
//ディスプレイから末尾一文字を削除する
function displayClear() {
	const 	display = 	document.getElementById('display');
	
	if(display.textContent != '0') {

		const	text	=	display.textContent;
		
		const	nums	=	text.split(' ')

		
		if(nums[nums.length - 1] == '') {
			nums.pop();
		}
	
		if(isNaN(nums[nums.length - 1])) {
			nums.pop();
		} else {
			nums[nums.length - 1] = nums[nums.length - 1].substr(0, nums[nums.length - 1].length - 1);
		}

		display.textContent	=	nums.join(' ');
		
		if(display.textContent == '') {
			displayInit();
		}
	}
}
//ディスプレイにカンマを追加する
function displayComma() {
	const 	display = 	document.getElementById('display');
	
	const	text	=	display.textContent;
	
	const	nums	=	text.split(' ');
	
	let		num		=	nums[nums.length - 1];
		
	if(!isNaN(num) && num != '' && num.indexOf('.') == -1) {
		display.textContent = display.textContent + '.';
	}
	
}
//ディスプレイに記号を追加する
function displaySymbol(symbol) {
	
	const display = document.getElementById('display');

	const lastChar = display.textContent.charAt(display.textContent.length - 1);
	
	if(!isNaN(lastChar) && lastChar != ' ') {
		display.textContent = display.textContent + ' ' + symbol + ' ';
	}	
}
//ディスプレイの数字をパーセント表示する
function displayPercent() {
	const 	display 	= 	document.getElementById('display');

	if(display.textContent != '0') {
		const 	nums		=	display.textContent.split(' ');
		
		let		num			=	nums[nums.length - 1];
		
		if(!isNaN(num) && num != '') {
			nums[nums.length - 1] = Number(nums[nums.length - 1]) / 100;
			display.textContent = nums.join(' ');
		}		
	}
}
//計算結果を表示する
function displayEqual() {
	const 	display 	= 	document.getElementById('display');

	const	text		=	display.textContent;
	
	const	nums		=	text.split(' ');
	
	if(nums.length > 1 && !isNaN(nums[nums.length - 1]) && nums[nums.length - 1] != '') {
		let		calc_string = 
			display.textContent
			.replaceAll('÷', '/')
			.replaceAll('×', '*')
			.replaceAll('＋', '+')
			.replaceAll('－', '-');
			
		const result = Function('return ('+calc_string+');')();
        display.textContent = result;
        
        //履歴画面へ
        historyPrint(calc_string, Function('return ('+calc_string+');')());
	}	
}

 //押されたボタンを識別し、適した関数をセットする
function identifyButton() {
	const btns = document.querySelectorAll("div.container-base main div.dentaku-base div.row  div.dentaku-content div.dentaku table tbody tr td button");

	for (let btns_i = 0; btns_i < btns.length; btns_i++) {
		btns[btns_i].onclick = () => {
			switch(btns[btns_i].textContent) {
				//オールクリア
				case 	'AC'	:
					displayInit();
					break;	
				//プラスマイナス
				case 	'±'	:
					displayPlusMinus();
					break;	
				//クリア
				case 	'C'	:
					displayClear();
					break;	
				//カンマ
				case 	'.'	:
					displayComma();
					break;	
				//+ - × ÷
				case 	'÷'	:
				case	'×'	:
				case	'－'		:
				case	'＋'		:
					displaySymbol(btns[btns_i].textContent)
					break;
				//パーセント表示
				case	'%'		:
					displayPercent()
					break;
				//イコール
				case	'='		:
					displayEqual()
					break;							
				//数字
				case 	'0'		:
				case 	'1'		:
				case 	'2'		:
				case 	'3'		:
				case 	'4'		:
				case 	'5'		:
				case 	'6'		:
				case 	'7'		:
				case 	'8'		:
				case 	'9'		:
					displayShowNum(btns[btns_i].textContent) 
					break;
			}
		}
	}
}

/**
 * 履歴画面
 */'use strict'

//履歴画面を削除する
function history_menu_clear_click() {
	const	history_menu_clear	=	document.getElementById('history-menu-clear');
	
	history_menu_clear.onclick = function () {
		const isClear = window.confirm('計算履歴を削除しますか');
	
		if(isClear) {
			const		history		=	document.getElementById('history');
			history.innerHTML = '';	
		}
	}
}

//履歴へ出力
function historyPrint(calc_string, result) {
	const		history		=	document.getElementById('history');
	
	const	 	new_element =	document.createElement('p');
	
	const		formula		=	document.createElement('button');
	formula.textContent		=	calc_string.replaceAll('*', '×').replaceAll('/', '÷').replaceAll('+', '＋').replaceAll('-', '－');

	formula.setAttribute("id","formula");

	const		eq		=	document.createElement('span');
	eq.textContent		=	' = ';
	
	const		answer		=	document.createElement('button');
	answer.textContent		=	String(result).replaceAll('-', '－');
	answer.setAttribute("id","answer");

	
	const		del_btn		=	document.createElement('button');
	del_btn.textContent 	= 	'×';
	del_btn.setAttribute("id","del_btn");
	
	new_element.appendChild(formula);

	new_element.appendChild(eq);

	new_element.appendChild(answer);
	
	new_element.appendChild(del_btn);

	
	//指定した要素の中の末尾に挿入
	history.insertBefore(new_element, history.firstChild);
	
	//１行の履歴を削除する
	del_btn.onclick = function() {
		const parent = del_btn.parentNode;
		parent.remove();
	}		
	
	//式のボタンをクリックした時の挙動
	formula.onclick = function() {
		const		display		=	document.getElementById('display');
		display.textContent		=	formula.textContent;
	}

	//計算結果のボタンをクリックした時の挙動
	answer.onclick = function() {
		const		display		=	document.getElementById('display');
		display.textContent		=	answer.textContent;
	}
}

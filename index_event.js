function wl_RowContextMenu(e, rowIndex, rowData) {     
		e.preventDefault(); 						//阻止浏览器捕获右键事件
		$(this).datagrid("clearSelections"); 		//取消所有选中项
		$(this).datagrid("selectRow", rowIndex); 	//根据索引选中该行
		if(rowIndex >= 0)
		{
			$('#wl_mm_select').menu('show', {					//显示右键菜单
				left: e.pageX,							//在鼠标点击处显示菜单
				top: e.pageY
			});
		}
		else
		{
			$('#wl_mm_noselect').menu('show', {					//显示右键菜单
				left: e.pageX,							//在鼠标点击处显示菜单
				top: e.pageY
			});
		}
}


function  wl_ManageWin(e, rowIndex, rowData){
	window.open("rcs.html");   
}
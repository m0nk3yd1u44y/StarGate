function fl_RowContextMenu(e, rowIndex, rowData) {     
		e.preventDefault(); 						//阻止浏览器捕获右键事件
		$(this).datagrid("clearSelections"); 		//取消所有选中项
		$(this).datagrid("selectRow", rowIndex); 	//根据索引选中该行
		if(rowIndex >= 0)
		{
			$('#fl_mm').menu('show', {					//显示右键菜单
				left: e.pageX,							//在鼠标点击处显示菜单
				top: e.pageY
			});
		}
}

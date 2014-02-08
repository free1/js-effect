window.onload = function(){
  oGrid = document.getElementById('grid');
  // 表格行数
  var rowsLength = oGrid.rows.length;
  // 表格列数
  var cellsLength = oGrid.rows.item(0).cells.length;
  // 表格总
  var td = oGrid.getElementsByTagName('td');

  tick(rowsLength,cellsLength);

};

function tick(rowsLength,cellsLength){
  // 循环遍历表格
  for (var i = 0; i < rowsLength; i++) {
    for (var j = 0; j < cellsLength; j++) {
      if(alive(i,j) && has_2_or_3_alive_neighbors(i, j))
      {
        set_alive(i,j);
      }

      if(!alive(i,j) && has_3_alive_neighbors(i, j))
      {
        set_alive(i,j);
      }
    }
  }
  // 重新设置表格数据
};

function alive(i,j){

};

function has_2_or_3_alive_neighbors(i,j){

};

function has_3_alive_neighbors(i,j){

};

function set_alive(i,j){

};
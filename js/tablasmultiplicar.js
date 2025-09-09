let table_number = 0;

while(table_number < 11){
  
  for (let number = 0; number < 11; number=number+1) {
    let total = number * table_number;

    console.log(number + ' x ' + table_number + ' = ' + total );
  }
  table_number = table_number + 1;
}



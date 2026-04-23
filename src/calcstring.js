//未完成


function isNumber(num){
  return !isNaN(Number(num))
}

class CalcString{
  Tocalc(cstr){
    console.log("型:", typeof cstr);
    if(typeof cstr != "string") console.error("calc関数が受け付ける第一引数はString型を期待しています。");
    else{
      let subc = 0;
      let numbers = [];
      while(subc<cstr.length){
        //項から数値を抽出
        if(isNumber(cstr[subc])){
          if(isNumber(cstr[subc-1])) numbers[numbers.length]+=cstr[subc];
          else numbers.push(cstr[subc]);
        }  
        subc++;
      }
      return numbers;
    }
  }
}


const calc = new CalcString();
calc.Tocalc("1+1+1");

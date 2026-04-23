//未完成


function isNumber(num){
  return /^[0-9.]$/.test(num);
}

function isOperator(ope){
  const operators = ["+", "-", "*", "/", "%"];
  return operators.includes(ope);
}

class CalcString{
  Tocalc(cstr){
    if(typeof cstr != "string"){
      console.error("calc関数が受け付ける第一引数はString型を期待しています。");
      return;
    }else{
      var subc = 0;
      var numbers = [];
      while(subc<cstr.length){
        var ns = cstr[subc];
        //項から数値と演算子を分割
        if(isNumber(ns)){
          if(subc>0 && isNumber(cstr[subc-1])) numbers[numbers.length-1]+=ns;
          else numbers.push(ns);
        }else{
          if(isOperator(ns))numbers.push(ns);
        }
        subc++;
      }
      return numbers;
      //この後に計算処理を追加
    }
  }
}


const calc = new CalcString();
calc.Tocalc("1+1+1");

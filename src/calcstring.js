
function isNumber(let num){
  return !isNaN(Number(num))
}

class CalcString{
  public:
    function calc(let cstr){
      if(typeof cstr != "String") console.error("calc関数が受け付ける第一引数はString型を期待しています。");
      else{
        let subc = 0;
        let numbers = [];
        while(subc<cstr.length){
          if(isNumber(cstr[subc])) numbers.push(cstr[subc]);
          //数値を抽出
          if(cstr[subc]="")
          subc++;
        }
      }
    }
}

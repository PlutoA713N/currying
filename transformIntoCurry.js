const transformIntoCurry = (func) => {
let totalParamsLength = func.length
  const inner = (...args) => {
      let argsCount = args.length;
      if(argsCount >= totalParamsLength){
          return func(...args)
      }

      return function(...newArgs){
          return inner(...args, ...newArgs)
      }
  }

 return inner;
}

module.exports = transformIntoCurry;
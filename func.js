// import { resolve } from "path";

// 高阶复合函数
// function A (a,b){
//   console.log('A', a+b)
//   return a+b
// }
// function B (a){
//   console.log('B', a*a)
//   return a*a
// }
// function C (a){
//   console.log('C', a*2)
//   return a*2
// }
async function A (next){
  console.log('A')
  await delay1()
  await next()
  console.log('end A')
}
async function B(next){
    console.log('B')
    await delay()
    await next()
    console.log('end B')
 }

function C(next) {
  console.log('c')
}

function delay () {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log('delay2')
      resolve()
    }, 2000)
    console.log('----')
  })
}
function delay1 () {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      console.log('delay')
      resolve()
    }, 5000)
  } )
}

// 异步的高阶函数 就是执行完A在去执行B。B必须等A的结果。 递归调用。 next是手动去执行下一个函数
function compile (middleWares) {
  return function (){
    return dispatch(0)

    function dispatch(i) {
      let fn = middleWares[i]
      if(!fn){
        return Promise.resolve()
      }
      return Promise.resolve(
        fn(function next(){
          return dispatch(i + 1)
        })
      )
    }
  }
}

let finalFN = compile([A, B, C])
finalFN()
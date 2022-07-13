// const handler = {
//     get: function(target, key, receiver) {
//         return Reflect.get(target, key, receiver)
//     }
// }


const handler2 = {
    get: function(target, key, receiver) {
        return target[key]
    }
}

/**
 * 
 * @param {*} target 
 * @param {*} flag  true: use Reflect  false: use default
 * @returns 
 */
function reactive(target, flag) {
    // ....
    return new Proxy(target, flag ? handler : handler2);
}


const person = {
    name: 'Tim',
    age: 34,
    get getName () {
        return this.name
    }
}

const child = {
    __proto__: person,
    name: 'Child',
}


const reactiveChildByReflect = reactive(child, true)

const reactiveChild = reactive(child, false)

console.log(reactiveChild.getName)
console.log(reactiveChildByReflect.getName)

const handler = {
    // ?
}

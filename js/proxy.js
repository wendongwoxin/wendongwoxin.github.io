const handler = {
    get: function (target, key, receiver) {
        return Reflect.get(target, key, receiver)
    }
}

const handler2 = {
    get: function (target, key, receiver) {
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
    get getName() {
        return this.name
    }
}


const reactive1 = reactive(person, true)

const reactive2 = reactive(person, false)

const child1 = {
    name: 'Bob',
    __proto__: reactive1
}

const child2 = {
    name: 'Bob',
    __proto__: reactive2
}
console.log(child1.getName)
console.log(child2.getName)

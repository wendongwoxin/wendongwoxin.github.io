let dep = new WeakMap()
const reactive = (target) => {
    const handler = {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver)
            track(target)
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            trigger(target)
            return res
        }
    }
    return new Proxy(target, handler)
}

const effect = () => {
    total = product.price * product.quantity
}

let product = reactive({
    price: 5,
    quantity: 2
})


function track(target) {
    dep.set(target, effect)
}

function trigger(target) {
    const fn = dep.get(target)
    if (fn) fn()
}
effect()
console.log(total) // => 10
product.price = 20
console.log(total) // => 40

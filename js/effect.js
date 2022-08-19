let targetMap = new WeakMap();

let plusValue, minusValue

const track = (target, key) => {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        targetMap.set(target, (depsMap = new Map))
    }
    let dep = depsMap.get(key);
    if (!dep) {
        depsMap.set(key, (dep = new Set()))
    }
    dep.add(activeEffect)
}


const trigger = (target, key) => {
    const depsMap = targetMap.get(target)
    const dep = depsMap.get(key)
    for (const effect of dep) {
        effect.run();
    }
}

const reactive = (target) => {
    const handler = {
        get(target, key, receiver) {
            const res = Reflect.get(target, key, receiver)
            track(target, key)
            return res
        },
        set(target, key, value, receiver) {
            const res = Reflect.set(target, key, value, receiver)
            trigger(target, key)
            return res
        }
    }
    return new Proxy(target, handler)
}

const plusEffect = () => {
    plusValue = parseFloat(obj.a) + parseFloat(obj.b)
}

const minusEffect = () => {
    minusValue = parseFloat(obj.a) - parseFloat(obj.b)
}

// an ReactiveEffect Object, create in renderer.ts (runtime-core/src/renderer.ts)
let activeEffect

const obj = reactive({
    a: 1,
    b: 2,
})

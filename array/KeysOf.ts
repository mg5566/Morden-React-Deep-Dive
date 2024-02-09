type KeysOf = <T extends Object>(obj: T) => Array<keyof T>;

const keysOf: KeysOf = (obj) => {
    return Array.from(Object.keys(obj)) as Array<keyof typeof obj>
}

// function
function KeysOf<T extends Object>(obj: T): Array<keyof T> {
    return Array.from(Object.keys(obj)) as Array<keyof T>
}

type Obj = { [key in 'a' | 'b']: number }
const obj: Obj = { a: 1, b: 2 };
keysOf(obj) // ['a', 'b']
    .map((key) => {
        const val = obj[key];
        return val;
    })

KeysOf(obj) // ['a', 'b']
    .map((key) => {
        const val = obj[key];
        return val;
    })


// An Error occurs
Object.keys(obj).map((key) => {
    // Element implicitly has an 'any' type because type 'string'
    // cant be used to index type 'Obj'.
    // No index signature with a parameter of type 'string' was found on type 'Obj'.

    const val = obj[key];
    return val;
});

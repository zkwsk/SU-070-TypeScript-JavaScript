---

# 9 OOP

---

## 9.1 Classes

- Basic class with typed fields + constructor:
  ```typescript
  class User {
    id: string;
    name: string;
    constructor(id: string, name: string) {
      this.id = id;
      this.name = name;
    }
    greet() { return `Hi, ${this.name}`; }
  }
  ```

---

- Parameter property shorthand — declare + assign in one step:
  ```typescript
  class User {
    constructor(public id: string, public name: string) {}
  }
  ```
- Getters/setters supported; `this` typed automatically
- Structural typing — any object matching the shape is assignable:
  ```typescript
  const userLike = { id: "1", name: "Z", greet() { return ""; } };
  const u: User = userLike; // OK — shapes match
  ```

---

## 9.2 Inheritance & Interfaces

- Single inheritance with `extends`:
  ```typescript
  class Admin extends User {
    constructor(id: string, name: string, public role: string) {
      super(id, name);
    }
  }
  ```
- `implements` — enforce a class matches an interface:
  ```typescript
  interface Greetable { greet(): string }
  class User implements Greetable {
    greet() { return "hi"; }
  }
  ```
---

## 9.3 Generics in Classes

- Class-level type parameters:
```typescript
class Box<T> {
  constructor(public value: T) {}
  map<U>(f: (v: T) => U): Box<U> {
    return new Box(f(this.value));
  }
}
const b = new Box(10).map(n => n.toString()); // Box<string>
```

---

## 9.3 Generics in Classes

- Constrain with `extends`:
```typescript
class Store<T extends { id: string }> {
  save(item: T) {}
}
```
- Static members cannot reference class-level generics (use method-level generics instead)

---

## 9.4 Decorators

- Syntactic metadata on classes, methods, properties, parameters
- Stage-3 (standardized) decorators now supported natively in TS 5+
- Legacy/experimental decorators still around via `experimentalDecorators: true`
- Common uses: logging, dependency injection, validation, ORM mapping, route registration

---

- Example (stage-3):
```typescript
function log(target: Function, ctx: ClassMethodDecoratorContext) {
  return function (this: any, ...args: any[]) {
    console.log(`calling ${String(ctx.name)}`, args);
    return target.apply(this, args);
  };
}
class API {
  @log greet(name: string) { return `hi ${name}`; }
}
```

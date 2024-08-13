## _Commands_

- **if you wanna see the list of commands you can use with ts files, you can hit this command -> `tsc -h`**
- **the command of run ts file -> `tsc fileName`**
- **the command of run ts file in watch mode -> `tsc -w fileName`**
- **to create tsConfig file -> `tsc --init`**
- **if you wanna compiled the whole project, not specific file -> `tsc`**
- **if you wanna compiled the whole project but in watch mode, not specific file -> `tsc -w`**

---

## _Statically Types vs Dynamically Types_

- **Statically Types languages like [Rust, C, C++]**
- **variables types are static, once you declare it you can't change it**
- **Type of A variable is known at compile time "Do type checkin at compile time"**
- **Have better performance at run-time due to not nedding to check types dynamically**
- **Error detected earlier**

- **Dynamically Types languages like [Php , Python, Javascript]**
- **variables types are dynamic, you can always change it**
- **Type checking at Execution time**
- **Error can be detected after Execution time**

---

## _Type Annotations Or Signature_

- **Indicate the date type of the variable**
- **Indicate the date type of the Functions input/output**
- **Ojects, etc**

- **Why we use it ? to force the type checking**
- **Is it mandatory ? No it's not mandatory**
- **What happen if we did'nt use it ? compiler will guess the type depend on the value of the variable**

---

## _Data Alias_

- **I can give a shortcut to the types and use it ➡ `type st = string` and use `st` instead of `string`.**
- **this method in case if I write the data type names many times and I wanna minimize letters as much as I can**
- **Also I can create an object and assign many types on it like ➡ `type userInfoTypes = {name: string, age: number, worked: boolean}` and use `userInfoTypes` as datatype set for passing it into the function**
- **Depend on the last method, After createing an object has userInfoTypes, I can add additional type like ➡ `type last = userInfoTypes & {married : boolean}`**

---

## _Shortcuts names_

- **src ➡ Source folder - where we have our ts project**
- **dist ➡ Distrution folder - where we have a js copy from src**

---

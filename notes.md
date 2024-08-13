<!--! Commands -->

- <if you wanna see the list of commands you can use with ts files, you can hit this command -> tsc -h>
- <the command of run ts file -> tsc fileName>
- <the command of run ts file in watch mode -> tsc -w fileName>
- <to create tsConfig file -> tsc --init>
- <if you wanna compiled the whole project, not specific file -> tsc>
- <if you wanna compiled the whole project but in watch mode, not specific file -> tsc -w>

============================================================================================

<!--! Shortcuts -->

1 ) dist -> distrution folder <the folder where ts code compiled to js code>
-> originally the ts project was in the <src folder> , after we run the project there's a copy from the project created in the <dist folder> but in js.

============================================================================================

# Statically Types> vs Dynamically Types

- <Statically Types languages> like [Rust, C, C++]
- variables types are static, once you declare it you can't change it
- Type of A variable is known at compile time "Do type checkin at compile time"
- Have better performance at run-time due to not nedding to check types dynamically
- Error detected earlier

- <Dynamically Types languages> like [Php , Python, Javascript]
- variables types are dynamic, you can always change it
- Type checking at Execution time
- Error can be detected after Execution time

============================================================================================

## Type Annotations Or Signature

- Indicate the date type of the variable
- Indicate the date type of the Functions input/output
- Ojects, etc

- Why we use it ? to force the type checking
- Is it mandatory ? No it's not mandatory
- What happen if we did'nt use it ? compiler will guess the type depend on the value of the variable

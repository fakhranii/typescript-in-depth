<!--! Commands -->

1 ) if you wanna see the list of commands you can use with ts files, you can hit this command -> tsc -h
2 ) the command of run ts file -> tsc fileName
3 ) the command of run ts file in watch mode -> tsc -w fileName
4 ) to create tsConfig file -> tsc --init
5 ) if you wanna compiled the whole project, not specific file -> tsc
6 ) if you wanna compiled the whole project but in watch mode, not specific file -> tsc -w

===============================================================================================

<!--! Shortcuts -->

1 ) dist -> distrution folder <the folder where ts code compiled to js code>
-> originally the ts project was in the <src folder> , after we run the project there's a copy from the project created in the <dist folder> but in js.

===============================================================================================

<Statically Types> vs <Dynamically Types>

- <Statically Types languages> like [Rust, C, C++]
  1 ) variables types are static, once you declare it you can't change it
  2 ) Type of A variable is known at compile time "Do type checkin at compile time"
  3 ) Have better performance at run-time due to not nedding to check types dynamically
  4 ) Error detected earlier

- <Dynamically Types languages> like [Php , Python, Javascript]
  1 ) variables types are dynamic, you can always change it
  2 ) Type checking at Execution time
  3 ) Error can be detected after Execution time

===============================================================================================

<Type Annotations Or Signature>

1 ) Indicate the date type of the variable
2 ) Indicate the date type of the Functions input/output
3 ) Ojects, etc

1 ) Why we use it ? to force the type checking
1 ) Is it mandatory ? No it's not mandatory
2 ) What happen if we did'nt use it ? compiler will guess the type depend on the value of the variable

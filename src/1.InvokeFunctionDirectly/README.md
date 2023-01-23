# 1. Invoke Component Fucntion Directly:
    1. Invoke component vs Invoke component function
        + When you invoke EmailField Component It renders only EmailField component whereas in Invoking EmailFied Function , It renders its parent component as well. It costs the performance.
        + Let's see what is happening behind the scene.
```js
const EmailField = () => {
  console.log("Email");
  const [value,setValue] = useState("")
  return (
    <>
    <input type="text" value={value}  onChange={e => setValue(e.target.value)}/>
    </>
  )
}

const App = () => {
  console.log("Appp");

  return (
    <>
    <EmailField />
    </>
  )
}
```

```js
const EmailField = () => {
  console.log("Email");
  const [value,setValue] = useState("")
  return (
    <>
    <input type="text" value={value}  onChange={e => setValue(e.target.value)}/>
    </>
  )
}

const App = () => {
  console.log("Appp");
  return (
    <>
   {EmailField()}
    </>
  )
}

```
    + When you use EmailField as Component , the state is working based on EmailField component. When you change the state , It renderes only that particular component
    + When you use EmailField as Function, the state is working based its parent. When you change the state , It renderes it's parent as well. It cost the performance. so we should avoid using component as a function.
```js
const App = () => {
  const [open,setOpen] = useState(false);
  console.log("Appp");
  return (
    <>
   {/* {EmailField()}
   {EmailField()}
   {EmailField()}
   {EmailField()}
   {EmailField()} */}
   <EmailField />
   <EmailField />
   <EmailField />
   <EmailField />
   <EmailField />
   <EmailField />
    </>
  )
}
```
  + The same issue has been appeared here as well.
  + Here we are going to blow up this issue.

```js
const App = () => {
  const [open,setOpen] = useState(false);
  console.log("Appp");
  return (
    <>
    {/* <button onClick={() =>setOpen(prev => !prev)}>click</button>
    {open && EmailField()} */} => It blows up since it rendered more hooks than during the previous render.
    <button onClick={() =>setOpen(prev => !prev)}>click</button>
    {open && <EmailField />}
    </>
  )
}
```
  + During the number hooks should be same as previous render.
  + Hence We should avoid render component as fucnction.
  
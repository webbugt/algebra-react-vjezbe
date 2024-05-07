import { useNameContextValue } from "../context/Name.context.jsx";

export function ContextExample4() {
  const nameContextValue = useNameContextValue();
  return (
    <div>Hello from context example, context value: {nameContextValue}</div>
  );
}
export function ContextExample3() {
  return (
    <div>
      Component 3:
      <ContextExample4 />
    </div>
  );
}
export function ContextExample2() {
  return (
    <div>
      Component 2:
      <ContextExample3 />
    </div>
  );
}
export function ContextExample1() {
  return (
    <div style={{ marginTop: 20 }}>
      Component 1:
      <ContextExample2 />
    </div>
  );
}

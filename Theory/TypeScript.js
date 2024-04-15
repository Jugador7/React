import React from 'react';
interface MyComponentProps {
  name: string;
}
function MyComponent({ name }: MyComponentProps) {
  return <div>Hello, {name}!</div>;
}
export default MyComponent;

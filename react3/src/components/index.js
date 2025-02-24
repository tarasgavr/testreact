export function Button({ buttonTxt, click }) {
  return <button onClick={click}>{buttonTxt}</button >
}
export function Link({ linkTxt, click }) {
  return <a onClick={click}>{linkTxt}</a>;
}
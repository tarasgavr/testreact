import "./index.css";
export function Button({ buttonTxt, click }) {
  return <button clasName="button" onClick={click}>{buttonTxt}</button >
}
export function Link({ linkTxt, click }) {
  return <a clasName="link" onClick={click}>{linkTxt}</a>;
}
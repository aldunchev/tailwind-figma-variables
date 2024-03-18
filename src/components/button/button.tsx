export default function Button(props: any) {
  const {type, text, clickHandler} = props;

  return(
    <button type={type} onClick={clickHandler} className='border text-white py-2 px-4 flex items-center bg-indigo-600 rounded shadow'>{text}</button>
  );
}

interface ButtonProps{
    title:string;
}

function Button({title}:ButtonProps) {
  return (
    <div>
      <button className='p-2 bg-secondary w-35 rounded-xl font-medium text-white shadow-xl/20 cursor-pointer'>{title}</button>
    </div>
  )
}

export default Button

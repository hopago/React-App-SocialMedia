import * as Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <Loader.Circles
        type="Circles"
        color="#00BBFF"
        height={50}
        width={200}
        className="m-5"
      />
      <p className='text-lg text-center px-2 mt-2 text-cyan-700'>{message}</p>
    </div>
  )
}

export default Spinner

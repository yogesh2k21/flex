import './App.css';
import Form from './Form'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
    <ToastContainer
                position="top-center"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
            />
    <h1 className="text-3xl font-bold">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <span className='flex justify-center mb-9'>Yoga Classes Admission Form</span>
      <Form toast={toast}/>
    </div>
    </h1>
    </>
  );
}

export default App;

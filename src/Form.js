import React, { useState } from "react";

const Form = ({ toast }) => {
  let payload = {
    name: "",
    age: "",
    phone: "",
    batch: "",
    month: "",
    amount: "",
  };

  const [formData, setformData] = useState(payload);

  const formValidation = () => {
    if (formData.name.length < 3) {
      toast.error("Name should be atleast 3 Character!!");
      return false;
    }
    if (formData.age < 17 && formData.age < 66) {
      toast.error("Age should be under 18 to 65!!");
      return false;
    }
    if (formData.phone.length != 10) {
      toast.error("Mobile should be 10 digit!!");
      return false;
    }
    if (formData.batch == "") {
      toast.error("Choose your Batch");
      return false;
    }
    if (formData.month == "") {
      toast.error("Choose your Month!!");
      return false;
    }
    if (formData.amount < 500) {
      toast.error("Class fees starting from Rs.500");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formValidation()) {
      const response = await fetch("http://localhost:8000/", {
        method: "POST", // *POST is use bcoz here we are login the user
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          age: formData.age,
          phone: formData.phone,
          batch: formData.batch,
          month: formData.month,
          amount: formData.amount,
        }),
      });
      const res = await response.json();
      if(res.response){
        toast.success("Successfully Submitted. Your Transaction ID:- "+res.ID);
      }else{
        toast.error("Internal Server Error!!");
      }
    }
  };

  const onChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto bg-white rounded-xl p-16">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                htmlFor="first_name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                First name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div>
              <label
                htmlFor="Age"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="19"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone number
              </label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="9876543210"
                required
              />
            </div>
          </div>

          <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Batch
              </label>
              <select
                id="batch"
                name="batch"
                value={formData.batch}
                onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option disabled={true} value="">
                  choose...
                </option>
                <option value="6_7AM">6 to 7AM</option>
                <option value="7_8AM">7 to 8AM</option>
                <option value="8_9AM">8 to 9AM</option>
                <option value="5_6PM">5 to 6PM</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="countries"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Month
              </label>
              <select
                id="month"
                name="month"
                value={formData.month}
                onChange={onChange}
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option disabled={true} value="">
                  choose...
                </option>
                <option name="January" value="January">
                  January
                </option>
                <option name="February" value="February">
                  February
                </option>
                <option name="March" value="March">
                  March
                </option>
                <option name="April" value="April">
                  April
                </option>
                <option name="May" value="May">
                  May
                </option>
                <option name="June" value="June">
                  June
                </option>
                <option name="July" value="July">
                  July
                </option>
                <option name="August" value="August">
                  August
                </option>
                <option name="September" value="September">
                  September
                </option>
                <option name="October" value="October">
                  October
                </option>
                <option name="November" value="November">
                  November
                </option>
                <option name="December" value="December">
                  December
                </option>
              </select>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={formData.amount}
                onChange={onChange}
                id="amount"
                className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Starting from 500"
                required
              />
            </div>
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              I agree with the{" "}
              <a
                href="#"
                className="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

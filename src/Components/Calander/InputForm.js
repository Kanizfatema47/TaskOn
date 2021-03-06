import React, { useState } from "react";
import { Formik } from "formik";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import CalenderScheduler from "./CalanderScheduler";




const date = moment().format("YYYY-MM-dd");


const InputForm = () => {


 const [event,setEvent] = useState([])
 const [prevevent,setPrevevent] = useState([])
  const [startDate, setStartDate] = useState(new Date());




 const Submitdata = (data) => {

    const events = [...event,data]

    setEvent(events);

 }


 const add = (data, StartTime,day,month) => {
   const { length } = event;
   const id = length + 1;
   const timefound = event.some((el) => el.Starttime === StartTime);
   const dayfound = event.some((el) => el.convertedday === day);
  const monthfound = event.some((el) => el.convertedmonth === month);

   if (!timefound) {
     const events = [...event, data];


     setEvent(events);
   }
   else if(!dayfound){
     const events = [...event, data];
   

     setEvent(events);

   }
   else if(timefound && dayfound && monthfound) {
     alert("The slot is already taken");
   }
 }


 const takingdate = (date) => {
  setStartDate(date);
 }





 return (
   <div className="Form-parent flex flex-col justify-center items-center">
    <h1 className="text-3xl text-bold my-5">Add Your Events</h1>
     <Formik
       initialValues={{ eventname: "", StartTime: "", EndedTime: "" }}
       validate={(values) => {
         const errors = {};
         if (!values.eventname) {
           errors.email = "Required";
         } else if (!values.StartTime) {
           errors.StartTime = "Required";
         } else if (!values.EndedTime) {
           errors.EndedTime = "Required";
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting,resetForm }) => {
         const EventName = values.eventname;
         const Starttime = parseInt(values.StartTime?.slice(0, 5));
         const Endtime = parseInt(values.EndedTime);
         

           startDate.setMonth(startDate.getMonth() - 1);

           const date = moment(startDate)
             .format(`YYYY,MM,DD`)
             .replace(/\b0/g, "");


             const startdate = date;
           

             let year = moment(startdate).format("YYYY");
             console.log(year);
             let month = moment(startdate).format("MM");
             console.log(month);
              let day = moment(startdate).format("DD");
               console.log(day);


             let convertedyear = parseInt(year);


             let convertedmonth = parseInt(month);
             let convertedday = parseInt(day); 
            
        

             console.log(date);

         const events = {
           EventName,
           Starttime,
           Endtime,
           convertedyear,
           convertedmonth,
           convertedday,
         };

       

         setTimeout(() => {
      
           add(events, Starttime,convertedday,convertedmonth);
            setStartDate(new Date());
          resetForm();

            
         }, 400);
       }}
     >
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
   
       }) => (
         <form onSubmit={handleSubmit} className="form flex flex-col justify-center items-center lg:w-1/2  sm:w-full">
          
           <input className="input input-bordered input-primary w-full my-2 max-w-xs  "
           placeholder="Enter Event Name"
             type="text"
             name="eventname"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.eventname}
           />
           {errors.eventname && touched.eventname && errors.eventname}
           <input className="input input-bordered input-primary w-full my-2 max-w-xs"
             type="text"
             placeholder="Enter Start Time"
             name="StartTime"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.StartTime}
           />
           {errors.StartTime && touched.StartTime && errors.StartTime}
           <input className="input input-bordered input-primary w-full my-2 max-w-xs"
             type="text"
             placeholder="Enter End Time"
             name="EndedTime"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.EndedTime}
           />
           {errors.EndedTime && touched.EndedTime && errors.EndedTime}
           <label>Select Date</label>
           <div className="date input input-bordered input-primary">
             <DatePicker
               selected={startDate}
               onChange={(date) => takingdate(date)}
               dateFormat="yyyy-MM-dd"
              
             />
           </div>

           <button type="submit" className="btn btn-success my-3">
             Submit
           </button>
         </form>
       )}
     </Formik>
     <CalenderScheduler events={event} />
   </div>
 );};
 export default InputForm
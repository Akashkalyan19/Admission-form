import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
function Submit(){
  const location = useLocation();
  console.log(location);
  const formData = location.state ? location.state.formData : null;
return (
<div>
    <div className="success">
    <h1 id="sub-success">Submission Successfull</h1> 
    </div>
    <div className="filled-form">
        {formData ? (
        <div>
          <div className="list"><p className="list-item">Name:</p>                           <p className="list-data">{formData.name}</p>  </div>
          <div className="list"><p className="list-item">Gender:</p>                         <p className="list-data">{formData.gender} </p> </div>
          <div className="list"><p className="list-item">Date of Birth: </p>                 <p className="list-data">{formData.dob}</p>   </div>
          <div className="list"><p className="list-item">Mother's Name:</p>                  <p className="list-data">{formData.motherName} </p> </div>
          <div className="list"><p className="list-item">Father's Name:</p>                  <p className="list-data">{formData.fatherName}</p>  </div>
          <div className="list"><p className="list-item">Email:</p>                          <p className="list-data">{formData.email} </p>  </div>
          <div className="list"><p className="list-item">Address: </p>                       <p className="list-data">{formData.Address1} {formData.Address2}</p>   </div>
          <div className="list"><p className="list-item">Phone number: </p>                  <p className="list-data">{formData.Phoneno} </p>  </div>
          <div className="list"><p className="list-item">District:</p>                          <p className="list-data">{formData.district}</p>   </div>
          <div className="list"><p className="list-item">City: </p>                        <p className="list-data"> {formData.city} </p>  </div>
          <div className="list"><p className="list-item">State:</p>                        <p className="list-data">{formData.state}</p>  </div>
          <div className="list"><p className="list-item">Country: </p>                      <p className="list-data">{formData.country}</p>   </div>
          <div className="list"><p className="list-item">Pin code: </p>                      <p className="list-data">{formData.pin} </p> </div>
          <div className="list"><p className="list-item">X Marks: </p>                      <p className="list-data">{formData.Xmarks} </p> </div>
          <div className="list"><p className="list-item">X Board: </p>                      <p className="list-data">{formData.Xboard} </p> </div>
          <div className="list"><p className="list-item">XII Marks: </p>                      <p className="list-data">{formData.XIImarks} </p> </div>
          <div className="list"><p className="list-item">XII Board: </p>                      <p className="list-data">{formData.XIIboard} </p> </div>
          <div className="list"><p className="list-item">JEE Rank: </p>                      <p className="list-data">{formData.JEE} </p> </div>
        </div>
      ) : (
        <p>No form data available.</p>
      )}
    </div>     
<Link to="/" className="btn-refill">Back </Link>
</div>
);
}
export default Submit
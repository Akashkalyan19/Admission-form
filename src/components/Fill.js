import React from "react";
import { Link } from 'react-router-dom';
import myImage1 from './imgs/hcl-logo.png'
// import myImage2 from './imgs/dtu.png'
// import myImage3 from './imgs/grad.png'
import myImage4 from './imgs/library.png'
import myImage5 from './imgs/nsut.png'
import myImage6 from './imgs/students.png'
// import myImage7 from './imgs/uni.png'
function Fill ()
{
    const [formData,setFormData]=React.useState(
        {
          name:"",
          motherName:"",
          fatherName:"",
          gender:"",
          category:"",
          dob:"",
          email:"",
          Address1:"",
          Address2: "",
          Phoneno:"",
          city:"",
          state:"",
          district:"",
          pin:"",
          country:"",
          Xmarks:"",
          Xboard:"",
          XIImarks:"",
          XIIboard:"",
          JEE:"",
        }
      )
      function handleChange(event)
      {
        setFormData(prevData=>{
          return {
            ...prevData,
            [event.target.name]:event.target.value
          }
        })
      }
      
      function validateForm() {
        const { name,motherName,fatherName,gender,dob, email,Address1,Address2,Phoneno,city,state,district,pin,country } = formData;
      
        // Check if all fields are filled
        const inv = name.trim() !== '';
        const iev = email.trim() !== '';
        const imnv = motherName.trim() !== '';
        const ifnv = fatherName.trim() !== '';
        const igv = gender.trim() !== '';
        const idv = dob.trim() !== '';
        const ia1v = Address1.trim() !== '';
        const ia2v = Address2.trim() !== '';
        const ipnv = Phoneno.trim() !== '';
        const icv = city.trim() !== '';
        const isv = state.trim() !== '';
        const idiv = district.trim() !== '';
        const ipv = pin.trim() !== '';
        const icov = country.trim() !== '';
        
        return  (inv && iev && imnv && ifnv && igv && idv && ia1v && ia2v && ipnv && icv && isv && idiv && ipv && icov);
      }
      const isFormValid = validateForm();
      function handleReset(){
        setFormData({
          name:"",
          motherName:"",
          fatherName:"",
          gender:"",
          category:"",
          dob:"",
          email:"",
          Address1:"",
          Address2: "",
          Phoneno:"",
          city:"",
          state:"",
          district:"",
          pin:"",
          country:"",
          Xmarks:"",
          Xboard:"",
          XIImarks:"",
          XIIboard:"",
          JEE:"",
        })  
      }
      function handleUnfilledSubmit(){
       if(!isFormValid){
        alert('Please fill out all details');
       } 
      }
      return (
        <div>
        <div className="navbar">
         <img src={myImage1} alt="Couldn't load images" className="img1"></img> 
        <p className="navp">The Admission process for NSUT 2023 has started.<u>Hurry up and Register yourself today.</u></p>
        </div>
        <div className="main">
            <h1>College Admission Form</h1>
            {/* <div className="line"></div> */}
            <form className="form">
            <div className="pd">
            <div className="personal-details"><h3>Personal Details</h3> 
                <div className="form-item">
                <h5>Name of candidate</h5>
                <input
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
                value={formData.name}
                />
                </div>
                <div className="form-item">
                <h5>Father's Name</h5>
                <input
                type="text"
                placeholder="Enter Father's Name"
                onChange={handleChange}
                name="fatherName"
                value={formData.fatherName}
                />
                </div>
                <div className="form-item">
                <h5>Mother's Name</h5>
                <input
                type="text"
                placeholder="Enter Mother's Name"
                onChange={handleChange}
                name="motherName"
                value={formData.motherName}
                />
                </div>
                <div className="form-item">
                <h5>Category</h5>
                <input
                type="text"
                placeholder="Enter your Category"
                onChange={handleChange}
                name="category"
                value={formData.category}
                />
                </div>
                <div className="form-item">
                <h5>Date of birth</h5>
                <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                />
                </div>
                <div className="form-item">
                <h5>Gender</h5>
                <div className="radio">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleChange}
                    /><label>
                    Male
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleChange}
                    /><label>
                    Female
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="Others"
                      checked={formData.gender === "Other"}
                      onChange={handleChange}
                    /><label>
                    Others
                    </label>
                </div>
                </div>
            </div>
            <img src={myImage6} className="img2" alt="Couldn't load images"></img>
            </div>
          <div className="cd">
          <div className="contact-details">
                  <h3>Contact details</h3>
                  <div className="form-item">
                  <h5>Phone number</h5>
                  <input
                  type="number"
                  placeholder="Enter Phone no."
                  onChange={handleChange}
                  name="Phoneno"
                  value={formData.Phoneno}
                  />
                  </div>
                  <div className="form-item">
                  <h5>Email</h5>
                  <input
                  type="text"
                  placeholder="Enter your Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  />
                  </div>
                  <div className="form-item">
                  <h5>Address line 1</h5>
                  <input
                  type="text"
                  placeholder="Adress line 1"
                  onChange={handleChange}
                  name="Address1"
                  value={formData.Address1}
                  />
                  </div>
                  <div className="form-item">
                  <h5>Address line 2</h5>
                  <input
                  type="text"
                  placeholder="Address line 2"
                  onChange={handleChange}
                  name="Address2"
                  value={formData.Address2}
                  />
                  </div>
                  <div className="form-item">
                  <h5>District</h5>
                  <input
                  type="text"
                  placeholder="Enter district"
                  onChange={handleChange}
                  name="district"
                  value={formData.district}
                  />
                  </div>
                  <div className="form-item">
                  <h5>City</h5>
                  <input
                  type="text"
                  placeholder="Enter city"
                  onChange={handleChange}
                  name="city"
                  value={formData.city}
                  />
                  </div>
                  <div className="form-item">
                  <h5>State</h5>
                  <input
                  type="text"
                  placeholder="Enter state"
                  onChange={handleChange}
                  name="state"
                  value={formData.state}
                  />
                  </div>
                  <div className="form-item">
                  <h5>Country</h5>
                  <select className="form-item" value={formData.country} name="country" onChange={handleChange}>
                          <option value="Afghanistan">Afghanistan</option> <option value="Åland Islands">Åland Islands</option> <option value="Albania">Albania</option> <option value="Algeria">Algeria</option> <option value="American Samoa">American Samoa</option> <option value="Andorra">Andorra</option> <option value="Angola">Angola</option> <option value="Anguilla">Anguilla</option> <option value="Antarctica">Antarctica</option> <option value="Antigua and Barbuda">Antigua and Barbuda</option> <option value="Argentina">Argentina</option> <option value="Armenia">Armenia</option> <option value="Aruba">Aruba</option> <option value="Australia">Australia</option> <option value="Austria">Austria</option> <option value="Azerbaijan">Azerbaijan</option> <option value="Bahamas">Bahamas</option> <option value="Bahrain">Bahrain</option> <option value="Bangladesh">Bangladesh</option> <option value="Barbados">Barbados</option> <option value="Belarus">Belarus</option> <option value="Belgium">Belgium</option> <option value="Belize">Belize</option> <option value="Benin">Benin</option> <option value="Bermuda">Bermuda</option> <option value="Bhutan">Bhutan</option> <option value="Bolivia">Bolivia</option> <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option> <option value="Botswana">Botswana</option> <option value="Bouvet Island">Bouvet Island</option> <option value="Brazil">Brazil</option> <option value="British Indian Ocean Territory">British Indian Ocean Territory</option> <option value="Brunei Darussalam">Brunei Darussalam</option> <option value="Bulgaria">Bulgaria</option> <option value="Burkina Faso">Burkina Faso</option> <option value="Burundi">Burundi</option> <option value="Cambodia">Cambodia</option> <option value="Cameroon">Cameroon</option> <option value="Canada">Canada</option> <option value="Cape Verde">Cape Verde</option> <option value="Cayman Islands">Cayman Islands</option> <option value="Central African Republic">Central African Republic</option> <option value="Chad">Chad</option> 
                          <option value="Chile">Chile</option> <option value="China">China</option> <option value="Christmas Island">Christmas Island</option> <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option> <option value="Colombia">Colombia</option> <option value="Comoros">Comoros</option> <option value="Congo">Congo</option> <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option> <option value="Cook Islands">Cook Islands</option> <option value="Costa Rica">Costa Rica</option> <option value="Cote D'ivoire">Cote D'ivoire</option> <option value="Croatia">Croatia</option> <option value="Cuba">Cuba</option> <option value="Cyprus">Cyprus</option> <option value="Czech Republic">Czech Republic</option> <option value="Denmark">Denmark</option> <option value="Djibouti">Djibouti</option> <option value="Dominica">Dominica</option> <option value="Dominican Republic">Dominican Republic</option> <option value="Ecuador">Ecuador</option> <option value="Egypt">Egypt</option> <option value="El Salvador">El Salvador</option> <option value="Equatorial Guinea">Equatorial Guinea</option> <option value="Eritrea">Eritrea</option> <option value="Estonia">Estonia</option> <option value="Ethiopia">Ethiopia</option> <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option> <option value="Faroe Islands">Faroe Islands</option> <option value="Fiji">Fiji</option> <option value="Finland">Finland</option> <option value="France">France</option> <option value="French Guiana">French Guiana</option> <option value="French Polynesia">French Polynesia</option> <option value="French Southern Territories">French Southern Territories</option> <option value="Gabon">Gabon</option> <option value="Gambia">Gambia</option> <option value="Georgia">Georgia</option> <option value="Germany">Germany</option> <option value="Ghana">Ghana</option> <option value="Gibraltar">Gibraltar</option> <option value="Greece">Greece</option> <option value="Greenland">Greenland</option> <option value="Grenada">Grenada</option> <option value="Guadeloupe">Guadeloupe</option> <option value="Guam">Guam</option> 
                          <option value="Guatemala">Guatemala</option> <option value="Guernsey">Guernsey</option> <option value="Guinea">Guinea</option> <option value="Guinea-bissau">Guinea-bissau</option> <option value="Guyana">Guyana</option> <option value="Haiti">Haiti</option> <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option> <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option> <option value="Honduras">Honduras</option> <option value="Hong Kong">Hong Kong</option> <option value="Hungary">Hungary</option> <option value="Iceland">Iceland</option> <option value="India">India</option> <option value="Indonesia">Indonesia</option> <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option> <option value="Iraq">Iraq</option> <option value="Ireland">Ireland</option> <option value="Isle of Man">Isle of Man</option> <option value="Israel">Israel</option> <option value="Italy">Italy</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Jersey">Jersey</option> <option value="Jordan">Jordan</option> <option value="Kazakhstan">Kazakhstan</option> <option value="Kenya">Kenya</option> <option value="Kiribati">Kiribati</option> <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option> <option value="Korea, Republic of">Korea, Republic of</option> <option value="Kuwait">Kuwait</option> <option value="Kyrgyzstan">Kyrgyzstan</option> <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option> <option value="Latvia">Latvia</option> <option value="Lebanon">Lebanon</option> <option value="Lesotho">Lesotho</option> <option value="Liberia">Liberia</option> <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option> <option value="Liechtenstein">Liechtenstein</option> <option value="Lithuania">Lithuania</option> <option value="Luxembourg">Luxembourg</option> <option value="Macao">Macao</option> <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option> <option value="Madagascar">Madagascar</option> <option value="Malawi">Malawi</option> 
                          <option value="Malaysia">Malaysia</option> <option value="Maldives">Maldives</option> <option value="Mali">Mali</option> <option value="Malta">Malta</option> <option value="Marshall Islands">Marshall Islands</option> <option value="Martinique">Martinique</option> <option value="Mauritania">Mauritania</option> <option value="Mauritius">Mauritius</option> <option value="Mayotte">Mayotte</option> <option value="Mexico">Mexico</option> <option value="Micronesia, Federated States of">Micronesia, Federated States of</option> <option value="Moldova, Republic of">Moldova, Republic of</option> <option value="Monaco">Monaco</option> <option value="Mongolia">Mongolia</option> <option value="Montenegro">Montenegro</option> <option value="Montserrat">Montserrat</option> <option value="Morocco">Morocco</option> <option value="Mozambique">Mozambique</option> <option value="Myanmar">Myanmar</option> <option value="Namibia">Namibia</option> <option value="Nauru">Nauru</option> <option value="Nepal">Nepal</option> <option value="Netherlands">Netherlands</option> <option value="Netherlands Antilles">Netherlands Antilles</option> <option value="New Caledonia">New Caledonia</option> <option value="New Zealand">New Zealand</option> <option value="Nicaragua">Nicaragua</option> <option value="Niger">Niger</option> <option value="Nigeria">Nigeria</option> <option value="Niue">Niue</option> <option value="Norfolk Island">Norfolk Island</option> <option value="Northern Mariana Islands">Northern Mariana Islands</option> <option value="Norway">Norway</option> <option value="Oman">Oman</option> <option value="Pakistan">Pakistan</option> <option value="Palau">Palau</option> <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option> <option value="Panama">Panama</option> <option value="Papua New Guinea">Papua New Guinea</option> <option value="Paraguay">Paraguay</option> <option value="Peru">Peru</option> <option value="Philippines">Philippines</option> <option value="Pitcairn">Pitcairn</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="Puerto Rico">Puerto Rico</option> <option value="Qatar">Qatar</option> <option value="Reunion">Reunion</option> <option value="Romania">Romania</option> 
                          <option value="Russian Federation">Russian Federation</option> <option value="Rwanda">Rwanda</option> <option value="Saint Helena">Saint Helena</option> <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option> <option value="Saint Lucia">Saint Lucia</option> <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option> <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option> <option value="Samoa">Samoa</option> <option value="San Marino">San Marino</option> <option value="Sao Tome and Principe">Sao Tome and Principe</option> <option value="Saudi Arabia">Saudi Arabia</option> <option value="Senegal">Senegal</option> <option value="Serbia">Serbia</option> <option value="Seychelles">Seychelles</option> <option value="Sierra Leone">Sierra Leone</option> <option value="Singapore">Singapore</option> <option value="Slovakia">Slovakia</option> <option value="Slovenia">Slovenia</option> <option value="Solomon Islands">Solomon Islands</option> <option value="Somalia">Somalia</option> <option value="South Africa">South Africa</option> <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option> <option value="Spain">Spain</option> <option value="Sri Lanka">Sri Lanka</option> <option value="Sudan">Sudan</option> <option value="Suriname">Suriname</option> <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option> <option value="Swaziland">Swaziland</option> <option value="Sweden">Sweden</option> <option value="Switzerland">Switzerland</option> <option value="Syrian Arab Republic">Syrian Arab Republic</option> <option value="Taiwan">Taiwan</option>
                          <option value="Tajikistan">Tajikistan</option> <option value="Tanzania, United Republic of">Tanzania, United Republic of</option> <option value="Thailand">Thailand</option> <option value="Timor-leste">Timor-leste</option> <option value="Togo">Togo</option> <option value="Tokelau">Tokelau</option> <option value="Tonga">Tonga</option> <option value="Trinidad and Tobago">Trinidad and Tobago</option> <option value="Tunisia">Tunisia</option> <option value="Turkey">Turkey</option> <option value="Turkmenistan">Turkmenistan</option> <option value="Turks and Caicos Islands">Turks and Caicos Islands</option> <option value="Tuvalu">Tuvalu</option> <option value="Uganda">Uganda</option> <option value="Ukraine">Ukraine</option> <option value="United Arab Emirates">United Arab Emirates</option> <option value="United Kingdom">United Kingdom</option> <option value="United States">United States</option> <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option> <option value="Uruguay">Uruguay</option> <option value="Uzbekistan">Uzbekistan</option> <option value="Vanuatu">Vanuatu</option> <option value="Venezuela">Venezuela</option> <option value="Viet Nam">Viet Nam</option> <option value="Virgin Islands, British">Virgin Islands, British</option> <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option> <option value="Wallis and Futuna">Wallis and Futuna</option> <option value="Western Sahara">Western Sahara</option> <option value="Yemen">Yemen</option> <option value="Zambia">Zambia</option> <option value="Zimbabwe">Zimbabwe</option>
                      </select>
                  </div>
                  <div className="form-item">
                  <h5>Pin code</h5>
                  <input
                  type="text"
                  placeholder="Enter your Pincode"
                  onChange={handleChange}
                  name="pin"
                  value={formData.pin}
                  />
                  </div>
            </div>
          <img src={myImage5} className="img5" alt="Couldn't load images"></img>  
          </div>
          <div className="qd">
          <div className="Qualification">
                <h3>Qualification Details</h3>
                <div className="form-item">
                <h5>Class X Percentage</h5>
                <input
                type="number"
                placeholder="Enter class X Percentage"
                max="100"
                onChange={handleChange}
                name="Xmarks"
                value={formData.Xmarks}
                />
                </div><div className="form-item">
                <h5>X Board</h5>
                <input
                type="text"
                placeholder="Enter name of class X Board"
                onChange={handleChange}
                name="Xboard"
                value={formData.Xboard}
                />
                </div><div className="form-item">
                <h5>Class XII Percentage</h5>
                <input
                type="number"
                max="100"
                placeholder="Enter class XII Percentage"
                onChange={handleChange}
                name="XIImarks"
                value={formData.XIImarks}
                />
                </div>
                <div className="form-item">
                <h5>XII Board</h5>
                <input
                type="text"
                placeholder="Enter name of class XII Board"
                onChange={handleChange}
                name="XIIboard"
                value={formData.XIIboard}
                />
                </div>
                <div className="form-item">
                <h5>JEE Rank</h5>
                <input
                type="number"
                placeholder="Enter Your JEE Rank"
                onChange={handleChange}
                name="JEE"
                value={formData.JEE}
                />
                </div>
            </div>
            <img src={myImage4} className="img4" alt="Couldn't load images"></img>
          </div> 
            </form>
            <button className="btn-reset" onClick={handleReset}>Reset</button>
            <Link to={isFormValid ?"/submit":"/"} state={{formData}}className="btn-submit" disabled={!isFormValid} onClick={handleUnfilledSubmit}>Submit</Link>
        </div>
        {/* <div className="footer">
        this is footer
        </div> */}
        </div>
      );
}
export default Fill
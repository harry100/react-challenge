import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import PropTypes from 'prop-types';

//Input fields
import TextField from '../common/TextFieldGroup';

// css for datepicker
import "react-datepicker/dist/react-datepicker.css";

class FormElements extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      address: '',
      institution: '',
      nationality: '',
      degree:'',
      gender: '',
      modeOfContact: ''
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    const { errors } = this.props;

    return(
      <>
        <h3 className="form-head"> Enter all <span style={{color: "red"}}> * </span> fields </h3>
        <form onSubmit={this.props.handleSubmit(this.state)} className="form-container">
            <div className="form-group row form-wrapper">
              <label
                htmlFor="inputName"className="col-sm-2 col-form-label">
                  Name <span style={{color:"red"}}> * </span>
                </label>
              <div className="col-sm-6">
                <TextField
                  type="text"
                  id="inputName"
                  placeholder="eg. John Doe"
                  onChange={this.onChange}
                  name="name"
                  value={this.state.name}
                  error={errors.name}
                />
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputNumber" className="col-sm-2 col-form-label">
                Phone <span style={{color:"red"}}> * </span>
              </label>
              <div className="col-sm-6">
                <TextField
                  type="number"
                  id="inputNumber"
                  placeholder="eg. 9810098200"
                  onChange={this.onChange}
                  name="phone"
                  value={this.state.phone}
                  error={errors.phone}
                />
              </div>
            </div>

            <fieldset className="form-group">
               <div className="row form-wrapper">
                <legend className="col-form-label col-sm-2 pt-0">
                  Gender <span style={{color:"red"}}> * </span>
                </legend>
                <div className="col-sm-6">
                  <div
                    className="form-check form-check-inline alignment"
                    onChange={this.onChange}
                  >
                    <input
                      className="form-check-input ml-2"
                      type="radio"
                      name="gender"
                      id="inlineRadio1"
                      value="male"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1"> Male </label>

                    <input
                      className="form-check-input ml-2"
                      type="radio" name="gender"
                      id="inlineRadio2"
                      value="female"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2"> Female </label>

                    <input
                      className="form-check-input ml-2"
                      type="radio"
                      name="gender"
                      id="inlineRadio3"
                      value="other"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3"> Other </label>
                  </div>
                  {errors.gender && <div className="error-message"> {errors.gender} </div>}
                </div>

              </div>
            </fieldset>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email <span style={{color:"red"}}> * </span>
              </label>
              <div className="col-sm-6">
                <TextField
                  type="email"
                  id="inputEmail3"
                  placeholder="eg. johndoe@email.com"
                  onChange={this.onChange}
                  name="email"
                  value={this.state.email}
                  error={errors.email}
                />
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Address <span style={{color:"red"}}> * </span>
              </label>
              <div className="col-sm-6">
                <TextField
                  type="text"
                  id="inputAddress"
                  placeholder="eg. Kathmandu"
                  onChange={this.onChange}
                  name="address"
                  value={this.state.address}
                  error={errors.address}
                />
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="natiolality" className="col-sm-2 col-form-label">
                Nationality <span style={{color:"red"}}> * </span>
              </label>
              <div className="col-sm-6">
                <select
                  className="custom-select form-control"
                  id="nationality"
                  name="nationality"
                  onChange={this.onChange}
                  >
                  <option value="">-- select one --</option>
                  <option value="afghan">Afghan</option>
                  <option value="albanian">Albanian</option>
                  <option value="algerian">Algerian</option>
                  <option value="american">American</option>
                  <option value="andorran">Andorran</option>
                  <option value="angolan">Angolan</option>
                  <option value="antiguans">Antiguans</option>
                  <option value="argentinean">Argentinean</option>
                  <option value="armenian">Armenian</option>
                  <option value="australian">Australian</option>
                  <option value="austrian">Austrian</option>
                  <option value="azerbaijani">Azerbaijani</option>
                  <option value="bahamian">Bahamian</option>
                  <option value="bahraini">Bahraini</option>
                  <option value="bangladeshi">Bangladeshi</option>
                  <option value="barbadian">Barbadian</option>
                  <option value="barbudans">Barbudans</option>
                  <option value="batswana">Batswana</option>
                  <option value="belarusian">Belarusian</option>
                  <option value="belgian">Belgian</option>
                  <option value="belizean">Belizean</option>
                  <option value="beninese">Beninese</option>
                  <option value="bhutanese">Bhutanese</option>
                  <option value="bolivian">Bolivian</option>
                  <option value="bosnian">Bosnian</option>
                  <option value="brazilian">Brazilian</option>
                  <option value="british">British</option>
                  <option value="bruneian">Bruneian</option>
                  <option value="bulgarian">Bulgarian</option>
                  <option value="burkinabe">Burkinabe</option>
                  <option value="burmese">Burmese</option>
                  <option value="burundian">Burundian</option>
                  <option value="cambodian">Cambodian</option>
                  <option value="cameroonian">Cameroonian</option>
                  <option value="canadian">Canadian</option>
                  <option value="cape verdean">Cape Verdean</option>
                  <option value="central african">Central African</option>
                  <option value="chadian">Chadian</option>
                  <option value="chilean">Chilean</option>
                  <option value="chinese">Chinese</option>
                  <option value="colombian">Colombian</option>
                  <option value="comoran">Comoran</option>
                  <option value="congolese">Congolese</option>
                  <option value="costa rican">Costa Rican</option>
                  <option value="croatian">Croatian</option>
                  <option value="cuban">Cuban</option>
                  <option value="cypriot">Cypriot</option>
                  <option value="czech">Czech</option>
                  <option value="danish">Danish</option>
                  <option value="djibouti">Djibouti</option>
                  <option value="dominican">Dominican</option>
                  <option value="dutch">Dutch</option>
                  <option value="east timorese">East Timorese</option>
                  <option value="ecuadorean">Ecuadorean</option>
                  <option value="egyptian">Egyptian</option>
                  <option value="emirian">Emirian</option>
                  <option value="equatorial guinean">Equatorial Guinean</option>
                  <option value="eritrean">Eritrean</option>
                  <option value="estonian">Estonian</option>
                  <option value="ethiopian">Ethiopian</option>
                  <option value="fijian">Fijian</option>
                  <option value="filipino">Filipino</option>
                  <option value="finnish">Finnish</option>
                  <option value="french">French</option>
                  <option value="gabonese">Gabonese</option>
                  <option value="gambian">Gambian</option>
                  <option value="georgian">Georgian</option>
                  <option value="german">German</option>
                  <option value="ghanaian">Ghanaian</option>
                  <option value="greek">Greek</option>
                  <option value="grenadian">Grenadian</option>
                  <option value="guatemalan">Guatemalan</option>
                  <option value="guinea-bissauan">Guinea-Bissauan</option>
                  <option value="guinean">Guinean</option>
                  <option value="guyanese">Guyanese</option>
                  <option value="haitian">Haitian</option>
                  <option value="herzegovinian">Herzegovinian</option>
                  <option value="honduran">Honduran</option>
                  <option value="hungarian">Hungarian</option>
                  <option value="icelander">Icelander</option>
                  <option value="indian">Indian</option>
                  <option value="indonesian">Indonesian</option>
                  <option value="iranian">Iranian</option>
                  <option value="iraqi">Iraqi</option>
                  <option value="irish">Irish</option>
                  <option value="israeli">Israeli</option>
                  <option value="italian">Italian</option>
                  <option value="ivorian">Ivorian</option>
                  <option value="jamaican">Jamaican</option>
                  <option value="japanese">Japanese</option>
                  <option value="jordanian">Jordanian</option>
                  <option value="kazakhstani">Kazakhstani</option>
                  <option value="kenyan">Kenyan</option>
                  <option value="kittian and nevisian">Kittian and Nevisian</option>
                  <option value="kuwaiti">Kuwaiti</option>
                  <option value="kyrgyz">Kyrgyz</option>
                  <option value="laotian">Laotian</option>
                  <option value="latvian">Latvian</option>
                  <option value="lebanese">Lebanese</option>
                  <option value="liberian">Liberian</option>
                  <option value="libyan">Libyan</option>
                  <option value="liechtensteiner">Liechtensteiner</option>
                  <option value="lithuanian">Lithuanian</option>
                  <option value="luxembourger">Luxembourger</option>
                  <option value="macedonian">Macedonian</option>
                  <option value="malagasy">Malagasy</option>
                  <option value="malawian">Malawian</option>
                  <option value="malaysian">Malaysian</option>
                  <option value="maldivan">Maldivan</option>
                  <option value="malian">Malian</option>
                  <option value="maltese">Maltese</option>
                  <option value="marshallese">Marshallese</option>
                  <option value="mauritanian">Mauritanian</option>
                  <option value="mauritian">Mauritian</option>
                  <option value="mexican">Mexican</option>
                  <option value="micronesian">Micronesian</option>
                  <option value="moldovan">Moldovan</option>
                  <option value="monacan">Monacan</option>
                  <option value="mongolian">Mongolian</option>
                  <option value="moroccan">Moroccan</option>
                  <option value="mosotho">Mosotho</option>
                  <option value="motswana">Motswana</option>
                  <option value="mozambican">Mozambican</option>
                  <option value="namibian">Namibian</option>
                  <option value="nauruan">Nauruan</option>
                  <option value="nepalese">Nepalese</option>
                  <option value="new zealander">New Zealander</option>
                  <option value="ni-vanuatu">Ni-Vanuatu</option>
                  <option value="nicaraguan">Nicaraguan</option>
                  <option value="nigerien">Nigerien</option>
                  <option value="north korean">North Korean</option>
                  <option value="northern irish">Northern Irish</option>
                  <option value="norwegian">Norwegian</option>
                  <option value="omani">Omani</option>
                  <option value="pakistani">Pakistani</option>
                  <option value="palauan">Palauan</option>
                  <option value="panamanian">Panamanian</option>
                  <option value="papua new guinean">Papua New Guinean</option>
                  <option value="paraguayan">Paraguayan</option>
                  <option value="peruvian">Peruvian</option>
                  <option value="polish">Polish</option>
                  <option value="portuguese">Portuguese</option>
                  <option value="qatari">Qatari</option>
                  <option value="romanian">Romanian</option>
                  <option value="russian">Russian</option>
                  <option value="rwandan">Rwandan</option>
                  <option value="saint lucian">Saint Lucian</option>
                  <option value="salvadoran">Salvadoran</option>
                  <option value="samoan">Samoan</option>
                  <option value="san marinese">San Marinese</option>
                  <option value="sao tomean">Sao Tomean</option>
                  <option value="saudi">Saudi</option>
                  <option value="scottish">Scottish</option>
                  <option value="senegalese">Senegalese</option>
                  <option value="serbian">Serbian</option>
                  <option value="seychellois">Seychellois</option>
                  <option value="sierra leonean">Sierra Leonean</option>
                  <option value="singaporean">Singaporean</option>
                  <option value="slovakian">Slovakian</option>
                  <option value="slovenian">Slovenian</option>
                  <option value="solomon islander">Solomon Islander</option>
                  <option value="somali">Somali</option>
                  <option value="south african">South African</option>
                  <option value="south korean">South Korean</option>
                  <option value="spanish">Spanish</option>
                  <option value="sri lankan">Sri Lankan</option>
                  <option value="sudanese">Sudanese</option>
                  <option value="surinamer">Surinamer</option>
                  <option value="swazi">Swazi</option>
                  <option value="swedish">Swedish</option>
                  <option value="swiss">Swiss</option>
                  <option value="syrian">Syrian</option>
                  <option value="taiwanese">Taiwanese</option>
                  <option value="tajik">Tajik</option>
                  <option value="tanzanian">Tanzanian</option>
                  <option value="thai">Thai</option>
                  <option value="togolese">Togolese</option>
                  <option value="tongan">Tongan</option>
                  <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                  <option value="tunisian">Tunisian</option>
                  <option value="turkish">Turkish</option>
                  <option value="tuvaluan">Tuvaluan</option>
                  <option value="ugandan">Ugandan</option>
                  <option value="ukrainian">Ukrainian</option>
                  <option value="uruguayan">Uruguayan</option>
                  <option value="uzbekistani">Uzbekistani</option>
                  <option value="venezuelan">Venezuelan</option>
                  <option value="vietnamese">Vietnamese</option>
                  <option value="welsh">Welsh</option>
                  <option value="yemenite">Yemenite</option>
                  <option value="zambian">Zambian</option>
                  <option value="zimbabwean">Zimbabwean</option>
                </select>
                {errors.nationality && <div className="error-message"> {errors.nationality} </div>}
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputDate" className="col-sm-2 col-form-label">
                Date of Birth <span style={{color:"red"}}> * </span>
              </label>
              <div className="col-sm-6 datepicker-container">
                <DatePicker
                  selected={this.props.date}
                  onChange={this.props.handleDateChange}
                  className="form-control col-sm-12"
                />
              {errors.date && <div className="error-message"> {errors.date} </div>}
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputDegree" className="col-sm-2 col-form-label"> Degree </label>
              <div className="col-sm-6">
                <select
                  className="custom-select form-control"
                  id="degree"
                  name="degree"
                  onChange={this.onChange}
                >
                    <option value="">-- select one --</option>
                    <option value="Ph. D"> Ph. D </option>
                    <option value="Masters">Masters</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="S.L.C.">S.L.C.</option>
                    <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="inputInstitution" className="col-sm-2 col-form-label"> Institiution </label>
              <div className="col-sm-6">
                <TextField
                  type="text"
                  id="inputInstitution"
                  placeholder="eg. Himalaya College of Engineering"
                  onChange={this.onChange}
                  name='institution'
                  value={this.state.institution}
                />
              </div>
            </div>

            <div className="form-group row form-wrapper">
              <label htmlFor="contact" className="col-sm-2 col-form-label"> Preferred mode of contact </label>
              <div className="col-sm-6">
                <select
                  className="custom-select form-control"
                  id="contact"
                  name="modeOfContact"
                  onChange={this.onChange}
                >
                  <option value="">-- select one --</option>
                  <option value={this.state.phone}> Phone </option>
                  <option value={this.state.email}> Email </option>
                  <option value="">None</option>
                </select>
              </div>
            </div>

            <input
              className="btn btn-primary"
              type="submit"
              name="submit"
            />

          </form>
        </>
    )
  }
}

FormElements.propTypes = {
  date: PropTypes.instanceOf(Date),
  handleSubmit: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
}

export default FormElements;

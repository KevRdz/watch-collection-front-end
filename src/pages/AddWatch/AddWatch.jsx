import { useState, useRef, useEffect } from "react"
import { useNavigate } from "react-router-dom"



function AddWatch(props) {
  const [formData, setFormData] = useState({
    brand: "",
    style: "",
    movement: "",
    functionality: "",
    features: "",
  })

  const [photoData, setPhotoData] = useState({})
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  const navigate = useNavigate()

  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    props.handleAddWatch(formData, photoData.photo)
    navigate('/watch')
  }

  const handleChangePhoto = e => {
    setPhotoData({photo: e.target.files[0]})
  }

  return (
    <div>
      <h1>Add Watch</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="brand-name" className="form-label">
            Watch Brand:
          </label>
          <input 
            type="text" 
            className="form-control" 
            id="brand-name" 
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            required 
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="style-input" className="form-label">
            Watch Style:
          </label>
          <select
            className="form-control"
            name="style" 
            id="style-input"
            value={formData.style}
            onChange={handleChange}
            required
          >
            <option value="">Please Choose an Option</option>
            <option value="Dress">Dress</option>
            <option value="Diver">Diver</option>
            <option value="Sport/Work">Sport/Work</option>
            <option value="Field">Field</option>
            <option value="Smart">Smart</option>
            <option value="Aviator">Aviator</option>
            <option value="Military">Military</option>
            <option value="Luxury">Luxury</option>
            <option value="Racing">Racing</option>
            <option value="Fashion">Fashion</option>
            <option value="Fitness">Fitness</option>
            <option value="Pocket">Pocket</option>
            <option value="Nurse">Nurse</option>
            <option value="Wood">Wood</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="movement-input" className="form-label">
            Watch Movement:
          </label>
          <select
            className="form-control"
            name="movement" 
            id="movement-input"
            value={formData.movement}
            onChange={handleChange}
            required
          >
            <option value="">Please Choose an Option</option>
            <option value="Mechanical">Mechanical</option>
            <option value="Automatic">Automatic</option>
            <option value="Quartz">Quartz</option>
            <option value="Solar">Solar</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="functionality-input" className="form-label">
            Watch Functionality:
          </label>
          <select
            className="form-control"
            name="functionality" 
            id="functionality-input"
            value={formData.functionality}
            onChange={handleChange}
            required
          >
            <option value="">Please Choose an Option</option>
            <option value="Analogue">Analogue</option>
            <option value="Digital">Digital</option>
            <option value="Chronograph">Chronograph</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="feature-input" className="form-label text-area">
            Other Features:
          </label>
          <textarea
            rows={6}
            cols={50}
            type="text"
            className="form-control text-area" 
            id="feature-input" 
            name="features"
            value={formData.features}
            onChange={handleChange}
          >
          </textarea>
        </div>
        <div>
          <label htmlFor="photo-upload" className="form-label">
            Upload Photo
          </label>
          <input 
            type="file"
            className="form-control"
            id="photo-upload"
            name="photo"
            onChange={handleChangePhoto}
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary-btn-fluid" disabled={!validForm}>
            Add Watch
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddWatch
import React, {useState} from 'react'
import { BusinessCard } from './BusinessCard'
import "./App.css";  
function App() {
  const[formData, setFormData] = useState({
    name: "",
    description: "",
    linkedin: "",
    twitter: "",
    otherSocialMedia: "",
    interests: [""],
  });

  const[cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleInterestsChange =(index, value) => {
    const updatedInterests = [...formData.interests];
    updatedInterests[index] = value;
    setFormData({...formData, interests: updatedInterests});
  };

  const addInterestField = () => {
    setFormData({...formData, interests: [...formData.interests, ""]});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCards([...cards, formData]);
    setFormData({
      name: "",
      description: "",
      linkedin: "",
      twitter: "",
      otherSocialMedia: "",
      interests: [""],
    });
  };

  return (
    <div className="container">
      <h1>Business Card App</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input
          type="text"
          name= "name"
          placeholder='Name'
          value={formData.name}
          onChange={handleInputChange}
          required
        /> <br />
        <textarea
          name="description"
          placeholder='Description'
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        
        <input
          type="url"
          name="linkedin"
          placeholder='LinkedIn URL'
          value={formData.linkedin}
          onChange={handleInputChange}
          required
        />
        < br />
        <input
          type="url"
          name= "twitter"
          placeholder='Twitter URL'
          value={formData.twitter}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="otherSocialMedia"
          placeholder="Other Social Media URL"
          value={formData.otherSocialMedia}
          onChange={handleInputChange}
        />

        <h4>Interests: </h4>
        {formData.interests.map((interest, index) => (
          <div key = {index}>
            <input
              type = "text"
              placeholder="Interest"
              value={interest}
              onChange={(e) => handleInterestsChange(index, e.target.value)}
              required
             />
          </div>    
        ))}
        <button type="button" onClick={addInterestField}>Add Interest</button> 
        <button type="submit">Add Card</button>
      </form>
      <div className="cards-container">
        {cards.map((card, index) => (
          <BusinessCard
            key={index}
            name={card.name}
            description={card.description}
            linkedin={card.linkedin}
            twitter={card.twitter}
            otherSocialMedia={card.otherSocialMedia}
            interests={card.interests}
          />

        ))}
      </div>
    </div>
  );
}

export default App

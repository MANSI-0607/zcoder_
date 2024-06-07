import React,{useState} from 'react'
import Select from 'react-select';
import './EditDetails.css'
const EditDetails = () => {
    
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [institute, setInstituteName] = useState('');
    const [gender, setGender] = useState('');
    const [about, setAbout] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [github, setGithub] = useState('');
    const [languages, setLanguages] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [profilePicture, setProfilePicture] = useState('');
    const [codeforcesId, setCodeforcesId] = useState('');
    const [leetcodeId, setLeetcodeId] = useState('');
    const [codechefId, setCodechefId] = useState('');
    const [geeksforgeeksId, setGeeksforgeeksId] = useState('');
    const [codeforcesRating, setCodeforcesRating] = useState('');
    const [leetcodeRating, setLeetcodeRating] = useState('');
    const [codechefRating, setCodechefRating] = useState('');
    const [geeksforgeeksRating, setGeeksforgeeksRating] = useState('');
    
    const languageOptions = [
      { value: 'C++', label: 'C++' },
      { value: 'C', label: 'C' },
      { value: 'JavaScript', label: 'JavaScript' },
      { value: 'Python', label: 'Python' },
      { value: 'Java', label: 'Java' },
      { value: 'Kotlin', label: 'Kotlin' },
      // Add more options for other coding languages
    ];

    const techSkillsOptions = [
      { value: 'HTML', label: 'HTML' },
      { value: 'CSS', label: 'CSS' },
      { value: 'NODE JS', label: 'NODE JS' },
      { value: 'React', label: 'React' },
      { value: 'ANGULAR', label: 'ANGULAR' },
      { value: 'FLUTTER', label: 'FLUTTER' },
      // Add more skills as needed
    ]; 
    const handleSkillChange = (selectedOptions) => {
      setSelectedSkills(selectedOptions);
    };
  
  
    // Handler for language selection
    const handleLanguageChange = (selectedOptions) => {
      setLanguages(selectedOptions);
    };
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add logic to handle form submission (e.g., update user profile details)
        };
    
  return (
    <div className="edit-profile">
      <h2>Edit Profile</h2>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <label>
          Profile Picture:
          <input type="file" accept="image/*" onChange={(e) => setProfilePicture(e.target.files[0])} />
        </label>
        <label>
          Institute Name:
          <input type="text" value={institute} onChange={(e) => setInstituteName(e.target.value)} />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          About (*Max Character limit:200):
          <textarea value={about} onChange={(e) => setAbout(e.target.value)} />
        </label>
        <label>
          LinkedIn ID:
          <input type="text" value={linkedin} onChange={(e) => setLinkedin(e.target.value)} />
        </label>
        <label>
          GitHub ID:
          <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </label>
       
          <label>
          Languages:
          <Select
            isMulti
            value={languages}
            onChange={handleLanguageChange}
            options={languageOptions}
          />
        </label>
        
        <label>
          Skills:
          <Select
            value={selectedSkills}
            onChange={handleSkillChange}
            options={techSkillsOptions}
            isMulti
          />
        </label>
        <h3>Coding Platforms</h3>
        <div className='codingsites'>
           
            <div className='ids'>
              <label>
             Codeforces ID:
              <input type="text" value={codeforcesId} onChange={(e) => setCodeforcesId(e.target.value)} />
                </label>
               
                <label>
                    Codechef ID:
                    <input type="text" value={codechefId} onChange={(e) => setCodechefId(e.target.value)} />
                </label>
                <label>
                    LeetCode ID:
                    <input type="text" value={leetcodeId} onChange={(e) => setLeetcodeId(e.target.value)} />
                </label>
                <label>
                    GeeksforGeeks ID:
                    <input type="text" value={geeksforgeeksId} onChange={(e) => setGeeksforgeeksId(e.target.value)} />
                </label>
                </div>
                <div className='ratings'>
                <label>
                    Codeforces Rating:
                    <input type="text" value={codeforcesRating} onChange={(e) => setCodeforcesRating(e.target.value)} />
                </label>
                <label>
                    Codechef Rating:
                    <input type="text" value={codechefRating} onChange={(e) => setCodechefRating(e.target.value)} />
                </label>
                <label>
                    LeetCode Rating:
                    <input type="text" value={leetcodeRating} onChange={(e) => setLeetcodeRating(e.target.value)} />
                </label>
                
                <label>
                    GeeksforGeeks Rating:
                    <input type="text" value={geeksforgeeksRating} onChange={(e) => setGeeksforgeeksRating(e.target.value)} />
                </label>
                </div>
                </div>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default EditDetails

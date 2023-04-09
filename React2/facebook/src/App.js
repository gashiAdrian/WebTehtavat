import profiles from './berlin.json';
import './App.css';

export default function FaceBook() {
  return (
    <div>
      {profiles.map((profile, index) => (
        <div key={index} className="profile">
          <img src={profile.img} alt={profile.firstName} />
          <div className="details">
            <p><strong>First name:</strong> {profile.firstName}</p>
            <p><strong>Last name:</strong> {profile.lastName}</p>
            <p><strong>Country:</strong> {profile.country}</p>
            <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
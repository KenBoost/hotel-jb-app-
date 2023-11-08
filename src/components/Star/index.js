import {useState} from 'react'
import './index.scss'
const Star = ({index, onStar, selectedStar})=> { // recibe los props
   
    const[likes, setLikes] = useState(0);
   
    const isSelected = index <= selectedStar
    
    return (
      <div className = {`star ${isSelected ? 'filled' : 'empty'}`} onClick={() => onStar(index)} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
        </svg>
        <button onClick={() => setLikes(likes + 1)}>{likes} Likes</button>
      </div>
    );
  };

export default Star
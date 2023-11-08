import {useState} from "react";
import React from "react";
import './index.scss';
import Star from '../../components/Star';

const Gallery = () => {

    const [selectedStar, setselectedStar] = React.useState(0); //Rastrear la estrella
    
    const onStar = (index) => { //Actualizar ele stado Selected Star 
       
      setselectedStar(index)
      
   }
    return (
      <div className = "App">
        <h1>Hello Keneth!</h1>
        <h2>Your task is to create a star rating system.</h2>
        <p>This should be five stars that are empty to begin.</p>
        <p>
          When a user clicks on a star, it will turn the clicked star and all
          previous stars yellow
        </p>
        <div className = "stars">
        <Star onStar = {onStar}  index= {1}  selectedStar = {selectedStar} />
        <Star onStar = {onStar}  index= {2}  selectedStar = {selectedStar}/>
        <Star onStar = {onStar}  index= {3}  selectedStar = {selectedStar}/>
        <Star onStar = {onStar}  index= {4}  selectedStar = {selectedStar}/>
        <Star onStar = {onStar}  index= {5}  selectedStar = {selectedStar}/>
        </div>
       
      </div>
    );
  };
  
 
export default Gallery;
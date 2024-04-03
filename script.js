@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

#bro {
  margin-left: 0em;
  padding: 5em;
}

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("3.jpg");
  background-position: center;
  background-size: 1700px;
  transition: background 0.5s ease-in-out;
}

header {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  padding: 20px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
}

.logo {
  font-size: 2em;
  color: white;
  user-select: none;
}

.navigation a {
  position: relative;
  font-size: 1.1em;
  color: #fff;
  text-decoration: none;
  font-weight: 500;
  margin-left: 40px;
}

.navigation a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background: #fff;
  border-radius: 5px;
  transform: scaleX(0);
  transition: 0.5s;
}

.navigation a:hover::after {
  transform: scaleX(1);
}

.btn {
  width: 7em;
  height: 2.4rem;
  background: transparent;
  border: 1px solid #000000;
  outline: none;
  margin-top: 1.4rem;
  margin-left: 35%;
  position: relative;
  border-radius: 15px;
  cursor: pointer;
  font-size: 1em;
  color: #000000;
  font-weight: 500;
  transition: 0.5s;
  backdrop-filter: blur(20px);
  display: flex; 
  align-items: center; 
  justify-content: center; 
  transition: ease-out 1.5s;
  transition-delay: 0.5s;
  text-align: center;
}

.btn:hover .arrow {
  opacity: 1;
}

.btn:hover .text {
  opacity: 0;
}

.arrow,
.text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s ease;
  position: center;
}

.arrow {
  right: 47px;
  opacity: 0;
}

.text {
  left: 25px;
  opacity: 1;
}

.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.video-container.active {
  visibility: visible;
  opacity: 1;
}

.video {
  max-width: 90%;
  outline: none;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
  color: white;
}

#bro:hover .btn {
  margin-top: 6rem;
  transition: 0.5s;
}

#bro:hover #title {
  margin-bottom: 5.6rem;
  transition: 0.5s;
}

#bro:hover .image-container {
  transition: opacity 0.5s, visibility 0.5s;
}

#textfor {
  margin-left: 0rem;
  font-size: larger;
  text-align: center;
  transition: 0.5s;
  display: inline-block;
  vertical-align: middle;
}

#texthand {
  margin-left: 5.5rem;
  font-size: larger;
  text-align: center;
  transition: 0.5s;
  display: inline-block;
  vertical-align: middle;
}

.btn:hover {
  background: #ffffff;
  color: 162938;
}

#title {
  text-align: center;
  margin-bottom: 1rem;
  transition: ease-out 1.5s;
  transition-delay: 0.5s;
}

.best-word {
  display: inline;
  position: absolute;
  left: 9rem;
  margin-bottom: 1rem;
}

.vectorword {
  display: inline;
  position: absolute;
  margin-bottom: 1rem;
  transition: 0.5s;
  margin-left: 1.1rem;
  color: #0e042ba7;
  text-shadow: 0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 0.1em #ffffff16;
}

#bro {
  position: relative; 
}

.image-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  width: auto; 
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.3s, visibility 1.5s;
  transition-delay: 0.5s;
}

#one {
  top: calc(50% + 80px);
  left: 5.2rem;
}

#two {
  top: calc(50% - 30px);
  left: 5.2rem;
}

#bro:hover .image-container {
  opacity: 1;
  visibility: visible;
}

.selectable-image {
  flex: 1 0 auto; 
  margin: 2px;
  cursor: pointer;
  transition: border 0.3s ease;
  max-width: 100%; 
  max-height: 70px; 
  object-fit: contain; 
}

.selectable-image {

  border: 3px solid transparent; /* Initially transparent border */
  border-radius: 10px; /* Rounded corners */
  transition: border-color 0.3s ease; /* Smooth transition for border color */
}

.selectable-image.selected {
  border-right: 6px solid #3a3351;
  border-left: 6px solid #3a3351;
  border-top: 4.7px solid #3a3351;
  border-bottom: 4.5px solid #3a3351;
  border-inline-width: 0.33rem;
  border-color: #3a3351; /* Thicker border */
  z-index: 2;
  transition: border-color 0.5s;
  box-shadow: none;
}

.selectable-image.selected:hover {
  box-shadow: 0px 0px 1px black, 0 0 0.1em #c5c0c0c8, 0 0 1.1em red;
}

.selectable-image:hover {
  border-color: #6f3fffa7; /* Lighter border color on hover */
  z-index: 1;
  transition: transform 0.5s;
}

.flip-container {
  display: inline;
  perspective: 1000px;
  transition: transform 0.2s;
}

.flip-content {
  position: relative;
  display: inline;
  transform-style: preserve-3d;
  transition: transform 0.2s;
}

.flip-container:hover .flip-content {
  transform: rotateY(180deg);
  display: inline;
  transition: transform 0.2s;
}

.front,
.back {
  position: absolute;
  display: inline;
  transition: transform 0.2s;
  backface-visibility: hidden;
}

.front {
  z-index: 1;
  display: inline;
  transition: transform 0.2s;
  transform: rotateY(180deg);
}

.back {
  z-index: 2;
  display: inline;
  transform: rotateY(0deg);
  transition: transform 0.2s;
}

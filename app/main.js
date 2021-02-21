window.onload = function() {
    setInterval(getTime, 1000);
};

function getTime(){
	const minuteHand = document.querySelector('.min');
	const hourHand = document.querySelector('.horas');

	const now = new Date();
   

   	/** MINUTES */
  	const minutes = now.getMinutes();
  	/** Get minutes degrees from date */
	const minutesDegrees = -((minutes / 60) * 360) ;
  	minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
   
	/** HOURS */
  	const hours = now.getHours();
  	/** Get hours degrees from date */
  	const hoursDegrees = -((hours / 24) * 360) ;
  	hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
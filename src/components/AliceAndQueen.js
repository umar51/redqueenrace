import React from 'react';
import useWebAnimations from "@wellyshen/use-web-animations";
import './Alice.css';
 

function AliceAndQueen() {

    
         const { ref, playState, getAnimation} = useWebAnimations({
        keyframes : [
            { transform: 'translateY(100%)' },
            { transform: 'translateY(-100%)' }   
          ],
        timing :{
            easing: 'steps(7, end)',
            direction: "reverse",
            duration: 900,
            playbackRate: 1,
            iterations: Infinity
          }

      
    
  });

  return(
    <div>
        <div className="sky"></div>
        <div className="earth">
            <div id="red-queen_and_alice">
                 <img id="red-queen_and_alice_sprite" ref={ref} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."/>
            </div>
        </div>
        
    </div>
)


}

export default AliceAndQueen;
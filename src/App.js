import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import {AnimatePresence, motion, useMotionValue} from "framer-motion";
function App() {

    const [xP1, setXP1] = useState(false)
    const [xP2, setXP2] = useState(false)
    const [xP3, setXP3] = useState(false)

    return (
    <div className="App">
      <header className="App-header">
          <br/>
          <AnimatePresence mode='wait'>
          <motion.ul id="new-challenge-images" key='list' transition={{staggerChildren: 0.1}}>
          <motion.div
               transition={{
                   borderRadius:{duration:3, type:'spring'},
                   x:{duration: 3, type: 'spring'},
                   rotate:{duration: 3, type: 'spring'},
          }}
              whileTap={{
                  scale: 0.9,
                  boxShadow:xP1?"7px 2px  10px black":"-7px 2px 10px black"}}
              whileHover={{
                  scale: 1.1,
                  backgroundColor:"mediumblue",
                  boxShadow: xP1?"15px 2px  12px gray":"-15px 2px 12px gray"}}
               initial={{borderRadius:'100%'}}
              animate={{
                  borderRadius:'0',
                  x:xP1? '85vw': 0,
                  rotate: xP1? '720deg':'360deg',
                  boxShadow:xP1?"10px 2px  10px gray":"-10px 2px 10px gray"}}
              key={"p1"}
              className="p p1" id={'p1'}
               onClick={()=>setXP1(!xP1)}
          >
          </motion.div>

          <motion.li
              whileTap={{
                  scale: 0.9,
                  boxShadow:"-7px 2px  10px black"}}
              whileHover={{
                  scale: 1.1,
                  backgroundColor:"blue",
                  boxShadow:"-15px 2px  12px gray"}}
                  // boxShadow: xP2?"15px 2px  12px gray":"-15px 2px 12px gray"}}
              initial={{borderRadius:'100%'}}
              transition={{
                    borderRadius:{duration:3, type:'spring'},
                    x:{duration: 5, times: [0, 0.3, 0.7, 1], repeatDelay: 2, repeat: Infinity},
                    rotate:xP2? {duration: 5, times: [0, 0.3, 0.7, 1], repeatDelay: 2, repeat: Infinity}:{duration: 3, type:'spring'},
              }}
              animate={{
                  borderRadius:'0',
                  x:xP2? ["0vw", "85vw", "85vw","0vw"]: 0,
                  rotate:xP2? ["0", "180deg", "180deg","0"] : "360deg",
                  //scale:[0.8, 1.3, 1],
                  //boxShadow:xP2?"10px 2px  10px gray":"-10px 2px 10px gray"
              }}
              className="p p2" id="p2" key={"p2"}
              onClick={()=>{setXP2(!xP2)}}
          />


          <motion.div p
              transition={{
                  borderRadius:{duration:3, type:'spring'},
                  x:{duration: 10, times: [0, 0.1,//rotatie1
                          0.3, 0.4,//rotatie2
                          0.6, 0.7,//rotatie3
                          0.9, 1], repeatDelay: 2, repeat: Infinity,},
                  y:{duration: 10,  times: [0, 0.1,//rotatie1
                          0.3, 0.4,//rotatie2
                          0.6, 0.7,//rotatie3
                          0.9, 1], repeatDelay: 2, repeat: Infinity},
                  rotate:xP3?{duration: 10,  times: [0, 0.1,//rotatie1
                          0.3, 0.4,//rotatie2
                          0.6, 0.7,//rotatie3
                          0.9, 1], repeatDelay: 2, repeat: Infinity}:{duration:3, type:'spring'}
              }}
              whileTap={{ scale: 0.9,
                  boxShadow:"-7px 2px 10px black"}}
              whileHover={{ scale: 1.1,
                  backgroundColor:"plum",
                  boxShadow:"-15px 2px 12px gray"}}
                      initial={{borderRadius:'100%'}}
              animate={{
                  borderRadius:'0',
                  x:xP3? ['0vw', '0vw', '0vw', "85vw", "85vw", "85vw", "85vw", "0vw"]: 0,
                  y:xP3? ['0px', "300px", "300px", "300px", '300px',    '0px', '0px', '0px']: 0,
                  rotate:xP3? ["0deg", "180deg", "180deg", "360deg", "360deg", "540deg", "540deg","360deg"] : "360deg",
              }}
              className="p p3" id="p3" key={"p3"}
              onClick={()=>{setXP3(!xP3)}}/>
          </motion.ul>
          </AnimatePresence>
      </header>

    </div>
  );
}

export default App;

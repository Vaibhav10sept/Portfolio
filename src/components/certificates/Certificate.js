import React from 'react'
import './certificate.css'
// images are imported 
import pythonclassesandinheritance from '../../assets/certificates/python classes and inheritance.jpg'
import pythonfunctionsfilesanddictionaries from '../../assets/certificates/python functions files and dictionaries.jpg'
import crashcourseonpython from '../../assets/certificates/crash course on python.jpg'
import FrontEndWebUIFrameworksandToolsBootstrap from '../../assets/certificates/Front-End Web UI Frameworks and Tools Bootstrap 4-1.jpg'
import pythonbasics from '../../assets/certificates/python basics.jpg'
import pythonprojectpillowtesseractandopencv from '../../assets/certificates/python project pillow,tesseract and opencv.jpg'
import googledigitalunlocked from '../../assets/certificates/google digital unlocked.jpg'


import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: "60%",
      [theme.breakpoints.down('sm')]: {
          maxWidth: "90vw",
          maxHeight: "80vh"
      },
      margin: "0 auto"

  },
  img: {
      width: "80vw",
      height: "80%",
      objectFit: "contain",

  },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
}));

function Pop ({open,setOpen,img}) {
  const classes = useStyles();

  return (
    <Modal
    aria-labelledby="transition-modal-title"
    aria-describedby="transition-modal-description"
    className={classes.modal}
    open={open}
    onClose={() => { setOpen(false) }}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{
        timeout: 500,
    }}
>
    <Fade in={open}>
        <img className={classes.img} src={img} alt="LOR" />
    </Fade>
</Modal>
  )
}
 
function Certificate() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [img, setimg] = React.useState(null);

  return (
    <div class="music">
    <div class="music--left">
      <div class="music--left-cont2">
        <h1 className="certificate-heading" data-aos="flip-up">Certificates</h1>

        <div class="slider">


    
          <div class="cardad">
            <div class="content">
              <h2 class="title">google digital unlocked</h2>
              <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(googledigitalunlocked) }}>View</button>
            </div>
          </div>
          <Pop open={open} setOpen={setOpen} img={img}/>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">Front-End Web UI Frameworks and Tools Bootstrap 4-1</h2>
              <p class="copy">Plan your next beach trip with these fabulous destinations</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(FrontEndWebUIFrameworksandToolsBootstrap) }}>View</button>
            </div>
          </div>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">python basics</h2>
              <p class="copy">It's the desert you've always dreamed of</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(pythonbasics) }}>View</button>
            </div>
          </div>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">python classes and inheritance</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(pythonclassesandinheritance) }}>View</button>
            </div>
          </div>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">python functions files and dictionaries</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(pythonfunctionsfilesanddictionaries) }}>View</button>
            </div>
          </div>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">python project pillow,tesseract and opencv</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(pythonprojectpillowtesseractandopencv) }}>View</button>
            </div>
          </div>
          <div class="cardad" >
            <div class="content">
              <h2 class="title">  crash course on python
</h2>
              <p class="copy">Seriously, straight up, just blast off into outer space today</p>
              <button class="btn" onClick={()=>{setOpen(true); setimg(crashcourseonpython) }}>View</button>
            </div>
          </div>
          </div>
          </div>
          </div>

    </div>
  )
}

export default Certificate

{/* <section>
        <div class="music">
          <div class="music--left">
            <div class="music--left-cont2">
              <h1 className="certificate-heading" data-aos="flip-up">Certificates</h1>
  
              <div class="slider">
                <div class="rev" data-aos="fade-up">
                  <img src={img} alt="" />
                  <h2>Jeremy Jucker</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam earum
                  </p>
                </div>
                <div class="rev" data-aos="fade-up">
                  <img src={img} alt="" />
                  <h2>Jeremy Jucker</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam earum
                  </p>
                </div>
                
                <div class="rev" data-aos="fade-up">
                  <img src={img} alt="" />
                  <h2>Jeremy Jucker</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam earum
                  </p>
                </div>
                <div class="rev" data-aos="fade-up">
                  <img src={img} alt="" />
                  <h2>Jeremy Jucker</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam earum
                  </p>
                </div>
                <div class="rev" data-aos="fade-up">
                  <img src={img} alt="" />
                  <h2>Jeremy Jucker</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam earum
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
import React from 'react'
import './service.css'
import work from "../../../src/assets/work3.jpg";
import byte from "../../../src/assets/bytesplex.png";
import coming from "../../../src/assets/coming soon.png";

import prop from "../../../src/assets/props.png";
import mahesh from "../../../src/assets/mahesh.png";
import lor from "../../../src/assets/lor.PNG";
import bytecert from "../../../src/assets/byteplex.PNG";
import PropsModal from '../internships/PropsModal';
import { Button } from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Contact2 from '../contact2/Contact2'
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "60%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "90%",
            maxHeight: "80%"
        },
        margin: "0 auto"

    },
    img: {
        width: "100%",
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
function Service(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [openb, setOpenb] = React.useState(false);
    const [openm, setOpenm] = React.useState(false);


    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <section id="services" ref={props.servicesRef}>

            <div class="s-heading">
                <h1>Internships</h1>
                <p>Here Is Some Of The Internships That I Have Done.</p>
            </div>
            <div class="b-container">
            <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">BytesPlex</div>
                        <img src={byte} />
                    </div>
                    <div class="s-b-text">
                        <div className="s-b-text-box">  website for you or your clients. </div>
                        <Button onClick={()=>{setOpenb(true)}} >view certificate</Button>

                    </div>
                </div>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">BytesPlex</div>
                        <img src={byte} />
                    </div>
                    <div class="s-b-text">
                        <div className="s-b-text-box">  website for you or your clients. </div>
                        <Button onClick={()=>{setOpenb(true)}} >view certificate</Button>

                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openb}
                    onClose={()=>{setOpenb(false)}}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openb}>
                        <img className={classes.img} src={bytecert} alt="LOR" />
                    </Fade>
                </Modal>

                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">PropReturns</div>
                        <img src={prop} />
                    </div>
                    <div class="s-b-text">
                        <div className="s-b-text-box">  website for you or your clients. </div>
                        <Button onClick={handleOpen} >view certificate</Button>
                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <img className={classes.img} src={lor} alt="LOR" />
                    </Fade>
                </Modal>
                <div class="s-box">
                    <div class="s-b-img">
                        <div class="s-type">Maheshwari Electricals</div>
                        <img src={mahesh} />
                    </div>
                    <div class="s-b-text">
                        <div className="s-b-text-box"> website for you or your clients. </div>
                        <Button onClick={()=>{setOpenm(true)}} >view certificate</Button>

                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openm}
                    onClose={()=>{setOpenm(false)}}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{    
                        timeout: 500,
                    }}
                >
                    <Fade in={openm}>
                        <img className={classes.img} src={coming} alt="LOR" />
                    </Fade>
                </Modal>
            </div>


        </section>

    );
}

export default Service

import React from 'react'
import './service.css'
import work from "../../../src/assets/work3.jpg";
import byte from "../../../src/assets/bytesplex.png";
import coming from "../../../src/assets/coming soon.jpg";
import farkemtCert from "../../../src/assets/farmket internship certificate.jpg";
import prop from "../../../src/assets/props.png";
import mahesh from "../../../src/assets/mahesh.png";
import farmket from "../../../src/assets/logo11.png";
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
        width: "100vw",
        height: "80vh",
        objectFit: "contain",

    },

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

        <section id="services" ref={props.servicesRef} >

            <div class="s-heading" data-aos="fade-down"

                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
            >
                <h1>Internships</h1>
                <p>Here Is Some Of The Internships That I Have Done.</p>
            </div>
            <div class="b-container">

                <div class="s-box" data-aos="fade-right">
                    <div class="s-b-img">
                        <div class="s-type">BytesPlex</div>
                        <img src={byte} />
                    </div>
                    <div class="s-b-text">

                        <button onClick={() => { setOpenb(true) }} >    <a className="neon">
                            <span>
                                View Certificate
                             </span>
                        </a></button>

                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openb}
                    onClose={() => { setOpenb(false) }}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openb}>
                        <img className={classes.img} src={bytecert} alt="cert" />
                    </Fade>
                </Modal>

                <div class="s-box" data-aos="flip-left">
                    <div class="s-b-img">
                        <div class="s-type">PropReturns</div>
                        <img src={prop} />
                    </div>
                    <div class="s-b-text">

                        <button onClick={handleOpen} ><a className="neon"><span>
                            View Certificate
                             </span>
                        </a></button>
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
                        <img className={classes.img} src={lor} alt="cert" />
                    </Fade>
                </Modal>
                <div class="s-box" data-aos="fade-left">
                    <div class="s-b-img">
                        <div class="s-type">Maheshwari Electricals</div>
                        <img src={mahesh} />
                    </div>
                    <div class="s-b-text">

                        <button onClick={() => { setOpenm(true) }} ><a className="neon"><span>
                            View Certificate
                             </span>
                        </a></button>

                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openm}
                    onClose={() => { setOpenm(false) }}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openm}>
                        <img className={classes.img} src={coming} alt="cert" />
                    </Fade>
                </Modal>
                <div class="s-box" data-aos="fade-left">
                    <div class="s-b-img">
                        <div class="s-type">Farmket PVT. LTD.</div>
                        <img src={farmket} />
                    </div>
                    <div class="s-b-text">

                        <button onClick={() => { setOpenm(true) }} ><a className="neon"><span>
                            View Certificate
                             </span>
                        </a></button>

                    </div>
                </div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    className={classes.modal}
                    open={openm}
                    onClose={() => { setOpenm(false) }}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openm}>
                        <img className={classes.img} src={farkemtCert} alt="cert" />
                    </Fade>
                </Modal>
            </div>


        </section>

    );
}

export default Service

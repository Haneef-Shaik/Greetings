/* eslint-disable no-undef */
import React, {useState,useRef} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/card.module.scss';
import IMAGE from 'next/image'


function Edit() {
    return (
        <div className="container-fluid  p-5 " >
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className={styles.formContainer} >
                            <form>
                                <input type="text" placeholder="Enter Your Name" className="col-12" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit;



 
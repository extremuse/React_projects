import React from 'react'
import Button from "./button.jsx"
import "../styles/contact.css"
import {LuMessagesSquare} from "react-icons/lu"
import {FiPhoneCall} from "react-icons/fi"
import {MdEmail} from "react-icons/md"

const form = () => {
  return (
    <>
    <section className="contact container">
        <div className="contact-ineer container-inner">
            <div className="form ">
                <div className="form-btn flex">
                    <Button text="VIA SUPPORT CHAT" icon=   {<LuMessagesSquare fontSize={"24px"}/>}    bg="button"/>
                    <Button text="VIA CALL" icon={<FiPhoneCall  fontSize={"24px"}/>}bg="button"/>
                </div>
                <div className="form-main">
                    <Button text="VIA EMAIL FORM" icon= {<MdEmail fontSize={"24px"}/>} bg="outline"/>
                <form>

                </form>
            </div>
            </div>

            <div className="contact-image">
                <img src='/images/contact.svg'/>
            </div>
        </div>
    </section>

    </>
  )
}

export default form
import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel, AccordionItemState} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown, MdOutlineArrowDropDownCircle} from "react-icons/md";
import data from "../../utils/accordion.jsx";
import "./Values.css";

const Values = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="" />
                </div>
            </div>
            <div className="flexColStart v-right">
                <span className="orangeText">Our Value</span>
                <span className="primaryText">Value We Give to You</span>
                <span className="secondaryText" style={{ marginBottom: '1rem' }} >We always ready to help by providing the best services for you.
                <br/>
                We believe a good place to live can make your life better.
                </span>


                <Accordion 
                className='accordian'
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {data.map((item, index) => {

                        const [className, setClassName] = useState(null)

                        return (
                            <AccordionItem key={index} uuid={index} className={`accordionItem ${className}`}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className=' flexCenter accordionButton' >
                                        <AccordionItemState>
                                            {({expanded})=> expanded ? setClassName('expanded') : setClassName('collapsed')}
                                        </AccordionItemState>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className='primaryText'>
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20} />
                                        </div>
                            
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Values
import React, { useState } from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import './EmailList.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import Section from './Section';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmailRow from './EmailRow';
import { Rating } from 'react-simple-star-rating';
import { RatingView } from 'react-simple-star-rating';

function EmailList() {
    // Fuente: https://www.npmjs.com/package/react-simple-star-rating

    const [rating, setRating] = useState(0) // initial rating value

    // Catch Rating value
    const handleRating = (rate) => {
        setRating(rate)
        // Some logic
    }

    return (
        <div className="emailList">
            <div className="emailList__settings">

                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDownIcon />    
                    </IconButton>
                    <IconButton>
                        <RedoIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeftIcon />    
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                    <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                    <IconButton>
                        <SettingsIcon />
                    </IconButton>    
                </div>

            </div>

            <div className="emailList__sections">    
                <Section Icon={InboxIcon} title="Primary" color="red" selected />
                <Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
                <Section Icon={LocalOfferIcon} title="Promotions" color="green" />
            </div>

            <div className="emailList__list">
                <EmailRow
                    title="Test Title"
                    subject="Test Subject"
                    description="Test Description"
                    time="10pm"
                />

            <Rating onClick={handleRating} ratingValue={rating} /* Rating Props */ />
            <br />
            <RatingView ratingValue={rating} /* RatingView Props */ />
                
            </div>

        </div>
    )
}

export default EmailList

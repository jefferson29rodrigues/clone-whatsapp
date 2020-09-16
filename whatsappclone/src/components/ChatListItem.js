import React from 'react';
import './ChatListItem.css';

export default () => {
    return (
        <div className="chatListItem">
            <img className="chatListItem--avatar" src="https://www.w3schools.com/w3images/avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Jefferson Rodrigues</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!Hello World!!!</p>
                    </div>
                </div>
            </div>
        </div>
    );
} 
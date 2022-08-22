import React, {Component} from "react";

/*
	const testData = [
			{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
      {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
  		{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
	];
*/

class Cards extends Component {
    render() {
        return (
            <div className="github-profile">
                <img src="https://placehold.it/75" alt={"profile-pic"}/>
                <div className="info">
                    <div className="name">Name here</div>
                    <div className="company">Company here</div>
                </div>
            </div>
        );
    }

}

export default Cards;

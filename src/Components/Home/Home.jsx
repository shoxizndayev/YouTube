import React from "react";
import './Home.scss';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';




import homeDollieImg from "../../Assets/Images/svg/Gussie.svg";
import homeFoodImg from "../../Assets/Images/svg/Food.svg";

function Home (){
    const [users, setUsers] = React.useState([]);
    const [recommended, setRecommended] = React.useState([]);
    const [food, setfood] = React.useState([]);

   const homeRender = React.createRef();
    
    React.useEffect(() => {
		(async () => {
			const res = await fetch('https://jsonplaceholder.typicode.com/photos');

			const data = await res.json();
			if (data) {
				setUsers(data.slice(1, 15));
                setRecommended(data.slice(16, 30));
                setfood(data.slice(31, 45));
			}
		})();
	}, []);

    return (
        <>
           <div className="box" ref={homeRender}>
                <div className="box__hero">
                    <div className="box__hero__top">
                        <Link to={"/channel"}>
                        <div className="box__hero__img">
                            <img className="box__hero-img" src={homeDollieImg} alt="" width={50} height={50} />
                            <h3 className="box__hero__title">
                                Dollie Blair
                            </h3>
                        </div>
                        </Link>
                        <div className="arrow__icon">
                        <span>
                            <ArrowBackIcon />
                            </span>
                            <span>
                            <ArrowForwardIcon />
                            </span>
                        </div>
                    </div>

                    <ul className="home__list-top home__list">
                       {   
                            users && users.map((user)=>(
                                <Link className="home__item-top" key={user.id} to={"/video"}>
                                    <img className="home__item__photo" src={user.url} alt="Photos" width={250} height={150}/>
                                    <p className="home__item__text">{user.title}</p>

                                    <div className="home__info">
                                        <p className="info__number">
                                        80k views  ·  3 days ago
                                        </p>

                                        <p className="info__name">
                                        Dollie Blair
                                        </p>
                                    </div>
                                </Link>
                            ))
                          }
                    </ul>
                </div>

                <div className="box__middle">
                    <div className="box__hero__top">  
                            <h3 className="box__hero__title">
                                Recommended
                            </h3>

                        <div className="arrow__icon">
                            <span>
                            <ArrowBackIcon />
                            </span>
                            <span>
                            <ArrowForwardIcon />
                            </span>
                        </div>
                    </div>

                    <ul className="home__list-middle  home__list">
                       {   
                            recommended && recommended.map((recommended)=>(
                                <Link className="home__item-middle" key={recommended.id} to={"/video"}>
                                    <img className="home__item__photo" src={recommended.url} alt="Photos" width={340} height={200} />
                                    <p className="home__item__text">{recommended.title}</p>

                                    <div className="home__info">
                                        <p className="info__number">
                                        80k views  ·  3 days ago
                                        </p>

                                        <p className="info__name">
                                        Dollie Blair
                                        </p>
                                    </div>
                                </Link>
                            ))
                          }
                    </ul>
                </div>

                <div className="box__bottom">
                    <div className="box__hero__top">
                            <Link to={"/channel"}>
                        <div className="box__hero__inner">
                            <img className="box__hero-img"src={homeFoodImg} alt="" width={50} height={50} />
                            <h3 className="box__hero__title">
                            Food & Drink
                            </h3>
                            <span className="box__hero__span">
                                Recommendedmended channel for you
                            </span>
                        </div>
                            </Link>
                        <div className="arrow__icon">
                        <span>
                            <ArrowBackIcon />
                            </span>
                            <span>
                            <ArrowForwardIcon />
                            </span>
                        </div>
                    </div>

                    <ul className="home__list-bottom  home__list">
                       {   
                            food && food.map((food)=>(
                                <Link className="home__item-bottom" key={food.id} to={"/video"}>
                                    <img className="home__item__photo" src={food.url} alt="Photos" width={250} height={150} />
                                    <p className="home__item__text">{food.title}</p>
                                    <div className="home__info">
                                        <p className="info__number">
                                        80k views  ·  3 days ago
                                        </p>

                                        <p className="info__name">
                                        Dollie Blair
                                        </p>
                                    </div>
                                </Link>
                            ))
                        }
                    </ul>
                </div>              
           </div>
        </>
    )
}

export default Home;
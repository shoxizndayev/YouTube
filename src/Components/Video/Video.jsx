import React from "react";
import { Link } from "react-router-dom";
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Video.scss'
import videoHeroImg from '../..//Assets/Images/png/videoImg.png';
import videoFood from '../../Assets/Images/svg/Food.svg';
import LikeVide from "../../Assets/Images/png/like.png"
import AntiLikeVide from "../../Assets/Images/png/antilike.png"
import ShareVideo from "../../Assets/Images/png/share.png"






const label = { inputProps: { 'aria-label': 'Switch demo' } };

function Video (){

    const [video, setVideo] = React.useState([])

    React.useEffect(()=>{
        ( async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/photos");

            const data = await res.json();
            if(data){
                setVideo(data.slice(1,15))
            }

        })();
    },[])


    return(
        <>
            <div className="video">
                <div className="video__left">
                    <img className="video__boss" src={videoHeroImg} alt="" width={820} height={400} />
                    <div className="video__hero">
                            <h3 className="video__hero__title">
                                Dude You Re Getting A Telescope
                            </h3>

                        <ul className="video__hero__list">
                            <li className="video__hero__item">
                                123k views
                            </li>
                            <li className="video__hero__item">
                                <span>
                                    <img src={LikeVide} alt="" width={14} height={13}/>
                                    123k
                                </span>

                                <span>
                                    <img src={AntiLikeVide} alt="" width={14} height={13} />
                                    435k
                                </span>

                                <span>
                                    <img src={ShareVideo} alt="" width={14} height={12} />
                                    Share
                                </span>
                            </li>
                        </ul>
                    </div>  

                    <div className="video__bottom">
                        <div className="video__bottom__left">
                            <img className="video__bottom__videoFood" src={videoFood} alt="" width={80} height={80} />
                            <div className="video__bottom-food">
                                <h3 className="video__bottom__title">
                                    Food & Drink
                                </h3>
                                <span className="video__bottom__span">
                                    Published on 14 Jun 2019
                                </span>
                                <p className="video__bottom__text">
                                A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy; it is based on a number of factors, including ad placement, demographic, even the consumer???s mood when they see your ad. 
                                </p>
                                <a className="video__bottom__link" href="#link">
                                Show more
                                </a>
                            </div>

                        </div>
                        <Stack spacing={2} direction="row">
                        <Button
                        style={{
                            borderRadius: 20,
                            backgroundColor: "#FF0000",
                            fontSize: "16px",
                            fontWeight: "400",
                            fontFamily: "Mulish",
                            
                        }}
                        variant="contained" className="chennel__subscribe">Subscribe 2.3m</Button>
                    </Stack>
                    </div>

                </div>

                <div className="video__right">
                       <div className="video__right__top">
                            <h3 className="video__right__title">
                                Next
                            </h3>
                            <p className="video__right__text">
                                AUTOPLAY

                                <div>
                                <Switch {...label} defaultChecked />
                                </div>
                            </p>
                       </div>
                    <ul className="video__list">
                         {
                            video && video.map((videos) => (
                                <Link className="video__item" key={videos.id} to={"/video"}>
                                    <img className="video__photo" src={videos.url} alt="" width={250} height={150} />

                                    <p className="channel__item__text" key={videos.id}>{videos.title}</p>

                                    <div className="home__info">
                                        <p className="info__number">
                                        80k views  ??  3 days ago
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

export default Video;
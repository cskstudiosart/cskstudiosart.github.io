import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function HandDrawingCards() {
    const handdrawings = [
        {
            cid: 0, // id
            cname: 'Fél arc portré', // név
            cdate: '2020.10.13.', //dátum
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
        },
        {
            cid: 1,
            cname: 'Jégkrém',
            cdate: '2019.01.09.',
            ctext: '',
        },
        {
            cid: 2,
            cname: 'Freddie Mercury',
            cdate: '2019.01.07.',
            ctext: '',
        },
        {
            cid: 3,
            cname: 'Szerelem Japánban',
            cdate: '2019.01.09.',
            ctext: '',
        },
        {
            cid: 4,
            cname: 'Várakozás a kórházban',
            cdate: '2020.10.02.',
            ctext: '',
        },
        {
            cid: 5,
            cname: 'Várakozás a kórházban - Szűrőzött',
            cdate: '2020.10.02.',
            ctext: '',
        },
        {
            cid: 6,
            cname: 'Imádkozó kezek',
            cdate: '2012.04.16.',
            ctext: '',
        },
        {
            cid: 7,
            cname: 'Térhatás',
            cdate: '2020.09.08.',
            ctext: '',
        }
    ]


    const CardImage = (props) => {
        const [ibutton, isetButton] = useState(false);
        const [currid, setCurrid] = useState(props.id);
    
        // háttérre kattintva bezárja a megnyitott képet
        const closeImg = (e) => {
            if(e.target.classList.contains('backdrop-container')){
                isetButton(false);
            }
        }
    
        // megnyitott kép block
        const ImageViewerBlock = () => {
            if(ibutton == true) {
                return (
                    <div className='backdrop-container' onClick={closeImg}>
                        <div className='backdrop-wrap'>
                            <div className='backdrop-item'>
                                <figure className='backdrop-item-pic-wrap' data-category={handdrawings[currid].cdate}>
                                    <img className='backdrop-image' alt={handdrawings[currid].cname} src={'images/handdrawing/img-hnddrwng-'+handdrawings[currid].cid+'.jpg'} />
                                    <div className='backdrop-nav-container'>
                                        {
                                        // navigáció 
                                        currid > 0 &&
                                            <div className='backdrop-nav-left' onClick={() => setCurrid(currid-1)}>
                                                <div className='backdrop-nav-left-icon'></div>
                                            </div>
                                        }
                                        {currid < (handdrawings.length-1) &&
                                            <div className='backdrop-nav-right' onClick={() => setCurrid(currid+1)}>
                                                <div className='backdrop-nav-right-icon'></div>
                                            </div>
                                        // navifógéció vége
                                        }
                                    </div>
                                </figure>
                                <div className='backdrop-item-info'>
                                    <h5 className='backdrop-item-text'>{handdrawings[currid].cname}</h5>
                                </div>
                            </div>
                            <div className='backdrop-close-icon' onClick={() => {isetButton(false)}}>
                                x
                            </div>
                        </div>
                    </div>
                )
            } else {
                return(ibutton)
            }
        }
    
        // képek csempéi
        return (
            <>
                <li className='cards__item'>
                    <div className='cards__item__link' onClick={() => {isetButton(true);setCurrid(props.id)}}>
                        <figure className='cards__item__pic-wrap' data-category={props.date}>
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/handdrawing/img-hnddrwng-'+props.id+'.jpg)'}} />
                        </figure>
                        <div className='cards__item__info'>
                            <h5 className='cards__item__text'>{props.name}</h5>
                        </div>
                    </div>
                    {/*ibutton && <ImageViewerBlock name={props.name} src={props.src} date={props.date} />*/}
                    {ibutton && ImageViewerBlock()}
                </li>
            </>
        )
    }



    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {
                            handdrawings.sort((a, b) => a.cid > b.cid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
                                <CardImage
                                id={img.cid}
                                name={img.cname}
                                date={img.cdate}
                                />
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default HandDrawingCards;
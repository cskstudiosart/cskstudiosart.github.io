import React, {useState} from 'react';
import './Cards.css';
import './ImageViewer.css';


function ModellingCards() {
    const modells = [
        {
            cid: 0, // id
            cname: 'Office - 1', // név
            cdate: '2019.12.11.', //dátum
            ctext: '', // esetleges pár mondatos leírás, ha van a képhez (nagyítás után jeleink csak meg)
        },
        {
            cid: 1,
            cname: 'Office - 2',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 2,
            cname: 'Office - 3',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 3,
            cname: 'Office - 4',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 4,
            cname: 'Office - 5',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 5,
            cname: 'Office - 6',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 6,
            cname: 'Office - 7',
            cdate: '2019.12.11.',
            ctext: '',
        },
        {
            cid: 7,
            cname: 'Office - 8',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 8,
            cname: 'Office - 9',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 9,
            cname: 'Office - 10',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 10,
            cname: 'Office - 11',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 11,
            cname: 'Office - 12',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 12,
            cname: 'Office - 13',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 13,
            cname: 'Office - 14',
            cdate: '2020.01.07.',
            ctext: '',
        },
        {
            cid: 14,
            cname: 'Tea & Donut',
            cdate: '2020.01.29.',
            ctext: '',
        },
        {
            cid: 15,
            cname: 'Tea with Sugar',
            cdate: '2020.01.09.',
            ctext: '',
        },
        {
            cid: 16,
            cname: 'Tea',
            cdate: '2020.01.06.',
            ctext: '',
        },
        {
            cid: 17,
            cname: 'Donut',
            cdate: '2019.11.25.',
            ctext: '',
        },
        {
            cid: 18,
            cname: 'Train in Winter - 1',
            cdate: '2020.02.18.',
            ctext: '',
        },
        {
            cid: 19,
            cname: 'Train in Winter - 2',
            cdate: '2020.02.04.',
            ctext: '',
        },
        {
            cid: 20,
            cname: 'Living Room - 1',
            cdate: '2020.04.08.',
            ctext: '',
        },
        {
            cid: 21,
            cname: 'Living Room - 2',
            cdate: '2020.04.08.',
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
                                <figure className='backdrop-item-pic-wrap' data-category={modells[currid].cdate}>
                                    <img className='backdrop-image' alt={modells[currid].cname} src={'images/modelling/img-modelling-'+modells[currid].cid+'.jpg'} />
                                    <div className='backdrop-nav-container'>
                                        {
                                        // navigáció 
                                        currid > 0 &&
                                            <div className='backdrop-nav-left' onClick={() => setCurrid(currid-1)}>
                                                <div className='backdrop-nav-left-icon'></div>
                                            </div>
                                        }
                                        {currid < (modells.length-1) &&
                                            <div className='backdrop-nav-right' onClick={() => setCurrid(currid+1)}>
                                                <div className='backdrop-nav-right-icon'></div>
                                            </div>
                                        // navifógéció vége
                                        }
                                    </div>
                                </figure>
                                <div className='backdrop-item-info'>
                                    <h5 className='backdrop-item-text'>{modells[currid].cname}</h5>
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
                            <div className='cards__item__image' style={{backgroundImage: 'url(images/modelling/img-modelling-'+props.id+'.jpg)'}} />
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
                            modells.sort((a, b) => a.cid > b.cid ? 1:-1).map((img) => // .sort(itt állítjuk be a sorolást, pl id szerint).map(itt hozzuk létre a felsorolást)
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

export default ModellingCards;
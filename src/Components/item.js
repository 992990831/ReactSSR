import React from 'react';

const Item = (props)=>{
    const { item } = props;

    const { bigImg, icons, current } = item;

        const [currentIndex, setCurrentIndex] = React.useState(current);
        const [currentBigImg, setCurrentBigImg] = React.useState(bigImg);

        const setNewCurrent = (event) => {
            if(event.target.tagName != 'A')
            {
                setCurrentIndex(event.target.parentElement.parentElement.dataset.index);
                setCurrentBigImg(event.target.parentElement.parentElement.dataset.bigimg);
            }
            else {
                setCurrentIndex(event.target.dataset.index);
                setCurrentBigImg(event.target.dataset.bigimg);
            }
            
        }

        return(
            <div className="studio-item">
                    <div className="item-image">
                        <a className="event-list-link" href="/eyeglasses/frames/wonder-clear-purple-pink-m-22756"
                            title="Wonder">
                            <img className="img-main lazyloaded"
                                src={currentBigImg}
                                alt="Wonder eyeglasses" />
                        </a>
                    </div>
                    <div className="item-info">
                        <span className="name">Wonder</span>
                        <span className="item-price">
                            <span className="normal-price price-symbol">$35</span>
                        </span>
                        <p className="item-current-color">Clear Purple Pink</p>
                    </div>
                    <div className="item-colors-info clearfix">
                        <p className="item-colors">
                            {
                                icons.map((ico, index) =>{
                                    return(
                                        <a className={`item-color ${currentIndex==index? 'current-color' : '' }`} key={index}
                                        onClick={setNewCurrent} data-bigimg={ico.imgUrl} data-index={index}>
                                            <span className="image-icon">
                                                <img className=" lazyloaded"
                                                    src={ico.iconUrl}
                                                    alt="Clear Purple Pink" title={ico.name} />
                                            </span>
                                        </a>
                                    )
                                })
                            }
                        </p>
                    </div>
                </div>
        )
    
}

export default(Item);
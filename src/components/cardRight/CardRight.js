import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Block from './Block';
import History from './History';

CardRight.propTypes = {
   blocks: PropTypes.array, 
};

CardRight.defaultProps = {
    blocks: []
}

function CardRight(props) {
    const [active, setActive] = useState(false);
    const {blocks, wActive, historys} = props;

    function handleClick(){
        setActive(!active);
    }

    return (   
        <div className="col-8">
            {/* View Block chain */}
            <div className={active===false?"card shadow mb-3":"andi"}>
                <div className="card-header-two">
                    <span className="txtFirst">BLOCKCHAIN</span>
                    <span className="txtSecond" onClick={handleClick}>
                        {active===false?"View History":"View Blockchain"}
                    </span>
                </div>
                
                <div className={wActive.status === true?"card-body":"card-body andi"}> 
                    {blocks.map(block => (
                        <Block 
                            key={block.id} 
                            name={block.name} 
                            hash={block.hash}
                            prevHash={block.prevHash}
                            data={block.data}
                        />
                    ))}                  
                </div>
            </div>

            {/* View History transfer */}
            <div className={active===true?"card shadow mb-3":"andi"}>
                <div className="card-header-two">
                    <span className="txtFirst">HISTORY</span>
                    <span className="txtSecond" onClick={handleClick}>
                        {active===false?"View History":"View Blockchain"}
                    </span>
                </div>
                {historys.map(history =>(
                    <History
                        key={history.id} 
                        from={history.from}
                        to={history.to}
                        coin={history.coin}
                        miner={history.miner}
                    />
                ))}

            </div>
        </div>
    );
}

export default CardRight;
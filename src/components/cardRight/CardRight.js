import React from 'react';
import PropTypes from 'prop-types';
import Block from './Block';

CardRight.propTypes = {
   blocks: PropTypes.array, 
};

CardRight.defaultProps = {
    blocks: []
}

function CardRight(props) {

    const {blocks, wActive} = props;
    console.log(wActive);
    return (
        <div className="col-8">
            <div className="card shadow mb-3">
                <h5 className="card-header">Blockchain</h5>
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
        </div>

    );
}

export default CardRight;
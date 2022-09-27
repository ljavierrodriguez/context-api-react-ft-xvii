import React, { useContext, useEffect } from 'react';
import useGenerateColors from '../hooks/useGenerateColors';
import { AppContext } from '../store/appContext';

const OffcanvasUp = ({ colors }) => {
    const { actions } = useContext(AppContext);
    
    return (
        <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasTopLabel">Backgroun Options</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <div className="row">
                    <div className="col-md-12 d-flex flex-wrap">
                        <div className="box m-1 shadow text-muted d-flex justify-content-center align-items-center"
                            style={{ background: "#FFFFFFFF" }}
                            onClick={() => actions.setSelectedColor("#FFFFFFFF")}
                        >
                            #FFFFFFFF
                        </div>
                        {
                            !!colors &&
                            colors.length > 0 &&
                            colors.map((color, index) => {
                                return (
                                    <div key={index} className="box m-1 shadow text-muted d-flex justify-content-center align-items-center"
                                        style={{ background: color }}
                                        onClick={() => actions.setSelectedColor(color)}
                                    >
                                        {color}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OffcanvasUp;
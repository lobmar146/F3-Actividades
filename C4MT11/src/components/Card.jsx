export function Card(props) {
    console.log(props)
    return (
        <div className='card'>
            {props.title ? 
                (<div className="card-title">
                    <p>{props.title}</p>
                </div>) 
                : 
                undefined
            }

            <div className="card-body">
                <p>{props.children}</p>
            </div>
            
            {props.footer ? 
                (<div className="card-footer">
                    <p>{props.footer}</p>
                </div>) 
                : 
                undefined
            }

        </div>
    )
}
export function Card(props) {
    console.log(props)
    const renderTitle=props.title ? 
        (<div className="card-title">
            <p>{props.title}</p>
        </div>) 
        : 
        undefined

    const renderFooter=props.footer ?
        (<div className="card-footer">
            <p>{props.footer}</p>
        </div>)
        :
        undefined
    
    return (
        <div className='card'>
            {renderTitle}
            <div className="card-body">
                <p>{props.children}</p>
            </div>
            {renderFooter}
        </div>
    )
}
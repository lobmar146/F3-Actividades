export function Card(props) {
    const renderTitle= props.title ? "card-title" : "hidden"
    const renderFooter= props.footer ? "card-footer" : "hidden"
    console.log(props)
    return (
        <div className='card'>
            <div className={renderTitle}>
                <p>{props.title}</p>
            </div>

            <div className="card-body">
                <p>{props.children}</p>
            </div>
            
            <div className={renderFooter}>
                <p>{props.footer}</p>
            </div>
        </div>
    )
}
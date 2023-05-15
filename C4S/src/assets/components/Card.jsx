export function Card(props) {
    //Desestructuro el contenido de props
    const { title, footer, children } = props
    const headerClass = title ? 'card-header' : 'card-header-not-visible'
    const footerClass = footer ? 'card-footer' : 'card-footer-not-visible'
    return (
        <div className='card'>
            <div className={headerClass}>{title}</div>
            <div className='card-body'>{children}</div>
            <div className={footerClass}>{footer}</div>
        </div>
    )
}

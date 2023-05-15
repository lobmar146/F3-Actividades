export function Card({ title, footer, children }) {
    if (title && !footer) {
        return (
            <div className='card'>
                <div className='card-header'>{title}</div>
                <div className='card-body'>{children}</div>
            </div>
        )
    } else if (!title && footer) {
        return (
            <div className='card'>
                <div className='card-body'>{children}</div>
                <div className='card-footer'>{footer}</div>
            </div>
        )
    } else if (title && footer) {
        {
            return (
                <div className='card'>
                    <div className='card-header'>{title}</div>
                    <div className='card-body'>{children}</div>
                    <div className='card-footer'>{footer}</div>
                </div>
            )
        }
    } else {
        return (
            <div className='card'>
                <div className='card-body'>{children}</div>
            </div>
        )
    }
}

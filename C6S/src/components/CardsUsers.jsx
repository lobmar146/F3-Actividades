import users from '../assets/users.json'

export function CardsUsers() {
    return (
        <section>
            <h1>Usuarios y sus 🐕</h1>
            {users.map(user => (
                <div className='card' key={user.email}>
                    <h2>{user.apodo}</h2>
                    <p>Email: {user.email}</p>
                    <p>Mascotas</p>
                    <ul>
                        {user.mascotas.map(mascota => (
                            <li key={mascota.nombre}>
                                {mascota.nombre} - Edad: {mascota.edad} :{' '}
                                {mascota.color}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

import { useEffect, useState } from 'react';
interface User {
    id: number;
    name: string;
    email: string;
}
export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // @ts-ignore
        fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching users:', error));
    }, []);

    return (
        <>
            <h1>Evaluation Docker Romain GILOT</h1>
            <h2>Liste des utilisateurs en provenance du container base de données</h2>

            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nom</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                    users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>Aucun utilisateur trouvé</td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}

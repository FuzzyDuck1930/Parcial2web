import React, { useEffect, useState } from 'react';

const SolarSystemData: React.FC = () => {
    const [bodies, setBodies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.le-systeme-solaire.net/rest.php/bodies?rowData=false')
        .then(response => response.json())
        .then(data => {
            setBodies(data.bodies); // Guardamos los datos
            setLoading(false);
        })
        .catch(error => {
            setError('Error fetching data');
            setLoading(false);
        });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
};